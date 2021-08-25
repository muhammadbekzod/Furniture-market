import React, { Component } from 'react'
import {Footer, FooterUp, FooterDown, Title, Desc, Text, 
    Search, SearchButton, Button, ButtonText, Comment, Parag, 
    Parag1,Parag2, Comment1,Insta, Sample, Sample1,Sample2, Sample3, Sample4} from './footerStyle'
import sample1 from './img/sample1.jpg';
import sample2 from './img/sample2.jpg';
import sample3 from './img/sample3.jpg';    
import sample4 from './img/sample4.jpg';
export default class footer extends Component {
    render() {
        return (
           <Footer>
               <FooterUp>
                   <Text>
                    <Title>Join Our Mailing List</Title>
                    <Desc>Sign up to receive inspiration, product updates, 
                        and special offers from our team.</Desc>
                     </Text>
                     <Search>
                         <SearchButton>
                     <Button>
                         <ButtonText>Submin</ButtonText>
                         </Button>
                     </SearchButton>
                     </Search>
               </FooterUp>
               <FooterDown>
                    <Comment>
                        <Parag>Beauty Care</Parag>
                        <Parag1>Do eiusmod tempor incididunt ut labore et dolore
                             magna aliqua. Ut enim ad minim veniam, quis nostrud 
                             exercitation ullamco laboris.</Parag1>
                        <Parag2>Follow Us</Parag2>
                    </Comment>
                    <Comment1>
                        <Insta>Instagram Shop</Insta>
                        <Sample>
                            <Sample1 src={sample1}/>
                            <Sample2 src={sample2}/>
                            <Sample3 src={sample3}/>
                            <Sample4 src={sample4}/>
                        </Sample>
                    </Comment1>
               </FooterDown>
           </Footer>
        )
    }
}
