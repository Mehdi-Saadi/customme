<script setup lang="ts">
import HeartIcon from '@/assets/icons/heart-icon.svg';
import PlusSquareIcon from '@/assets/icons/plus-square-icon.svg';
import MinosSquareIcon from '@/assets/icons/minus-square-icon.svg';
import { toPersianNums } from '@/scripts/helpers';
import useProductStore from '@/stores/product';
import { computed } from 'vue';

const props = defineProps<{
    product: Product;
}>();

const { addToCart, removeFromCart } = useProductStore();

const countOfProductInShoppingCart = computed(() => {
    const item = useProductStore().shoppingCart[props.product.id];
    return item ? item.count : 0;
});
</script>

<template>
    <div class="border border-gray-300 rounded-2xl w-full h-[28rem] p-4 flex flex-col items-center">
        <!-- img -->
        <img
            :src="product.attributes.image"
            alt=""
            class="w-full h-64 rounded-lg"
            loading="lazy"
        />
        <!-- title -->
        <div class="w-full flex items-center justify-between mt-4">
            <span class="max-w-52 font-bold text-lg truncate">{{ product.attributes.name }}</span>
            <HeartIcon class="size-6" />
        </div>
        <!-- price -->
        <span class="w-full font-bold text-xl mt-auto text-end">
            {{ toPersianNums(product.attributes.price) }} تومان
        </span>
        <!-- shopping cart -->
        <div
            v-if="countOfProductInShoppingCart"
            class="w-full flex items-center justify-between border border-rose-750 px-10 mt-3 text-rose-750 text-sm rounded-lg select-none min-h-10"
        >
            <PlusSquareIcon
                @click="addToCart(product)"
                class="size-6 cursor-pointer"
            />
            <span>{{ countOfProductInShoppingCart }} عدد</span>
            <MinosSquareIcon
                @click="removeFromCart(product)"
                class="size-6 cursor-pointer"
            />
        </div>
        <button
            v-else
            @click="addToCart(product)"
            class="w-full flex items-center justify-center border border-rose-750 mt-3 text-rose-750 text-sm rounded-lg hover:text-rose-950 hover:border-rose-950 transition duration-300 min-h-10"
            type="button"
        >
            <span> افزودن به سبد خرید </span>
        </button>
    </div>
</template>
