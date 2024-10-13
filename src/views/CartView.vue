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
                <!-- sidebar -->
                <div class="col-span-1 flex flex-col items-center px-3">
                    <!-- prices -->
                    <div class="w-full border rounded-2xl p-6 space-y-4">
                        <!-- discount code -->
                        <div class="w-full flex flex-col items-center border-b px-2 pt-2 pb-4 space-y-3">
                            <span class="w-full text-sm">
                                کد تخفیف
                            </span>
                            <p class="text-2xs text-gray-600">
                                کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما اعمال شود
                            </p>
                            <div class="w-full flex items-center space-x-2 rtl:space-x-reverse">
                                <input
                                    class="rounded-lg max-w-[14.5rem] border-gray-300 focus:border-gray-400 focus:ring-0 h-10"
                                    type="text"
                                />
                                <button
                                    class="border border-rose-750 text-rose-750 px-7 py-2 rounded-lg text-sm hover:border-rose-950 hover:text-rose-950"
                                    type="button"
                                >
                                    ثبت
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StoreLayout>
</template>
