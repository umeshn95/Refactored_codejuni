import React from 'react';
import '../../App.css';
import Course_card from '../Course_card/Course_card';
import Homepage1 from '../Homepage1/Homepage1';
import Homepage2 from '../Homepage_quote/Homepage_quote';
import Ourteacher from '../Ourteacher/Ourteacher';
import Why_coding from '../Why_coding/Why_coding';

export default function Home() {
  return (
    <>
    <Homepage1></Homepage1>
    <Homepage2></Homepage2>
    <Ourteacher></Ourteacher>
    <Course_card></Course_card>
    <Why_coding></Why_coding>

    </>
  );
}
