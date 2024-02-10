import { Box, Card, CardContent, Typography } from '@mui/material'
import { ProvidersProps } from '../interfaces'

export default function TaskCard({children}: ProvidersProps) {
  return (
    <Box>
      <Card variant='outlined' sx={{width: '275px', height: '75px', overflow: 'auto'}}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
