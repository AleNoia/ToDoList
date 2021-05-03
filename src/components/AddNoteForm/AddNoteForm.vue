<template>
    <div>
        <button @click="modal = !modal" class="btn button-add-note p-2">
            <i class="fas fa-plus m-0"></i>
        </button>

        <div class="modal-container opacity-slow" v-if="modal">
            <div @click="modal = false" class="background-modal"></div>
            <div class="modal">
                <div class="menu">
                    <div class="menu-group">
                        <button @click="boldFunc" class="btn menu-item"><i class="fas fa-bold"></i></button>
                        <button @click="italicFunc" class="btn menu-item"><i class="fas fa-italic"></i></button>
                        <button @click="underlineFunc" class="btn menu-item"><i class="fas fa-underline"></i></button>
                    </div>
                    <div class="menu-group">
                        <button @click="orderNumFunc" class="btn menu-item">
                            <h3>1<i class="fas fa-stream"></i></h3>
                        </button>
                        <button @click="unorderedNumFunc" class="btn menu-item">
                            <h3>U<i class="fas fa-stream"></i></h3>
                        </button>
                    </div>
                    <div class="menu-group">
                        <button @click="justifyleftFunc" class="btn menu-item">
                            <i class="fas fa-outdent"></i>
                        </button>
                        <button @click="justifycenterFunc" class="btn menu-item">
                            <i class="fas fa-align-justify"></i>
                        </button>
                        <button @click="justifyrightFunc" class="btn menu-item">
                            <i class="fas fa-indent"></i>
                        </button>
                    </div>
                </div>
                <div class="group-text">
                    <div contenteditable="true" spellcheck="false" class="title-area" id="title" />
                    <hr class="my-2">
                    <div contenteditable="true" spellcheck="false" class="text-area" id="text" />
                </div>
                <div class="group-button">
                    <button @click="save" class="btn button-success">
                        <h3>Save note</h3>
                    </button>
                    <button @click="modal = false" class="btn button-danger">
                        <h3>Cancel</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from '../eventBus'
    export default {
        data() {
            return {
                modal: false,
                notes: [
                    // {concludedPush: false, 
                    // createPush: "4/20/0420",
                    // textPush: "bla bla bla bla",
                    // titlePush: "Bla bla"}
                ],
                note: {
                    title: {
                        type: String,
                    },
                    text: {
                        type: String,
                    },
                    dateCreate: {
                        type: Date,
                    },
                    hourCreate: {
                        type: Date,
                    },
                    id: Number,
                    dateConcluded: false
                }
            }
        },
        methods: {
            save() {
                let tit = document.getElementById("title")
                let txt = document.getElementById("text")

                let id = Date.now()
                let now = new Date();
                let day = now.getDate();
                let month = now.getMonth();
                let year = now.getFullYear();
                var minutes = now.getMinutes();
                var hour = now.getHours();

                let dateNow = `${month}/${day}/${year}`
                let hourNow = `at ${hour}:${minutes}`
                let title = tit.innerHTML
                let text = txt.innerHTML

                let titlePush = this.note.title = title
                let textPush = this.note.text = text
                let createPush = this.note.dateCreate = dateNow
                let hourPush = this.note.hourCreate = hourNow
                let concludedPush = this.note.dateConcluded
                let idPush = this.note.id = id

                let arr = {
                    titlePush,
                    textPush,
                    createPush,
                    concludedPush,
                    hourPush,
                    idPush
                }

                this.notes.push(arr)
                let noteArray = this.notes

                eventBus.sendNote(noteArray)

                this.modal = false
            },
            boldFunc() {
                document.execCommand("bold", false, null)
            },
            italicFunc() {
                document.execCommand("italic", false, null)
            },
            underlineFunc() {
                document.execCommand("underline", false, null)
            },
            orderNumFunc() {
                document.execCommand("insertOrderedList", false, null)
            },
            unorderedNumFunc() {
                document.execCommand("insertUnorderedList", false, null)
            },
            justifyleftFunc() {
                document.execCommand("justifyleft", false, null)
            },
            justifyrightFunc() {
                document.execCommand("justifyright", false, null)
            },
            justifycenterFunc() {
                document.execCommand("justifycenter", false, null)
            },
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />