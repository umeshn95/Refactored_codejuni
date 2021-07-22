import styled from 'styled-components';


export const Component_div = styled.div`
display:grid;
grid-template-rows:1fr 0.2fr 0.2fr 0.2fr;
row-gap:12px;
`
export const Component_Pic = styled.img`
justify-self:center;
height:250px;
width:250px;
`
export const Component_Name = styled.div`
justify-self:center;
padding:10px;
font-family: 'Rubik', sans-serif;
color: #3e0d60;
text-shadow: 0 8px 16px rgba(47, 4, 4, 0.06);
font-weight:bold;
font-size:17px;
`
export const Component_Description = styled.div`
justify-self:center;
max-width:300px;
line-height:1.5;
font-weight: 500;
font-family: 'Rubik', sans-serif;
color: #3e0d60;
text-shadow: 0 8px 16px rgba(47, 4, 4, 0.06);



`
export const Component_Quote = styled.div`
justify-self:center;
max-width:250px;
line-height:1.5;
font-family: 'Rubik', sans-serif;
color: #b593ff;
text-shadow: 0 8px 16px rgba(32, 4, 47, 0.07);
`
