import React from "react";
import { AffairType } from "../../HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: any; // AffairType // need to fix any
  deleteAffairCallback: any; // (id: number) => void // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix // создаёт студент

  const priorityClass = s.item + " " + s[props.affair.priority];

  return (
    <div
      id={"hw2-affair-" + props.affair._id}
      className={s.affair + " " + s[props.affair.priority]}
    >
      <div id={"hw2-name-" + props.affair._id} className={priorityClass}>
        {/*создаёт студент*/}
        {props.affair.name}
        {/**/}
      </div>
      {/*[*/}
      {/*<div id={'hw2-priority-' + props.affair._id} className={priorityClass}>*/}
      {/*    /!*создаёт студент*!/*/}
      {/*    {props.affair.priority}*/}
      {/*    /!**!/*/}
      {/*</div>*/}
      {/*]*/}

      <button
        id={"hw2-button-delete-" + props.affair._id}
        onClick={deleteCallback} // создаёт студент
        className={priorityClass + " " + s.closeButton}
      >
        {/*текст кнопки могут изменить студенты*/}X{/**/}
      </button>
    </div>
  );
}

export default Affair;
