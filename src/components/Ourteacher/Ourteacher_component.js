import React from 'react'
import {Component_Description, Component_div, Component_Name, Component_Pic, Component_Quote} from './Ourteacher_componenr.elements'
function Ourteacher_component(props) {
    return (
        <>
            <Component_div>
                <Component_Pic src={props.image}>
                </Component_Pic>
                <Component_Name>
                    {props.name}
                    </Component_Name>
                    <Component_Description>
                    {props.description}
                    </Component_Description>
                    <Component_Quote>
                    {props.quote}
                    </Component_Quote>
            </Component_div>
        </>
    )
}

export default Ourteacher_component
