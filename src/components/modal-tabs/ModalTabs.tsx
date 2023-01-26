import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AntTab, AntTabs } from './ModalTabs.styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4, overflow: "auto" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ModalTabs({ content, contentref }: { content: any, contentref: React.RefObject<any> }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AntTabs textColor='secondary' value={value} onChange={handleChange} aria-label="basic tabs example">
          {Object.keys(content).map((l, i) => (
            <AntTab label={l} key={l} id={`simple-tab-${i}`} sx={{ color: 'white' }}/>
          ))}  
        </AntTabs>
      </Box>
      {Object.keys(content).map((k: string, i) => (
        <TabPanel key={k} value={value} index={i}>
          {k === "Query JSON" ? <pre ref={contentref} accessKey={content[k]}>{content[k]}</pre> : <Typography variant='body1' ref={contentref} accessKey={content[k]}>{content[k]}</Typography>}
        </TabPanel>
      ))}
    </Box>
  );
}
