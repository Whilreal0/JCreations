<template>
  <header class="absolute right-10 top-10 z-[5] cursor-default">
    <div class="flex items-center md:text-2xl">
      <button class="sideBtn cursor-pointer" @click="openSide"  :class="openModal ? 'invisible' : 'visible'">
        <!-- :class="isOpen && 'hidden'" -->

        <fa-icon icon="fa-solid fa-bars" />
      </button>
    </div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-in transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in transition-medium"
      leave-to-class="opacity-0"
    >
      <SideBarMenu v-if="isOpen" @close="openSide" />
    </transition>
    <SideBarList
      @close="openSide"
      :class="isOpen ? 'right-0' : 'translate-x-full'"
    />
  </header>
</template>

<script>

import SideBarMenu from "@/components/sidebar/SideBarMenu";
import SideBarList from "@/components/sidebar/SideBarList";

export default {
  props: {
    openModal: {
      type: Boolean,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  components: {
    SideBarMenu,
    SideBarList,
  },

  methods: 
  {
    openSide() 
    {
      this.isOpen = !this.isOpen;
      let sideBarBtn = document.querySelector(".sideBtn");
      let sitebody = document.body;

      // hide hamburgermenu when sidebar is open
      this.isOpen
        ? sideBarBtn.classList.add("hidden")
        : sideBarBtn.classList.remove("hidden");
      // prevent scrolling when sidebar is open
      this.isOpen
        ? sitebody.classList.add("overflow-hidden")
        : sitebody.classList.remove("overflow-hidden");
      //
      console.log(`${this.openModal}dasd`);
      //
    },
  },


  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
