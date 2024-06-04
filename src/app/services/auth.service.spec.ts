import { AuthService } from "./auth.service"

describe('check for is auth',()=>{
  let auth : AuthService
  beforeEach(()=>{ //before each test create new instance ( to not repeat this line each time)
    auth=new AuthService();
  })
  afterEach(()=>{ //After each test the localStorage is clear
    localStorage.removeItem('token')
  })
  it('must return true if there is a token in localStorage',()=>{
    localStorage.setItem('token','Hello World');
    expect(auth.isAuth()).toBeTruthy()
  })
  it('must return false if there is not a token in localStorage',()=>{

    expect(auth.isAuth()).toBeFalsy();
  })
})