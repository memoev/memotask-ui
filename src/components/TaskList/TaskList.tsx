import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

interface Task {
  description: string,
  completed: boolean,
}

interface TaskListProps {
  tasks: Array<Task>,
}

const TaskList = ({ tasks }: TaskListProps): JSX.Element => {
  return <FormControl>
    {tasks.map((el, index) => {
      return (
        <div key={index} style={{display:'flex'}}>
          <FormLabel htmlFor={`${el.description}`}>{el.description}</FormLabel>
          <Switch id={`${el.description}`} />
        </div>
      )
    })}
  </FormControl>
}

export default TaskList;