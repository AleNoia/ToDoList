<template>
    <div class="modal-container opacity-slow" v-if="showModal">
        <div class="background-modal"></div>
        <!-- @click="showModal = !showModal" -->
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
                <button class="btn button-finish"><i class="fas fa-check"></i></button>
            </div>
            <div contenteditable="true" spellcheck="false" id="textArea" class="text-area"></div>
            <button class="btn">Save note<i class="fas fa-check"></i></button>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            showModal: {
                type: Boolean,
            }
        },
        methods: {
            boldFunc() {
                var textArea = document.getElementById("textArea").innerHTML
                document.execCommand("bold", false, null)
                console.log(textArea)
            },
            italicFunc() {
                var textArea = document.getElementById("textArea").innerHTML
                document.execCommand("italic", false, null)
                console.log(textArea)
            },
            underlineFunc() {
                var textArea = document.getElementById("textArea").innerHTML
                document.execCommand("underline", false, null)
                console.log(textArea)
            },
            orderNumFunc() {
                var textArea = document.getElementById("textArea").innerHTML
                document.execCommand("insertOrderedList", false, null)
                console.log(textArea)
            },
            unorderedNumFunc() {
                var textArea = document.getElementById("textArea").innerHTML
                document.execCommand("insertUnorderedList", false, null)
                console.log(textArea)
            },
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />