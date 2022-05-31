import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import {TaskFieldType} from '../../types';

const CREATE_TASK = gql`
  mutation($title: String!, $parent_id: Int) {
    addItem(input: { 
      title: $title, 
      description: $jiraNum
		  isDone: false
		  listId: $parent_id
    })
    {
      data
      {
        id
        title
      }
    }
  }
`;

export const updateCache = (
  cache: ApolloCache<NormalizedCacheObject>,
  createdTask: TaskFieldType,
) => {
  cache.modify({
    fields: {
      tasks(existingTasks = []) {
        const newTaskRef = cache.writeFragment({
          data: createdTask,
          fragment: gql`
            fragment NewTask on Task {
              id
              title
              completed
              parent_id
            }
          `,
        });
        return [...existingTasks, newTaskRef];
      },
    },
  });
};
export default CREATE_TASK;

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