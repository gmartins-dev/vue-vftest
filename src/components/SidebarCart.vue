<script setup>
import ProductCart from '../components/ProductCart.vue'
</script>

<template>
  <div
    class="w-1/4 bg-white hidden sm:block h-fit border-t-4 border-indigo-500 p-4"
  >
    <nav class="flex flex-col">
      <header class="inline-flex p-2 mb-6">
        <h3 class="font-semibold">CART</h3>
        <div
          class="inline-flex items-center justify-center px-2 ml-4 h-6 w-6 rounded-full text-white text-xs bg-indigo-500 cursor-pointer"
        >
          3
        </div>
      </header>
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <div class="flex justify-between bg-gray-200 mt-20 p-3 text-xs">
        <div class="flex flex-col">
          <div>Total</div>
          <div class="text-gray-400">Inc. £0 in taxes</div>
        </div>
        <div class="text-lg inline-flex items-center justify-center">£120</div>
      </div>
    </nav>
  </div>
</template>
