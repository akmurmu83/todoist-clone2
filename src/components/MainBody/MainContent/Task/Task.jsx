import Styles from './Task.module.css'

export default function Task({id, name, desc, date, priority}) {
  return (
    <>
      <div key={id} className={Styles.taskDiv}>
        <div className={Styles.leftTaskSec}>
          <div>
            <i className="fa-solid fa-ellipsis-vertical bgcOnHover"></i>
            <i className="fa-regular fa-circle"></i>
          </div>
          <div>
            <p className={Styles.taskName}>{name}</p>
            <span>{desc}</span>
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
