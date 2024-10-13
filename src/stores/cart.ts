import type { Product, ShoppingCartItem } from '@/types/product';
import cloneDeep from 'lodash/cloneDeep';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type ShoppingCart = Record<Product['id'], ShoppingCartItem>;

const useCartStore = defineStore('cart', () => {
    const shoppingCart = ref<ShoppingCart>({});

    const addToCart = (product: Product): void => {
        const item: ShoppingCartItem | undefined = shoppingCart.value[product.id];

        if (item) {
            item.count++;
        } else {
            shoppingCart.value[product.id] = {
                product: cloneDeep(product),
                count: 1,
            };
        }
    };

    const removeFromCart = (product: Product): void => {
        const item: ShoppingCartItem | undefined = shoppingCart.value[product.id];

        if (!item) {
            return;
        }

        if (item.count > 1) {
            item.count--;
        } else {
            delete shoppingCart.value[product.id];
        }
    };

    const clearFromCart = (product: Product): void => {
        const item: ShoppingCartItem | undefined = shoppingCart.value[product.id];

        if (!item) {
            return;
        }

        delete shoppingCart.value[product.id];
    };

    const countOfShoppingCartItems = computed(() => Object.keys(shoppingCart.value).length);

    return {
        shoppingCart,
        addToCart,
        removeFromCart,
        clearFromCart,
        countOfShoppingCartItems,
    };
});

export default useCartStore;
