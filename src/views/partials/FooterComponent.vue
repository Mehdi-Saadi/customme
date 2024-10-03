<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import PinterestIcon from '@/components/icons/PinterestIcon.vue';
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue';

const socialLinks = [
    {
        name: 'instagram',
        icon: InstagramIcon,
        iconClass: 'size-6',
        link: '#',
    },
    {
        name: 'facebook',
        icon: FacebookIcon,
        iconClass: 'size-6',
        link: '#',
    },
    {
        name: 'pinterest',
        icon: PinterestIcon,
        iconClass: 'size-6',
        link: '#',
    },
    {
        name: 'youtube',
        icon: YoutubeIcon,
        iconClass: 'w-8 h-5',
        link: '#',
    },
];
</script>

<template>
    <footer class="grid grid-rows-3 w-full">
        <div class="row-span-1 grid grid-cols-2 bg-rose-950">
            <!-- info registration -->
            <div class="col-span-1 flex items-center justify-center">
                <div class="flex items-start space-x-3 rtl:space-x-reverse">
                    <div class="flex flex-col items-center space-y-1">
                        <span class="text-sm text-white">
                            برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد کنید
                        </span>
                        <input
                            class="w-full ring-0 focus:ring-0 focus:border-white border-white bg-transparent rounded-lg placeholder:text-gray-400 text-white"
                            type="text"
                            placeholder="ایمیل شما"
                        />
                    </div>
                    <button
                        class="bg-rose-750 hover:bg-rose-800 rounded-lg px-7 py-2 text-white mt-auto"
                    >
                        ثبت
                    </button>
                </div>
            </div>
            <!-- social links -->
            <div class="col-span-1 flex items-center justify-center mt-10 mb-16">
                <div class="flex flex-col items-center space-y-5">
                    <span class="text-sm text-white">ما را در شبکه های اجتماعی دنبال کنید</span>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a
                            v-for="socialLink in socialLinks"
                            :key="socialLink.name"
                            :href="socialLink.link"
                        >
                            <component
                                :is="socialLink.icon"
                                :class="socialLink.iconClass"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row-span-2 bg-rose-750">

        </div>
    </footer>
</template>
