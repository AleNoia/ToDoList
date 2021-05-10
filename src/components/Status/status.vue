<template>
    <section class="status-section">
        <div class="status-content">
            <div class="group-header">
                <div class="group-percent">
                    <h1>{{status.tasksPercent}}<span>%</span></h1>
                    <h3>done</h3>
                </div>
                <div class="status-bar">
                    <div class="bar" :style="{width: status.tasksPercent + '%'}"></div>
                </div>
                    <p>Percentage of the tasks you have done</p>
            </div>
            <div class="total">
                <h3><i class="fas fa-thumbtack"></i></h3>
                <h2>{{status.tasksTotal}}</h2>
                <h4>tasks</h4>
            </div>
            <div class="group-bottom">
                <div class="status-item">
                    <div class="group-info-header">
                        <h1>{{status.tasksToDo}}</h1>
                        <h3>Tasks to do</h3>
                    </div>
                    <div></div>
                </div>
                <div class="status-item">
                    <h2>─</h2>
                </div>
                <div class="status-item">
                    <div class="group-info-header">
                        <h1>{{status.tasksDone}}</h1>
                        <h3>Tasks done</h3>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
    export default {
        props: {
            status: {
                required: true
            }
        },
    }
</script>


<style src="./style.scss" lang="scss" scoped />