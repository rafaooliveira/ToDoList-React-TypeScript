import React, { useEffect, useState } from "react"
import TodoItem from "./toDoItem/ToDoItem"
import {todosData} from "./toDoItem/todosData"
import QtdItemFaltantes from "./toDoItem/QtdItemFaltantes"
import {ToDoList, Titulo, Items, Container, TituloCard} from "./Styles/styles.js"
// interface de exemplo
interface AppProps {
  id: string;
}

const App: React.FC<AppProps> = (props) => {
  const [state, setState] = useState({todos: todosData})
  // console.log('state 2', state.todos.slice(-1)[0])
  
  const handleChange = ((id: number) => {
    setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  })
  const todoItems = state.todos.map(item => 
    <TodoItem 
      key={(item.id)}
     {...item}
     handleChange={handleChange}
    />
  )
  const titulo = <Titulo>To Do List do Rafão</Titulo>
  const qtdFaltantes = state.todos.map(item =>
    item.completed === false
  )
  
  return (
    <Container>
      {titulo}
      <hr/>
      <Items>
        <ToDoList>
          <TituloCard>Tarefas:</TituloCard>
          {todoItems}
        </ToDoList>
          <QtdItemFaltantes qtdTotal={qtdFaltantes}/>
      </Items>
    </Container>
  ) 
}

export default App

