import { faGem } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../../../Assets/img/bag.png'
import logo from '../../../Assets/img/logo.png'
import './costumNav.scss'
function CostumNavbar() {
  return (
    <Container classes={{ root: 'navbar' }}>
      <Link to="/" className="logo">
        <h1>Lotus</h1>
          <img src={logo} alt="cart  "/>
      </Link>
      <div className="info">
        <div className="search">
          <TextField id="outlined-basic" label="search" variant="outlined" classes={{root:'input'}} />
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </div>
        <div className="cart">
          <img src={bag} alt="cart  "/>
        </div>
      </div>
    </Container>
  )
}

export default CostumNavbar
