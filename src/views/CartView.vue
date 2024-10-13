<script setup lang="ts">
import CartItemCard from '@/components/product/CartItemCard.vue';
import DividerComponent from '@/components/DividerComponent.vue';
import DollarCircleArrowTopRightIcon from '@/assets/icons/dollar-circle-arrow-top-right-icon.svg';
import LocationIcon from '@/assets/icons/location-icon.svg';
import SoppingCartRoseIcon from '@/assets/icons/shopping-cart-rose-icon.svg';
import StoreLayout from '@/layouts/StoreLayout.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
</script>

<template>
    <StoreLayout>
        <div class="w-full flex flex-col items-center">
            <!-- progress icons -->
            <div class="flex items-center text-rose-750 text-xs space-x-6 rtl:space-x-reverse">
                <div class="flex flex-col items-center justify-center">
                    <SoppingCartRoseIcon class="size-6" />
                    <span>سبد خرید</span>
                </div>
                <DividerComponent class="opacity-50" />
                <div class="flex flex-col items-center justify-center opacity-50">
                    <LocationIcon class="size-6" />
                    <span>اطلاعات آدرس</span>
                </div>
                <DividerComponent class="opacity-50" />
                <div class="flex flex-col items-center justify-center opacity-50">
                    <DollarCircleArrowTopRightIcon class="size-6" />
                    <span>پرداخت</span>
                </div>
            </div>

            <div class="w-full grid grid-cols-3 mt-8">
                <!-- cart item list -->
                <div class="col-span-2 flex flex-col space-y-6 px-3">
                    <h3 class="text-base py-3 border-b">سبد خرید</h3>
                    <CartItemCard
                        v-for="cartItem in productStore.shoppingCart"
                        :key="cartItem.product.id"
                        :cart-item="cartItem"
                    />
                </div>

            </div>
        </div>
    </StoreLayout>
</template>
