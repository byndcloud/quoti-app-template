import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  list: [],
});

export const getters = {
  getField,
  list(state) {
    return state.list;
  },
};

export const actions = {
  list({ commit, state }) {
    return state.list;
  },
  appendNote({ commit, state }, note) {
    commit("insertNote", note);
  },
  deleteNote({ commit, state }, id) {
    commit("deleteNoteById", id);
  },
};

export const mutations = {
  insertNote(state, data) {
    const id = state.list.length;
    state.list.push({ ...data, id });
  },
  deleteNoteById(state, id) {
    state.list = state.list.filter((l) => l.id != id);
  },
};

export default {
  override: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
