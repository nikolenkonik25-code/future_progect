import { Page } from "@playwright/test";
import { LoginPage } from "./pages/login.page"; 

export class App {
    readonly login: LoginPage;
    constructor(readonly page: Page) {
       this.login = new LoginPage(page);
    
    }
}