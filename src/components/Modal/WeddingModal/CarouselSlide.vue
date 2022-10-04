<template>
  <section
    class="
      absolute
      z-[9999]
      md:w-[70vw]
      w-full
      md:h-[80vh]
      h-[60vh]
      bg-white
      flex
      justify-center
      items-center
      overflow-hidden
      opacity-100
      
    "
  >
    <div
      class="relative object-contain  top-0 right-0 overflow-hidden"
      v-for="(image, i) in imagesFromParent"
      :key="image.id"
      :data-index="i"
    >
      <!--start -->
      <img class="" :src="image.path" />
      
      <button
        class="absolute top-[50%] left-[10px]  rounded text-black"
        @click="onPrev"
      >
      <fa-icon icon="fa-solid fa-angle-left" />
      </button>
      <button
        class="absolute top-[50%] right-[10px] rounded text-black"
        @click="onNext"
      >
       <fa-icon icon="fa-solid fa-angle-right" />
      </button>
    </div>
    <!--end -->
  </section>
</template>

<script>
export default {
  name: "CarouselSlide",
  inject: ["imagesFromParent"],
  data: () => ({
    isVisible: false,
    currentSlideIndex: 0,
  }),
methods: {
    animate (element, animation, onAnimationEnd) 
    {
      const plainClassList = Array.prototype.slice.call(element.classList);
      
      const animationsToRemove = plainClassList.filter(
        className => className.includes('animate__')
      )
      element.classList.remove('hidden', ...animationsToRemove);
      element.style.setProperty('--animate-duration', '1s');
      element.classList.add('animate__animated', animation);
      if (onAnimationEnd) {
        element.addEventListener('animationend', onAnimationEnd, {once:true})
      }
    },
    getNextSlideIndex () {
      if (this.currentSlideIndex + 1 < this.imagesFromParent.length) {
        return this.currentSlideIndex + 1;
      }
      return 0;
    },
    getPreviousSlideIndex () {
      if (this.currentSlideIndex > 0) {
        return this.currentSlideIndex - 1;
      }
      return this.imagesFromParent.length - 1;
    },
    onNext () {
      const element = document.querySelector(`[data-index="${this.currentSlideIndex}"]`)
      this.animate(element, 'animate__slideOutLeft', () => {
        element.classList.add('hidden')
      });
      const nextSlideIndex = this.getNextSlideIndex();
      const nextElement = document.querySelector(`[data-index="${nextSlideIndex}"]`)
      this.animate(nextElement, 'animate__slideInRight');
      this.currentSlideIndex = nextSlideIndex;
    },
    onPrev () {
      const element = document.querySelector(`[data-index="${this.currentSlideIndex}"]`)
      this.animate(element, 'animate__slideOutRight', () => {
        element.classList.add('hidden')
      });
      const previousSlideIndex = this.getPreviousSlideIndex();
      const previousElement = document.querySelector(`[data-index="${previousSlideIndex}"]`)
      this.animate(previousElement, 'animate__slideInLeft');
      this.currentSlideIndex = previousSlideIndex;
    }
  },
  mounted () 
  {
    this.imagesFromParent.forEach((_, index) => {
      if (index !== this.currentSlideIndex) {
        const element = document.querySelector(`[data-index="${index}"`);
        element.classList.add('hidden');
      }
    })
  }
};
</script>

