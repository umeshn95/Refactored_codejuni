import React from 'react'
import { Single_card_button, Single_card_curriculum, Single_card_editor, Single_card_Glance, Single_card_main, Single_card_pacckage_desc, Single_card_package, Single_card_projects, Single_card_project_details, Single_card_tools, Single_card_tools1, Single_card_tools2, Single_card_tools3, Single_card_tools4, Single_card_tools5, Single_card_tools6 } from './Single_card.elements'

function Single_card(props) {
    return (
        <Single_card_main>
            <Single_card_package>
                {props.package}
            </Single_card_package>
            <Single_card_pacckage_desc>
                {props.pacckage_desc}
            </Single_card_pacckage_desc>
            <Single_card_Glance>
                {props.Glance}
            </Single_card_Glance>
            <Single_card_curriculum>
            {props.curriculum}
            </Single_card_curriculum>
            <Single_card_tools>
            {props.tools}
            </Single_card_tools>
            <Single_card_editor>
            <Single_card_tools1>
            {props.logo1}
            {props.tools1}
            </Single_card_tools1>
            <Single_card_tools2>
            {props.logo2}
            {props.tools2}
            </Single_card_tools2>
            <Single_card_tools3>
            {props.logo3}
            {props.tools3}
            </Single_card_tools3>
            <Single_card_tools4>
            {props.logo4}
            {props.tools4}
            </Single_card_tools4>
            <Single_card_tools5>
            {props.logo5}
            {props.tools5}
            </Single_card_tools5>
            <Single_card_tools6>
            {props.logo6}
            {props.tools6}
            </Single_card_tools6>
                
            </Single_card_editor>
            <Single_card_projects>
            {props.projects}
            </Single_card_projects>
            <Single_card_project_details>
            {props.project_details}
            </Single_card_project_details>
            <Single_card_button>
            {props.button}
                
            </Single_card_button>
        </Single_card_main>
    )
}

export default Single_card
