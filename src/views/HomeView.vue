<script setup lang="ts">
import ApplicationIcon from "@/components/icons/ApplicationIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon.vue";
import LoginIcon from "@/components/icons/LoginIcon.vue";

</script>

<template>
    <div class="max-w-screen-xl mx-auto">
        <header class="flex items-center space-x-16 rtl:space-x-reverse py-7">
            <ApplicationIcon />
            <div class="flex grow items-center h-12 rounded-2xl border border-gray-300 focus-within:border-gray-400 p-0.5">
                <input
                    autocomplete="off"
                    class="size-full rounded-2xl focus:ring-0 border-none px-6"
                    type="text"
                />
                <SearchIcon class="min-w-6 max-w-6 me-6" />
            </div>
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <a
                    class="flex items-center space-x-1 rtl:space-x-reverse text-sm py-2 px-4"
                    href="#"
                >
                    <LoginIcon class="size-5" />
                    <span>ورود | ثبت نام</span>
                </a>
                <a
                    class="flex items-center space-x-1 rtl:space-x-reverse text-sm py-2 px-4"
                    href="#"
                >
                    <ShoppingCartIcon class="size-6" />
                    <span>سبد خرید</span>
                </a>
            </div>
        </header>
    </div>
</template>
