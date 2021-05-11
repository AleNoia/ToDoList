<template>
  <div class="main">
    <tasks-component :tasks="tasks"/>
    <!-- Modal component to add new task and receiving task -->
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
        tasks: [] //Tasks array
      }
    },
    methods: {
      addTask(task) {
        this.tasks.push(task)  // receiving task and pushing to tasks array
        console.log(this.tasks)
      }
    }
  }
</script>


<style src="./style.scss" lang="scss" scoped />