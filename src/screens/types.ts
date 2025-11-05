export type SocialPlatform = 'google' | 'apple';

export interface SignInProps {
  route: any;
}

export type HomeItem = {
  id: string;
  image: any;
  title: string;
  onPress?: () => void;
};
export interface KitchenCards {
  id: string;
  title: string;
  image: any;
  price: number;
}

export interface ClothingItem {
  id: string;
  name: string;
  image: any;
  category: string;
  color: string;
  brand: string;
  price: string;
}

export interface PackingItem {
  id: string;
  title: string;
  date: string;
  items: any[];
}

export type SocialMediaItem = {
  id: string;
  name: string;
  image: any;
};
