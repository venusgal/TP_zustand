import { FC } from "react"
import { ITarea } from "../../../types/ITarea"
import styles from "./CardList.module.css"
import { useTareas } from "../../../hooks/useTarea"


type ICardList ={
    tarea:ITarea
    handleOpenModalEdit: (tarea: ITarea)=> void
}

export const CardList:FC<ICardList>=({tarea, handleOpenModalEdit}) =>{
    const {eliminarTarea}= useTareas()
    const EliminarTareaById=()=>{
        eliminarTarea(tarea.id!)
    }
    const EditarTarea=()=>{
        handleOpenModalEdit(tarea)
    }
    return(
        <div className={styles.containerCard}>
            <div>
                <h3>Titulo: {tarea.titulo}</h3>
                <p>Descripción: {tarea.descripcion}</p>
                <p>
                    <b>Fecha Limite: {tarea.fechaLimite}</b>
                </p>
            </div>
            <div className={styles.actionCard}>
                <button onClick={EliminarTareaById}>Eliminar</button>
                <button onClick={EditarTarea}>Editar</button>
            </div>
        </div>
    )
}