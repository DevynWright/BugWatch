<template>
  <div class="home container-fluid">
    <header class="row bg-white">
      <div class="col-12">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'home' }">
        <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
        <router-link v-if="$route.name != 'report'" :to="{ name: 'report' }">
        <button>Report</button>
        </router-link>
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
  mounted(){
    this.$store.dispatch("getBugs");
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