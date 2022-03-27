import { TASKS_API } from '../../constants';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const addTask = (taskText, newTaskObj) => {
    const generatedId = newTaskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = (taskText) => {
    const requestConfig = {
      url: TASKS_API,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { text: taskText },
    };

    sendRequest(requestConfig, addTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
