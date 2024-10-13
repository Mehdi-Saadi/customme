<script setup lang="ts">
import CloseSquareIcon from '@/assets/icons/close-square-icon.svg';

defineProps<{
    cartItem: ShoppingCartItem;
}>();
</script>

<template>
    <div class="flex items-center border-b">
        <div class="grow flex items-center text-sm font-bold space-x-6 rtl:space-x-reverse">
            <CloseSquareIcon class="size-6" />
            <img
                :src="cartItem.product.attributes.image"
                alt=""
                class="size-32 rounded-lg"
                loading="lazy"
            />
            <span>
                {{ cartItem.product.attributes.name }}
            </span>
            <span>
                {{ cartItem.product.attributes.price }} تومان
            </span>
        </div>
        <div>
            buttons
        </div>
    </div>
</template>
