<script setup>
import ProductCard from './ProductCard.vue'
import SidebarCart from './SidebarCart.vue'
</script>

<template>
  <ProductFilter />
  <main class="flex justify-center sm:gap-2 sm:mx-2">
    <section
      class="w-4/4 grid grid-cols-1 gap-2 mb-8 sm:grid-cols-2 md:grid-cols-3"
    >
      <ProductCard />
    </section>
    <SidebarCart />
  </main>
</template>
