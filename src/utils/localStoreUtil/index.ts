import AsyncStorage from '@react-native-async-storage/async-storage';

interface LocalStoreUtil {
    storeData: <T>(key: string, data: T) => Promise<boolean>;
    getData: <T>(key: string) => Promise<T | undefined>;
    removeData: (key: string) => Promise<boolean>;
    removeAll: () => Promise<boolean>;
}

const localStoreUtil: LocalStoreUtil = {
    storeData: async <T>(key: string, data: T) => {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return true;
    },

    getData: async <T>(key: string) => {
        const item = await AsyncStorage.getItem(key);
        if (!item) return undefined;
        return JSON.parse(item) as T;
    },

    removeData: async (key: string) => {
        await AsyncStorage.removeItem(key);
        return true;
    },

    removeAll: async () => {
        await AsyncStorage.clear();
        return true;
    },
};

export const saveAccessToken = (accessToken: string): Promise<boolean> =>
    localStoreUtil.storeData('accessToken', accessToken);

export const getAccessToken = (): Promise<string | undefined> =>
    localStoreUtil.getData<string>('accessToken');

export const saveUser = <T>(user: T): Promise<boolean> =>
    localStoreUtil.storeData('user', user);

export const getUser = <T>(): Promise<T | undefined> =>
    localStoreUtil.getData<T>('user');

export default localStoreUtil;
