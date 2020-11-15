import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import inputs from '../../../Inputs.json'
import VerticalCard from '../../atoms/cards/vertical/VerticalCard'
import './indexStyle.scss'
import MinusBtn from './../../atoms/buttons/Minus/MinusBtn';
import HorizontalCard from '../../atoms/cards/horizontal/HorizontalCard'
function Index() {

  return (
    <Container classes={{ root: 'index' }}>
      <Grid item xs={12} md={7} classes={{ root: 'left-side' }}>
        <div className="title">
          <h1>Best Seller</h1>
          <MinusBtn />
        </div>
        <div className="items">
          {inputs.bestSeller.map(item => <VerticalCard key={item.id} item={item} />)}
        </div>
      </Grid>
      <Grid item xs={12} md={5} classes={{ root: 'right-side' }}>
        <div className="title">
          <h4>More Items</h4>
        </div>
        <div className="items">
          {inputs.moreItems.map(item => <HorizontalCard key={item.id} item={item} />)}
        </div>
      </Grid>
    </Container>
  )
}

export default Index
