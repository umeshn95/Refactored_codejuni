import React from 'react'
import {Component_Description, Component_div, Component_Name, Component_Pic, Component_Quote} from './Why_coding_component.elements'
function Why_coding_component(props) {
    return (
        <>
            <Component_div>
                <Component_Pic src={props.image}>
                </Component_Pic>
               
                    <Component_Description>
                    {props.description}
                    </Component_Description>
                  
            </Component_div>
        </>
    )
}

export default Why_coding_component
