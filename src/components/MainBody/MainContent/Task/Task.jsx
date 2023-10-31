import Styles from "./Task.module.css";

export default function Task({ id, name, desc, date, priority }) {
  let priorityClass, color;

  switch (priority) {
    case "high":
      color = "red";
      break;
    case "medium":
      color = "yellow";
      break;
    case "low":
      color = "blue";
      break;
    default:
      color = "blue";
      break;
  }

  console.log(priority, priorityClass);
  return (
    <>
      <div key={id} className={Styles.taskDiv}>
        <div className={Styles.leftTaskSec}>
          <div>
            <i className="fa-solid fa-ellipsis-vertical bgcOnHover"></i>
            <i className={`fa-regular fa-circle ${Styles.increaseSize}`} style={{color:color}}></i>
          </div>
          <div>
            <p className={Styles.taskName}>{name?name:'no title'}</p>
            <p className={Styles.taskDesc}>{desc?desc:'no description'}</p>
            <span><i className="fa-regular fa-calendar-minus"></i> {date?date:'no date'}</span>
          </div>
        </div>
        <div className={Styles.rightTaskSec}>
          <div>
            <i className={`fa-solid fa-pencil ${Styles.bgcOnHover}`}></i>
            <i
              className={`fa-regular fa-calendar-minus ${Styles.bgcOnHover}`}
            ></i>
            <i className={`fa-regular fa-trash-can ${Styles.bgcOnHover}`}></i>
            <i className={`fa-solid fa-ellipsis ${Styles.bgcOnHover}`}></i>
          </div>
        </div>
      </div>
    </>
  );
}
