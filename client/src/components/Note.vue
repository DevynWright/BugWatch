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
            <p @click="deleteNote(note.id)">X</p>
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
    },
    methods: {
        deleteNote(id){
            let note = this.$store.state.notes.find(note => note.id == id)
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this comment!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your comment has been deleted!", {
                    icon: "success",
            });
                this.$store.dispatch("deleteNote", note)
            } else {
                swal("Your comment is safe!");
                }
            });
        }
    }
}
</script>

<style>

</style>