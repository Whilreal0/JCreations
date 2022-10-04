<template>
  <section
    class="
      text-center text-2xl
      flex flex-col
      justify-center
      items-center
      md:px-16
    "
  >
      <ModalImage
      v-if="openModal"
      @open="showModal"
      @close="showModal"
    />
    <h1 class="md:text-3xl mt-5 border-b-[1px] border-black">Brands</h1>
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
        class="shadow-inner rounded-xl"
        v-for="(image, i) in brandImages"
        :key="i"
      >
        <img
          @click.prevent="showModal"
          class="
            w-full
            rounded-xl
            object-scale-down
            cursor-pointer
            hover:translate-y-[3px] hover:-translate-x-[3px]
            ease-in duration-200
          "
          :src="image.path"
         
        />
      </div>
    </div>
  </section>
</template>

<script>
import ModalImage from "@/components/Modal/BrandsModal/ModalImage";
export default {
  components: {
    ModalImage,
  },
  data: () => ({
    openModal: false,
    brandImages: [
      {
        id: 1,
        path: [require("@/assets/images/NKD1.jpg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/NKD.jpg")],
      },
      {
        id: 3,
        path: [require("@/assets/images/NKD2.jpg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/NKD1.jpg")],
      },
      {
        id: 6,
        path: [require("@/assets/images/NKD1.jpg")],
      },
      {
        id: 7,
        path: [require("@/assets/images/NKD3.png")],
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
  }
  ,
  provide() 
  {
    return {
      dataFromParent: this.openModal,
      imagesFromParent: this.brandImages
    };
  },
  
};
</script>

<style>
</style>