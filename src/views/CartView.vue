<script setup lang="ts">
import DividerComponent from '@/components/DividerComponent.vue';
import DollarCircleArrowTopRightIcon from '@/assets/icons/dollar-circle-arrow-top-right-icon.svg';
import LocationIcon from '@/assets/icons/location-icon.svg';
import SoppingCartRoseIcon from '@/assets/icons/shopping-cart-rose-icon.svg';
import StoreLayout from '@/layouts/StoreLayout.vue';
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
        </div>
    </StoreLayout>
</template>
