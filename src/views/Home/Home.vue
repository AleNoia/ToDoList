<template>
  <div class="main-content">
    <Notes />
  </div>
</template>



<script>
  import Notes from '@/components/Notes/Notes'
  export default {
    name: 'Home',
    components: {
      Notes,
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />