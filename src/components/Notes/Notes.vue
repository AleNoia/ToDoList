<template>
    <div class="main-notes">
        <div class="title">
            <h1><i class="fas fa-clipboard"></i>Your notes</h1>
        </div>
        <Note />
    </div>
</template>



<script>
    import Note from '@/components/Note/Note'
    export default {
        components: {
            Note
        }
    }
</script>


<style src="./style.scss" lang="scss" scoped />