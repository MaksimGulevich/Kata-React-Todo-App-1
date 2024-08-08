import React from "react";

import './Task.css'

const Task = ({clasName, task, created}) => {
  
    return (
        <li className={clasName}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{task}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {clasName === 'editing' ? <input type="text" className="edit" defaultValue="Editing task" /> : null}
      </li>
    )
}

export default Task;