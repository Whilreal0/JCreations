<template>
  <div id="app">
   <Sidebar />
    <router-view/>
  </div>
</template>
<script>

import Sidebar from '@/components/sidebar/Sidebar'
export default {
  
  components: {
    Sidebar
  }
}
</script>

<style>
body{
  font-family: 'Space Grotesk', sans-serif;
  scroll-margin: 0px;
}
body::-webkit-scrollbar { 
  display: none;
}
</style>

