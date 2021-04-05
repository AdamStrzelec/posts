const getDuplicatePosts = (posts) => {
    let duplicates = [];
    posts.forEach((item, i) => {
        posts.forEach((item2, j) => {
            if(item.title===item2.title && i!==j){
            duplicates.push(item.title)
            }
        })
    })
    return [...new Set(duplicates)]
}

module.exports = getDuplicatePosts;