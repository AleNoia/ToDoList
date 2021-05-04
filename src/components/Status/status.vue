<template>
    <section class="status-section">
        <div class="status-content">
            <div class="group-header">
                <div class="group-percent">
                    <h1>25<span>%</span></h1>
                    <h2> of the tasks were done</h2>
                </div>
                <div class="status-bar">
                    <div class="bar"></div>
                </div>
                <div class="total">
                    <h2>100</h2><h4>tasks</h4>
                </div>
            </div>
            <div class="group-bottom">
                <div class="status-item">
                    <div class="group-info-header">
                        <h2>Tasks to do</h2>
                        <h1>10</h1>
                    </div>
                    <div></div>
                </div>
                <div class="status-item">
                    <h2>|</h2>
                </div>
                <div class="status-item">
                    <div class="group-info-header">
                        <h1>25</h1>
                        <h2>Tasks done</h2>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
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