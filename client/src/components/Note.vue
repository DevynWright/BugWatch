<template>
<div class="col-10 m-auto">
    <div class="row" v-for="note in notes" :key="note.id" >
        <div class="col-2">
            <h4>Name</h4>
            {{ noteData.reportedBy }}
        </div>
        <div class="col-7">
            <h4>Message</h4>
            {{ noteData.content }}
        </div>
        <div class="col-1">
            <h4>Delete</h4>
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