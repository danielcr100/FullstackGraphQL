const { gql } = require('apollo-server-express');

const typeDefinitions = gql`

type Post {
    _id: ID,
    title: String,
    content: String
    adress: String
},
type Query{
    post: [Post]
},
type Mutation {
    addPost (title: String, content:String, adress:String): Post
}

`;
module.exports = typeDefinitions;