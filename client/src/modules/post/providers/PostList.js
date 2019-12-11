import { Query } from 'react-apollo';
import React from 'react';
import { gql } from 'apollo-boost';

export const GET_POST = gql`
  {
    post {
      _id
      title
      content
      adress
    }
  }
`;

const withPosts = Component => props => {
    return (
        <Query query={GET_POST}>
            {({ loading, data }) => {
                return (
                    <Component postsLoading={loading} posts={data && data.post} {...props} />
                );
            }}
        </Query>
    );
};

export default withPosts;

