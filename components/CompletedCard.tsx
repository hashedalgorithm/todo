import React from "react";
import classes from "../styles/todocard.module.css";

type CompletedCardProps = {
  task: string;
  date: string;
  time: string;
  isDone?: boolean;
};
const CompletedCard = ({ task, date, time, isDone }: CompletedCardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className={classes.todocard}
    >
      <div>
        <h3 className={classes.tasktitle}>{task}</h3>
        <p className={classes.timeanddate}>
          {date}, {time}
        </p>
      </div>
      <div>
        <div className={classes.completedsign}>
          <svg
            width="22"
            height="17"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13.4478L1.75 8.1194L0 9.89552L7 17L22 1.77612L20.25 0L7 13.4478Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
