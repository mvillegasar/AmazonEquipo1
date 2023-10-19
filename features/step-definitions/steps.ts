import LoginPage from '../pageobjects/login.page';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { RegistroTask } from '../task/RegistroTask';


const registroTask = new RegistroTask();
const pages = {
    login: LoginPage
}

Given(/^el usuario crea una cuenta de amazon$/, async () => {
    await pages.open()
})