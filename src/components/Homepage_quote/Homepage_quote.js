import React from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {Homepage_quote1,Homepage_quote2,Homepage_quote_person} from './Homepage_quote.elements';


function Homepage_quote() {
  return (
  <Homepage_quote1>
    <Homepage_quote2>
    “I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.”
    <Homepage_quote_person>
    Elon Musk
    </Homepage_quote_person>
    </Homepage_quote2>
   
  </Homepage_quote1>
  )
}

export default Homepage_quote
