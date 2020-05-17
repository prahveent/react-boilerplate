import React, { Component } from 'react';
import Aux from '../../hoc/AppAux'
import NavBar from '../../components/NavBar/NavBar';
import images from '../../../config/images';
import styles from '../../../config/styles'

export default class Home extends Component {
    render() {
        return ( 
            <Aux>
                <NavBar /> 
                    <img src={images.icons.logo}  alt="logo" style={{ height : '40vmin'}} />
                <div >
                   <p style={ { color : styles.color.COLOR_GREEN  } }>Home Page1</p> 
                </div>
            </Aux>
        )
    }
}
