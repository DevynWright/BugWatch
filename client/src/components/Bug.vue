<template>
    <div class="row">
        <div class="col-3">
        <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
            {{ bugData.title }}
        </router-link>
        </div>
        <div class="col-3">
            {{ bugData.reportedBy }}
        </div>
        <div style="color: green" class="col-3" v-if="bugData.closed === false">
            Open
        </div>
        <div style="color: red" class="col-3" v-if="bugData.closed === true">
            Closed
        </div>
        <div class="col-3">
            {{ updated }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Bug",
    props: ["bugData"],
    computed:{
        updated(){
            let up = new Date(this.bugData.updatedAt);
            return up.toLocaleDateString();
        }
    }
}
</script>

<style>
#open{
font-family: cursive;
}
</style>