<template>
  <div class="home container-fluid">
    <header class="row bg-white">
      <div class="col-12">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'Home' }">
        <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
        <button>Report</button>
      </div>
    </header>
    <main class="row">
      <div class="col-10 m-auto">
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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script> 
import BugComponent from "@/components/Bug"
export default {
    name: "report",
    data(){
        return {
            newBug: {
                title: "",
                description: "",
                reportedBy: ""
            }
        }
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
        }
    },
    computed: {
        BugComponent
    }
}
</script>

<style>

</style>