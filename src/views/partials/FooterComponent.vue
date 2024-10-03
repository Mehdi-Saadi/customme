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
const footerLinks = [
    {
        header: 'همراه با کاستومی',
        items: [
            {
                title: 'فروش محصولات',
                link: '#',
            },
            {
                title: 'فرصت همکاری',
                link: '#',
            },
            {
                title: 'تماس با ما',
                link: '#',
            },
            {
                title: 'نقشه سایت',
                link: '#',
            },
        ],
    },
    {
        header: 'خدمات مشتریان',
        items: [
            {
                title: 'سوالات متداول',
                link: '#',
            },
            {
                title: 'حریم خصوصی',
                link: '#',
            },
            {
                title: 'ثبت شکایت',
                link: '#',
            },
            {
                title: 'ضمانت نامه محصولات',
                link: '#',
            },
        ],
    },
    {
        header: 'راخنمای خرید',
        items: [
            {
                title: 'راهنمای ثبت سفارش',
                link: '#',
            },
            {
                title: 'شیوه های پرداخت',
                link: '#',
            },
            {
                title: 'نحوه ارسال سفارش ها',
                link: '#',
            },
            {
                title: 'شرایط بازگرداندن محصول',
                link: '#',
            },
        ],
    },
];
</script>

<template>
    <footer class="grid grid-rows-3 w-full mt-48">
        <div class="row-span-1 grid grid-cols-2 bg-rose-950">
            <!-- info registration -->
            <div class="col-span-1 flex items-center px-28 my-auto space-x-3 rtl:space-x-reverse">
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
        <div class="row-span-2 grid grid-cols-3 bg-rose-750 pt-14 px-28 pb-5">
            <div class="col-span-2 flex flex-col items-start text-white">
                <div class="w-full grid grid-cols-3 gap-8 text-sm">
                    <div
                        v-for="footerLink in footerLinks"
                        :key="footerLink.header"
                        class="col-span-1 space-y-8"
                    >
                        <h4 class="border-b border-white w-max">
                            {{ footerLink.header }}
                        </h4>
                        <ol class="space-y-5">
                            <li
                                v-for="item in footerLink.items"
                                :key="item.title"
                            >
                                <a :href="item.link">
                                    {{ item.title }}
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <span class="text-2xs mt-auto">
                    تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
                </span>
            </div>
            <div class="col-span-1">
                فروشگاه اینترنتی کاستومی
            </div>
        </div>
    </footer>
</template>
