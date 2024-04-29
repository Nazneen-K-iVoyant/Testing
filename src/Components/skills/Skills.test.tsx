import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript']

    test('renders correctlt', () => {
        render(<Skills skills={skills} />)
        const listElements = screen.getByRole('list')
        expect(listElements).toBeInTheDocument()
    })

    test('renders a list a skills', () => {
        render(<Skills skills={skills} />)
        const listItemsElements = screen.getAllByRole('listitem')
        expect(listItemsElements).toHaveLength(skills.length)
    })

    test('renders Login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start learning button is not rendered', () => {
        render(<Skills skills={skills} />)
        // const startLearning=screen.getByRole('button',{
        //     name:'Start Learning'
        // })
        const startLearning = screen.queryByRole('button', {
            name: 'Start Learning'
        })
        expect(startLearning).not.toBeInTheDocument()
    })

    // test('Start learning button is eventually displayed', async()=>{
    //    render(<Skills skills={skills} />) 
    // //    const startLearningButton=screen.getByRole('button',{
    // //     name:'Start learning'
    // //    })
    // const startLearningButton= await screen.findByRole('button',{
    //     name:'Start learning'
    //    })
    //    expect(startLearningButton).toBeInTheDocument()
    // })

    // test('Start learning button is eventually displayed', async () => {
    //     render(<Skills skills={skills} />);
    //     const startLearningButton = await screen.findByRole('button', {
    //         name: ' Start Learning'
    //     },
    //         {
    //             timeout: 9000
    //         }
    //     );
    //     // screen.debug()
    //     expect(startLearningButton).toBeInTheDocument();
    // });
    /*The default timer has time set to 100ms, so we need to set the custom timeout */
})