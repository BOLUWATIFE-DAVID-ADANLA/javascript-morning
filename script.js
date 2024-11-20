// maps key value pairs 
// "username" , "boluwatife"

var userdetails = new Map([
    ['username', 'boluwatife'],
    ['age', 23],
    ['hobbies', 'beating up strangers']
]);


// userdetails.set('favourite color', 'blue');
// console.log(userdetails);

username = ['jola', 'tinubu', 'atiku'];

userdetails.set('friends name', username[1]);
userdetails.delete('friends name');
console.log(userdetails);
