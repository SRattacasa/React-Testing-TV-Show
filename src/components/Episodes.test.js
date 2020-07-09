import React from 'react';
import {render, rerender} from '@testing-library/react'
import Episodes from './Episodes'

test("shows episodes or something", () => {
    //arange
   const {rerender } = render(<Episodes episodes={[]}/>)
    //act
   
rerender(<Episodes episodes={[]}/>)
    //assert
})