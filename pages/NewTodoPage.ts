import { APIRequestContext, Page } from "@playwright/test";
import TodoAPI from "../apis/TodoAPI";
import User from "../models/User";

export default class NewTodoPage{

private get newTodoInput(){
    return '[data-testid=new-todo]';
}

private get newTodoSubmit(){
    return '[data-testid=submit-newTask]';
}


async load(page:Page){
    await page.goto('/todo/new');
}

async addTodo(page:Page, tastk: string){
    await page.fill(this.newTodoInput, tastk);
    await page.click(this.newTodoSubmit);
}

async addTodoUsingApi(request:APIRequestContext, user:User){
    await new TodoAPI().addTodo(request,user);
}

}