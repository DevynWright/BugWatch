<template>
  <div class="home container-fluid">
    <header class="row bg-white">
      <div class="col-12">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'home' }">
        <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
        <div>
          <button @click.prevent="show">Report</button>
          <modal name="hello-world">
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
      </div>
    </header>
    <main class="row">
      <div class="col-10 m-auto">
        <div class="row">
          <div class="col-3">
            Title
          </div>
          <div class="col-3">
            Reported By
          </div>
          <div class="col-3">
            Status
          </div>
          <div class="col-3">
            Last Modified
          </div>
        </div>
      </div>
      <div class="col-10 m-auto" v-for="bug in bugs" :key="bug.id">
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
    }
  },
  show () {
    this.$modal.show('hello-world');
  },
  hide () {
    this.$modal.hide('hello-world');
  }
},
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    BugComponent
  }
}
</script>
<style>
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