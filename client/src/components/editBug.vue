<template>
<div class="col-11">
  <button @click="show">EditBug</button>
  <modal name="editBug">
    <form @submit.prevent="editBug">
      <div class="form-group">
        <label for="title">Edit Title</label>
        <input name="title" required type="text" v-model="editedBug.title" placeholder="Bug Title...">
      </div>
      <div class="form-group">
        <label for="description">Edit Description</label>
        <input name="description" required type="text" v-model="editedBug.description" placeholder="Bug Description...">
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
      description: "",
      bug: this.$route.params.id

    }
  }
},
methods:{
  editBug(){
    let changedBug = { ...this.editedBug };
    this.$store.dispatch("editBug", changedBug)
    this.editedBug = {
      title: this.title,
      description: this.description,
      bug: this.$route.params.id
    };
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