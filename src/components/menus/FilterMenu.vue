<script setup lang="ts">
import FilterButton from '@/components/buttons/FilterButton.vue';
</script>

<template>
    <div class="w-72 h-auto border rounded-lg flex flex-col items-center p-5 space-y-5">
        <div class="w-full flex items-center justify-between">
            <span class="text-base"> فیلترها </span>
            <span class="text-rose-750 text-2xs font-bold"> حذف فیلترها </span>
        </div>
        <FilterButton
            title="برند"
            icon="chevron"
            icon-class="size-4"
        />
        <FilterButton
            title="اندازه"
            icon="chevron"
            icon-class="size-4"
        />
        <FilterButton
            title="رنگ"
            icon="chevron"
            icon-class="size-4"
        />
        <FilterButton
            title="ارسال امروز"
            icon="toggle"
        />
        <FilterButton
            title="فقط کالاهای موجود"
            icon="toggle"
        />
        <FilterButton
            title="محدوده قیمت"
            icon="chevron"
            icon-class="size-4"
        />
        <FilterButton
            title="مدل"
            icon="chevron"
            icon-class="size-4"
        />
        <FilterButton
            title="طرح"
            icon="chevron"
            icon-class="size-4"
            :border-bottom="false"
        />
    </div>
</template>
