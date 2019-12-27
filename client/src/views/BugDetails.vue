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
        <div class="col-11 m-auto">
            <div class="row">
                <div class="col-12">
                    <h6>Title:</h6><h1>{{bug.title}}</h1>
                </div>
                <div class="col-10">
                    <h6>Reported By:</h6>
                    <h1>{{bug.reportedBy}}</h1>
                </div>
                <div class="col-2">
                    <h6>Status:</h6>
                    <h1>{{bug.closed}}</h1>
                </div>
                <div id="bugDesc" class="col-12">
                    <p>{{bug.description}}</p>
                </div>
            </div>
        </div>
        <div>
            <button>Comment</button>
            <button>Close Bug</button>
        </div>
    </main>
    <div class="row">
        <div class="col-10 m-auto">
            <h3>Notes</h3>
            <div class="row">
                <div class="col-3">
                    Name
                </div>
                <div class="col-3">
                    Message
                </div>
                <div class="col-3">
                    Delete
                </div>
            </div>
        </div>
    </div>
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
#bugDisc {
    border-style: solid;
    border-width: 5px;
    border-color: white
}
</style>