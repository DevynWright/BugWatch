<template>
<div class="col-11">
  <button @click="show">EditBug</button>
  <modal name="editBug">
    <form @submit.prevent="editBug">
      <div class="form-group">
        <input required type="text" v-model="editBug.title" placeholder="Bug Title...">
      </div>
      <div class="form-group">
        <input required type="text" v-model="editBug.description" placeholder="Bug Description...">
      </div>
      <div class="form-check">
        <input required type="text" v-model="editBug.reportedBy" placeholder="Reported By...">
      </div>
        <button type="submit" @click="hide" class="btn btn-primary">Submit</button>
    </form>
  </modal>
</div>
</template>

<script>
export default {
name: "editBug",
methods:{
  editBug(){
    
    let editedBug = {
      title: this.title,
      description: this.description,
      reportedBy: this.reportedBy
    }
  },
  show () {
    this.$modal.show('editBug');
  },
  hide () {
    this.$modal.hide('editBug');
  }
}
}
</script>

<style>

</style>