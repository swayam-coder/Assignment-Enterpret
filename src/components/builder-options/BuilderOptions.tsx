import React from 'react'
import { BuilderOptions } from './BuilderOptions.styled'
import { ACTION_TYPES, ISelectedOptions } from '../../types'
import { builderOptions } from '../../utils/data'
import BuilderSelectComponent from '../builder-select/BuilderSelect'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useSelectedOptions } from '../../context/SelectedOptions'

export default function BuilderOptionsComponent() {
    const { selectedOptions, dispatch } = useSelectedOptions()

    return (
    <React.Fragment>
        {
            selectedOptions.map((val: any, rowIndex: number) => (
                <BuilderOptions key={val.field}>
                    {
                        builderOptions.map(options => (
                            <BuilderSelectComponent 
                                key={options.label}
                                rowIndex={rowIndex} 
                                options={options} 
                            />
                        ))
                    }
                    <Button onClick={() => dispatch({ type: 'delete_filter', payload: { rowIndex } })}>{rowIndex != 0 && <DeleteIcon sx={{ color: 'white' }} />}</Button>
                </BuilderOptions>
            ))
        }
    </React.Fragment>
  )
}
