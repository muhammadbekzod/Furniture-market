import React, { Component,  } from 'react';
import { Body, Main, Pic, Cont, MiniCont,MiniCont1, MiniCont2,
     MiniCont3 , Button, ButtonText, Footer, Img, Img1, Img2, FooterImg} from './bodyStyle'
import img from './img/main.jpg';
import delivery from './img/delivery.png';
import support from './img/support.png';
import authentic from './img/authentic.png';

export default class body extends Component {
    render() {
        return (
        <Body>
            <Main>
                <Pic src={img}/>
                <Cont>
                    <MiniCont>
                        <MiniCont1>New Arrival</MiniCont1>
                        <MiniCont2>Discover Our New Collection</MiniCont2>
                        <MiniCont3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</MiniCont3>
                        <Button>
                            <ButtonText>Buy now</ButtonText>
                            </Button>
                    </MiniCont>
                </Cont>
            </Main>
                <Footer>
                    <FooterImg>
                <Img src={delivery}/>
                <Img1 src={support}/>
                <Img2 src={authentic}/>
                </FooterImg>
                </Footer>
        </Body>
        )
    }
}
