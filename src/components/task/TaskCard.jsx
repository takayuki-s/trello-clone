import React, { useState } from 'react'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export const TaskCard = () => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState([])
  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput 
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}
