// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

import { render, screen } from "@testing-library/react"

import Greet from "../Components/Greet"
import { text } from "stream/consumers"

// test('Greet renders correctly',()=>{
//     render(<Greet/>)
//     const textElement=screen.getByText(/Hello/i)
//     expect(textElement).toBeInTheDocument()
// })


/*Test Driven Development
Greet should render the text hello and if a name is passed into the component it should render hello followed by the name.

*/



// test('Greet renders correctly',()=>{
//     render(<Greet/>)
//     const textElement= screen.getByText('Hello')
//     expect(textElement).toBeInTheDocument()
// } )

// test('Greet renders with a name', ()=>{
//     render(<Greet name='Vishwas' />)
//     const textElement=screen.getByText('Hello Vishwas')
//     expect(textElement).toBeInTheDocument()
// })


/*Grouping tests */

describe('Greet', ()=> {

    xit('Greet renders correctly',()=>{
        render(<Greet/>)
        const textElement= screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    } )
    
  
} )


describe('Nested', ()=>{
    fit('Greet renders with a name', ()=>{
        render(<Greet name='Vishwas' />)
        const textElement=screen.getByText('Hello Vishwas')
        expect(textElement).toBeInTheDocument()
    })
})


/*We can even use  it instead of test
- inorder to use test.only we can use fit
- inorder to exclude a test, we can use xit*/