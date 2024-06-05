import { TestBed } from "@angular/core/testing"
import { AuthService, Post } from "./auth.service"
import { LoginService } from "./login.service"
import { HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule , HttpTestingController } from "@angular/common/http/testing"

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
//testing service without mock data
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
      done()
    })
  })
})

//testing service with mock data

describe('testing http service using mock',()=>{
  let service:AuthService
  let httpMock:HttpTestingController
    //setup your fake data to mock on it
  const postMock={
    userId:1,id:2,title:'myTitle',body:'myBody'
  };
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule] //Module to fake data with our service
    })
    service=TestBed.inject(AuthService);
    httpMock=TestBed.inject(HttpTestingController);
  })


  it('getPost must get data as expected',()=>{ 
    service.getPost(1).subscribe((data:Post)=>{
      console.log('data Mock',data)
      expect(data).toEqual(postMock)
    })
    //search if the url is done or not then return it's details
    const request=httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1')
    //send our fake data to the request (so when the request initiated we set our fake data to be returned)
    request.flush(postMock)
    //check if there are no request we didn't made
    httpMock.verify()
  })
})