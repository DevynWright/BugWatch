<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col-10">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'home' }">
          <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
      </div>
      <div class="col-2">
        <button @click.prevent="show">Report</button>
        <modal name="bug-modal">
          <form @submit.prevent="createBug">
            <div class="form-group">
                <input required type="text" v-model="newBug.title" placeholder="Bug Title...">
            </div>
            <div class="form-group">
                <input required type="text" v-model="newBug.description" placeholder="Bug Description...">
            </div>
            <div class="form-check">
                <input required type="text" v-model="newBug.reportedBy" placeholder="Reported By...">
            </div>
            <button type="submit" @click="hide" class="btn btn-primary">Submit</button>
          </form>
        </modal>
      </div>
    </header>
    <div id="mids" class="row">
      <div class="col-11 m-auto">
        <div class="row">
          <div class="col-7">
            <h2>Current Bugs</h2>
            
          </div>
          <div class="col-4">
            <input type="checkbox" name="hide-closed">
            <p>hide closed</p>
          </div>
        </div>
      </div>
    </div>
    <main class="row">
      <div id="display-bugs" class="col-10 m-auto">
        <div class="row">
          <div class="col-3">
            <h2>Title</h2>
          </div>
          <div class="col-3">
            <h2>Reported By</h2>
          </div>
          <div class="col-3">
            <h2>Status</h2>
          </div>
          <div class="col-3">
            <h2>Last Modified</h2>
          </div>
        </div>
      </div>
      <div id="bugs" class="col-10 m-auto" v-for="bug in bugs" :key="bug.id">
        <BugComponent :bugData="bug" />
      </div>
    </main>
  </div>
</template>

<script>
import BugComponent from "@/components/Bug";
export default {
  name: 'home',
  data(){
        return {
            newBug: {
                title: "",
                description: "",
                reportedBy: ""
            }
        }
    },
  mounted(){
    this.$store.dispatch("getBugs");
  },
  methods: {
  createBug() {
    let bug = { ...this.newBug };
    this.$store.dispatch("createBug", bug);
    this.newBug = {
      title: "",
      description: "",
      reportedBy: ""
    };
    this.bugDetail();
  },
  bugDetail(){
    let activeBug = this.activeBug;
    this.$router.push({ name: "bugDetails", params: { id: this.$store.state.activeBug.id}})
  },
  show () {
    this.$modal.show('bug-modal');
  },
  hide () {
    this.$modal.hide('bug-modal');
  }
},
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug(){
      return this.$store.state.activeBug;
    }
  },
  components: {
    BugComponent
  }
}
</script>
<style>
#bugs{
  background-color: whitesmoke;
}
#mids{
  margin-top: 30px
}
#display-bugs {
  background-color: azure;
  border-style: solid;
  border-width: 2px
}
main {
  margin-top: 10px
}
header {
  background-color: aqua;
  border-bottom-style: solid;
  border-bottom-width: 3px
}
button {
  height: 2.5rem;
  width: 9rem;
  background-color: cadetblue;
  border-radius: 10px
}
h1 img {
transform: rotate(180deg);
height: 1.5rem;
};
</style>