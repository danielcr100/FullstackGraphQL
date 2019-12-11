import { GET_POST } from './PostList';
import { Mutation } from 'react-apollo';
import React from 'react';
import { gql } from 'apollo-boost';

const ADD_POST = gql`
  mutation($title: String!, $content: String!, $adress: String!) {
    addPost(title: $title, content: $content, adress:$adress) {
      title,
      content,
      adress
    }
  }
`;

const withAddPost = Component => props => {
    return (
        <Mutation mutation={ADD_POST}>
            {addPost => {
                return (
                    <Component addPost={({ title, content, adress }) => addPost({
                        variables: { title, content, adress }, refetchQueries: [
                            { query: GET_POST }
                        ]
                    })} />
                );
            }}
        </Mutation>
    );
};

export default withAddPost