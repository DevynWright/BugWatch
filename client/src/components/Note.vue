<template>
<div class="col-10 m-auto">
    <div class="row">
        <div class="col-2">
            <h4>Name</h4>
        </div>
        <div class="col-7">
            <h4>Message</h4>
        </div>
        <div class="col-1">
            <h4>Delete</h4>
        </div>
    </div>
    <div class="row" v-for="note in notes" :key="note.id" >
        <div class="col-2">
            {{ note.reportedBy }}
        </div>
        <div class="col-7">
            {{ note.content }}
        </div>
        <div class="col-1">
            <p @click="deleteNote">X</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "notes",
    computed: {
        notes(){
            return this.$store.state.notes
        }
    }
}
</script>

<style>

</style>