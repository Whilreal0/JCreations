<template>
    <div  class="fixed inset-0 transition-opacity">
        <!-- emit close to close the sidebar when click outside  -->
        <div 
            @click="$emit('close')" 
            class="absolute inset-0 bg-black opacity-50"
            
        >
        </div>
    </div>
</template>

<script>
export default {
    data: ()=>({
        
    }),
}
</script>

<style>

</style>