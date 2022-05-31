import React from 'react';
import { Item } from '../../types';
import  GET_MAIN_TASKS  from '../../graphql/queries/getMainTasks';
import  GET_ALL  from '../../graphql/queries/getAll';
import { useQuery } from '@apollo/client';
import { CssBaseline, Paper, Typography, Container } from '@mui/material';
import AddNewTask from '../AddNewTask/addnewtask.component';
import { List } from '../../types';
import { TaskType } from '../../types';
import { ItemData } from '../../types';
import SubColumn from '../SubColumn/subcol.component';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Columns() {
  
  const { data } = useQuery(GET_ALL);
  return data ? (
      <div>
          <Container style={{border: '4px solid rgba(0, 0, 0, 0.9)'}} component="main" maxWidth="lg">
                <p>columns</p>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                {data.a.map(({ id, name, itemDatas }: TaskType) => (
                    // <p>{id} {name}</p>
                    <Grid item xs>
                    <SubColumn itemDatas={itemDatas} title={name} key={id}></SubColumn>
                    </Grid>
                ))}
                </Grid>
            </Box>
            </Container>
      </div>
    
  ) : null;
}

export default Columns;
