import React from 'react';
import { makeStyles } from '@mui/styles';
import { useMutation } from '@apollo/client';
import CREATE_TASK from '../../graphql/mutations/createTask';
import { useState } from 'react';
import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { Fab, Grid, Paper, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
    cursor: 'text',
    '& input': {
      height: 25,
    },
  },
}));

/*
mutation {
	addItem(input: {
		title: "Prepare the backend"
		description: "Run the server"
		isDone: false
		listId: 1
	})
	{
		data
		{
			id
			title
		}
	}
}
*/



function AddNewTask(parent_id) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [addTodo] = useMutation(CREATE_TASK);
  const [formState, setFormState] = useState({
    id: '',
    title: ''
  });

  // const [createTask] = useMutation(CREATE_TASK, {
    
  // });
  // sflkj  
  const [createTask] = useMutation(CREATE_TASK, {
    variables: {
      description: formState.description,
      url: formState.url
    },

    onCompleted: () => {
      navigate("/")
    }
  });




  // sflkj  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const element = e.target as HTMLInputElement;
    const title = element.value;
    if (e.key == "Enter" && title !== '') {
      createTask({ variables: { title, parentId } });
      element.value = '';
    }
  };
  return (
    <Paper>
    <TextField
      placeholder="Add task"
      onKeyDown={handleKeyDown}
      className={classes.input}
      autoFocus
    />

  
    </Paper>
    
    
  );
}

export default AddNewTask;
