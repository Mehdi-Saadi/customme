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
        header: 'راهنمای خرید',
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
    <footer class="grid grid-rows-3 w-full mt-16 text-white">
        <div class="row-span-1 grid grid-cols-3 bg-rose-950 px-28">
            <!-- info registration -->
            <div class="col-span-2 flex flex-col lg:flex-row items-start lg:items-center my-auto">
                <div class="flex flex-col items-center space-y-2 lg:space-y-1">
                    <span class="text-sm">
                        برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد کنید
                    </span>
                    <input
                        class="w-full ring-0 focus:ring-0 focus:border-white border-white bg-transparent rounded-lg placeholder:text-gray-400"
                        type="text"
                        placeholder="ایمیل شما"
                    />
                </div>
                <button
                    class="bg-rose-750 hover:bg-rose-800 rounded-lg px-7 py-2 lg:mt-auto mt-2 lg:ms-3"
                >
                    ثبت
                </button>
            </div>
            <!-- social links -->
            <div class="col-span-1 flex items-center justify-center mt-10 mb-16">
                <div class="flex flex-col items-center space-y-5">
                    <span class="text-sm">ما را در شبکه های اجتماعی دنبال کنید</span>
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
        <div class="row-span-2 bg-rose-750 pt-14 px-28 pb-5 flex flex-col">
            <div class="grid lg:grid-cols-3">
                <div class="col-span-2 hidden lg:flex flex-col items-start">
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
                </div>
                <div class="col-span-1 flex flex-col items-center">
                    <h3 class="text-lg font-bold mb-10">فروشگاه اینترنتی کاستومی</h3>
                    <div
                        class="flex xl:flex-row flex-col space-y-4 xl:space-y-0 items-center text-xs xl:space-x-8 rtl:space-x-reverse mb-16"
                    >
                        <span>تماس با پشتیبانی: ۳۴۵۶۰۰۰-۰۲۱</span>
                        <span>پاسخگویی ۲۴ ساعته، ۷ روز هفته</span>
                    </div>
                    <div class="flex items-center space-x-8 rtl:space-x-reverse">
                        <img
                            class="w-14 h-16"
                            src="../../../public/img/footer-img3.png"
                            alt=""
                        />
                        <img
                            class="w-14 h-16"
                            src="../../../public/img/footer-img2.png"
                            alt=""
                        />
                        <img
                            class="w-14 h-16"
                            src="../../../public/img/footer-img1.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <span class="text-2xs pt-5 text-center lg:text-start">
                تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
            </span>
        </div>
    </footer>
</template>
