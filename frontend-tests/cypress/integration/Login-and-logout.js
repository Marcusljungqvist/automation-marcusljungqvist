/// <reference types="cypress" />

import * as targets from "../targets/targets"
import * as login from "../pages/loginPage"

//Test suite 'Login and logout'
describe('Login and logout', function(){


    //Test case 'Perform valid login'
    it('Perform login and logout', function(){
        login.validLogin(cy)

        //Logout
        login.logout(cy)
    })

    })