<template>
  <div class="home container-fluid">
    <header class="row bg-white">
      <div class="col-12">
        <router-link v-if="$route.name != 'Home'" :to="{ name: 'Home' }">
        <h1><b>Bug W<img alt="Vue logo" src="../assets/logo.png">tch</b></h1>
        </router-link>
        <router-link v-if="$route.name != 'report'" :to="{ name: 'report' }">
        <button>Report</button>
        </router-link>
      </div>
    </header>
    <main class="row">
      {{bug}}
    </main>
  </div>
</template>

<script>
export default {
    name: "BugDetails",
    mounted(){
        this.$store.dispatch("getBugById", this.$route.params.id);
    },
    computed: {
        bug() {
            return this.$store.state.activeBug
        }
    }
}
</script>

<style>

</style>