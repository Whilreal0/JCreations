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

<ModalOverlay />

      


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
import ModalOverlay from "@/components/Modal/BrandsModal/ModalOverLay";
import CarouselSlide from "@/components/Modal/BrandsModal/CarouselSlide";
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