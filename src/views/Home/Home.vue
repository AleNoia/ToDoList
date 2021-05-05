<template>
  <div class="main">
    <tasks :tasks="tasks" />
  </div>
</template>



<script>
  import tasks from '@/components/tasks/tasks'
  import eventBus from '@/components/eventBus'
  export default {
    name: 'Home',
    components: {
      tasks,
    },
    data() {
      return {
        tasks: Array,
      }
    },
    created() {
      eventBus.ontask(tasks => {
        this.tasks = tasks
        console.log(this.tasks)
      })
    },
  }
</script>


<style src="./style.scss" lang="scss" scoped />