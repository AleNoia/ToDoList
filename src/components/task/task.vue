<template>
    <div class="card">
        <div class="card-content didnot" :class="style">
            <div class="card-header">
                <h2 class="title-task opacity-slow2" v-html="tasks.titlePush">
                </h2>
            </div>
            <div class="card-footer">
                <button @click="donetask" v-if="tasks.concludedPush == false" class="btn status opacity-slow2"><i
                        class="fas fa-times"></i>Incomplete
                </button>
                <button @click="donetask" v-if="tasks.concludedPush == true" class="btn status opacity-slow"><i
                        class="fas fa-check"></i>Concluded</button>
                <p v-if="tasks.concludedPush == false" class="opacity-slow2">Created on {{tasks.createPush}}
                    <span>{{tasks.hourPush}}</span></p>
                <p v-if="tasks.concludedPush == true" class="opacity-slow">Concluded on {{concludedDate}}
                    <span>{{concludedHour}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    // import eventBus from '../eventBus'
    export default {
        data() {
            return {
                concludedDate: '',
                concludedHour: '',
            }
        },
        props: {
            tasks: {
                required: true
            },
        },
        methods: {
            donetask() {
                this.tasks.concludedPush = !this.tasks.concludedPush

                let now = new Date();
                let day = now.getDate();
                let month = now.getMonth();
                let year = now.getFullYear();
                var minutes = now.getMinutes();
                var hour = now.getHours();
                this.concludedDate = `${month}/${day}/${year}`
                this.concludedHour = `at ${hour}:${minutes}`
            }
        },
        computed: {
            style() {
                return {
                    didtask: !this.tasks.concludedPush,
                    done: this.tasks.concludedPush
                }
            }
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />