// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
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

    test('Greet renders correctly',()=>{
        render(<Greet/>)
        const textElement= screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    } )
    
  
} )


describe('Nested', ()=>{
    test('Greet renders with a name', ()=>{
        render(<Greet name='Vishwas' />)
        const textElement=screen.getByText('Hello Vishwas')
        expect(textElement).toBeInTheDocument()
    })
})