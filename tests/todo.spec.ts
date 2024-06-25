import {test, expect} from 'playwright/test';
import User from '../models/User';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';
import NewTodoPage from '../pages/NewTodoPage';

test ("whould be able to add a new todo", async ({page, request, context})=>{
    const auser = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingAPI(request,auser,context);

    const newTodoPage = new NewTodoPage();
    await newTodoPage.load(page);
    newTodoPage.addTodo(page,'Learn Playwright!');
    
    const todoPage = new TodoPage();
    const todoItem=await todoPage.getTodoItem(page);
    await expect(await todoItem.innerText()).toEqual('Learn Playwright!');
});

test ("whould be able to add a new todo and fail in validation", async ({page, request, context})=>{
    const auser = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingAPI(request,auser,context);

    const newTodoPage = new NewTodoPage();
    await newTodoPage.load(page);
    newTodoPage.addTodo(page,'Learn Playwright!');
    
    const todoPage = new TodoPage();
    const todoItem=await todoPage.getTodoItem(page);
    await expect(await todoItem.innerText()).toEqual('Learn Playwrightsssssss!');
});

test("Should be able to delete a todo", async ({page, context, request})=>{
    const auser = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingAPI(request,auser,context);

    const newTodoPage = new NewTodoPage();
    await newTodoPage.addTodoUsingApi(request,auser);

    const todoPage = new TodoPage();
    //await todoPage.load(page);
    await page.goto('/todo');
    await todoPage.deleteTodo(page);
    const noTodosMessage = await todoPage.getNoTodoMassage(page);
    await expect(noTodosMessage).toBeVisible();
});