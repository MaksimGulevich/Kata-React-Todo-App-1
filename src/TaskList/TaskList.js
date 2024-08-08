import React from "react";

import Task from '../Task/Task.js'
import './TaskList.css'

const TaskList = ({ children }) => {
    return (
        <ul className="todo-list">
            {children}
        </ul>
    )
}

export default TaskList;