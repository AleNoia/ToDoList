<template>
    <div class="card" @click.stop="donetask">
        <div class="card-content didnot" :class="style">
            <div class="card-header">
                <h2 class="title-task opacity-slow2" v-html="task.task.tit">
                </h2>
                <button @click="deleteTask" class="btn button-close">
                    <h3><i class="fas fa-times"></i></h3>
                </button>
            </div>
            <div class="card-footer">

                <button v-if="task.task.concluded == false" class="btn status opacity-slow2"><i
                        class="fas fa-times"></i>Incomplete
                </button>
                <p v-if="task.task.concluded == false" class="opacity-slow2">Created on {{task.task.dateCreate}}
                    <span>{{task.task.hourCreate}}</span></p>

                <button v-if="task.task.concluded == true" class="btn status opacity-slow"><i
                        class="fas fa-check"></i>Concluded</button>
                <p v-if="task.task.concluded == true" class="opacity-slow">Concluded on {{task.task.concludedDate}}
                    <span>{{task.task.concludedHour}}</span></p>

            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from '../eventBus'
    import DateFactory from '@/factories/dateFactory'
    const factory = DateFactory()
    export default {
        props: {
            task: {
                required: true
            },
        },
        methods: {
            donetask() {
                this.task.task.concluded = !this.task.task.concluded  // Changing status
                this.task.task.concludedDate = factory.BuildDate(new Date()) // Including task completion date.
                this.task.task.concludedHour = factory.BuildTime(new Date()) // Including task completion hour.
            },
            deleteTask() {
                eventBus.$emit("sendIdTask", this.task)
            },
        },
        computed: {
            style() {
                return {
                    didtask: !this.task.task.concluded,
                    done: this.task.task.concluded
                }
            }
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />