let allData = {
  data: [
    {
      filters: {
        iso_3166_1_a2: "RU",
      },
      paginate: {
        page: 1,
        pp_items: 10,
      },
      id: 0,
    },
    {
      filters: {
        iso_3166_1_a2: "RU",
      },
      paginate: {
        page: 3,
        pp_items: 33,
      },
      id: 1,
    },
    {
      filters: {
        iso_3166_1_a2: "JA",
      },
      paginate: {
        page: 1,
        pp_items: 10,
      },
      id: 2,
    },
    {
      filters: {
        iso_3166_1_a2: "JA",
      },
      paginate: {
        page: 3,
        pp_items: 33,
      },
      id: 3,
    },
    {
      filters: {
        iso_3166_1_a2: "GR",
      },
      paginate: {
        page: 1,
        pp_items: 10,
      },
      id: 4,
    },
    {
      filters: {
        iso_3166_1_a2: "GR",
      },
      paginate: {
        page: 3,
        pp_items: 33,
      },
      id: 5,
    },
  ],
};

function getAllData() {
  let chosenData = [];
  for (let i = 0; i < allData.data.length; i++) {
    chosenData.push(allData.data[i]);
  }
  return chosenData;
}

function getFilterData(filter: string) {
  let chosenData = [];
  for (let i = 0; i < allData.data.length; i++) {
    if (allData.data[i].filters.iso_3166_1_a2 == filter) {
      chosenData.push(allData.data[i]);
    } else if (filter == "") {
      chosenData.push(allData.data[i]);
    }
  }
  return chosenData;
}
export { getAllData, getFilterData };
