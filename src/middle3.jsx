import React, { Component } from 'react'
import {Middle3, Title, Text, Photo, Pic, Pic1, Pic2, Colom, Parag, Desc} from './middle3Style'
import style1 from './img/style1.png';
import style2 from './img/style2.png';
import style3 from './img/style3.png';
export default class middle3 extends Component {
    render() {
        return (
           <Middle3>
               <Title>How It Works</Title>
               <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
               <Photo>
                <Colom>
                <Pic src={style1}/>
                <Parag>Purchase Securely</Parag>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
                </Colom>
                <Colom>
               <Pic1 src={style2}/>
             
               <Parag>Ships From Warehouse</Parag>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
                </Colom>
                <Colom>
                <Pic2 src={style3}/>
                <Parag>Style Your Room</Parag>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
                </Colom>
               </Photo>
           </Middle3>
        )
    }
}
