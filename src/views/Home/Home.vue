<template>
  <div class="main">
    <tasks-component :tasks="tasks"/>
    <Modal @taskAdded="addTask" />
  </div>
</template>
 


<script>
  import tasksComponent from '@/components/tasks/tasks'
  import Modal from '@/components/ModalAdd/Modal'
  export default {
    name: 'Home',
    components: {
      tasksComponent,
      Modal
    },
    data() {
      return {
        tasks: []
      }
    },
    methods: {
      addTask(task) {
        this.tasks.push(task)
        console.log(this.tasks)
      }
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />