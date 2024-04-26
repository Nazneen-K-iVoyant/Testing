import { render, screen } from "@testing-library/react"
import Application from "./Application"
import exp from "constants"

describe("Application", () => {
    test('Renders correctly', () => {
        render(<Application />)

        // const pageHeading=screen.getByRole('heading',
        // {
        //     name:'Job Application form'
        // }          
        // )
        // expect(pageHeading).toBeInTheDocument()

        // const sectionHeading=screen.getByRole('heading',{
        //     name:'Section 1'
        // })
        // expect(sectionHeading).toBeInTheDocument()

        
        const pageHeading=screen.getByRole('heading',
        {
           level:1,
        }          
        )
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading=screen.getByRole('heading',{
       level:2
        })
        expect(sectionHeading).toBeInTheDocument()





        const nameElement = screen.getByRole("textbox", {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const bioNameElement = screen.getByRole("textbox", {
            name: 'Bio'
        })
        expect(bioNameElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()

        const nameElement2=screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()

        // const termsElement2=screen.getByLabelText(
        //     "I agree to the terms and conditions"
        // )
        // expect(termsElement2).toBeInTheDocument()

        const nameElement3=screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4=screen.getByDisplayValue('Vishwas')
        expect(nameElement4).toBeInTheDocument()
        const paragraphElement=screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        const imageElement=screen.getByAltText('Cute cat')
        expect(imageElement).toBeInTheDocument()

        const closeElement=screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()

        const customeElement=screen.getByTestId('custom-elements')
        expect(customeElement).toBeInTheDocument()
        
    })
})