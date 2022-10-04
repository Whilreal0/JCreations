<template>
  <section class="flex justify-center items-center bg-hero h-screen w-screen bg-center">
    <div class="opacity-50 bg-black h-full w-full"></div>
    <div class="absolute  text-white ">
      <span class="block md:text-7xl  sm:text-5xl text-4xl">Jason Creations</span>
      <span class="block text-right md:text-2xl sm:text-2xl text-1xl translate -indent-10 -translate-y-[10px]">Photographer</span>
      <div class="flex items-end justify-end gap-5 text-2xl p-0">  
        <a href="https://www.facebook.com/2018jasoncreations">
          <fa-icon class="cursor-pointer" icon="fa-brands fa-facebook" />
        </a>
        <a href="https://instagram.com/jason_creations?igshid=YmMyMTA2M2Y=">
          <fa-icon class="cursor-pointer" icon="fa-brands fa-instagram" />
        </a>
      </div>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components:{
    //
  }
};
</script>
