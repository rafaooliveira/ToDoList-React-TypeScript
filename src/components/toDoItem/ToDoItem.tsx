import React from "react"
import {ToDoItems, Atividades, CheckboxContainer} from "../Styles/styles.js"
interface ToDoItemProps {
  id: number;
  text: string;
  completed: boolean | boolean[];
  handleChange: (id: number) => void
}

const ToDoItem: React.FC  <ToDoItemProps> = (props) => {
  return(
    <ToDoItems>
      {
        <CheckboxContainer 
          onChange={() => props.handleChange(props.id)}
          type="checkbox"
          checked={props.completed}
        />
      }
      <Atividades completed={props.completed}>{props.text}</Atividades >
    </ToDoItems>
  )
}
export default ToDoItem
