import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
`

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  color: #fff;
`
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const ToDo = styled.div`
  background-color: pink;
`

export const ToDoList = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  margin: 50px;
`;

let completo = {
  fontStyle: "italic",
  textDecoration: "line-through",
  color: "#90EE90"
}

export const Atividades = styled.div`
  font-size: 25px;
  color: ${props => props.completed ? completo : 'black'};
`

export const CheckboxContainer = styled.input`
  background-color: ${props => props.completed ? '#97C160' : '#E5E5E5'};
  margin-right: 20px;
`
export const QtdFaltantes = styled.p`
  display: flex;
  justify-content: center;
  font-size: 50px;
`

export const Finalizado = styled.p`
  font-size: 30px;
  display: flex;
  justify-content: center;
`

export const ToDoItems = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid #cecece;
  font-family: Roboto, sans-serif;
  font-weight: 50;
  font-size: 10px;
  color: #333333;
  margin: 25px;
`;
export const TituloCard = styled.h2`
  text-align: center;
 
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 4 4px 4px 0 rgba(0,0,0,0.2);
  margin-top: 50px;
  padding: 50px;
  width: 10%;
  height: 20%;
  &:hover {
    box-shadow: inset 0 0 1em gold, 0 0 1em red;
  }

`

