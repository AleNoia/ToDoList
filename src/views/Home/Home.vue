<template>
  <div class="columns content">
    <Notes />
    <AddNoteButton />
  </div>
</template>



<script>
  import AddNoteButton from '@/components/AddNoteButton/AddNoteButton'
  import Notes from '@/components/Notes/Notes'
  export default {
    name: 'Home',
    components: {
      AddNoteButton,
      Notes,
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />