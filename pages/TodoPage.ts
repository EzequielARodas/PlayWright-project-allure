import { Page } from "@playwright/test";

export default class TodoPage{


private get welcomeMessage(){
    return '[data-testid=welcome]';
}

private get deleteIcon(){
    return '[data-testid=delete]';
}

private get noTodosMessage(){
    return '[data-testid=no-todos]';
}

private get todoItem(){
    return '[data-testid=todo-item]';
}

getWelcomeMessageElement(page:Page){
    return page.locator(this.welcomeMessage);
}

async load(page:Page){
    await page.goto('/todo');
}

async deleteTodo(page:Page){
    await page.click(this.deleteIcon);
}

async getNoTodoMassage(page: Page){
    return page.locator(this.noTodosMessage);
}

async getTodoItem(page:Page){
    return page.locator(this.todoItem);
}

}