import React from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Homepage1_main,Homepage1_sub,Homepage1_content,Homepage1_image,Homepage1_heading,Homepage1_phone,Homepage1_description, Button1, Phone1,Button2 } from './Homepage1.elements';


function Homepage1() {
  return (
    <Homepage1_main>
      <Homepage1_sub>
        <Homepage1_content>
        <Homepage1_heading>
        Learn From the #1 Coding Platform For Kids
        </Homepage1_heading>
        <Homepage1_phone>
          <Phone1>
          <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"us"}
          value='44'
          onChange=''
        />
          </Phone1>
          <Button1>
            <Button2>Book a Free Class Now</Button2>
          </Button1>
 

        </Homepage1_phone>
        <Homepage1_description>
        Let Your Child Feel the Journey of Coding With US,
We are Having Most Reputable Teacher across World
        </Homepage1_description>
        </Homepage1_content>

        <Homepage1_image>
          i
        </Homepage1_image>

      </Homepage1_sub>
    </Homepage1_main>
  )
}

export default Homepage1
