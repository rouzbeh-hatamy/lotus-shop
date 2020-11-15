import { Container, Grid } from '@material-ui/core'
import React from 'react'
import inputs from '../../../Inputs.json'
import VerticalCard from '../../atoms/cards/vertical/VerticalCard'
import './indexStyle.scss'
function Index() {
    return (
        <Container classes={{ root: 'index' }}>
        <Grid item xs={12} md={8} classes={{root:'left-side'}}>
         {inputs.bestSeller.map(item=><VerticalCard item={item}/>)}
        </Grid>
        <Grid item xs={12} md={4} classes={{root:'right-side'}}>
          2
        </Grid>
        </Container>
    )
}

export default Index
