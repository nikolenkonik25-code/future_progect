import { Page } from "@playwright/test";

export abstract class BasePage {
    abstract url: string;
    constructor(protected readonly page: Page) {
    }

    async visit() {
        await this.page.goto(this.url);
    }
}