<script setup lang="ts">
import NavigationLink from '@/components/buttons/NavigationLink.vue';
import PencilStarsIcon from '@/assets/icons/pencil-starts-icon.svg';

const navigations: { name: string; href: string }[] = [
    {
        name: 'پوشاک',
        href: '#',
    },
    {
        name: 'لوازم خانه',
        href: '#',
    },
    {
        name: 'قاب موبایل',
        href: '#',
    },
    {
        name: 'اکسسوری',
        href: '#',
    },
    {
        name: 'مدرسه و اداره',
        href: '#',
    },
    {
        name: 'کارت و پوستر',
        href: '#',
    },
    {
        name: 'جشن و مهمانی',
        href: '#',
    },
];
</script>

<template>
    <nav class="max-w-screen-xl mx-auto w-full flex items-center py-2 ps-6 pe-2">
        <NavigationLink
            class="bg-rose-750 text-white hover:bg-rose-950"
            href="#"
        >
            <PencilStarsIcon class="size-6" />
            <span>خودت طراحیش کن!</span>
        </NavigationLink>
        <ol class="flex grow items-center justify-between text-base mx-8">
            <li
                v-for="navigation in navigations"
                :key="navigation.name"
            >
                <NavigationLink
                    class="hover:bg-gray-100"
                    :href="navigation.href"
                >
                    {{ navigation.name }}
                </NavigationLink>
            </li>
        </ol>
    </nav>
</template>
