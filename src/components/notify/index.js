import React from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useNotify } from '../../hooks/useNotify'
/**
 * in this example, I used @mui/material snackbar and alert component.
 * if you want you can delete mui and you can create your own
 * notification style.
 */
const Notify = () => {
  const {
    open,
    color,
    variant,
    message,
    onClose,
    vertical,
    horizontal,
  } = useNotify()

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
    >
      <Alert
        severity={color}
        sx={{ width: '100%' }}
        onClose={onClose}
        variant={variant}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notify
