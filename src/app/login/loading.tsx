"use client";
import React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className='h-screen flex items-center justify-center'>

    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default Loading