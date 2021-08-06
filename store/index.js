export const strict = false;

export const state = () => ({
  userObjects: null,
  token: "",
});

export const getters = {};

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
  },
  setDarkMode(state, payload) {
    state.darkMode = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  setUserDatas(state, payload) {
    console.log(payload);
    state.userObjects = payload;
  },
};

export const actions = {
  handleSetToken({ commit }, token) {
    commit("setToken", token);
  },
  handleGetUserData({ commit }, data) {
    commit("setUserDatas", data);
  },
};
