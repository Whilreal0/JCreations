<template>
  <section
    class="
    wedding
      overflow-hidden
      text-center text-2xl
      flex flex-col
      justify-center
      items-center
      md:px-16
      p-0
    "
  >
    <ModalImage
      v-if="openModal"
      @open="showModal"
      @close="showModal"
    />
    
    <h1 class=" md:text-3xl mt-5 border-b-[1px] border-black">Wedding</h1>
    <div
      class="
       grid
        md:grid-cols-3 md:gap-3
        gap-5
        auto-rows-auto
        items-center
        justify-center
        w-full
        md:px-10
        p-8
      "
    >
      <div
        v-for="(image, i) in weddingImages"
        :key="i"
        class="shadow-inner rounded-xl"
      >
        <img
          @click.prevent="showModal"
          class="
            w-full
            rounded-xl
            object-contain
            cursor-pointer
            hover:translate-y-[3px] hover:-translate-x-[3px]
            ease-in
            duration-200
          "
          :src="image.path"
        />
      </div>
    </div>
  </section>
</template>

<script>

import ModalImage from "@/components/Modal/WeddingModal/ModalImage.vue";


export default {
  components: {
    ModalImage,
  },
  data: () => ({
    openModal: false,
    weddingImages: [
      {
        id: 1,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 3,
        path: [require("@/assets/images/hero.jpg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/JCreation.jpg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/JCreation.jpg")],
      },
      {
        id: 6,
        path: [require("@/assets/images/JCreation.jpg")],
      },
    ],
  }),
  methods: 
  {
    showModal() 
    {
      this.openModal = !this.openModal;
      let sitebody = document.body;
      
//pass openModal boolean
      this.openModal
        ? sitebody.classList.add("overflow-hidden")
        : sitebody.classList.remove("overflow-hidden");

      // bus.$emit('openModalEmit', this.openModal)
     let sideBarBtn = document.querySelector('.sideBtn')
   
      if( this.openModal == true){
        sideBarBtn.classList.add('hidden')
      }else{
        sideBarBtn.classList.remove('hidden')
      }
    }
  },
  provide() 
  {
    return {
      dataFromParent: this.openModal,
      imagesFromParent: this.weddingImages
    };
  },
};
</script>

<style>
.bar{
  display:none 
}
</style>