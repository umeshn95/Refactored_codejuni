import styled from 'styled-components';


export const Component_div = styled.div`
display:grid;
grid-template-rows:1fr 0.2fr 0.2fr;
row-gap:12px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
z-index:999;
`
export const Component_Pic = styled.img`
justify-self:center;
height:280px;
width:280px;
border-bottom-left-radius: 100% 90%;
border-bottom-right-radius: 100% 90%;
background: rgba(204, 234, 254, 0.5) none repeat scroll 0% 0% / auto padding-box border-box;
opacity:0.7;
    
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

