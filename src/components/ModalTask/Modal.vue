<template>
    <div>
        <div class="modal-container opacity-slow" v-if="modal">
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
                    <div contenteditable="true" @keydown.enter="save" data-text="Your title here" spellcheck="false"
                        class="title-area" id="title" />
                    <hr class="my-2">
                    <div contenteditable="true" @keydown.enter="save" data-text="Your task here :)" spellcheck="false"
                        class="text-area" id="text" />
                </div>
                <div class="group-button">
                    <button @click="save" class="btn button-success">
                        <h3>Save task</h3>
                    </button>
                    <button @click="modal = !modal" class="btn button-danger">
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
        components: {
            Notification
        },
        data() {
            return {
                modal: false,
                showNotification: false,
            }
        },
        watch: {
            modal() {
                let body = document.body
                if (this.modal == true) {
                    body.classList.add("noScroll")
                } else {
                    body.classList.remove("noScroll")
                }
            }
        },
        created() {
            eventBus.$on('showModal', (data) => {
                this.modal = data
            })
            document.addEventListener('keyup', this.onEsc)
        },
        beforeDestroy() {
            document.removeEventListener('keyup', this.onEsc)
        },
        methods: {
            onEsc(e) {
                if (!e) e = window.event
                let keyCode = e.keyCode || e.which
                if (keyCode == '27') {
                    this.modal = false
                }
            },
            save() {
                let id = Date.now()
                let txt = document.getElementById("text").innerHTML
                let tit = document.getElementById("title").innerHTML

                if (tit.length === 0) {
                    this.showNotification = true;
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 4500)
                } else {

                    let task = {
                        id,
                        txt,
                        tit,
                        concluded: false,
                        dateCreate: factory.BuildDate(new Date()),
                        hourCreate: factory.BuildTime(new Date()),
                        concludedDate: String,
                        concludedHour: String,
                    }

                    this.$emit('taskAdded', {
                        task: task
                    })

                    this.modal = false
                }

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