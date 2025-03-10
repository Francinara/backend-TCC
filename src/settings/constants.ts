export const activityMap: {
  [key: number]: {
    name: string;
    abbreviation: string;
    type: string;
    quantity: string;
  };
} = {
  1: {
    name: "agriculturas",
    abbreviation: "a",
    type: "cultura",
    quantity: "producao_ano",
  },
  2: {
    name: "pecuarias",
    abbreviation: "pe",
    type: "especie",
    quantity: "quantidade",
  },
  3: {
    name: "aquiculturas",
    abbreviation: "aq",
    type: "cultura",
    quantity: "quantidade",
  },
  4: { name: "artesanatos", abbreviation: "ar", type: "produto", quantity: "" },
  5: {
    name: "apiculturas",
    abbreviation: "ap",
    type: "tipo",
    quantity: "n_comeias",
  },
  6: {
    name: "outras_atividades",
    abbreviation: "ou",
    type: "tipo",
    quantity: "",
  },
};
