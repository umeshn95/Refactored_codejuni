import React from 'react'
import { Ourteacher_details, Ourteacher_intro, Ourteacher_Main, Ourteacher_Meet } from './Ourteacher.elements'
import Ourteacher_component from './Ourteacher_component'
function Ourteacher() {
    return (
        <>
          <Ourteacher_Main>
              <Ourteacher_Meet>
                  <Ourteacher_intro>
                Meet CodeJuni Teachers
                  </Ourteacher_intro>
                  <Ourteacher_details>
                  <Ourteacher_component
            image='https://cdn.codingal.com/images/home/teachers/kavita-jaiswal.png'
            name='Kavita Jaiswal'
            description='10+ years of programming experience in IT and R&D department. Expert in ERP and web design projects, C, C++.'
            quote='"It is my dream to see kids become innovators and change the world for better"'
            ></Ourteacher_component>
              <Ourteacher_component
            image='https://cdn.codingal.com/images/home/teachers/surbhi-bansal.png'
            name='Surbhi Bansal'
            description='2+ years of teaching experience in teaching computer science to Kids. Expert in computer applications'
            quote='"It is my dream to see kids become innovators and change the world for better"'
            ></Ourteacher_component>
              <Ourteacher_component
            image='https://cdn.codingal.com/images/home/teachers/sujata-narvekar.png'
            name='Sujata Narvekar'
            description='10+ years of experience of teaching coding. Expert in C, C++, Java, Java frameworks and Android projects.'
            quote='"Teaching kids and helping them create something of their own is so inspiring"'
            ></Ourteacher_component>
                  </Ourteacher_details>
              </Ourteacher_Meet>
          </Ourteacher_Main>
        </>
    )
}

export default Ourteacher
