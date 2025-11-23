import { Page } from "@playwright/test";


export class App {

    constructor(readonly page: Page) {
    }
}