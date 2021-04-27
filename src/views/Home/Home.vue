<template>
  <div class="columns">
    <Navbar />
    <div class="column mt-5">
      Auto
    </div>
  </div>
</template>



<script>
  import Navbar from '@/components/NavbarVertical/NavbarV'
  export default {
    name: 'Home',
    components: {
      Navbar
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />