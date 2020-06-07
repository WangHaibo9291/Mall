<template>
  <div>
      <myHead></myHead>
      <router-view/>
  </div>
</template>
<script>
import myHead from './components/navHead.vue'
import myBase from './components/base.vue'
export default {
  components:{
    myHead
    },

}
</script>
<style>



</style>
