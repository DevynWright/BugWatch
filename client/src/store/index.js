import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs:[],
    activeBug: {},
    notes: [],
  },
  mutations: {
    setAllBugs(state, data){
      state.bugs = data;
    },
    setActiveBug(state, bug){
      state.activeBug = bug;
    },
    addBug(state, bug){
      state.bugs.push(bug)
    },
    setNotes(state, data){
      state.notes = data
    },
    addNote(state, data){
      state.notes.push(data)
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getNotes({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setNotes", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      console.log("trying to grab comments", res.data)
      commit("setNotes", res.data)
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },
    async closeBug({ commit, dispatch }, id) {
      let res = await _api.delete("bugs/" + id);
      dispatch("getBugs");
    },
    async deleteNote({ commit, dispatch }, id) {
      let res = await _api.delete("notes/" + id);
      dispatch("getNotes");
    },
  },
  modules: {
  }
})
