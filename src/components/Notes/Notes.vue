<template>
    <div class="main-notes">
        <div class="title">
            <h1><i class="fas fa-clipboard"></i>Your notes</h1>
        </div>
        <div class="content content-cards">
            <Note v-for="not in notes" :key="not.idPush" :notes="not" />
        </div>
    </div>
</template>



<script>
    // import eventBus from '../eventBus'
    import Note from '@/components/Note/Note'
    export default {
        components: {
            Note,
        },
        props: {
            notes: {
                // type: Object,
                required: true
            }
        },
        // data() {
        //     return {
        //         notes: Array,
        //     }
        // },
        // created() {
        //     eventBus.onNote(notes => {
        //         this.notes = notes
        //         console.log(this.notes)
        //     })
        // }
    }
</script>


<style src="./style.scss" lang="scss" scoped />