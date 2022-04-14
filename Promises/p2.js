var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve, reject) => {
        
    setTimeout( () => {
        if(userLoggedIn) {
            resolve("User logged in");
        }else{
            reject();
        }
    }, 1000);
    } );
   return promise;
}

setTimeout( () => {
    userLoggedIn = true;
}, 500);

checkUserLoggedIn().then((successMsg) => { console.log(successMsg);}).catch( () => {console.log("User not logged in")});