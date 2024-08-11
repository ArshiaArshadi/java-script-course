// Objects {data}

const User1 = {
    name : "jay",
    userName  : "shibi",
    age : 16,
};
const User2 = {
    name : "lara",
    userName  : "toki",
    age : 16,
};
const User3 = {
    name : "sara",
    userName  : "gocho",
    age : 19,
};
const User4 = {
    name : "mike",
    userName : "joii",
    age : 18,
};

// enter object name then get user info

function getUserInfo (user) {
    
    return `name:${user.name} username:${user.userName} age:${user.age}`;
};

// guide >>> consle.log(getUserInfo(*object name*))

console.log(getUser(User1));
console.log(getUser(User2));
console.log(getUser(User3));
console.log(getUser(User4));
