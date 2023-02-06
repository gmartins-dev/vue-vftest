<template>
  <header class="bg-[#F5F3F6] flex justify-between h-16">
    <div
      class="flex my-4 items-center justify-center px-2 cursor-pointer font-bold border-2 border-indigo-500 h-8"
    >
      <router-link :to="{ name: 'home' }"> VF-APPAREL </router-link>
    </div>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'chart' }"
        class="inline-flex items-center px-2 h-full cursor-pointer"
      >
        £120
      </router-link>
      <router-link
        :to="{ name: 'chart' }"
        class="inline-flex items-center justify-center px-2 mr-4 h-8 w-8 rounded-full text-white font-bold bg-indigo-500 cursor-pointer"
      >
        3
      </router-link>
    </div>
  </header>
</template>
