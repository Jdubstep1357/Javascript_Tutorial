// create blog post object with:
// title
// body
// author
// views
// comments
//  {author, body}
// isLive true or false

// Use object literal syntax and inittialize a blog post
// give each post some value\



const BlogPost = {
    title: 'Thing',
    body: 'This is the review of the Thing',
    author: 'Marc Someone',
    views: 1020,
    comments: [
        {
            author: "John Wayne",
            body: "This movie is great"
        },
        {
            author: "Marc Rebillet",
            body: "Interesting choice"
        },
    ],
    isLive: true
};


console.log(BlogPost);

BlogPost.title;
BlogPost.body;
BlogPost.author;
BlogPost.views;
BlogPost.comments;
BlogPost.isLive;
