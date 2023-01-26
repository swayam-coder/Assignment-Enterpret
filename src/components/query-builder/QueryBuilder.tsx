import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AddFilterButton, CopyButton, ModalHeader, QueryBuilderModal } from './QueryBuilder.styled';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IConnectorsString, IRuleGroup } from '../../types';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast';
import { connectors, defaultOptions } from '../../utils/data';
import { QueryFormatterUtil } from '../../utils/formatter';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import React from 'react'
import { TextFieldComponent } from '../text-field/TextFieldComponent';
import ChildModal from '../child-modal/ChildModal';
import ModalTabs from '../modal-tabs/ModalTabs';
import BuilderOptionsComponent from '../builder-options/BuilderOptions';
import { useSelectedOptions } from '../../context/SelectedOptions';
import { CloseModal } from '../common/common.styled';
import { checkEmptyOptions } from '../../utils/helpers';

export default function QueryBuilder({ open, setOpen }: any) {
    const { selectedOptions, dispatch } = useSelectedOptions()
    
    const [outputString, setOutputString] = useState<string>('')
    const [outputObject, setOutputObject] = useState<IRuleGroup>()
    const [conjuction, setConjuction] = useState<IConnectorsString>('AND')

    const contentref = React.useRef<HTMLPreElement>(null)
    
    const { palette: { primary, secondary, grey } } = useTheme()

    useEffect(() => {
        let lastSelectedOptions = selectedOptions[selectedOptions.length - 1]

        if(lastSelectedOptions.condition || lastSelectedOptions.criteria || lastSelectedOptions.field) {
            const formatter = new QueryFormatterUtil(selectedOptions, conjuction)
            const { outputQueryObject, outputQueryString } = formatter.generateOutputQueryResults()
            setOutputString(outputQueryString)
            setOutputObject(outputQueryObject)
        }

        console.log(outputString, outputObject)  // Query results are logged and also shown in the nested child modal when use clicks on "Finish" button
    }, [selectedOptions, conjuction])

    function handleAddFilter () {
        const lastFilterOptions = selectedOptions[selectedOptions.length - 1]

        if(lastFilterOptions.condition && lastFilterOptions.field && lastFilterOptions.criteria) {
            dispatch({ type: 'add_filter' })
        } else {
            toast.error('Complete the previous/current filter first')
        }
    }

    function handleQueryBuilderClose ()  {
        setOpen(false);
        dispatch({ type: 'assign', payload: [defaultOptions] })
        setOutputString('')
        setOutputObject(undefined)
    }

    function handleCopyToClipboard() {
        const text = contentref.current ? contentref.current.accessKey : ''

        navigator.clipboard.writeText(text)
            .then(() => toast.success("Copied To Clipboard"))
            .catch(() => toast.error("Couldn't copy anything"))
    }

    return (
        <QueryBuilderModal
            open={open}
            onClose={handleQueryBuilderClose}
        >  
            <React.Fragment>
                <Grid container>
                    <ModalHeader item xs={12} p="20px">
                        <Typography variant='body1'>{outputString ? 'Build your Query' : 'Create tag and query'}</Typography> 
                        <Typography variant='subtitle2' color={secondary.light}>{
                            outputString ? <TextFieldComponent height="30px" content={`Query: ${outputString}`} readmore={true} /> :"The query you build will be saved in your active view"
                        }</Typography> 
                    </ModalHeader>
                    <Grid item xs={12} sx={{ backgroundColor: primary.dark, marginTop: { md: 0, xs: '100px' } }}>
                        <Box sx={{ padding: { md: "100px", xs: '10px' } }}>
                            <Box sx={{ backgroundColor: grey['500'], padding: { md: "50px", xs: '10px' } }}>
                                <ToggleSwitch style={{ margin: "8px" }} alignment={conjuction} setAlignment={setConjuction} values={connectors} />
                                <BuilderOptionsComponent />
                                <AddFilterButton sx={{ margin: "8px 0 0 8px", textTransform: 'none' }}> 
                                    <AddIcon fontSize='small' /> 
                                    <Typography variant='subtitle1' onClick={handleAddFilter}>Add Filter</Typography>
                                </AddFilterButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', p: { md: '30px', xs: '10px' } }}>
                        <Button sx={{ backgroundColor: grey['400'], color: 'white' }} onClick={handleQueryBuilderClose}>Back</Button>
                        <ChildModal btncolor={secondary.main} btndisabled={!checkEmptyOptions(selectedOptions[selectedOptions.length - 1])} buttonText="Finish">
                            <ModalHeader xs={12} p="20px">
                                <Typography variant='body1'>Access you Query Output</Typography>
                            </ModalHeader>
                            <ModalTabs 
                                content={{
                                    'Query JSON': JSON.stringify(outputObject, null, 2),
                                    'Query String': outputString
                                }} 
                                contentref={contentref}
                            />
                            <CopyButton size='small' sx={{ cursor: 'pointer' }} onClick={handleCopyToClipboard}>Copy</CopyButton>
                        </ChildModal>
                    </Grid>
                    <CloseModal sx={{ cursor: 'pointer' }} titleAccess='Close Query Builder' onClick={handleQueryBuilderClose} />
                </Grid>
            </React.Fragment>
        </QueryBuilderModal>
    ) 
}