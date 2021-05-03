<template>
    <div class="card" @click="doneNote">
        <div class="card-content didnot" :class="style">
            <div class="card-header">
                <h2 class="title-note opacity-slow2" v-html="notes.titlePush">
                </h2>
            </div>
            <div class="card-footer">
                <h3 v-if="concluded == false" class="status opacity-slow2"><i class="fas fa-times"></i>Incomplete
                </h3>
                <h3 v-if="concluded == true" class="status opacity-slow"><i class="fas fa-check"></i>Concluded</h3>
                <p v-if="concluded == false" class="opacity-slow2">Created on {{notes.createPush}} <span>{{notes.hourPush}}</span></p>
                <p v-if="concluded == true" class="opacity-slow">Concluded on {{concludedDate}} <span>{{concludedHour}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                concluded: false,
                concludedDate: '',
                concludedHour: ''
            }
        },
        props: {
            notes: {
                required: true
            }
        },
        methods: {
            doneNote() {
                this.concluded = !this.concluded

                let now = new Date();
                let day = now.getDate();
                let month = now.getMonth();
                let year = now.getFullYear();
                var minutes = now.getMinutes();
                var hour = now.getHours();
                this.concludedDate = `${month}/${day}/${year}`
                this.concludedHour = `at ${hour}:${minutes}`


                console.log(this.concluded)
            }
        },
        computed: {
            style() {
                return {
                    didnote: !this.concluded,
                    done: this.concluded
                }
            }
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />