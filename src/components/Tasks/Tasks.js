import { useState, useRef } from "react";
import classes from "./Tasks.module.css";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import person from "../../assets/person1influx.png";
function Tasks() {
  // list of tasks
  const [selectedItem, setSelectedItem] = useState(null);
  const [taskList, setTaskList] = useState([
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,
      display: "flex",
      id: "taskone",
    },
    {
      taskName: "Task with dropdown menu",
      description: "By Johnny",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,
      display: "flex",
      id: "tasktwo",
    },
    {
      taskName: "Badge on the right task",
      description: "This task has show on task hover actions",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,
      display: "flex",
      id: "taskthree",
    },
    {
      taskName: "Go grocery shopping",
      description: "A short description for this todo item",
      status: null,
      sideBorderColor: "blue",
      pic: person,
      display: "flex",
      id: "taskfour",
    },
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,
      display: "flex",
      id: "taskfive",
    },
    {
      taskName: "Service the car",
      description: "Written by Bob",
      status: "Planned",
      sideBorderColor: "orange",
      pic: null,
      display: "flex",
      id: "tasksix",
    },
  ]);

  //   use ref to get the index of dragging task
  const dragItem = useRef();

  //   use ref to get the index of over which the task is dragged
  const dragOverItem = useRef();
  // const removeItem=(e)=>{
  const handleStart = () => {
    let newTasks = [...taskList];

    newTasks[dragItem.current].display = "none";
    setTaskList(newTasks);
  };
  const handleover = () => {
    // let newTasks = [...taskList];
    // // remove and save the drag task content;
    // let draggedTaskContent = newTasks.splice(dragItem.current, 1)[0];
    // //   to switch the position
    // draggedTaskContent.display = "flex";
    // newTasks.splice(dragOverItem.current, 0, draggedTaskContent);
    // dragItem.current = null;
    // dragOverItem.current = null;
    // // update the actual tasks
    // setTaskList(newTasks);
  };
  // }
  //   on drag Over this function reorders the task list and update the state
  const sortTheTasks = (e) => {
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

  //  on clicking save button this function is used to console log the tasks
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
        <DragDropContext>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                className={classes.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskList.map((tsk, index) => (
                  <Draggable key={tsk.id} draggableId={tsk.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{ display: tsk.display }}
                        className={classes.singleTask}
                      >
                        <div
                          className={classes.task}
                          style={{
                            borderLeft: `3px solid ${tsk.sideBorderColor}`,
                          }}
                        >
                          <div className={classes.box}></div>
                          {tsk.pic ? (
                            <img
                              className={classes.taskPic}
                              src={tsk.pic}
                              alt="image"
                            ></img>
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
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
