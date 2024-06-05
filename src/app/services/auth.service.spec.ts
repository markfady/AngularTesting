import { TestBed } from "@angular/core/testing"
import { AuthService, Post } from "./auth.service"
import { LoginService } from "./login.service"
import { HttpClientModule } from "@angular/common/http"
/* Till video 7
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
*/
describe('testing get service',()=>{
  let service:AuthService
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service=TestBed.inject(AuthService)
  })
  it('should get the data of post 1',(done:DoneFn)=>{
    service.getPost(1).subscribe((post:Post)=>{
      console.log('data:',post)
      expect(post.id).toEqual(1);
      done();
    })
  })
})