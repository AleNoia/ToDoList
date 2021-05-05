<template>
    <div>
        <Status :tasks="tasks" />
        <div class="main-content">
            <section class="main-tasks">
                <div class="title">
                    <h1><i class="fas fa-clipboard"></i>Your tasks</h1>
                </div>
                <div class="content content-cards">
                    <task v-for="not in tasks" :key="not.idPush" :tasks="not" />
                    <!-- <div v-else class="no-task">
                        <h1>Add your task :)</h1>
                    </div> -->
                </div>
            </section>
        </div>
    </div>

</template>



<script>
    import task from '@/components/task/task'
    import Status from '@/components/Status/status'
    export default {
        components: {
            task,
            Status
        },
        data() {
            return {}
        },
        props: {
            tasks: {
                required: true
            }
        },
        created(){
            console.log(this.task)
        }
    }
</script>


<style src="./style.scss" lang="scss" scoped />