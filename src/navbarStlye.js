import styled from "styled-components";


export const MainMenu = styled.div`
`

export const Container = styled.div` 
display: flex;
align-items: center;
margin: 40px 120px 40px 120px;
`;
 
export const Logo = styled.img`
margin-right: 400px;
`;


export const NavItem = styled.div `
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
margin-left: 70px;
margin-right: 70px;

color: #333333;
cursor: pointer;

`;
export const getSize = (props) => {
    switch (props.type) {
      case 'large':
        return '60px';
      case 'medium':
        return ' 46px';
      case 'small':
        return '36px'
      default:
        return '60px';
    }
  };
  
