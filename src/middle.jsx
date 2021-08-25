import React, { Component } from 'react';
import {Middle, Text, Cont1, Cont2, Photo1, Photo2, Photo3, Middlemini, Mini, Pic,
MiniTitle,MiniText} from './middleStyle';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';
import photo3 from './img/photo3.png';
import photo4 from './img/girl.png';
import {Button, ButtonText} from './bodyStyle'
export default class middle extends Component {
    render() {
        return (
        <Middle>
        <Text>Inspiration Collection</Text>
        <Cont1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Cont1>
        <Cont2>
            <Photo1 src={photo1}/>
            <Photo2 src={photo2}/>
            <Photo3 src={photo3}/>

        </Cont2>
             <Middlemini>
            <Mini>
                <MiniTitle>Beautify Your Space</MiniTitle>
                <MiniText>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</MiniText>
                <Button>
                    <ButtonText>Learn more</ButtonText>
                 </Button>
            </Mini>
            <Pic src={photo4}/>
            </Middlemini>
       
       </Middle>
        );
    }
}
