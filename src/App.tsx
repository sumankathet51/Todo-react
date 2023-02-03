import { FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg';
import Container from './components/container/Container';
import InputContainer from './components/input/InputContainer';
import Summary from './components/summary/Summary';
import Tasks from './components/tasks/Tasks';

import './css/style.css';

export interface Task {
  name: string;
  done: boolean;
}

const initalTasks = [
  {
    name: 'Task 1',
    done: false,
  },
  {
    name: 'Task 2',
    done: true,
  },
]

function App() {
  const [tasks, setTask] = useState<Task[]>(initalTasks)

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault()
    setTask([...tasks, { name: value, done: false }])
  }

  const handleTaskDone = (index: number, done: boolean) => {
    console.log(index, done)
    setTask((tasks) =>
      tasks.map((task, i) => 
      {
          if (i === index) {
            task.done = done
          }
          return task
        }
    ))
  }

  return (
    <div className="flex justify-center m-5">
      <div className='flex flex-col items-center'>
        <div className='sm:w-[640px] border shadow p-10 flex flex-col gap-10'>

          <Container title={'Summary'}>
            <Summary tasks={tasks} />
          </Container>

          <Container>
            <InputContainer handleSubmit={handleSubmit} />
          </Container>

          <Container title={'Tasks'}>
            <Tasks tasks={tasks} handleTaskDone={handleTaskDone} />
          </Container>

        </div>
      </div>
    </div>
  )
}

export default App
