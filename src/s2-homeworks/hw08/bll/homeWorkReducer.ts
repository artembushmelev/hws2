import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

const initialState: UserType[] = [
  // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

export const homeWorkReducer = (
  state: UserType[] = initialState,
  action: ActionType
): any => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        let sortedUsers = state.slice().sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          // если имена равны
          return 0;
        });
        return sortedUsers;
      }
      if (action.payload === "down") {
        let sortedUsers = state.slice().sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          // если имена равны
          return 0;
        });
        return sortedUsers;
      }
      return state;
    }
    case "check": {
      return state.filter((el) => el.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
