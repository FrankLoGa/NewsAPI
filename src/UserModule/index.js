const DB = require('DBModule');


class User extends DB{
    constructor(){
        console.log('User...');
        super();
        this.useCollection('users');
    }
}


module.exports = new User();