

let post = new Post('a', 'b', 'c');

console.log(post);

// Someone drafting a post, but hasn't yet posted it yet
// What would the constructor function look like?

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}