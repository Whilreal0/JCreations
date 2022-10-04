<template>
  <aside
    class="
      transform
      top-0
      right-0
      fixed
      bg-white
      h-full

      ease-in-out
      transition-all
      duration-300
      md:w-[50vw]
      w-full      
      
    "
  >
    <button
      class="absolute right-10 top-10 md:text-2xl"
      @click="$emit('close')"
    >
      <fa-icon icon="fa-solid fa-xmark" />
    </button>
    <ul class="flex flex-col justify-center items-center gap-5 h-full" >
      <li  v-for="(link, i) in links" :key="i">
        <router-link class="cursor-pointer px-4 py-1 text-2xl rounded-md hover:bg-slate-600 " @click.native="$emit('close')" :to="link.link">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    isShow: false,
    links: [
      { name: "Home", link: "/" },
      { name: "Overview", link: "/overview" },
      { name: "Brands", link: "/brands" },
      { name: "Wedding", link: "/wedding" },
      { name: "About", link: "/about" },
    ],
  }),

};
</script>

<style>
</style>