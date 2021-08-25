import React, { Component } from 'react'
import {Middle2, Title, Text, Pic, Pic1,Pic2, Photo, Line, PicText, PicCon} from './middle2Style'
import dining from './img/dining.png';
import living from './img/living.png';
import bedroom from './img/bedroom.png';

export default class middle2 extends Component {
    render() {
        return (
            <Middle2>
                <Title>Browse The Range</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Photo>
                    <PicCon>
                    <Pic src={dining}/>
                    <PicText>Dining</PicText>
                    </PicCon>
                    <PicCon>
                    <Pic1 src={living}/>
                    <PicText>Living</PicText>
                    </PicCon>
                    <PicCon>
                    <Pic2 src={bedroom}/>
                    <PicText>Bedroom</PicText>
                    </PicCon>
                </Photo>
                <Line></Line>
            </Middle2>
        )
    }
}
