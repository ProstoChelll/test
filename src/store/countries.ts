import { defineStore } from "pinia";

interface Iproduct {
  name: string;
  id: number;
}
interface Idata {
  data: Iproduct[];
  isAllDownload: boolean;
  animationPlay: boolean;
}

export const useCountries = defineStore("Countries", {
  state: () =>
    ({
      data: [],
      isAllDownload: false,
      animationPlay: false,
    } as Idata),
  getters: {},
  actions: {
    cleanStore() {
      this.data = [];
    },
    deleteCountry(id: number) {
      const updatedData = this.data.filter((country) => country.id !== id);
      this.data = updatedData;
    },
  },
});
