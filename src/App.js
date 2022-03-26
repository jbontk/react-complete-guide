import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useTask from './hooks/use-task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, request] = useTask();

  const fetchTasks = async () => {
    const responseDataInternal = await request();

    if (responseDataInternal) {
      setTasks(
        Object.keys(responseDataInternal).map((k) => ({
          id: k,
          text: responseDataInternal[k].text,
        }))
      );
    } else {
      console.warn('Warning: falsey data in response');
    }
  };

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
