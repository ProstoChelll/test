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
        iso_3166_1_a2: "AU",
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
        iso_3166_1_a2: "KZ",
      },
      paginate: {
        page: 3,
        pp_items: 33,
      },
      id: 3,
    },
    {
      filters: {
        iso_3166_1_a2: "CN",
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
    let fullCoutryName = "";
    switch (allData.data[i].filters.iso_3166_1_a2) {
      case "RU":
        fullCoutryName = "Russia";
        break;
      case "AU":
        fullCoutryName = "Australia";
        break;
      case "JA":
        fullCoutryName = "Japan";
        break;
      case "KZ":
        fullCoutryName = "Kazakhstan";
        break;
      case "CN":
        fullCoutryName = "China";
        break;
      case "GR":
        fullCoutryName = "Greece";
        break;
    }
    chosenData.push({ name: fullCoutryName, id: allData.data[i].id });
  }
  return chosenData;
}

function getFilterData(filter: string, id: number) {
  let chosenData = [];
  let idNumber = id + 1;
  for (let i = 0; i < allData.data.length; i++) {
    let fullCoutryName = "";
    switch (allData.data[i].filters.iso_3166_1_a2) {
      case "RU":
        fullCoutryName = "Russia";
        break;
      case "AU":
        fullCoutryName = "Australia";
        break;
      case "JA":
        fullCoutryName = "Japan";
        break;
      case "KZ":
        fullCoutryName = "Kazakhstan";
        break;
      case "CN":
        fullCoutryName = "China";
        break;
      case "GR":
        fullCoutryName = "Greece";
        break;
    }
    if (allData.data[i].filters.iso_3166_1_a2 == filter) {
      chosenData.push({ name: fullCoutryName, id: idNumber });
    } else if (filter == "") {
      chosenData.push({ name: fullCoutryName, id: idNumber });
      idNumber++;
    }
  }
  return chosenData;
}
export { getAllData, getFilterData };
