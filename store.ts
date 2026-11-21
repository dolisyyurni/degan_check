import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import { Product } from './sanity.types';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface StoreState {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    deleteCart: (productId: string) => void;
    resetCart: () => void;
    getTotalPrice: () => number;
    getSubtotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => CartItem[];
    //fav
    favorites: Product[];
    addFavorite: (product: Product) => Promise<void>;
    removeFavorite: (productId: string) => void;
    resetFavorites: () => void;
}