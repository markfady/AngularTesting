
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
let comp:LoginComponent
beforeEach(function(){
    comp=new LoginComponent();
});
it('login method should toggle isLoggedIn',()=>{
  expect(comp.isLoggedIn).toBe(false,'false at first error message');
})
//Toggle action inside component
it('login method should toggle isLoggedIn',()=>{
  comp.login(); //click on login test switch false to true
  expect(comp.isLoggedIn).toBe(true,'true when toggled error message');
})
//Test case for getter 
it('login should toggle loginState()',()=>{
  expect(comp.loginState).toMatch(/out/) //expect that the state return string contains 'out'
})
it('login should toggle loginState()',()=>{
  comp.login()
  expect(comp.loginState).toMatch(/login/) //expect that the state return string contains 'out'
})
});
