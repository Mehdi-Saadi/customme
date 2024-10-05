<script setup lang="ts">
import SortButton from '@/components/buttons/SortButton.vue';
</script>

<template>
    <ol class="flex items-center space-x-4 rtl:space-x-reverse ms-4 me-auto">
        <li>
            <SortButton
                checked
                title="پربازدیدترین"
            />
        </li>
        <li>
            <SortButton title="جدیدترین" />
        </li>
        <li>
            <SortButton title="گران ترین" />
        </li>
        <li>
            <SortButton title="ارزان ترین" />
        </li>
    </ol>
</template>
