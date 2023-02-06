<template>
  <div
    class="p-3 bg-white rounded-md"
    v-for="product in products"
    :key="product.id"
  >
    <div class="bg-[#F5F3F6] p-3">
      <img
        src="https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg"
        class="object-cover w-full h-72"
      />
    </div>
    <div class="my-10 text-center flex justify-between font-semibold uppercase">
      <ul>
        <li class="">
          {{ product.title }}
        </li>
      </ul>
      <strong>£45</strong>
    </div>
    <div class="flex justify-center">
      <button
        class="p-2 mb-2 flex-1 uppercase font-light text-white transition-all cursor-pointer hover:bg-indigo-700 hover:scale-110 bg-indigo-500"
      >
        add to <br />cart
      </button>
      <button
        class="p-2 mb-2 flex-1 uppercase font-light text-black transition-all cursor-pointer hover:bg-stone-300 hover:scale-110 bg-[#E6E4E7]"
      >
        quick <br />view
      </button>
    </div>
  </div>
</template>

<script setup>
// @ts-nocheck

import { ref } from 'vue'
import productsApi from '../services/productsApi'
const products = ref([])

const getData = async () => {
  try {
    const response = await productsApi.getProducts()
    products.value = response.data.products
    // console.log(products.value)
  } catch (error) {
    console.log(error)
  }
}

getData()
</script>
