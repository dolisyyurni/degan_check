import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './sanity.types';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface StoreState {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    deleteCartProduct: (productId: string) => void;
    resetCart: () => void;
    getTotalPrice: () => number;
    getSubTotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => CartItem[];
    favorites: Product[];
    addFavorite: (product: Product) => Promise<void>;
    removeFavorite: (productId: string) => void;
    resetFavorite: () => void;
}

const useStore = create<StoreState>()(persist((set, get) => ({
    items: [],
    favorites: [],
    addItem: (product: Product) => set((state) => {
        const existingItem = state.items.find((item) => item.product._id === product._id);
        if (existingItem) {
            return {
                items: state.items.map((item) => item.product._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item),
            };
        }
        return { items: [...state.items, { product, quantity: 1 }] };
    }),

    removeItem: (productId: string) => set((state) => ({
        items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
                if (item.quantity > 1) {
                    acc.push({ ...item, quantity: item.quantity - 1 });
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, [] as CartItem[]),
    })),

    deleteCartProduct: (productId: string) => set((state) => ({
        items: state.items.filter(
            ({ product }) => product._id !== productId
        ),
    })),

    resetCart: () => set({ items: [] }),

    getTotalPrice: () => get().items.reduce(
        (total, item) => total + (item.product.price ?? 0) * item.quantity,
        0
    ),

    getSubTotalPrice: () => get().items.reduce(
        (total, item) => total + (item.product.price ?? 0) * (1 + (item.product.discount ?? 0) / 100) * item.quantity,
        0
    ),

    getItemCount: (productId: string) => {
        const item = get().items.find((item) => item.product._id === productId);
        return item ? item.quantity : 0;
    },

    getGroupedItems: () => get().items,

    addFavorite: (product: Product) => {
        return new Promise<void>((resolve) => {
            set((state) => {
                const isFavorite = state.favorites.some(
                    (item) => item._id === product._id
                );
                return {
                    favorites: isFavorite
                        ? state.favorites.filter((item) => item._id !== product._id)
                        : [...state.favorites, { ...product }],
                };
            });
            resolve();
        });
    },

    removeFavorite: (productId: string) => {
        set((state) => ({
            favorites: state.favorites.filter((item) => item._id !== productId),
        }));
    },

    resetFavorite: () => set({ favorites: [] }),
}), {
    name: 'cart-store',
}));

export default useStore;
