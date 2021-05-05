<template>
    <section class="status-section">
        <div class="status-content">
            <div class="group-header">
                <div class="group-percent">
                    <h1>{{tasksPercent}}<span>%</span></h1>
                    <h2> of the tasks were done</h2>
                </div>
                <div class="status-bar">
                    <div class="bar" :style="{width: tasksPercent + '%'}"></div>
                </div>
                <div class="total">
                    <h2>{{tasksTotal}}</h2>
                    <h4>tasks</h4>
                </div>
            </div>
            <div class="group-bottom">
                <div class="status-item">
                    <div class="group-info-header">
                        <h2>Tasks to do</h2>
                        <h1>{{tasksToDo}}</h1>
                    </div>
                    <div></div>
                </div>
                <div class="status-item">
                    <h2>|</h2>
                </div>
                <div class="status-item">
                    <div class="group-info-header">
                        <h1>{{tasksDone}}</h1>
                        <h2>Tasks done</h2>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
    import eventBus from '../eventBus'
    export default {
        props: {
            notes: {
                required: true
            }
        },
        data() {
            return {
                tasksTotal: 0,
                tasksPercent: 0,
                tasksToDo: 0,
                tasksDone: 0,
            }
        },
        watch: {
            notes() {
                this.tasksTotal = this.notes.length

                let toDo = this.notes.filter(tasks => tasks.concludedPush == false)
                this.tasksToDo = toDo.length
                console.log("to do: " + toDo.length)

                let done = this.notes.filter(tasks => tasks.concludedPush == true)
                this.tasksDone = done.length
                console.log("done: " + done.length)

                let Percent = (this.tasksDone * 100) / this.tasksTotal
                this.tasksPercent = Percent.toFixed()

            }
        },
        created() {
            eventBus.sendConcluded(concluded => {
                console.log("concluded: " + concluded)
            }) 
        }
    }
</script>


<style src="./style.scss" lang="scss" scoped />