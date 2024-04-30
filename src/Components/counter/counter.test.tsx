import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from '@testing-library/user-event'
import exp from "constants"
describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')

        expect(countElement).toBeInTheDocument()
        const incrementCount = screen.getByRole("button", {
            name: 'Increment'
        })
        expect(incrementCount).toBeInTheDocument()
    })

    test('renders a count 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        // user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole("button", {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test("renders a count of 2 after clicking the increment button twice", async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent('1')
    })

    test('renders a count of 10 after clicking the set button', async () => {
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', {
            name: 'Set'
        })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    test('elements are focused in the right order', async()=>{
        render(<Counter/>)
        const amountInput=screen.getByRole('spinbutton')
        const setButton= screen.getByRole('button',{
            name:'Set'
        })
        const incrementButton=screen.getByRole('button',{
            name:'increment'
        })

        await user.tab()
        expect(incrementButton).toHaveFocus()
        
        await user.tab()
        expect(amountInput).toHaveFocus()
        
        await user.tab()
        expect(setButton).toHaveFocus()
      
    })


})