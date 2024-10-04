<script lang="ts" setup>
defineProps<{
    checked: boolean;
}>();
</script>

<template>
    <div class="inline-flex items-center">
        <input
            :checked="checked"
            class="sr-only peer hidden"
            type="checkbox"
        />
        <span
            class="relative w-[38px] h-[22px] rounded-full peer bg-white border peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-gray-400 after:rounded-full after:size-4 after:transition-all peer-checked:bg-rose-750"
        ></span>
    </div>
</template>
