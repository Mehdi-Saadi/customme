<script setup lang="ts">
import ApplicationIconLg from '@/assets/icons/application-icon-lg.svg';
import ApplicationIconSm from '@/assets/icons/application-icon-sm.svg';
import LoginIcon from '@/assets/icons/login-icon.svg';
import NavigationLink from '@/components/buttons/NavigationLink.vue';
import SearchIcon from '@/assets/icons/search-icon.svg';
import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg';
import useProductStore from '@/stores/product';
import { toPersianNums } from '@/scripts/helpers';
</script>

<template>
    <header
        class="max-w-screen-xl mx-auto flex flex-row-reverse lg:flex-row items-center py-7 px-6 w-full mb-6"
    >
        <ApplicationIconLg class="hidden lg:block me-16" />
        <ApplicationIconSm class="rounded-full block lg:hidden ms-8" />
        <div
            class="flex grow items-center h-10 lg:h-12 rounded-full lg:rounded-2xl border border-gray-300 focus-within:border-gray-400 p-0.5 ms-8 lg:ms-0 lg:me-16"
        >
            <input
                autocomplete="off"
                class="size-full rounded-full lg:rounded-2xl focus:ring-0 border-none px-6"
                type="text"
            />
            <SearchIcon class="min-w-6 max-w-6 me-2 lg:me-6" />
        </div>
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <NavigationLink
                class="hover:bg-gray-100"
                href="#"
            >
                <LoginIcon />
                <span>ورود | ثبت نام</span>
            </NavigationLink>

            <RouterLink
                class="flex items-center space-x-1 rtl:space-x-reverse text-sm py-2 xl:py-3 px-3 xl:px-5 transition duration-200 rounded-lg relative hover:bg-gray-100"
                :to="{ name: 'product.cart' }"
            >
                <div
                    class="absolute size-4 xl:top-2 xl:start-4 top-1 start-2 rounded-full bg-[#dcacb1] flex items-center justify-center"
                >
                    <span class="text-xs">
                        {{ toPersianNums(useProductStore().countOfShoppingCartItems) }}
                    </span>
                </div>
                <ShoppingCartIcon class="size-6" />
                <span>سبد خرید</span>
            </RouterLink>
        </div>
    </header>
</template>
