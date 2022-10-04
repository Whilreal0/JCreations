<template>
  <section
    class="
      h-screen
      w-full
      text-center 
      flex flex-col
      items-center
      md:px-16
      p-0
    "
  >
    <h1 class="text-2xl md:text-3xl mt-5 border-b-[1px] border-black">About</h1>
    <div
      class="
        md:flex
        flex-row
        justify-start
        w-full
        md:px-10
        p-8
      "
    >
      <div class="flex justify-center mb-8">
        <img  class=" object-contain md:max-h-[500px] max-h-[300px] rounded-xl" :src="AboutMe.path" />
      </div>
      <div class=" md:max-w-[500px] md:ml-10 text-lg ">
        <p class="whitespace-pre-line">
          I am Jason, a Freelance Photographer. I specialize in portrait photography
          but will take on any fun wedding sessions too  ​
        </p>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    AboutMe: {
      path: [require("@/assets/images/j.jpg")],
    },
  }),
};
</script>

<style>
</style>