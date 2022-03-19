import { FormControl} from '@chakra-ui/react'
import { Task } from 'components/Task/Task'

interface Task {
  description: string,
  completed: boolean,
}

interface TaskListProps {
  tasks: Task[],
}

export const TaskList: React.FC<TaskListProps> = ({tasks}) => {
  return <FormControl>
    {tasks.map((el, index) => <Task key={index} description={el.description} completed={el.completed}></Task>)}
  </FormControl>
}
