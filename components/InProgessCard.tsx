import React, { MouseEventHandler, useState } from "react";
import classes from "../styles/todocard.module.css";
import Button from "./Button";

interface InProgressCardProps {
  id: string;
  task: string;
  date: string;
  time: string;
  removeTask: (id: string) => MouseEventHandler;
  setStatus: (id: string) => MouseEventHandler;
}

const InProgressCard = ({
  id,
  task,
  date,
  time,
  removeTask,
  setStatus,
}: InProgressCardProps) => {
  // const [idstate, setId] = useState(id);
  return (
    <div className={classes.todocard}>
      <div onClick={() => removeTask(id)} className={classes.closebtn}>
        <i className="fas fa-times"></i>
      </div>
      <h3 className={classes.tasktitle}>{task}</h3>
      <p className={classes.timeanddate}>
        {date},{time}
      </p>
      <div className={classes.btndiv}>
        <Button text="Done" onClick={() => setStatus(id)} />
      </div>
    </div>
  );
};

export default InProgressCard;
