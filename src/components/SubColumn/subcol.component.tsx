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
import { useState } from 'react';
import Box from '@mui/material/Box';

export type DraggableListItemProps = {
    ids: number;
    itemDatas: ItemData[];
    title: string;
  //   list: List;
  };

function SubColumn({ itemDatas, title, key }) {
  const { data } = useQuery(GET_MAIN_TASKS);
  return data ? (
      <div>
          <Container style={{border: '4px solid rgba(45, 543, 2, 0.9)'}} component="main" maxWidth="sm">

                <Box sx={{ typography: 'subtitle2', fontFamily: 'default', fontSize: 'h6.fontSize' }}>{title}</Box>
                {itemDatas.map(({ id, title, isDone }: ItemData) => (
                <p>{title}</p>
                
      ))}
      <AddNewTask parent_id={key} />
            </Container>
      </div>
    
  ) : null;
}

export default SubColumn;
