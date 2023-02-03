import SummaryItem from "./SummaryItem"
import { Task } from "../../App";

const Summary = (
    {tasks}:{tasks: Task[]}
) => {

    const total = tasks.length;
    const pending = tasks.filter((task) => task.done === false).length
    const done = tasks.filter((task) => task.done === true).length

    return (
        <div className="flex justify-between">
            <SummaryItem itemName={"Total"} itemValue={total}></SummaryItem>
            <SummaryItem itemName={"To do"} itemValue={pending}></SummaryItem>
            <SummaryItem itemName={"Done"} itemValue={done}></SummaryItem>
        </div>
    )
}

export default Summary;