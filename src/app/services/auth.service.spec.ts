import { AuthService } from "./auth.service"
import { LoginService } from "./login.service"

describe('check for is auth',()=>{
  let auth : AuthService
  beforeEach(()=>{ //before each test create new instance ( to not repeat this line each time)
    // auth=new AuthService();
    auth=new AuthService(new LoginService())
  })
  // afterEach(()=>{ //After each test the localStorage is clear
  //   localStorage.removeItem('token')
  // })
  it('must return true if there is user logged in',()=>{
    localStorage.setItem('token','Hello World');
    expect(auth.isAuth()).toBeTruthy()
  })
  it('must return false if there is not user logged in',()=>{

    expect(!auth.isAuth()).toBeFalsy();
  })
  it('getting fake data using spy',()=>{
    const mySpy=jasmine.createSpyObj('',['isAuth']);
    mySpy.isAuth.and.returnValue(new LoginService().isLogin()+'x')
    expect(mySpy.isAuth()).toBe('truex','work data message for spy')
  })
})