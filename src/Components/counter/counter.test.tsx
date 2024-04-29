import { render,screen } from "@testing-library/react"
import Counter from "./Counter"
import user from '@testing-library/user-event'
describe("Counter",()=>{
    test("renders correctly",()=>{
        render(<Counter/>)
        const countElement= screen.getByRole('heading')  

        expect(countElement).toBeInTheDocument()
        const incrementCount=screen.getByRole("button",{
            name:'Increment'
        })
        expect(incrementCount).toBeInTheDocument()
    })

    test('renders a count 0',()=>{
        render(<Counter/>)
        const countElement=screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
    })
})