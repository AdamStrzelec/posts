const getUsersPosts = (users, posts) => {
    const usersPosts = [];
    users.forEach(user => {
        const postsCount = posts.reduce((acc, post)=>{
          if(post.userId===user.id){
            return acc + 1
          } 
          return acc
        },0)
        usersPosts.push(`${user.name} napisał ${postsCount} postów`);
    })
    return usersPosts;
}

module.exports = getUsersPosts;