import { ProvidersProps } from "../interfaces";
import { TaskProvider } from "./tasks.context";

export const AppProvider = ({ children }: ProvidersProps) => {
  return <TaskProvider>{children}</TaskProvider>
}