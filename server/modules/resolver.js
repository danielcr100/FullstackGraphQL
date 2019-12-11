const Post = require('./post/models/post.model')

const resolvers = {
    Query: {
        post: () => Post.find({})
    },
    //para hacer cambios y no hacer el Query 
    Mutation: {
        addPost: (parent, post) => {
            const newPost = new Post({ title: post.title, content: post.content, adress: post.adress })
            return newPost.save()
        }
    }
}

module.exports = resolvers