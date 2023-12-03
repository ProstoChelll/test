import { defineStore } from "pinia";

interface Iproduct {
  filters: {
    iso_3166_1_a2: string;
  };
  paginate: {
    page: number;
    pp_items: number;
  };
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
