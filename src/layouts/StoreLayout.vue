<script setup lang="ts">
import FilterMenu from '@/components/menus/FilterMenu.vue';
import FooterComponent from '@/views/partials/FooterComponent.vue';
import SortMenu from '@/components/menus/SortMenu.vue';
import TopBarComponent from '@/views/partials/TopBarComponent.vue';
</script>

<template>
    <TopBarComponent />
    <div class="max-w-screen-xl mx-auto px-6 pt-56 flex items-start justify-start">
        <FilterMenu />
        <div class="w-full flex flex-col ps-6 pe-4">
            <SortMenu />
            <!-- content -->
            <slot />
        </div>
    </div>
    <FooterComponent />
</template>
