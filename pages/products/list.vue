<template>
    <h1 class="text-xl text-center font-bold mt-5">
        Products
    </h1>

    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <div class="rounded overflow-hidden shadow-lg" v-for="product in products" :key="product.id">
                <a :href="`/products/${product.id}`">
                    <div class="relative">
                        <img class="w-full" :src="product.thumbnail" alt="product blog">
                        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        <a href="#!">
                            <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Discount {{product.discountPercentage}} %
                            </div>
                        </a>
                    </div>
                </a>
                <div class="px-6 py-4">
                    <a :href="`/products/${product.id}`" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{{ product.title}}</a>
                    <p class="text-gray-500 text-sm">
                        {{ product.description }}
                    </p>
                </div>
                <div class="px-6 py-4 items-center">
                    <span :href="`/products/${product.id}`" class="py-1 text-sm font-regular text-gray-900 mr-1">
                    <span class="ml-1">[Category - {{ product.category }}]</span>
                    <span class="ml-1">[Brand - {{ product.brand }}]</span>
                    <span class="ml-1">[Price - {{ product.price }}]</span>
                    <span class="ml-1">[Rating - {{ product.rating }}]</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const products: any = ref([]);
const getData: any = ref([]);

const { data } = await useFetch("https://dummyjson.com/products");
getData.value = data.value;
products.value = getData.value.products;
</script>
