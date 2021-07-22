import styled from 'styled-components';


export const Homepage1_main = styled.div`
padding:0px;
margin:0px;
height:700px;
background: #3c0088;
position:relative;
@media screen and (max-width: 991px) {
  height:500px;
  }
&:after{
  
  position:absolute;
background: url(${process.env.PUBLIC_URL + '/wave.svg'}) bottom no-repeat;
background-size: cover;
content: '';
height: 323px;
width: 100%;
top: 100%;
left:0px;
z-index:-1;
@media screen and (max-width: 991px) {
  height:100px;
  }
}
`

export const Homepage1_sub = styled.div`
display:grid;
grid-template-columns:1fr 0.7fr;
padding:60px;
column-gap:10px;
@media screen and (max-width: 786px) {
grid-template-columns:1fr;
grid-template-rows:1fr 1fr;
padding:0px;


}
`
export const Homepage1_content = styled.div`
diplay:grid;
grid-template-rows:1fr 1fr 1fr;
row-gap:10px;

`
export const Homepage1_image = styled.div`
background:yellow;
@media screen and (max-width: 991px) {
  display:none;
  }

`
export const Homepage1_heading = styled.div`
color: white;
text-shadow: 0 8px 16px rgb(47, 4, 4);
font-size: 48px;
font-family: 'Poppins', sans-serif;
font-weight:bolder;
line-height:1.35; 
padding:60px;
font-family: Proxima Nova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  @media screen and (max-width: 991px) {
  font-size:30px;
  line-height:1.2; 

  }
`
export const Homepage1_phone = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
column-gap:10px;
@media screen and (max-width: 991px) {
grid-template-columns:1fr;
grid-template-rows:1fr 1fr;
row-gap:10px;
}
`
export const Phone1 = styled.div`
justify-self:end;
@media screen and (max-width: 991px) {
  justify-self:center;
  }

`
export const Button1 = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
@media screen and (max-width: 991px) {
grid-template-columns:1fr;
justify-self:center;
  }

`
export const Button2 = styled.button`
width: 230px;
border-radius: 10px;
background-color: #ff5a43;
border-width: 0vw;
color: white;
font-weight: 700;
font-size: 18px;
outline: none;
cursor:pointer;
text-shadow: 0 8px 16px rgb(47, 4, 4);


&:hover{
  background-color:#da5b4a ;
  outline: none;
  cursor:pointer;
}
`
export const Homepage1_description = styled.div`
color: white;
font-family: 'Poppins', sans-serif;
font-size: 19px;
font-weight:lighter;
padding:60px;
font-family: Proxima Nova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
@media screen and (max-width: 991px) {
  font-size:17px;
}
`