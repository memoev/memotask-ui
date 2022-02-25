import TaskList from "./TaskList";
import tasks from "../../utils/seed.json"

const TaskListContainer = (): JSX.Element => {
  return <TaskList tasks={tasks}></TaskList>
}

export default TaskListContainer