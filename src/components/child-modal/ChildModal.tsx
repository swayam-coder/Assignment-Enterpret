import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ChildQueryBuilderModal } from './ChildModal.styled';
import { CloseModal } from '../common/common.styled';
import { toast } from 'react-hot-toast';

export default function ChildModal({ buttonText, btncolor, children, btndisabled }: { buttonText: string, btncolor: string, children: React.ReactNode, btndisabled: boolean }) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
      if(btndisabled) toast.error('Complete the Query first')
      else setOpen(true)
    }

    return (
      <React.Fragment>
        <Button sx={{ backgroundColor: btncolor, color: 'white' }} onClick={handleOpen}>{buttonText}</Button>
        <ChildQueryBuilderModal
            hideBackdrop
            open={open}
            onClose={() => setOpen(false)}
        >
            <React.Fragment>
                <Grid container>
                    {children}
                </Grid>
                <CloseModal sx={{ cursor: 'pointer' }} titleAccess='Close Query Builder' onClick={() => setOpen(false)} />
            </React.Fragment>
        </ChildQueryBuilderModal>
      </React.Fragment>
    );
  }