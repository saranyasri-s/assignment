import { useState, useRef } from "react";
import classes from "./Tasks.module.css";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import person from "../../assets/person1influx.png";
function Tasks() {
  // list of tasks

  const [taskList, setTaskList] = useState([
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,

      id: "taskone",
    },
    {
      taskName: "Task with dropdown menu",
      description: "By Johnny",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,

      id: "tasktwo",
    },
    {
      taskName: "Badge on the right task",
      description: "This task has show on task hover actions",
      status: "latest task",
      sideBorderColor: "violet",
      pic: null,

      id: "taskthree",
    },
    {
      taskName: "Go grocery shopping",
      description: "A short description for this todo item",
      status: null,
      sideBorderColor: "blue",
      pic: person,

      id: "taskfour",
    },
    {
      taskName: "Wash the car",
      description: "Written by Bob",
      status: "Rejected",
      sideBorderColor: "orange",
      pic: null,

      id: "taskfive",
    },
    {
      taskName: "Service the car",
      description: "Written by Bob",
      status: "Planned",
      sideBorderColor: "orange",
      pic: null,

      id: "tasksix",
    },
  ]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(
      taskList,
      result.source.index,
      result.destination.index
    );

    setTaskList(reorderedItems);
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
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
                          {provided.placeholder}
                          <div className={classes.taskNames}>
                            <p className={classes.taskName}>{tsk.taskName}</p>
                            <p className={classes.taskDes}>{tsk.description}</p>
                          </div>
                          {provided.placeholder}
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
