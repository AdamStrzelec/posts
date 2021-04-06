const getUserDistance = (user, user2) => {
    let lat1 = parseInt(user.address.geo.lat);
    let lng1 = parseInt(user.address.geo.lng);
    let lat2 = parseInt(user2.address.geo.lat);
    let lng2 = parseInt(user2.address.geo.lng);
    return Math.sqrt(Math.pow(Math.abs(lat1 - lat2),2)+Math.pow(Math.abs(lng1 - lng2),2));
}

const getClosestUsers = (users) => {
  const closestUsers = [];
    for(let i=0; i<users.length; i++){
      let closestUserDistance = 0;
      let closestUserName = '';
      for(let j=0; j<users.length; j++){
        if(i!==j){
          if(closestUserDistance===0){
            closestUserDistance = getUserDistance(users[i], users[j])
            closestUserName = users[i].name + " => " + users[j].name;
          }    
          if(getUserDistance(users[i], users[j])<closestUserDistance){
            closestUserDistance = getUserDistance(users[i], users[j]);
            closestUserName = users[i].name + " => " + users[j].name;
          }
        }
      }
      closestUsers.push(closestUserName);
      closestUserDistance = 0;
    }
    return closestUsers;
}

module.exports = getClosestUsers;