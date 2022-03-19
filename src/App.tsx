import { TaskList } from 'components/TaskList/TaskList';
import { CreateTask } from 'components/CreateTask/CreateTask';
import { Progress } from '@chakra-ui/react';
import seedTasks from "./utils/seed.json"
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<any>>([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  const handleClick = () => {
    console.log('Create Task Click!');
  }

  return (
    <div>
      {tasks.length === 0 ? <Progress size='md' isIndeterminate /> : <TaskList tasks={tasks}/>}
      <CreateTask onClick={handleClick}/>
    </div>
  );
}

export default App;
