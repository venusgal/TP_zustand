import { create } from "zustand";
import { ITarea } from "../types/ITarea";

interface ItareaStore{
    tareas: ITarea[]
    tareaActiva:ITarea|null
    setTareaActiva: (tareaActiva: ITarea|null)=>void
    setArrayTarea: (arrayDeTareas: ITarea[])=>void
    agregarNuevaTarea: (nuevaTarea: ITarea)=>void
    editarUnaTarea: (tareaActualizada: ITarea)=>void
    eliminarUnaTarea: (idtarea: string)=>void
}
export const tareaStore=create<ItareaStore>((set)=>({
    tareas: [],
    tareaActiva:null,

    //funciones modificadoras para el array

    //agregar array de tareas
    setArrayTarea:(arrayDeTareas)=> set(()=>({tareas:arrayDeTareas})),
    //agregar una tarea al array
    agregarNuevaTarea: (nuevaTarea)=> set((state)=>({tareas:[...state.tareas, nuevaTarea]})),
    //editar una tarea del array 
    editarUnaTarea: (tareaEditada)=> set((state)=>{
        const arregloTareas= state.tareas.map((tarea)=>tarea.id === tareaEditada.id ? {...tarea, ...tareaEditada}: tarea)
        return {tareas: arregloTareas};
    }),
    //eliminar una tarea del array
    eliminarUnaTarea: (idTarea)=> set((state)=>{
        const arregloTareas= state.tareas.filter((tarea)=>tarea.id !== idTarea)
        return {tareas: arregloTareas};
    }),
    //setear la tarea activa
    setTareaActiva:(tareaActivaIn)=> set(()=>({tareaActiva:tareaActivaIn}))
}))