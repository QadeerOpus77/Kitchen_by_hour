// /src/screens/Booking/BookingDetail.tsx
import React, { useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, FlatList, StyleSheet,
    Alert, Modal, Pressable, Dimensions
} from 'react-native';
import DocumentPicker, {
    isCancel, isInProgress, types, DocumentPickerResponse,
} from 'react-native-document-picker';
import { BackHeader, Button, Container, KitchenCards } from '../../Components';
import style from './style';
import { kitchenCardData } from '../../config';
import { images } from '../../constant';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

type Picked = DocumentPickerResponse & { stableUri?: string | null };

const BookingDetail = () => {
    const [files, setFiles] = useState<Picked[]>([]);
    const [busy, setBusy] = useState(false);
    const [viewer, setViewer] = useState<{ visible: boolean; uri?: string; name?: string }>({
        visible: false,
    });

    async function pickDocuments(): Promise<void> {
        try {
            setBusy(true);
            const results = await DocumentPicker.pick({
                allowMultiSelection: true,
                copyTo: 'cachesDirectory',
                type: [types.images, types.pdf],
                presentationStyle: 'formSheet',
            });

            const normalized: Picked[] = results.map(r => ({
                ...r,
                stableUri: r.fileCopyUri ?? r.uri,
            }));

            setFiles(prev => [...prev, ...normalized]);
        } catch (err: unknown) {
            if (isCancel(err) || isInProgress(err)) return;
            console.error('DocumentPicker error', err);
            Alert.alert('Error', 'Failed to pick document(s).');
        } finally {
            setBusy(false);
        }
    }

    function removeAt(idx: number): void {
        setFiles(prev => prev.filter((_, i) => i !== idx));
    }

    function openViewer(uri?: string, name?: string): void {
        setViewer({ visible: true, uri, name });
    }
    function closeViewer(): void {
        setViewer({ visible: false });
    }

    const dataWithKeys = files.map((f, i) => ({
        ...f,
        _key: `${f.uri}-${i}`,
        _idx: i,
        _isImage: isImage(f.type),
        _ext: getExt(f.name),
    }));

    return (
        <Container style={style.container}>
            <BackHeader title="Booking Detail" tintColor="black" titleColor="#0D284A" backgroundColor="white" />
            <View style={style.cardContainer}>
                <KitchenCards data={[kitchenCardData[0]]} showPrice />
            </View>

            <Container style={style.subContainer} scroll>
                <View style={style.addressContainer}>
                    <Image style={style.mapIcon} source={images.mapIcon} />
                    <Text style={style.address}>1234 Elmwood Drive, Springfield, IL 62704, USA</Text>
                </View>

                <Text style={style.title}>Time & Date</Text>
                <View style={style.timeDate}>
                    <View style={style.row}>
                        <Text style={style.option}>Date</Text>
                        <Text style={style.value}>10 Aug - 20 Aug, 2025</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.option}>Time</Text>
                        <Text style={style.value}>09:00 AM - 9:00 PM</Text>
                    </View>
                </View>

                <Text style={style.title}>Attach Document</Text>
                <View style={style.uploadBoxWrapper}>
                    <TouchableOpacity style={style.uploadBox} activeOpacity={0.8} onPress={pickDocuments} disabled={busy}>
                        <Image style={style.addIcon} source={images.upload} />
                        <Text style={style.uploadtxt}>{busy ? 'Opening…' : 'Tap to choose files'}</Text>
                    </TouchableOpacity>
                </View>

                {files.length > 0 && (
                    <View style={ui.gridWrap}>
                        <FlatList
                            data={dataWithKeys}
                            keyExtractor={(i) => i._key}
                            renderItem={({ item }) => (
                                <FileCard
                                    name={item.name}
                                    size={item.size}
                                    type={item.type}
                                    uri={item.stableUri ?? item.uri}
                                    isImage={item._isImage}
                                    ext={item._ext}
                                    onRemove={() => removeAt(item._idx)}
                                    onPreview={() => {
                                        if (item._isImage) {
                                            openViewer(item.stableUri ?? item.uri, item.name ?? 'Preview');
                                        }
                                    }}
                                />
                            )}
                            numColumns={3}
                            columnWrapperStyle={ui.row}
                            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                            contentContainerStyle={ui.grid}
                        />
                    </View>
                )}
            </Container>

            <Button
                title="Continue"
                style={style.button}
                onPress={() =>
                    navigate({
                        name: NavigationStrings.PAYMENT as keyof RootStackParamList,
                    })
                }
            />

            <Modal visible={viewer.visible} transparent animationType="fade" onRequestClose={closeViewer}>
                <Pressable style={ui.viewerBackdrop} onPress={closeViewer}>
                    <View style={ui.viewerCard}>
                        <Image source={{ uri: viewer.uri }} style={ui.viewerImage} resizeMode="contain" />
                        {!!viewer.name && <Text numberOfLines={1} style={ui.viewerCaption}>{viewer.name}</Text>}
                    </View>
                </Pressable>
            </Modal>
        </Container>
    );
};

export default BookingDetail;

/* ---------- helpers ---------- */
function formatSize(bytes?: number | null): string {
    if (!bytes || bytes <= 0) return 'unknown size';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0; let v = bytes;
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i += 1; }
    return `${v.toFixed(1)} ${units[i]}`;
}
function getExt(name?: string | null): string {
    if (!name) return 'file';
    const m = name.match(/\.([a-z0-9]+)$/i);
    return (m?.[1] ?? 'file').slice(0, 4);
}
function isImage(m?: string | null): boolean {
    return (m ?? '').startsWith('image/');
}

/* ---------- presentational subcomponent ---------- */
type FileCardProps = {
    name?: string | null;
    size?: number | null;
    type?: string | null;
    uri: string;
    isImage: boolean;
    ext: string;
    onRemove: () => void;
    onPreview: () => void; // <- strictly void
};

const FileCard = React.memo(function FileCard({
    name, size, type, uri, isImage, ext, onRemove, onPreview,
}: FileCardProps) {
    return (
        <View style={ui.card}>
            <TouchableOpacity activeOpacity={0.9} style={ui.preview} onPress={onPreview}>
                {isImage ? (
                    <Image source={{ uri }} style={ui.image} resizeMode="cover" />
                ) : (
                    <View style={ui.badge}><Text style={ui.badgeText}>{ext.toUpperCase()}</Text></View>
                )}
            </TouchableOpacity>

            <View style={ui.meta}>
                <Text numberOfLines={2} style={ui.name}>{name ?? '(unnamed file)'}</Text>
                <Text numberOfLines={1} style={ui.sub}>{formatSize(size)} • {(type ?? 'unknown/type')}</Text>
            </View>

            <TouchableOpacity onPress={onRemove} style={ui.removeBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Text style={ui.removeTxt}>×</Text>
            </TouchableOpacity>
        </View>
    );
});

/* ---------- local styles (preview only) ---------- */
const gap = 12;
const { width } = Dimensions.get('window');
const cardW = (width - (gap * 2) - (gap * 2)) / 3;

const ui = StyleSheet.create({
    gridWrap: { marginTop: 8 },
    grid: { paddingVertical: 8, paddingHorizontal: gap },
    row: { gap },
    card: {
        width: cardW,
        borderRadius: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        overflow: 'hidden',
    },
    preview: { width: '100%', aspectRatio: 1, backgroundColor: '#f3f4f6' },
    image: { width: '100%', height: '100%' },
    badge: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    badgeText: { fontSize: 20, fontWeight: '800', color: '#0D284A' },
    meta: { paddingHorizontal: 10, paddingVertical: 8 },
    name: { fontSize: 12, fontWeight: '600', color: '#0D284A' },
    sub: { fontSize: 11, color: '#6b7280', marginTop: 2 },
    removeBtn: {
        position: 'absolute', top: 6, right: 6, width: 24, height: 24,
        borderRadius: 12, alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.64)',
    },
    removeTxt: { color: '#fff', fontSize: 16, lineHeight: 16, fontWeight: '700' },
    viewerBackdrop: {
        flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', alignItems: 'center', justifyContent: 'center',
    },
    viewerCard: { width: '92%', height: '80%', alignItems: 'center', justifyContent: 'center' },
    viewerImage: { width: '100%', height: '100%' },
    viewerCaption: { position: 'absolute', bottom: 10, color: '#fff', fontWeight: '600' },
});
