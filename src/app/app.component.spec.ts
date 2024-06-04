import { AppComponent } from "./app.component"

describe('clicking on hello function',()=>{
    it('must return Hello World!',()=>{
        const comp=new AppComponent()
        expect(comp.hello()).toBe('Hello World')
    })
})