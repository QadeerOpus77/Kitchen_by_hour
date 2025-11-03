import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';
import { NavigateParams, RootStackParamList } from '../types/RootStackParamList';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate({ name, params }: NavigateParams): void {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export const goBack = (): void => {
    if (navigationRef?.isReady()) {
        navigationRef?.goBack();
    }
};

export const resetNavigation = (name: string): void => {
    if (navigationRef?.isReady()) {
        navigationRef?.reset({
            index: 0,
            routes: [{ name: name }],
        });
    }
};

export const openDrawer = (): void => {
    if (navigationRef?.isReady()) {
        navigationRef?.dispatch(DrawerActions.openDrawer());
    }
}
