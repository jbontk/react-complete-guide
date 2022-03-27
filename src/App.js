import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
import { TASKS_API } from './constants';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformResponseFn = (tasksObj) =>
    setTasks(
      Object.keys(tasksObj).map((k) => ({
        id: k,
        text: tasksObj[k].text,
      }))
    );

  const { isLoading, error, sendRequest: fetchTasks } = useHttp({ url: TASKS_API }, transformResponseFn);

  useEffect(() => fetchTasks(), []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.StrictMode>
      <React.Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </React.Fragment>
    </React.StrictMode>
  );
}

export default App;
