import React from 'react'
import {SearchBar} from './Features/SearchBar'
import { Container, Segment } from 'semantic-ui-react'
// const searchLanding = {
//         position: "relative",
//         paddingTop: "35px",
//         width: "100%",
//         height: "auto",
//         color: "white",
//         textAlign: "center",
//     }
    
export const SearchResults = () => {
    return (
        <Segment >
        <SearchBar/>
        </Segment>
    )
}

