// import React, { Component } from 'react';
import styled from 'styled-components';

let mainColor = "#0E1E58";
let mainColor_hover = "#1A1C2E";
let mainColor_side='#1F316C';

let focusColor = "#b42b29";
let focusColor_hover = "#bc3736";
let focusColor_touched = "#951D1C";

const ImgBg = styled.div`
  background: transparent no-repeat center;
  background-size: cover;
  height: 100%;
  `
const ImgBgContain = styled(ImgBg)`
  background-size: contain;
  /* transition: transform .2s; */
  `

const CenterDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Cover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  padding: 10px 25px;
  text-align: center;
  border: none;
  border-radius: 2px;
  font-size: 1em;
  color: #F2EFE9;
  background: ${mainColor};
  cursor: pointer;
  transition: all .6s;
  &:hover {
    background: ${mainColor_hover};
    /* box-shadow: 2px 2px 5px 0 rgba(14,30,88,0.3), -2px -2px 5px 0 rgba(14,30,88,0.3); */
  }
  &.focus {
    background: ${focusColor};

    &:hover {
      background: ${focusColor_hover};
      /* box-shadow: 2px 2px 5px 0 rgba(149,29,28,0.3), -2px -2px 5px 0 rgba(149,29,28,0.3); */
    }
    
    &:active {
      box-shadow: 2px 2px 5px 0 rgba(149,29,28,0.3), -2px -2px 5px 0 rgba(149,29,28,0.3);
      background: ${focusColor_touched}
    }
  }
`

const FlexAutoBox = styled.div`
  flex: auto;
`

const Icon = styled.img`
  vertical-align: middle;
  height: 30px;
`

const SmallPiece = styled.span`
  display: inline-block;
  color: #7c7c7c;
  font-size: .9em;
  margin: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`
const LargePiece = styled.span`
  display: inline-block;
  color: #222;
  font-size: inherit;
  margin: 0;
  padding: 5px;
`

const DeepBg = styled.div`
  background: ${mainColor_hover};
  color: #fff;

`
  /* background-image: url(${props => props.img}); */
  /* background-image: url(${props.img || '/images/homepage_bg1.webp'}); */

export { ImgBg, CenterDiv, ImgBgContain, Cover, Button, Icon, SmallPiece, LargePiece, DeepBg };