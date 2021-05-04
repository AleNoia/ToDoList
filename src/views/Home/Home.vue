<template>
    <div class="main">
      <Notes :notes="notes" />
    </div>
</template>



<script>
  import Notes from '@/components/Notes/Notes'
  import eventBus from '@/components/eventBus'
  export default {
    name: 'Home',
    components: {
      Notes,
    },
    data() {
      return {
        notes: Array,
      }
    },
    created() {
      eventBus.onNote(notes => {
        this.notes = notes
        console.log(this.notes)
      })
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />