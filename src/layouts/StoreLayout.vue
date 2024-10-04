<script setup lang="ts">
import FooterComponent from "@/views/partials/FooterComponent.vue";
import TopBarComponent from "@/views/partials/TopBarComponent.vue";
</script>

<template>
    <div class="max-w-screen-xl mx-auto px-6">
        <TopBarComponent />

        <slot />
    </div>
    <FooterComponent />
</template>
