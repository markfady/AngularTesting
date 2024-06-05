import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"
import { AuthService } from "./services/auth.service"

describe ('App component test',()=>{
    let component:AppComponent
    let fixture:ComponentFixture<AppComponent>
    let authService:AuthService
    beforeEach(function(){
        fixture=TestBed.createComponent(AppComponent)  //wrap the component with it's template
        component=fixture.componentInstance //instance from this component
        authService=TestBed.inject(AuthService) //inject service
    })
    it('should create app component',()=>{
        expect(component).toBeTruthy()
    })
    it('should have title ',()=>{
        expect(component.title).toEqual('title')
    })
    it('return true user and password',()=>{
        expect(component.canLogin('mark',123)).toBeTruthy()
    })
    it('return false when no user',()=>{
        expect(component.canLogin('',123)).toBeFalsy()
    })
})