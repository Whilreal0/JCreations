<template>
  <div
    class="
      absolute
      inset-0
      overflow-hidden
      flex
      justify-center
      items-center
      md:py-[50px]
       z-[100]
    "
  >
  <transition
      enter-class="opacity-0"
      enter-active-class="ease-in transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in transition-medium"
      leave-to-class="opacity-0"
    >
<ModalOverlay />
    </transition>
      


    <CarouselSlide />
    <span
      @click="$emit('close')"
      class="absolute top-10 right-10 cursor-pointer"
    >
      <fa-icon icon="fa-solid fa-xmark" />
    </span>
  </div>
</template>

<script>
import ModalOverlay from "@/components/Modal/WeddingModal/ModalOverLay";
import CarouselSlide from "@/components/Modal/WeddingModal/CarouselSlide";
export default {
  components: {
    CarouselSlide,
    ModalOverlay,
  },
  inject: ["dataFromParent"],
};
</script>

<style>
</style>