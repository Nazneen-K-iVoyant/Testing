import {render, screen} from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => { 
    const skills=['HTML','CSS','JavaScript']

    test('renders correctlt',()=>{
        render(<Skills skills={skills} />)
        const listElements=screen.getByRole('list')
        expect(listElements).toBeInTheDocument()
    })

    test('renders a list a skills',()=>{
        render(<Skills skills={skills}/>)
        const listItemsElements=screen.getAllByRole('listitem')
        expect(listItemsElements).toHaveLength(skills.length)
    })
})