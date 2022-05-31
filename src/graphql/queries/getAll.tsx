import { gql } from '@apollo/client';

const GET_ALL = gql`
query {
	a:list
	{
		id
		name
		itemDatas
		{
			id
			title
			isDone
		}
	}
}
`;

export default GET_ALL;