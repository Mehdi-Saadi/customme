<script setup lang="ts">
import ApplicationIcon from '@/assets/icons/application-icon.svg';
import CountIcon from '@/components/icons/CountIcon.vue';
import LoginIcon from '@/components/icons/LoginIcon.vue';
import NavigationLink from '@/components/buttons/NavigationLink.vue';
import SearchIcon from '@/assets/icons/search-icon.svg';
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue';
</script>

<template>
    <header
        class="max-w-screen-xl mx-auto flex items-center space-x-16 rtl:space-x-reverse py-7 px-6 w-full mb-6"
    >
        <ApplicationIcon />
        <div
            class="flex grow items-center h-12 rounded-2xl border border-gray-300 focus-within:border-gray-400 p-0.5"
        >
            <input
                autocomplete="off"
                class="size-full rounded-2xl focus:ring-0 border-none px-6"
                type="text"
            />
            <SearchIcon class="min-w-6 max-w-6 me-6" />
        </div>
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <NavigationLink
                class="hover:bg-gray-100"
                href="#"
            >
                <LoginIcon class="size-5" />
                <span>ورود | ثبت نام</span>
            </NavigationLink>

            <NavigationLink
                class="relative hover:bg-gray-100"
                href="#"
            >
                <CountIcon class="absolute size-4 xl:top-2 xl:start-4 top-1 start-2" />
                <ShoppingCartIcon class="size-6" />
                <span>سبد خرید</span>
            </NavigationLink>
        </div>
    </header>
</template>
