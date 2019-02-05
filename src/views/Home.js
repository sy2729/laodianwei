import React, { Component } from 'react';
import HomeHeroCover from '../components/HomeHeroCover'
import StarProduct from '../components/StarProduct';
import {connect} from 'react-redux'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {


  
  
  render() {
    let MenuDom;
    if(this.props.menu) {
      MenuDom = this.props.menu.map((eachCat, index)=> {
        let catContent = eachCat.content.map((each)=> {
            return <StarProduct info={each} key={each._id} menuId = {eachCat._id}/>
        })
  
        // create the dynamic note section - for subitms:
        let noteDom;
        if(eachCat.note) {
          let note = eachCat.note
          let notePriceDom = note.content.map((item)=> {
            return <Note key={item.name}>
                    <NoteItem>
                        <span>{item.name}</span>
                        <span>{item.en}</span>
                        <span>{item.price}</span>
                    </NoteItem>
                </Note>
          })
          noteDom = (
          <div className='t-center'>
            <p><Note>{note.name}</Note></p>
            <p><Note>{note.en}</Note></p>
            {notePriceDom}
          </div>)
        }
  
        let Dom = (
          <div>
            <div className='title'>
              <h2 className='t-center'>{eachCat.name}</h2>
              <h3 className='t-center'>{eachCat.en}</h3>
            </div>
            <p>{eachCat.note ? noteDom: null}</p>
            <div className="flex flex-wrap justify-center">
              {catContent}
            </div>
          </div>
        )
  
        return Dom
      })
    }

    return (
      <>
        <HomeHeroCover />
        <div>
          {MenuDom}
        </div>
      </>
    )
  }
}

// const menuCatWrap = styled.div`

// `

const Note = styled.span`
  color: #aaa;
  font-size: .9em;
`
const NoteItem = styled(Note)`
  margin: 0 5px;
`


const mapStateToProp = (state) => {
  return { menu: state.menu };
}

export default connect(mapStateToProp)(Home);