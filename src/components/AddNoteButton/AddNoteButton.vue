<template>
    <div>
        <button @click="modal = !modal" class="btn button button-add-note p-2 jello-horizontal ">
            <i class="fas fa-plus m-0"></i>
        </button>

        <NoteForm :showModal="modal" />
    </div>


</template>

<script>
    import NoteForm from '@/components/AddNoteForm/AddNoteForm'
    export default {
        components: {
            NoteForm
        },
        data() {
            return {
                modal: false
            }
        }

    }
</script>

<style src="./style.scss" lang="scss" scoped />