import React from 'react';
import '../../App.css';
import { Container } from '../../globalStyles';
import Course_card from '../Course_card/Course_card';
import Homepage1 from '../Homepage1/Homepage1';
import Homepage2 from '../Homepage_quote/Homepage_quote';
import Ourteacher from '../Ourteacher/Ourteacher';

export default function Home() {
  return (
    <>
    <Homepage1></Homepage1>
    <Homepage2></Homepage2>
    <Ourteacher></Ourteacher>
    <Course_card></Course_card>
    </>
  );
}
