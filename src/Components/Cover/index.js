import React from 'react'
import Navbar from '../Navbar'
import {CoverContainer, CoverContent, CoverItems,Coverh1,CoverP} from './CoverElements';

const Cover = () => {
    return (
       <CoverContainer>
           <Navbar />
           <CoverContent>
               <CoverItems>
                   <Coverh1>Best Selling Books</Coverh1>
                   <CoverP>Get ready to Read!!</CoverP>
                </CoverItems>
            </CoverContent>
       </CoverContainer>
    )
}

export default Cover
