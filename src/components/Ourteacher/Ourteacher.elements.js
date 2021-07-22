import styled from 'styled-components';


export const Ourteacher_Main = styled.div`
top:289px;
position:relative;
`
export const Ourteacher_Meet = styled.div`
display:grid;
grid-template-rows:0.3fr 1fr;
@media screen and (max-width: 768px) {
grid-template-rows:0.1fr 1fr;

}
`
export const Ourteacher_intro = styled.div`
justify-self:center;
font-size:45px;
font-family: Proxima Nova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
font-weight:700;
color: #510c77c7;
text-shadow: 0 8px 16px rgba(47, 4, 4, 0.06);
@media screen and (max-width: 768px) {
    padding:20px;
    align
    
    }
`
export const Ourteacher_details = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
padding:0px 160px 0px 160px;
@media screen and (max-width: 768px) {
grid-template-columns:1fr;
grid-template-rows:1fr 1fr 1fr;
padding:10px;
row-gap:50px;

 
  
    }

`

