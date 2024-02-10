import { AppBar, Box, Container, Pagination, Stack, Toolbar, Typography } from "@mui/material";
import { useTask } from "../../context/tasks.context";
import TaskCard from "../../components/TaskCard";
import { useState } from "react";

export default function TasksPage() {

  const { tasks } = useTask()
  const [page, setPage] = useState(1);
  const pageSize = 25

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const tasksOnPage = tasks.slice(startIndex, endIndex)

  const handlePagination = (_event: any, newPage: number) => {
    setPage(newPage)
  }

  console.log(tasks)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" component='h2'>
              Meu App de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth='sm' sx={{ marginTop: '5rem', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component='h1' sx={{ textAlign: 'center' }} > Minhas Tarefas DIÁRIAS </Typography>
        <Pagination count={Math.ceil(tasks.length / pageSize)}
          page={page}
          onChange={handlePagination}
          color='primary'
          sx={{ marginTop: '3rem', marginBottom: '3rem' }}
        />
        <Stack direction='row' flexWrap='wrap' sx={{ border: '1px solid black', width: '80vw', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '1rem' }}>
          {tasksOnPage.map((task) => <TaskCard key={task.id}>{task.content}</TaskCard>)}
        </Stack>
      </Container>
    </>
  )
}
