import React from 'react';
import Images from '../../assets/Images';

const Presentation = ({i}) => {
    const imagen = (i==="m" ? Images.presentation.mobiliario
    : (i==="e" ? Images.presentation.electronica 
    : (i==="o" ? Images.presentation.ofertas
    : Images.presentation.backToSchool)));

    return (
        <div className='presentationSao'>
            <img src={imagen} alt="" />
        </div>
    );
}

export default Presentation;
