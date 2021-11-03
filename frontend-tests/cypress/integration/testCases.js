/// <reference types="cypress" />

import * as targets from "../targets/targets"
import * as login from "../pages/loginPage"
import * as menu from "../pages/menuPage"
import * as client from "../pages/clientPage"
import * as createClient from "../pages/createClientPage"
import * as bill from "../pages/billPage"
import * as editBill from "../pages/editBillPage"
import * as createBill from "../pages/createBillPage"
import * as roomFunctions from "../pages/roomPage"
import * as newRoomFunctions from "../pages/newRoomPage"

//Test suite by 'Marcus Ljungqvist'
describe('My first test suite', function(){

    //before and after each test, test case 01
    beforeEach(()=>{
        login.validLogin(cy)
    })
    afterEach(()=>{
        menu.logoutMenu(cy)
    })
    
    
    //Test case 02
    it('Create client and delete it', function(){
        //navigating to create client page
        menu.enterClientPage(cy)

        //navigatin to new client pageS
        client.enterCreateClient(cy)

        //typing in account information and saving
        createClient.createClient()

        //delete client 3
        client.deleteClient3(cy)
        })
    //test case 03
    it('Create a bill', function(){

        //Create bill
        menu.enterBillsPage(cy)
        bill.createBillPage(cy)
        createBill.createBill(cy)

    })
    //test case 04
    it('Edit a bill', function(){

        //navigate to bills page
        menu.enterBillsPage(cy)

        //open up bill #1
        bill.editBill(cy)

        //edit bill #1
        editBill.editBill1(cy)
    })
    //test case 05
    it('Pay a bill and delete it', function(){

        //navigate to bills page
        menu.enterBillsPage(cy)

        //open up bill #1
        bill.editBill(cy)

        //edit bill #1
        editBill.payBill1(cy)
        bill.deleteBill(cy)
    })
    //test case 06
    it('Create a room and delete it', function(){
        
        //navigate to rooms page
        menu.enterRoomsPage(cy)

        //navigate to new room page
        roomFunctions.createRoom(cy)

        //create new room
        newRoomFunctions.createNewRoom(cy)

        //delete newly created room
        roomFunctions.deleteRoom3(cy)
    })


})