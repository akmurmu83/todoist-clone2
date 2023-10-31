import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Task";
import Styles from "./MainContent.module.css";

export default function MainContent({ isSidebarExpanded }) {
  const [isAddTaskDivVisible, setIsAddTaskDivVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  // console.log(todos)

  function toggleAddTaskDiv() {
    setIsAddTaskDivVisible(!isAddTaskDivVisible);
  }

  let date = new Date();
  let currDate = date.getDate();
  let currDay = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = daysOfWeek[currDay];
  let currMonth = date.getMonth();
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthsOfYear[currMonth];

  function handleSubmit(e) {
    e.preventDefault();
    let id = uuidv4();
    console.log(e.target.taskName.value);
    let name = e.target.taskName.value;
    let desc = e.target.taskDesc.value;
    let date = e.target.taskDate.value;
    let priority = e.target.taskPriority.value;
    // setTodos([...todos, {id, name}]);
    setTodos([...todos, { id, name, desc, date, priority }]);
    console.log(todos);
    e.target.reset();
    toggleAddTaskDiv();
  }

  return (
    <>
      <div
        className={`${Styles.mainBody} ${
          isSidebarExpanded ? Styles.fadedMainBody : ""
        }`}
      >
        <div className={Styles.taskHeading}>
          <div>
            <h4>Your Todos</h4>
            <p className="date">{`${dayName.substring(
              0,
              3
            )}, ${currDate} ${monthName.substring(0, 3)}`}</p>
          </div>
          <div className={Styles.bgcOnHover}>
            <i className="fa-solid fa-filter"></i>
            <p>View</p>
          </div>
        </div>

        <div className={Styles.tasksDiv}>
          {todos.map((todo) => (
            <Task
              key={todo.id}
              name={todo.name}
              desc={todo.desc}
              date={todo.date}
              priority={todo.priority}
            />
          ))}
        </div>

        <div
          onClick={toggleAddTaskDiv}
          className={`${Styles.addTask} ${
            isAddTaskDivVisible ? Styles.vanishAddTask : ""
          }`}
        >
          <p>
            <i className="fa-regular fa-plus"></i>Add task
          </p>
        </div>

        <div
          className={`${Styles.addTaskDiv} ${
            isAddTaskDivVisible ? Styles.visibleAddTaskDiv : ""
          }`}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="taskName"
              className={Styles.taskName}
              placeholder="Task name"
            />
            <input
              type="text"
              name="taskDesc"
              className={Styles.taskDesc}
              placeholder="Task Description"
            />
            <div className={Styles.dateAndPriority}>
              <input type="date" name="taskDate" className={Styles.taskDate}  value='Set Date'/>
              <select name="taskPriority" className={Styles.taskPriority}>
                <option value="priority">Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <hr />

            <div className={Styles.taskFooter}>
              <button
                className={`${Styles.formBtns} ${Styles.cancleBtn}`}
                type="button"
                onClick={toggleAddTaskDiv}
              >
                Cancel
              </button>
              <input
                type="submit"
                className={`${Styles.formBtns} ${Styles.submitBtn}`}
                onClick={toggleAddTaskDiv}
                value="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
