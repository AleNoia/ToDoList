<template>
        <div class="notfication scale-in-top">
            <div class="icon">
                <h1><i class="fas fa-exclamation"></i></h1>
            </div>
            <div class="body-notification">
                <h2>Attention</h2>
                <p>The title cannot be empty</p>
            </div>
        </div>
</template>



<script>
    // import eventBus from '../eventBus'
    export default {
        props: {
            // notes: {
            //     type: Object,
            //     required: true
            // }
        },
        data() {
            return {
                // notes: Array,
            }
        },
        // created() {
        //     eventBus.onNote(notes => {
        //         this.notes = notes
        //         console.log(this.notes)
        //     })
        // }
    }
</script>


<style src="./style.scss" lang="scss" scoped />