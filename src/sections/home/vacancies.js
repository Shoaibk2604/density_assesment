import Iconify from '@/components/iconify'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Vacancies = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
            <Box >
                <Typography  variant='h2'>Open vacancies</Typography>
            </Box>
            <Grid container>
                <Grid item lg={4}>
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography variant='h5'>Senior Full-Stack Engineer</Typography>
                            </Box>
                            <Box>
                            <Iconify icon="radix-icons:dot-filled"  />
                                <Typography>Senior Full-Stack Engineer</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Vacancies
