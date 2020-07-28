// const promise = new Promise((resolve,reject) => {
//     const status = false;
//     setTimeout(() => {
//         if(status)
//             resolve("Successfully Kissed Vinny.");
//         else
//             reject(new Error('You failed to kiss, noob.'));
//     },3000);
// });


// promise.then((msg) => {
//     console.log(msg);
//     console.log("Hny Says 'VJ ur the best Kisser'.");
// }).catch((err) =>{
//     console.log(err.message);
// });


function loginuser(email,pass) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Successfully logged in.");
            resolve({ useremail : email });
            console.log("Retriving videos...");
        }, 5000);
    });
}

function getvideos_user(email) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(['Fifty Shades of Grey','Fifty Shades of Freed','Fifty Shades of Dark']);
        }, 3000);
    });
}

// loginuser("Vijay@spgon.com",'spgon@vj')
//     .then( user => getvideos_user(user.useremail)
//     .then( videos => console.log(videos)));

async function display_user_videos() {
    const user = await loginuser("","");
    const videos = await getvideos_user(user.useremail);
    console.log(videos);
}

display_user_videos();