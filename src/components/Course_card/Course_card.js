import React, { useState } from 'react'
import { Course_card_cards, Course_card_class, Course_card_class_sub, Course_card_class_sub1, Course_card_class_sub2, Course_card_class_sub3, Course_card_main, Course_card_sub} from './Course_card.elements'
import Single_card from './Single_card';
import scratch from '../../images/scratch.PNG';
import codeorg from '../../images/code_org.png';
import empty from '../../images/empty.PNG';
import vscode from '../../images/vs_code.png';
import html from '../../images/html_css.png';
import applab from '../../images/App_lab.png';
import firebase from '../../images/firebase.png';
import thunkable from '../../images/thunkable.png';
import react_img from '../../images/react_img.png';
import game_lab from '../../images/game_lab.png';
import js_img from '../../images/js_img.png';
import nodejs_img from '../../images/nodejs_img.png';
import mongo from '../../images/mongo.png';




function Course_card({ChangeColor1,ChangeColor2,ChangeColor3}) {
   const [color1,setColor1]=useState(1)
   const [color2,setColor2]=useState()
   const [color3,setColor3]=useState()
   {color1?ChangeColor1=true:ChangeColor1=false}
   {color2?ChangeColor2=true:ChangeColor2=false}
   {color3?ChangeColor3=true:ChangeColor3=false}
    return (
   <Course_card_main>
       <Course_card_sub>
        <Course_card_class>
        <Course_card_class_sub>
        <Course_card_class_sub1 ChangeColor1={ChangeColor1} onClick={()=>{setColor1(true);setColor2(false);setColor3(false)}} >
        Grade 1 to 6
        </Course_card_class_sub1 >
        
        <Course_card_class_sub2 ChangeColor2={ChangeColor2} onClick={() =>{setColor1(false);setColor2(true);setColor3(false)}}>
        Grade 7 to 10
        </Course_card_class_sub2>
        
        <Course_card_class_sub3 ChangeColor3={ChangeColor3} onClick={() =>{setColor1(false);setColor2(false);setColor3(true)}}>
        Grade 11 to 12
        </Course_card_class_sub3>
        
        </Course_card_class_sub>
        </Course_card_class>
        <Course_card_cards>
        <Single_card
        package = 'BASIC'       
        pacckage_desc={color2?'Introduction of Coding':color1?'Basics of Coding':'Coding Foundation'}
        Glance='CURRICULUM GLANCE'
        
        curriculum={color2?'Sequential Programming,Conditional Statement & Loops, Data Visualization':color1?'Sequential Programming,Conditional Statement':'Function,Object,Variable,Data Manipulation'}
        tools={color2?'TOOLS':color1?'TOOLS':'TOOLS & LANGUAGE'}
        logo1={color2?scratch:color1?scratch:vscode}
        logo2={color2?codeorg:color1?codeorg:html}
        logo3={color2?empty:color1?empty:empty}
        logo4={color2?empty:color1?empty:empty}
        logo5={color2?empty:color1?empty:empty}
        logo6={color2?empty:color1?empty:empty}
        tools1={color2?'Scratch':color1?'Scratch':'VsCode'}
        tools2={color2?'Code.org':color1?'Code.org':'Html & Css'}
       
        projects='PROJECTS'
        project_details={color2?'Portfolio App & many more ':color1?'Snake Game & Shark Game':'Portfolio App & Blogging Website'}
        button='JOIN NOW'
        />
        <Single_card
        package = 'STANDARD'        
        pacckage_desc={color2?'Develope & Innovate':color1?'Development & Design':'Code for Development'}
        Glance='CURRICULUM GLANCE'

        
        curriculum={color2?'CRUD Operation in Mobile App, Game & App Development':color1?'Data Visualization,Parameter,Return,Library':'Frontend Website Interface & Design,Javascript Framework  '}
        tools={color2?'TOOLS':color1?'TOOLS':'TOOLS & LANGUAGE'}
        logo1={color2?scratch:color1?scratch:vscode}
        logo2={color2?codeorg:color1?codeorg:html}
        logo3={color2?firebase:color1?applab:react_img}
        logo4={color2?thunkable:color1?empty:empty}
        logo5={color2?empty:color1?empty:empty}
        logo6={color2?empty:color1?empty:empty}
        tools1={color2?'Scratch':color1?'Scratch':'Vscode'}
        tools2={color2?'Code.org':color1?'Code.org':'Html'}
        tools3={color2?'firebase':color1?'App Lab':'React'}
        tools4={color2?'Thunkable':color1?'':''}
       
        projects='PROJECTS'
        project_details={color2?'Signup Operation App,Chat App & many more ':color1?'Messenger App & Interactive Quiz App and many more ':'Task Management Website, Social Media App '}
        button='JOIN NOW'
        />
        <Single_card
        package = 'PREMIUM'        
        pacckage_desc={color2?'WebApp Development':color1?'App Development':'Pro WebApp Development'}
        Glance='CURRICULUM GLANCE'
        
        curriculum={color2?'Responsive Website Development & Deployment':color1?'Functional Mobile Apps,Game Animation':'Frontend,Backend,Database,Api'}

        tools={color2?'TOOLS & LANGUAGE':color1?'TOOLS':'developer'}
        logo1={color2?scratch:color1?scratch:nodejs_img}
        logo2={color2?codeorg:color1?codeorg:react_img}
        logo3={color2?js_img:color1?applab:js_img}
        logo4={color2?html:color1?game_lab:html}
        logo5={color2?vscode:color1?thunkable:vscode}
        logo6={color2?empty:color1?empty:mongo}
        tools1={color2?'Scratch':color1?'Scratch':'NodeJs'}
        tools2={color2?'Code.org':color1?'Code.org':'React'}
        tools3={color2?'JavaScript':color1?'App Lab':'JavaScript'}
        tools4={color2?'Html':color1?'Game Lab':'Html'}
        tools5={color2?'VsCode':color1?'Thunkable':'VsCode'}
        tools6={color2?'':color1?'':'MongoDB'}
        projects='PROJECTS'
        project_details={color2?'Restaurant Book Website, Event Managment Website, Photography Website & 3 more ':color1?'Pacman Game, Space Game, Curriculum App, Messenger App, Translater App & 5 more Game & App.':'Restaurant Book Website, Event Managment Website, Photography Website & 3 more '}
        button='JOIN NOW'
        />
  
        </Course_card_cards>
       </Course_card_sub>
   </Course_card_main>

            
    )
}

export default Course_card
