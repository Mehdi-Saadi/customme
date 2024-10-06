<script setup lang="ts">
import SortButton from '@/components/buttons/SortButton.vue';
</script>

<template>
    <ol class="flex items-center space-x-4 rtl:space-x-reverse ms-4 me-auto">
        <SortButton
            sort-by="-view_count"
            title="پربازدیدترین"
        />
        <SortButton
            sort-by="-created_at"
            title="جدیدترین"
        />
        <SortButton
            sort-by="-price"
            title="گران ترین"
        />
        <SortButton
            sort-by="price"
            title="ارزان ترین"
        />
    </ol>
</template>
