import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { TaskContextData, ProvidersProps } from "../interfaces";
import { api } from "../services";

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export const useTask = (): TaskContextData => {
  const context = useContext(TaskContext)

  if (!context) throw new Error('useTask must be used within an AppProvider')

  return context
}

export const TaskProvider = ({ children }: ProvidersProps) => {
  const [tasks, setTasks] = useState([])

  const readAllTasks = useCallback(async () => {
    await api
      .get('/')
      .then(res => setTasks(res.data))
      .catch(err => err)
  }, [tasks])

  useEffect(() => {
    readAllTasks()
  }, [])

  return (
    <TaskContext.Provider value={{tasks}}>
      {children}
    </TaskContext.Provider>
  )
}