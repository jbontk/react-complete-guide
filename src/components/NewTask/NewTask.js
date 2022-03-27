import { TASKS_API } from '../../constants';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const taskObj = { text: null };

  const transformResponseFn = (newTaskObj) => {
    const generatedId = newTaskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskObj.text };

    props.onAddTask(createdTask);
  };

  const requestConfig = {
    url: TASKS_API,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: taskObj,
  };

  const { isLoading, error, sendRequest } = useHttp(
    requestConfig,
    transformResponseFn
  );

  const enterTaskHandler = (taskText) => {
    taskObj.text = taskText;
    sendRequest();
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
