import { defineStore } from "pinia";

export default defineStore("userStore", {
  state: () => ({
    name: "Fuck",
    age: 666,
  }),

  getters: {
    getUserName(state) {
      return this.name;
    },
    getUserAge(state) {
      return this.age;
    },
  },

  actions: {
    updateName() {
      this.name = "Suck my dick!";
    },
    addAge() {
      this.age++;
    },
  },
});
