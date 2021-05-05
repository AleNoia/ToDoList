<template>
    <div class="card">
        <div class="card-content didnot" :class="style">
            <div class="card-header">
                <h2 class="title-note opacity-slow2" v-html="notes.titlePush">
                </h2>
            </div>
            <div class="card-footer">
                <button @click="doneNote" v-if="notes.concludedPush == false" class="btn status opacity-slow2"><i
                        class="fas fa-times"></i>Incomplete
                </button>
                <button @click="doneNote" v-if="notes.concludedPush == true" class="btn status opacity-slow"><i
                        class="fas fa-check"></i>Concluded</button>
                <p v-if="notes.concludedPush == false" class="opacity-slow2">Created on {{notes.createPush}}
                    <span>{{notes.hourPush}}</span></p>
                <p v-if="notes.concludedPush == true" class="opacity-slow">Concluded on {{concludedDate}}
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
            notes: {
                required: true
            },
        },
        methods: {
            doneNote() {
                this.notes.concludedPush = !this.notes.concludedPush

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
                    didnote: !this.notes.concludedPush,
                    done: this.notes.concludedPush
                }
            }
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />