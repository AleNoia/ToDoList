import Vue from 'vue';
export default new Vue({
    methods: {
        sendtask(task){
            this.$emit('taskSend', task)
        },
        ontask(callback){
            this.$on('taskSend', callback)
        },
        sendConcluded(value){
            this.$emit('valueSend', value)
        },
        onConcluded(callback){
            this.$on('valueSend', callback)
        },
    }
})