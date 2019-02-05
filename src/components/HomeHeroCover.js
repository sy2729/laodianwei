import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {ImgBg, CenterDiv, ImgBgContain, Cover, Button} from '../styled-components/styles';

class HomeHeroCover extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // imgArray: ['/images/homepage_bg1.webp', '/images/homepage_bg2.jpg', '/images/小锅米线_.png', '/images/土鸡米线_.png', '/images/拌米线_.png'],
      // imgArray: ,
      fadeIn: true,
      currentCoverIndex: 0,
      rotateDegree: 0,
    }
  }

  urlModifier(data) {
    // console.log(this.props.imgArray[this.state.currentCoverIndex])
    return `url(${data})`;
  }

  componentDidMount() {
    // switch the image - show the cover and them trigger the switch function
    setInterval(()=> {
      this.refs.cover.classList.add('active')
    }, 5000)

    // watch page scrolling
    window.addEventListener('scroll', ()=> {
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      let degree = Math.floor(scrollTop / 4)
      // performance consideration
      if(scrollTop <= window.innerHeight) {
        this.setState({
          rotateDegree: degree
        })
      }
    })
  }

  changeImage() {
   
    if(this.state.fadeIn) {
      this.refs.cover.classList.remove('active')
      this.setState({
        fadeIn: false,
        currentCoverIndex: this.state.currentCoverIndex + 1
      }, ()=> {
        if(this.state.currentCoverIndex >= this.props.imgArray.length - 1) {
          this.setState({
            currentCoverIndex: 0
          })
        }
      })
    }else {
      this.setState({
        fadeIn: true
      })
    }
  }

  render() {
    return (
      <>
        <CoverWrap className="flex flex-wrap">
        <EqualSquare>
          <LogoWrapper>
            <ImgBgContain style={{backgroundImage: 'url(/images/logo.png)'}} />
            <Cover style={{background: 'rgba(244, 239, 231,.95)'}}></Cover>
          </LogoWrapper>
          <TitleWrapper>
            <h3><span className="sub-info">老滇味</span><span className="sub-info">米线</span><span className="sub-info">New York</span></h3>
            <h1>The Rice Noodle</h1>
            <h2><span className="sub-info">Yunnan</span> • <span className="sub-info">味道</span></h2>
            <br/><br/><br/>
            <Button className="focus heavy" style={{width: '200px', height: '60px'}}>MENU</Button>
          </TitleWrapper>
        </EqualSquare>
        <EqualSquare>
          <ImgBgContain style={{backgroundImage: this.urlModifier(this.props.imgArray[this.state.currentCoverIndex].img), transform: `translateY(${this.state.rotateDegree}%)`}} ref="images"/>
          <Cover className="cover" ref='cover' onTransitionEnd = {this.changeImage.bind(this)}/>
        </EqualSquare>
      </CoverWrap> 
      </>
    )
  }
}

const CoverWrap = styled.div`
  height: 100vh;
  width: 100%;
`


const EqualSquare = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  min-width: 300px;
  position: relative;
  background: #F3EFE8;

  .cover {
    background: transparent;
    transition: background .6s;
    &.active {
      background: #F3EFE8;
    }
  }
`
const LogoWrapper = styled(CenterDiv)`
  width: 500px;
  height: 500px;
`
const TitleWrapper = styled(CenterDiv)`
  min-width: 400px;
  h1 {
    font-size: 3.5em;
  }

  .sub-info {
    margin: 0 15px;
  }
`

const mapStateToProps = state => {
  return { imgArray: state.homepageSlide };
};

// const 
export default connect(
  mapStateToProps
)(HomeHeroCover);