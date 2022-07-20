///<reference types = 'cypress'/>
import {createNewUser} from "../Utility/goRestAPI"
describe('Report Generation',function(){
    const url = 'https://gorest.co.in/public/v2/users'
    const body = {
        "email" :   "himanshu.gupta"+Math.random()+"@gmail.com",
        "name" :   "Himanshu Gupta",
        "gender" :   "male",
        "status" :   "active"
    }
    it('Create a New User',function(){
        createNewUser(url, body, 201)
    })
})
