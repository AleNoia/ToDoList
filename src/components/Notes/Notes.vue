<template>
    <div>
        <Status :notes="notes" />
        <div class="main-content">
            <section class="main-notes">
                <div class="title">
                    <h1><i class="fas fa-clipboard"></i>Your notes</h1>
                </div>
                <div class="content content-cards">
                    <div v-if="notes.length">
                        <Note v-for="not in notes" :key="not.idPush" :notes="not" />
                    </div>
                    <div v-else class="no-task">
                        <h1>Add your first task :)</h1>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>



<script>
    import Note from '@/components/Note/Note'
    import Status from '@/components/Status/status'
    export default {
        components: {
            Note,
            Status
        },
        data() {
            return {}
        },
        props: {
            notes: {
                required: true
            }
        }
    }
</script>


<style src="./style.scss" lang="scss" scoped />