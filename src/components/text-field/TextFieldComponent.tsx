import { PlaceHolderPaper } from '../common/common.styled';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react'

export function TextFieldComponent({ content, readmore, height }: { content: string, readmore: boolean, height: string }) {
    const { palette: { secondary } } = useTheme()
    const [readMore, setReadMore] = useState<boolean>(false)

    return (
        <PlaceHolderPaper sx={{
                color: "white",
                backgroundColor: secondary.dark,
                height: readMore ? 'auto' : height,
                width: "100%",
                m: "10px 0 0 0",
                display: 'flex',
                justifyContent: 'space-between',
                overflow: "hidden",
                textOverflow: "ellipsis",
                overflowWrap: "break-word",
            }}
        >
            <Grid container>
                <Grid item sx={{ width: { lg: '91%', xs: '80%' } }}>
                    <Typography variant='subtitle2' p="5px">{content}</Typography>
                </Grid>
                <Grid item sx={{ width: { lg: '9%', xs: '20%' } }}>
                    {readmore && <Button variant='text' size='small' sx={{ color: 'white' }} onClick={() => setReadMore(prev => !prev)}>{readMore ? 'Show less' : 'Read More'}</Button>}
                </Grid>
            </Grid>
        </PlaceHolderPaper>
    )
}