<script setup lang="ts">
import CircleArrowRightIcon from '@/components/icons/CircleArrowRightIcon.vue';
import CircleArrowLeftIcon from '@/components/icons/CircleArrowLeftIcon.vue';
import useProductStore from '@/stores/product';
import { ref, watch } from "vue";
import router from "@/router";

const { pageNumber } = useProductStore();

const page = ref<number>(pageNumber);

watch(page, () => {
    router.push({ name: 'product.list', query: { page: page.value, sort: router.currentRoute.value.query.sort } });
});
</script>

<template>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination
                            v-model="page"
                            :length="useProductStore().totalPages"
                            :prev-icon="CircleArrowLeftIcon"
                            :next-icon="CircleArrowRightIcon"
                        ></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
