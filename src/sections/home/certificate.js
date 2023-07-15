import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledBlackBtn } from './homeStyled'

const Certificate = () => {
  return (
    <React.Fragment>
      <Box py={15} >
        <Container>
            <Stack textAlign="center" direction="column" spacing={2} px={26}>
                <Box>
                    <Typography variant='h6'>
                        We Take privacy seriously
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h3'>
                       Before you get started
                    </Typography>
                </Box>
                <Box color="grey">
                    <Typography variant='h5'>
                        {'"'}We Won{"'"}t share your answers with anyone (and won{"'"}t ever tell you which friends said what about you){'"'}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6'>
                        with love,
                    </Typography>
                </Box>
                <Box>
                    <StyledBlackBtn >Start a Test</StyledBlackBtn>
                </Box>
                <Box><Typography fontWeight={600} color="grey" fontSize="14px">Take only 5 minutes</Typography></Box>
            </Stack>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Certificate
