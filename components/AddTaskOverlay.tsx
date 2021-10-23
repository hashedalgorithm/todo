import React, { MouseEventHandler, useState } from "react";

import classes from "../styles/addtaskoverlay.module.css";
import Button from "./Button";

interface AddTaskOverlayProps {
  handleaddtask: MouseEventHandler;
  addtaskfunc: ([]: Array<string>) => MouseEventHandler;
}
export const AddTaskOverlay = ({
  handleaddtask,
  addtaskfunc,
}: AddTaskOverlayProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const onTaskChange = (task: string) => {
    setTaskTitle(task);
  };
  const onTimeChange = (time: string) => {
    setTaskTime(time);
  };
  const onDateChange = (date: string) => {
    setTaskDate(date);
  };
  return (
    <div className={classes.addtask}>
      <h1>Add New Task</h1>

      <input
        className={classes.input}
        name="tasktitle"
        type="text"
        id="tasktitle"
        placeholder="Task"
        onChange={(e) => onTaskChange(e.target.value)}
        value={taskTitle}
      />
      <div className={classes.secondline}>
        <input
          className={classes.input}
          name="taskdate"
          type="date"
          id="taskdate"
          onChange={(e) => onDateChange(e.target.value)}
          value={taskDate}
        />
        <input
          className={classes.input}
          name="tasktime"
          type="time"
          id="tasktime"
          onChange={(e) => onTimeChange(e.target.value)}
          value={taskTime}
        />
      </div>
      <div className={classes.thirdline}>
        <Button
          text="Create"
          onClick={() => {
            addtaskfunc([taskTitle, taskDate, taskTime]);
          }}
        />
        <Button text="Cancel" onClick={handleaddtask} />
      </div>
    </div>
  );
};

export default AddTaskOverlay;
