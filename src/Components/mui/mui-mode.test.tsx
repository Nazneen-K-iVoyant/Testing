import {render,screen} from '../../test-utils'
import { MuiMode } from './mui-mode'
import { AppProviders } from '../../providers/app-providers'

describe('MuiMode', () => { 
        test('renders text correctly',()=>{
            render(<MuiMode/>)
            const headingElement=screen.getByRole('heading')
            expect(headingElement).toHaveTextContent('dark')
        })

})