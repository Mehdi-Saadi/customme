<script setup lang="ts">
import CloseSquareIcon from '@/assets/icons/close-square-icon.svg';
import MinusSmallIcon from '@/assets/icons/minus-small-icon.svg';
import PlusSmallIcon from '@/assets/icons/plus-small-icon.svg';
import TruckFastIcon from '@/assets/icons/truck-fast-icon.svg';
import type { ShoppingCartItem } from '@/types/product';
import useCartStore from '@/stores/cart';
import { toPersianNums } from '@/scripts/helpers';
import { computed } from 'vue';

const props = defineProps<{
    cartItem: ShoppingCartItem;
}>();
const cartStore = useCartStore();
const { addToCart, removeFromCart, clearFromCart } = cartStore;

const countOfProductInShoppingCart = computed(() => {
    const item = cartStore.shoppingCart[props.cartItem.product.id];
    return item ? item.count : 0;
});
</script>

<template>
    <div class="flex flex-col items-center border-b">
        <div class="w-full flex items-center">
            <div class="grow flex items-center text-sm font-bold space-x-6 rtl:space-x-reverse">
                <CloseSquareIcon
                    @click="clearFromCart(cartItem.product)"
                    class="size-6 cursor-pointer"
                />
                <img
                    :src="cartItem.product.attributes.image"
                    alt=""
                    class="size-32 rounded-lg"
                    loading="lazy"
                />
                <span>
                    {{ cartItem.product.attributes.name }}
                </span>
                <span> {{ toPersianNums(cartItem.product.attributes.price) }} تومان </span>
            </div>
            <div class="flex items-center justify-between border text-sm rounded-lg select-none">
                <PlusSmallIcon
                    @click="addToCart(cartItem.product)"
                    class="size-8 cursor-pointer border-e"
                />
                <span class="px-3">
                    {{ toPersianNums(countOfProductInShoppingCart) }}
                </span>
                <MinusSmallIcon
                    @click="removeFromCart(cartItem.product)"
                    class="size-8 cursor-pointer border-s"
                />
            </div>
        </div>
        <div class="w-full flex items-center justify-end h-10 space-x-1 rtl:space-x-reverse">
            <TruckFastIcon class="size-6" />
            <span class="text-sm text-gray-600"> ارسال از ۳ روز آینده </span>
        </div>
    </div>
</template>
