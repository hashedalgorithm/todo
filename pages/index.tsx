import Link from "next/link";
import React, { Dispatch, Fragment, MouseEventHandler, useState } from "react";
import AddTask from "../components/AddTaskButton";
import { AddTaskOverlay } from "../components/AddTaskOverlay";
import CompletedCard from "../components/CompletedCard";
import InProgressCard from "../components/InProgessCard";
import NavbarItem from "../components/NavbarItem";
import TodoHead from "../components/TodoHead";
import { NavbarItemType, Tasks } from "../interfaces";
import styls from "../styles/home.module.css";
import { Navbarbaritems } from "../utils/sample-data";

const IndexPage = () => {
  const [task, setTask] = useState<Tasks[]>([]);
  const [inProgressTasks, setInProgressTask] = useState<Tasks[]>([]);
  const [inCompletedTasks, setCompletedTask] = useState<Tasks[]>([]);
  var idNum: number = 1;
  const [overlayopen, setOverlayOpen] = useState(false);

  const handleaddtask = () => {
    setOverlayOpen(!overlayopen);
  };
  const addTasktoList = (fielData: Array<string>): MouseEventHandler => {
    const tempobj: Tasks = {
      id: `${fielData[0]}`,
      tasktitle: fielData[0],
      time: fielData[2],
      date: fielData[1],
    };
    setTask([...task, tempobj]);
    setTimeout(() => {
      setOverlayOpen(!overlayopen);
    }, 0);
    idNum += 1;
    return;
  };

  const moveToCompleted = (id: string): MouseEventHandler => {
    const index = task.findIndex((obj) => obj.id === id);

    setCompletedTask([...inCompletedTasks, task[index]]);
    handleRemoveTask(task[index].id);
    console.log("moved to completed" + inCompletedTasks);
    return;
  };

  const handleRemoveTask = (id: string): MouseEventHandler => {
    setTask(task.filter((item) => item.id !== id));
    console.log("item removed" + id);
    return;
  };

  return (
    <Fragment>
      <div className={styls.layout}>
        <div className={styls.navbar}>
          {Navbarbaritems.map((item: NavbarItemType) => {
            return (
              <NavbarItem key={item.id} title={item.title} icon={item.icon} />
            );
          })}
        </div>
        <div>
          <TodoHead />

          <div className={styls.mainarea}>
            <div className={styls.overlay}>
              {overlayopen ? (
                <AddTaskOverlay
                  handleaddtask={handleaddtask}
                  addtaskfunc={addTasktoList}
                />
              ) : (
                <></>
              )}
            </div>
            <div className={styls.inprogress}>
              <h2 className={styls.inprogresshead}>In Progress</h2>
              <div className={styls.cardarea}>
                {task.map((item) => {
                  return (
                    <InProgressCard
                      id={item.id}
                      task={item.tasktitle}
                      date={item.date}
                      time={item.time}
                      removeTask={handleRemoveTask}
                      setStatus={moveToCompleted}
                    />
                  );
                })}
              </div>
            </div>
            <hr />
            <div className={styls.completed}>
              <h2 className={styls.inprogresshead}>Completed</h2>
              <div className={styls.cardarea}>
                {inCompletedTasks.map((item) => {
                  return (
                    <CompletedCard
                      task={item.tasktitle}
                      date={item.date}
                      time={item.time}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styls.addtasksection}>
            <AddTask onClick={handleaddtask} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexPage;
