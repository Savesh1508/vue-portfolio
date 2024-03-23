import { defineStore } from 'pinia';

export const useVisibilitiesStore = defineStore('visibilities', {
  state: () => ({
    visible: false,
    menu: false,
  }),
  actions: {
    toggleVisibility() {
      this.visible = !this.visible;
    },

    menuOnOff() {
      this.menu = !this.menu;
    },
  },
});
