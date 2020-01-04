<template>
  <div class="home container-fluid">
    <header class="row bg-white">
      <div class="col-12">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'home' }">
        <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
      </div>
    </header>
    <main class="row">
        <div class="col-11 m-auto">
            <div class="row">
                <div class="col-10">
                    <h6>Title:</h6>
                    <h1>{{bug.title}}</h1>
                </div>
                <div class="col-2">
                    <button @click="closeBug">Close Bug</button>
                </div>
                <div class="col-10">
                    <h6>Reported By:</h6>
                    <h1>{{bug.reportedBy}}</h1>
                </div>
                <div class="col-2" v-if="bug.closed === false">
                    <h6>Status:</h6>
                    <h1 style="color:green">Open</h1>
                </div>
                <div class="col-2" v-if="bug.closed === true">
                    <h6>Status:</h6>
                    <h1 style="color:red">Closed</h1>
                </div>
                <div id="bugDesc" class="col-12">
                    <p>{{bug.description}}</p>
                </div>
            </div>
        </div>
        <div v-if="bug.closed === false" class="row">
            <editBug/>
        </div>
            <button @click="show">Add Note</button>
            <modal name="noteModal">
                <form @submit.prevent="createNote">
                    <input required type="text" v-model="newNote.reportedBy" placeholder="Your Name...">
                    <input required type="text" v-model="newNote.content" placeholder="Message...">
                    <button @click="hide" type="submit" class="btn btn-primary">Add Note</button>
                </form>
            </modal>
        
    </main>
    
    <div class="row">
        <div class="col-10 m-auto">
        <notes/>    
        </div>
    </div>
  </div>
</template>

<script>
import editBug from "../components/editBug"
import notes from "../components/Note";
export default {
    name: "BugDetails",
    data(){
        return {
            newNote: {
                reportedBy: "",
                content: "",
                closed: Boolean,
                bug: this.$route.params.id
            }
        }
    },
    mounted(){
        this.$store.dispatch("getBugById", this.$route.params.id);
        this.$store.dispatch("getNotes", this.$route.params.id);
    },
    methods: {
        closeBug(){
            swal({
                title: "Are you sure?",
                text: "Once closed, you will not be able to reopen this bug!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
                this.$store.dispatch("closeBug", this.$route.params.id)
            } else {
                swal("Bug will stay Open!");
            }
            });
        },
        createNote(){
            let note = { ...this.newNote };
            this.newNote = {
                reportedBy : "",
                content: "",
                bug: this.$route.params.id
            };
            this.$store.dispatch("createNote", note);
        },
        show () {
            this.$modal.show('noteModal');
        },
        hide () {
            this.$modal.hide('noteModal');
        }
    },
    computed: {
        bug() {
            return this.$store.state.activeBug
        },
        note() {
            return this.$store.state.notes
        }
    },
    components: {
        notes,
        editBug
    }
}
</script>

<style>
main{
    margin-top: 50px
}
#bugDisc {
    border-style: solid;
    border-width: 5px;
    border-color: white
}
</style>