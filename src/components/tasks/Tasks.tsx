import { Task } from "../../App";
import TaskItem from "./TaskItem";

const Tasks = (
    {tasks, handleTaskDone} : {tasks: Task[], handleTaskDone: (index: number, done: boolean) => void}
) => {
    return (
        <div className="flex flex-col gap-2">
            {
                tasks.map(
                    (task, index) => (
                    <TaskItem task={task} key={index} handleTaskDone={handleTaskDone} TaskIndex={index} />
                ))
            }
        </div>
    );
}

export default Tasks;