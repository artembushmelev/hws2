import React, { useState } from "react";
import Affairs from "./affairs/Affairs";
import s from "./affairs/Affairs.module.css";
import s2 from "../../s1-main/App.module.css";

// types
export type AffairPriorityType = any; // 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
  _id: any; // number // need to fix any
  name: any; // string // need to fix any
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: any = [
  // need to fix any // AffairType[]
  { _id: 1, name: "React", priority: "high" }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (affairs: any, filter: any): any => {
  if (filter === "all") return affairs; // создаёт студент
  else if (filter === "low") return affairs.filter((a) => a.priority === "low");
  else if (filter === "middle")
    return affairs.filter((a) => a.priority === "middle");
  else if (filter === "high")
    return affairs.filter((a) => a.priority === "high");

  // need to fix // создаёт студент
};
export const deleteAffair = (affairs: any, _id: any): any => {
  // need to fix any // (affairs: AffairType[], _id: number): AffairType[]
  return affairs.filter((a: any) => a._id !== _id); // need to fix // создаёт студент
};

function HW2() {
  const [affairs, setAffairs] = useState<any>(defaultAffairs); // need to fix any // AffairType[]
  const [filter, setFilter] = useState<any>("all"); // need to fix any // FilterType

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: any) =>
    setAffairs(deleteAffair(affairs, _id)); // need to fix any // number

  return (
    <div id={"hw2"}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
      {/*не менять*/}
    </div>
  );
}

export default HW2;
