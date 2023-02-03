import { useState } from "react";
import { Task } from "../../App";

const TaskItem = (
    {task, handleTaskDone, TaskIndex} : {task: Task, handleTaskDone: (index: number, done: boolean) => void, TaskIndex: number}
) => {
    const [done, setDone] = useState(task.done);
    return (
        <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
            <div className={`flex gap-2 items-center ${task.done? 'line-through': ''}`} >
                <input type="checkbox" checked={task.done} onChange={() => handleTaskDone(TaskIndex, !task.done)}/>
                {task.name}
            </div>
            <button className="bg-green-200 hover:bg-green-300 rounded-lg py-1 px-3">Delete</button>
        </div>
    );
}

export default TaskItem;