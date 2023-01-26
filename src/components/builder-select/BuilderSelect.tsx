import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ACTION_TYPES, IBuilderOptions, ISelectedOptions } from '../../types';
import { useTheme } from '@mui/material/styles';
import { useSelectedOptions } from '../../context/SelectedOptions';

export default function BuilderSelectComponent({ options: { label, placeholder, options, name }, rowIndex }: { options: IBuilderOptions, rowIndex: number }) {
    const theme = useTheme()
    const { selectedOptions, dispatch } = useSelectedOptions()

    return (
        <FormControl fullWidth sx={{ backgroundColor: theme.palette.primary.light, m: 1, borderRadius: '5px' }} size="small">
            <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={name}
                value={selectedOptions[rowIndex][name]}
                placeholder={placeholder}
                label="Age"
                onChange={({ target: { name, value } }) => dispatch({ type: 'edit_filter_option', payload: { name, value, rowIndex } })}
                sx={{ 
                    color: 'white',
                    '& .MuiPaper-root': {
                        backgroundColor: "black"
                    }
                }}
            >   
                {
                    options?.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}