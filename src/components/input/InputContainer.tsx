import { FormEvent, useState } from "react";

const InputContainer = ({
    handleSubmit
}: {
        handleSubmit: (e: FormEvent<HTMLFormElement>, value:string) => void
    }
    ) => {
    const [newTask, setNewTask] = useState("")
    return (
        <form action="" 
        className="flex flex-col gap-4"
        onSubmit={(e) => {
            handleSubmit(e, newTask)
            setNewTask("")
        }}
        >
            <div className="flex flex-col">
                <label htmlFor="task" className="text-white">Enter Your next task:</label>
                <input type="text" 
                className="p-1 rounded-sm" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />
            </div>

            <button type="button" className="bg-green-100 rounded-lg hover:bg-green-200">Add Task</button>
        </form>
    );
}


export default InputContainer;
