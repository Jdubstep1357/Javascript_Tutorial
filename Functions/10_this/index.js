// What this is in reference to
// method -> obj
// function -> global (window, global)

const video = {
    title: 'ee',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
            // 2nd this is outside of curly bracket tells forEact
            // when you run callback use this object inside of it
        }, this);
    }
};

video.showTags();
// title of video is next to tag