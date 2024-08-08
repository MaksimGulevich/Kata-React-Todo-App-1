import React from 'react';
import { createRoot } from 'react-dom/client';

import NewTaskForm from './NewTaskForm/NewTaskForm.js'
import TaskList from './TaskList/TaskList.js';
import Footer from './Footer/Footer.js'
import Task from './Task/Task.js';
import './index.css'
import './default.css'


const App = () => {
  return (
    <section className='todoapp'>
      <NewTaskForm />
      <section className="main">
        <TaskList>
          <Task task='Completed task' clasName='completed' created='created 17 seconds ago' />
          <Task task='Editing task' clasName='editing' />
          <Task task='Active task' clasName='' created='created 5 minutes ago' />
        </TaskList>
        <Footer />
      </section>
    </section>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);