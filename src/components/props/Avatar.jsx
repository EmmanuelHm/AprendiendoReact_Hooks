import React, { Fragment } from 'react'

const Avatar = ({urlImagen}) => {
    return ( 
        <Fragment>
            <img src={urlImagen} alt="PlaceHolder" /> 
        </Fragment>
     );
}
 
export default Avatar;