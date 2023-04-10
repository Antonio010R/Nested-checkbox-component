export const firstBox = [
  {
    id: 1,
    name: "Account 1",
    type: 1,
    parentId: null,
  },
  {
    id: 2,
    name: "Account Group 1",
    type: 0,
    parentId: null,
  },
  {
    id: 3,
    name: "Account 2",
    type: 1,
    parentId: null,
  },
  {
    id: 4,
    name: "Account Group 2",
    type: 0,
    parentId: null,
  },
];

export const secondBox = [
  {
    id: 101,
    name: "Account Sub group 1",
    type: 0,
    parentId: 2,
  },
  {
    id: 102,
    name: "Account sub group 2",
    type: 0,
    parentId: 2,
  },
  {
    id: 103,
    name: "Account Sub 2 group 2",
    type: 1,
    parentId: 4,
  },
];

export const thirdBox = [
  {
    id: 201,
    name: "Account1",
    type: 0,
    parentId: 101,
  },
  {
    id: 202,
    name: "Account2",
    type: 0,
    parentId: 101,
  },
  {
    id: 203,
    name: "Account3",
    type: 1,
    parentId: 102,
  },
];

export const fourthBox = [
  {
    id: 301,
    name: "Account11",
    type: 1,
    parentId: 201,
  },
  {
    id: 302,
    name: "Account12",
    type: 1,
    parentId: 202,
  },
  {
    id: 303,
    name: "Account13",
    type: 1,
    parentId: 202,
  },
];
