
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { User } from '../user';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
let comp:LoginComponent
let userMock:User
let fixture:ComponentFixture<LoginComponent>
let submitElement:DebugElement
let emailElement:DebugElement
let passwordElement:DebugElement
beforeEach(function(){
  TestBed.configureTestingModule({
    providers:[
      {provide:ComponentFixtureAutoDetect,useValue:true}
    ]
  })
    comp=new LoginComponent();
    userMock={email:'test@gmail.com',password:'123456'}
    fixture=TestBed.createComponent(LoginComponent)
    comp=fixture.componentInstance
//catch your elements
submitElement=fixture.debugElement.query(By.css('button'));
emailElement=fixture.debugElement.query(By.css('input[type=email]'))
passwordElement=fixture.debugElement.query(By.css('input[type=password]'))


});
it('login method should toggle isLoggedIn',()=>{
  expect(comp.isLoggedIn).toBe(false,'false at first error message');
})
//Toggle action inside component
it('login method should toggle isLoggedIn',()=>{
  comp.login(userMock.email,userMock.password); //click on login test switch false to true
  expect(comp.isLoggedIn).toBe(true,'true when toggled error message');
})
//Test case for getter 
it('login should toggle loginState()',()=>{
  expect(comp.loginState).toMatch(/out/) //expect that the state return string contains 'out'
})
it('login should toggle loginState()',()=>{
  comp.login(userMock.email,userMock.password)
  expect(comp.loginState).toMatch(/login/) //expect that the state return string contains 'out'
})
it('Form isLogged in true then button disabled',()=>{
  comp.isLoggedIn=true
  fixture.detectChanges()
  expect(submitElement.nativeElement.disabled).toBeTruthy()
})
it('Form submitData must emit email and password like our mock',()=>{
  let user:User | undefined
  //put our mocked data  inside the input fields
  emailElement.nativeElement.value=userMock.email
  passwordElement.nativeElement.value=userMock.password
  //subscribe to output
  comp.submitData.subscribe((data:User)=>user=data)
  //fire the function
  submitElement.triggerEventHandler('click',null)
  expect(user?.email).toBe(userMock.email);
  expect(user?.password).toBe(userMock.password);
})


it('test binding',()=>{
  const h1:HTMLElement=fixture.nativeElement.querySelector('h1')
  console.log(h1)
  // fixture.detectChanges()
  expect(h1.textContent).toBe(comp.title)
})
});
