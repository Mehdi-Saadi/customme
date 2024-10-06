<script setup lang="ts">
import SortButton from '@/components/buttons/SortButton.vue';
import useProductStore from '@/stores/product';

const { sortProducts, sortButtonIsActive } = useProductStore();
</script>

<template>
    <ol class="flex items-center space-x-4 rtl:space-x-reverse ms-4 me-auto">
        <SortButton
            @click="sortProducts('-view_count')"
            :checked="sortButtonIsActive('-view_count')"
            title="پربازدیدترین"
        />
        <SortButton
            @click="sortProducts('-created_at')"
            :checked="sortButtonIsActive('-created_at')"
            title="جدیدترین"
        />
        <SortButton
            @click="sortProducts('-price')"
            :checked="sortButtonIsActive('-price')"
            title="گران ترین"
        />
        <SortButton
            @click="sortProducts('price')"
            :checked="sortButtonIsActive('price')"
            title="ارزان ترین"
        />
    </ol>
</template>
