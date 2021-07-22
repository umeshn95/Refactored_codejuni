import React from 'react'
import { Course_card_cards, Course_card_class, Course_card_class_sub, Course_card_class_sub1, Course_card_class_sub2, Course_card_class_sub3, Course_card_main, Course_card_sub} from './Course_card.elements'
import Single_card from './Single_card'

function Course_card() {
    return (
   <Course_card_main>
       <Course_card_sub>
        <Course_card_class>
        <Course_card_class_sub>
        <Course_card_class_sub1>
        Grade 1 to 6
        </Course_card_class_sub1>
        
        <Course_card_class_sub2>
        Grade 7 to 10
        </Course_card_class_sub2>
        
        <Course_card_class_sub3>
        Grade 11 to 12
        </Course_card_class_sub3>
        
        </Course_card_class_sub>
        </Course_card_class>
        <Course_card_cards>
        <Single_card
        package = 'Basic'         
        pacckage_desc='code'
        Glance='glance'
        
        curriculum='aee'
        tools='tools'
        tools1='tools1'
        tools2='tools2'
        tools3='tools3'
        tools4='tools4'
        tools5='tools5'
        tools6='tools6'
        projects='project'
        project_details='detail'
        button='join now'
        />
             <Single_card
        package = 'Basic'         
        pacckage_desc='code'
        Glance='glance'
        
        curriculum='aee'
        tools='tools'
        tools1='tools1'
        tools2='tools2'
        tools3='tools3'
        tools4='tools4'
        tools5='tools5'
        tools6='tools6'
        projects='project'
        project_details='detail'
        button='join now'
        />
             <Single_card
        package = 'Basic'         
        pacckage_desc='code'
        Glance='glance'
        
        curriculum='aee'
        tools='tools'
        tools1='tools1'
        tools2='tools2'
        tools3='tools3'
        tools4='tools4'
        tools5='tools5'
        tools6='tools6'
        projects='project'
        project_details='detail'
        button='join now'
        />
        </Course_card_cards>
       </Course_card_sub>
   </Course_card_main>

            
    )
}

export default Course_card
