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
        <div class="flex flex-col items-start px-6">
            <SortMenu />
            <!-- content -->
            <div class="w-full grid grid-cols-3 gap-6">
                <slot />
            </div>
        </div>
    </div>
    <FooterComponent />
</template>
