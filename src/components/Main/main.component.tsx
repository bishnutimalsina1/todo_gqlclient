import React from 'react';
// import { makeStyles } from '@mui/styles';
import { CssBaseline, Paper, Typography, Container } from '@mui/material';
import AppBar from '../AppBar/appbars.component';
import AddNewTask from '../AddNewTask/addnewtask.component';
import TaskList from '../TasksList/tasklist.component';
import { getItems, reorder } from '../../helpers';
import { DropResult } from 'react-beautiful-dnd';
import { useQuery } from '@apollo/client';
import  GET_MAIN_TASKS  from '../../graphql/queries/getMainTasks';
import  GET_ALL  from '../../graphql/queries/getAll';
import Columns from '../Columns/column.component';
import { List } from '../../types';
import { TaskType } from '../../types';

// const useStyles = makeStyles(({ palette, spacing, typography }) => ({
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: '100vh',
//       backgroundColor: palette.grey[200],
//     },
//     main: {
//       marginTop: spacing(5),
//       marginBottom: spacing(2),
//       padding: spacing(3),
//     },
//     title: {
//       fontSize: typography.pxToRem(40),
//       fontWeight: typography.fontWeightLight,
//       color: palette.grey[700],
//     },
//     footer: {
//       textAlign: 'center',
//       padding: spacing(3, 2),
//       marginTop: 'auto',
//     },
//   }));

function Main() {
    // const classes = useStyles();
    const [items, setItems] = React.useState(getItems(10));
    // const { loading, error, data } = useQuery(GET_MAIN_TASKS);
    const { data } = useQuery(GET_ALL);
    console.log(data);
    // const data_list = data.list[0];

    const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(items, source.index, destination.index);

    setItems(newItems);
    };   

    return (
      <div>
        <CssBaseline />
        <AppBar />
        <Container component="main" maxWidth="lg">
          <Paper elevation={2} >
            <Typography component="h1" gutterBottom >
              🚀 My Tasks
              {/* <ul>
                { data.list.map((l) => (
                    <li key={l.id}>{l.name}</li>
                ))}
                </ul> */}
            </Typography>
            
      {/* {data.a.map(({ id, name }: TaskType) => (
        // <Columns  />
        <p>{id}</p>
        ))} */}
      
            <Columns />
            
            
            {/* <TaskList items={items} onDragEnd={onDragEnd} /> */}
          </Paper>
        </Container>
        
      </div>
    );
  }
  
  export default Main;