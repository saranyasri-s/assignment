import { useState, useRef } from "react";
import classes from "./Tasks.module.css";
import person from "../../assets/person1influx.png";
function Tasks() {
  const [taskList, setTaskList] = useState([
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,
    },
    {
      taskName: "Task with dropdown menu",
      description: "By Johnny",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,
    },
    {
      taskName: "Badge on the right task",
      description: "This task has show on task hover actions",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,
    },
    {
      taskName: "Go grocery shopping",
      description: "A short description for this todo item",
      status: null,
      sideBorderColor: "blue",
      pic: person,
    },
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,
    },
    {
      taskName: "Service the car",
      description: "Written by Bob",
      status: "Planned",
      sideBorderColor: "orange",
      pic: null,
    },
  ]);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const sortTheTasks = (e) => {
    e.preventDefault();
    let newTasks = [...taskList];
    // remove and save the drag task content;
    let draggedTaskContent = newTasks.splice(dragItem.current, 1)[0];
    //   to switch the position
    newTasks.splice(dragOverItem.current, 0, draggedTaskContent);
    dragItem.current = null;
    dragOverItem.current = null;
    // update the actual tasks
    setTaskList(newTasks);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskList);
  };
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.taskListLogo}></div>
        <div>Task List</div>
      </header>
      <main className={classes.main}>
        <div className={classes.list}>
          {taskList.map((tsk, index) => (
            <div
              className={classes.singleTask}
              key={index}
              draggable
              onDragStart={(e) => {
                dragItem.current = index;
              }}
              onDragEnter={(e) => {
                dragOverItem.current = index;
              }}
              onDragEnd={sortTheTasks}
              onDragOver={(e) => e.preventDefault()}
            >
              <div
                className={classes.task}
                style={{ borderLeft: `3px solid ${tsk.sideBorderColor}` }}
              >
                <div className={classes.box}></div>
                {tsk.pic ? (
                  <img className={classes.taskPic} src={tsk.pic}></img>
                ) : null}

                <div className={classes.taskNames}>
                  <p className={classes.taskName}>{tsk.taskName}</p>
                  <p className={classes.taskDes}>{tsk.description}</p>
                </div>
                {tsk.status === "Planned" ? (
                  <div className={classes.planned}>PLANNED</div>
                ) : null}
                {tsk.status === "Rejected" ? (
                  <div className={classes.rejected}>REJECTED</div>
                ) : null}
              </div>
              {tsk.status === "latest task" ? (
                <div className={classes.latestTask}>LATEST TASK</div>
              ) : null}
            </div>
          ))}
        </div>
      </main>
      <div className={classes.buttons}>
        <button className={classes.cancel}>Cancel</button>
        <button className={classes.save} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Tasks;
