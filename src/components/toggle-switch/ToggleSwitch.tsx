import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';

export default function ToggleSwitch({ alignment, setAlignment, values, style }: { alignment: string, setAlignment: any, values: string[], style: any }) {
  const theme = useTheme()

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color='info'
      value={alignment}
      size='small'
      style={style}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {
        values.map((key) => (
          <ToggleButton key={key} value={key} sx={{ color: "white" }}>{key}</ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  )
}
