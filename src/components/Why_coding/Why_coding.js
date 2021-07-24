import React from 'react'
import { Ourteacher_details, Ourteacher_intro, Ourteacher_Main, Ourteacher_Meet } from './Why_coding.elements'
import Why_coding_component from './Why_coding_component'
import lapgirl from '../../images/lapgirl.svg'
import Code_thinking from '../../images/Code_thinking.svg'
import mathimportance from '../../images/mathimportance.svg'
function Why_coding() {
    return (
        <>
          <Ourteacher_Main>
              <Ourteacher_Meet>
                  <Ourteacher_intro>
                  3 reasons why children should learn to code
                  </Ourteacher_intro>
                  <Ourteacher_details>
                  <Why_coding_component
            image={lapgirl}
            description='Coding helps improve logical thinking and problem-solving skills by 70% among kids at a young age, also enabling them to perform better at school.'
            ></Why_coding_component>
              <Why_coding_component
            image={Code_thinking}
            description='Coding jobs are the future. With technology becoming all pervasive and developing at a rapid pace, coding is a skill that has become indispensable!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            ></Why_coding_component>
              <Why_coding_component
            image={mathimportance}
            description='Math is not just for mathematicians. Biology is not just for biologists and doctors. Learning to code is not just for kids wanting to take up computer science in the future.'
           
            ></Why_coding_component>
                  </Ourteacher_details>
              </Ourteacher_Meet>
          </Ourteacher_Main>
        </>
    )
}

export default Why_coding
