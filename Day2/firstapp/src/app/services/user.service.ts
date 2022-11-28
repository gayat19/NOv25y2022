import { Login } from "../login/login.model";

export class UserService{
    users:Login[];
    constructor(){
        this.users=[
            new Login("ramu","1234"),
            new Login("somu","4321")
        ]
    }
    getUsers(){
        return this.users;
    }
    checkLogin(user:Login){
        let result:boolean = false;
        for (let index = 0; index < this.users.length; index++) {
           if(user.username==this.users[index].username
            &&
            user.password==this.users[index].password)
            {
                result = true;
                break;
            }
        }
        return result;
    }
    addUser(user:Login){
        this.users.push(user);
    }
}