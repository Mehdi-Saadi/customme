<script setup lang="ts">
import FooterComponent from '@/views/partials/FooterComponent.vue';
import TopBarComponent from '@/views/partials/TopBarComponent.vue';
import FilterMenu from '@/components/menus/FilterMenu.vue';
</script>

<template>
    <TopBarComponent />
    <div class="max-w-screen-xl mx-auto px-6 pt-56">
        <FilterMenu />
        <slot />
    </div>
    <FooterComponent />
</template>
