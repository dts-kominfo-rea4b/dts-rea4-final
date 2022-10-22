import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity='error'>
        <AlertTitle>Failed to fetching data</AlertTitle>
        Something went wrong — <strong>Please try to reload this page</strong>
      </Alert>
    </Stack>
  );
}
