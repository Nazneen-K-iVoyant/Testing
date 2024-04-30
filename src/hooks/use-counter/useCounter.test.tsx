import { renderHook} from '@testing-library/react'
import {useCounter} from './useCounter'


describe('useCounter', ()=>{
    test('Should render the initial count',()=>{
       const {result} =  renderHook(useCounter)
       expect(result.current.count).toBe(0)
    })
})