function playVideo() {
    console.log(this);
}

// call supplies multiple arguments
playVideo.call({ name: 'Mosh' });
// have to pass arguments as array with apply
playVideo().apply({ name: 'Mosh' });
// Returns new function and returns point of function
const fn = playVideo.bind({ name: 'Mosh' })
fn();

playVideo();


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tags => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();