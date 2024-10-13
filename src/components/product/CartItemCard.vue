<script setup lang="ts">
import CloseSquareIcon from '@/assets/icons/close-square-icon.svg';
import PlusSmallIcon from '@/assets/icons/plus-small-icon.svg';
import MinusSmallIcon from '@/assets/icons/minus-small-icon.svg';
import useProductStore from '@/stores/product';
import { toPersianNums } from '@/scripts/helpers';
import { computed } from 'vue';

const props = defineProps<{
    cartItem: ShoppingCartItem;
}>();

const { addToCart, removeFromCart, clearFromCart } = useProductStore();

const countOfProductInShoppingCart = computed(() => {
    const item = useProductStore().shoppingCart[props.cartItem.product.id];
    return item ? item.count : 0;
});
</script>

<template>
    <div class="flex items-center border-b">
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
                {{ toPersianNums(String(countOfProductInShoppingCart)) }}
            </span>
            <MinusSmallIcon
                @click="removeFromCart(cartItem.product)"
                class="size-8 cursor-pointer border-s"
            />
        </div>
    </div>
</template>
