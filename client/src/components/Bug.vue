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
        <div class="col-3" v-if="bugData.closed === false">
            Open
        </div>
        <div class="col-3" v-if="bugData.closed === true">
            Closed
        </div>
        <div class="col-3">
            {{ bugData.updatedAt }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Bug",
    props: ["bugData"]
}
</script>

<style>

</style>