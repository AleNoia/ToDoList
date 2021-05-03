import Vue from 'vue';
export default new Vue({
    methods: {
        sendNote(note){
            this.$emit('noteSend', note)
        },
        onNote(callback){
            this.$on('noteSend', callback)
        }
    }
})