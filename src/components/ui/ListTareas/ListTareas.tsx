import { useEffect, useState } from "react"
import { tareaStore } from "../../../store/TareaStore"
import styles from "./ListTareas.module.css"
import { CardList } from "../CardList/CardList"
import { Modal } from "../Modal/Modal"
import { ITarea } from "../../../types/ITarea"
import { useTareas } from "../../../hooks/useTarea"

export const ListTareas=()=>{
    const setTareaActiva=tareaStore((state)=>state.setTareaActiva)
    const{getTareas, tareas}=useTareas();
    
    useEffect(()=>{
        getTareas();
    },[])
    const [openModalTarea, setOpenModalTarea]=useState(false)
    const handleOpenModalEdit= (tarea: ITarea)=>{
        setTareaActiva(tarea)
        setOpenModalTarea(true)
    }
    const handleCloseModal=()=>{
        setOpenModalTarea(false)
    }

    return(
        <>
        <div className={styles.containerPrincipalListTareas}>
            <div className={styles.containerTitleAndButton}>
                <h2>Lista de tareas</h2>
                <button onClick={()=>{setOpenModalTarea(true)}}>Agregar Tareas</button>
            </div>
            <div className={styles.containerList}>
                {tareas.length>0 ?(
                tareas.map((el)=>
                    <CardList 
                handleOpenModalEdit={handleOpenModalEdit}
                 tarea={el}/>
                )) : (
                    <div>
                        <h3>No hay tareas</h3>
                    </div>
                )}
            </div>
            {openModalTarea && <Modal handleCloseModal={handleCloseModal} />}
        </div>
        </>
    )
}