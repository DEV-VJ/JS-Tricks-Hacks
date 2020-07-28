console.log('Start');

function loginuser(email,pass,callback) {
    setTimeout(() => {
        console.log("login Function");
        callback({ useremail : email });
    }, 5000);
}

function getvideos_user(email,callback) {
    setTimeout(() => {
        callback(['Fifty Shades of Grey','Fifty Shades of Freed','Fifty Shades of Dark']);
    }, 3000);
}

const user = loginuser("avijay@ongoframework.com",123456,(user) => {
    console.log(user);
    const user_videos = getvideos_user(user.useremail, videos => {
        console.log(videos);
    });
});


console.log('End');