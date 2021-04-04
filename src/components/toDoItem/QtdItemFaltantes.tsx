import React from "react"
import {Card, QtdFaltantes, Finalizado, TituloCard} from "../Styles/styles.js"
interface QtdItemFaltantesProps {
  qtdTotal: boolean[];
}
const QtdItemFaltantes: React.FC <QtdItemFaltantesProps> = (props) => {
  let faltantes = props.qtdTotal.filter(el => {
    return el
  })
  console.log('faltantes', faltantes.length)
  if (!faltantes.length) {
    return(
      <Card>
        <TituloCard>Done:</TituloCard>
        <hr></hr>
        <Finalizado>Cabou fiote tá free</Finalizado>
      </Card>
    )
  } else {
    return(
      <Card>
        <TituloCard>Quantidade Restantes:</TituloCard>
        <hr></hr>
        <QtdFaltantes>
          {faltantes.length}
        </QtdFaltantes>
      </Card>
    )
  }
  
}

export default QtdItemFaltantes
// style={props.item.completed ? completedStyle: null}