import styled from 'styled-components';


export const Homepage_quote1 = styled.div`
display:grid;
grid-template-rows:1fr 0.3fr;
background:white;
position:relative;
top:200px;
background:  url(${process.env.PUBLIC_URL + '/dots.svg'}),url(${process.env.PUBLIC_URL + '/circle.svg'});
background-repeat:no-repeat, no-repeat;
background-position: 4% 70px, 99% -70px;
z-index:2;
@media screen and (max-width: 991px) {
  background:  url(${process.env.PUBLIC_URL + '/dots.svg'}),url(${process.env.PUBLIC_URL + '/circle.svg'});
background-repeat:no-repeat, no-repeat;
background-position: 4% 520px, 99% -50px;
background-size:100px;
}

`
export const Homepage_quote2 = styled.div`
display:grid;
grid-template-rows:1fr 0.3fr;
width:70%;
height:100%;
align-self: center;
justify-self: center;
text-align: center;
padding: 30px;
font-size: 25px;
color: #2f2c97;
border-radius: 20px;
font-family: Proxima Nova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
background: #f97d7d2e;
box-shadow: 1px 1px 1px 1px #a290049c;
text-shadow: 0 8px 16px rgba(198, 78, 78, 0.63);

`

export const Homepage_quote_person = styled.div`
align-self:end;
justify-self:end;
color:black;
font-weight:bold;

`

