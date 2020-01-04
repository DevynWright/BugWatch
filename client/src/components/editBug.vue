<template>
<div class="col-11">
  <button @click="show">EditBug</button>
  <modal name="editBug">
    <form @submit.prevent="editBug">
      <div class="form-group">
        <label for="title">Edit Title</label>
        <input name="title" required type="text" v-model="editBug.title" placeholder="Bug Title...">
      </div>
      <div class="form-group">
        <label for="description">Edit Description</label>
        <input name="description" required type="text" v-model="editBug.description" placeholder="Bug Description...">
      </div>
        <button type="submit" @click="hide" class="btn btn-primary">Submit</button>
    </form>
  </modal>
</div>
</template>

<script>
export default {
name: "editBug",
data(){
  return {
    editedBug: {
      title: "",
      description: ""
    }
  }
},
methods:{
  editBug(){
    let bug = {...this.editedBug}
    let editedBug = {
      title: this.title,
      description: this.description,
      id: this.$route.params.id
    };
    this.$store.dispatch("editBug", bug)
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