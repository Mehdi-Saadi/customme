<script setup lang="ts">
import NavigationButton from '@/components/buttons/NavigationButton.vue';
import PencilStarsIcon from '@/components/icons/PencilStarsIcon.vue';

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
    <nav class="w-full flex items-center py-2 pe-2">
        <NavigationButton
            class="bg-rose-750 text-white hover:bg-rose-800"
            href="#"
        >
            <PencilStarsIcon class="size-6" />
            <span>خودت طراحیش کن!</span>
        </NavigationButton>
        <ol class="flex grow items-center justify-between text-base mx-8">
            <li
                v-for="navigation in navigations"
                :key="navigation.name"
            >
                <a
                    :href="navigation.href"
                    class="p-2 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                    {{ navigation.name }}
                </a>
            </li>
        </ol>
    </nav>
</template>
