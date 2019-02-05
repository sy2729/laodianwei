import React from 'react';
import styled from 'styled-components';
// import {thumbsUpAction} from '../.data/actions';
// import { connect } from "react-redux";
import { Cover, ImgBgContain, CenterDiv, LargePiece, SmallPiece } from '../styled-components/styles';
import sendThumbsUpReq from '../.data/WebAPIUtils/thumbsup';

function StarProduct(props) {
  let DOM;
  let {price, unavailable, name, en, img, descrip, subname, _id, thumbsUp } = props.info
  unavailable =  unavailable === undefined ? false : unavailable;

  function thumbsUpAction(id) {
    let data = {
      menu_id: props.menuId,
      id: id
    }
    sendThumbsUpReq(data)
  }

  // create the dynamic subname content
  let subnameDom
  if(subname) {
     subnameDom = subname.map((item, index)=> {
       console.log(index)
      return <Subname key={index + item}>{item}</Subname>
     })
  };
  
  // create the dynamic price section depends on piece size
  let PriceDom = typeof price === 'object' && price instanceof Object ?
    (<p className="flex flex-column">
      <span><DishSizeTitle>S:</DishSizeTitle><SmallPiece>{"$" + (price.small || '')}</SmallPiece></span>
      <span><DishSizeTitle>L:</DishSizeTitle><LargePiece>{"$" + (price.large || '')}</LargePiece></span>
    </p>) :
    <span>{price ? "$" + price : ''}</span>

  //create dynamic dish shape based on whether have an image 
  if(img) {
    DOM = (
      <Wrap className="hot">
        <ProductWrap className='product-wrap flex align-center'>
          {unavailable ? <UACover /> : null}
          <ProductInfoWrap>
            <h3 className="ch">{name}</h3>
            <h3 className="en">{en || "UNKONWN"}</h3>
            <p>{descrip}</p>
            {subname ? 
              (<p>{subnameDom}</p>) :
              null}
          </ProductInfoWrap>
          <ImgWrap style={{backgroundImage: `url(${img}`}} />
        </ProductWrap>
        {unavailable ?
          null:
          (<PriceTag className="price-tag flex justify-space-between align-center">
            {PriceDom}
            <span className="thumbs-info" onClick={()=>thumbsUpAction(_id)}><i className="iconfont">&#xe647; </i><span>{thumbsUp || 0}</span></span>
          </PriceTag>)}
      </Wrap>
    )
  }else {
    DOM = (
      <Wrap>
        <ProductWrap className='product-wrap flex align-center'>
          <ProductInfoWrap>
            <h3 className="ch">{name}</h3>
            <h3 className="en">{en}</h3>
            <p>{descrip}</p>
            {subname ? 
              (<p>{subnameDom}</p>) :
              null}
            <span className="thumbs-info" onClick={()=>thumbsUpAction(_id)}><i className="iconfont">&#xe647; </i><span>{thumbsUp || 0}</span></span>
          </ProductInfoWrap>
          <PriceTagNum className="heavy">{PriceDom}</PriceTagNum>
        </ProductWrap>
        {unavailable ? <UACover /> : null}
      </Wrap>
    )
  }
  return (
    <>
      {DOM}
    </>
  )
}

const Wrap = styled.div`
  width: 33%;
  min-width: 300px;
  max-width: 450px;
  position: relative;
  margin: 10px;
  &.hot .product-wrap {
    box-shadow: 2px 2px 6px 1px rgba(211,61,59,0.3), -2px -2px 6px 1px rgba(211,61,59,0.3);
  }
  &.hot .price-tag {
    box-shadow: 2px 2px 6px 1px rgba(211,61,59,0.3), 0px -2px 6px 1px rgba(211,61,59,0.3);
  }

  margin: 40px 20px;
`

const ProductWrap = styled.div`
  border: 1px solid #ddd;
  position: relative;
  border-radius: 5px;
`

const ProductInfoWrap = styled.div`
  flex: auto;
  padding: 10px 15px;
  text-align: left;

  h3 {
    margin: 0 0 5px 0;
    &.ch {
      font-size: 1.3em;
    }
    &.en {
      color: #A63730;
      font-size: 1em;
    }
  }

  p {
    font-size: .9em;
    color: #a9a9a9;
  }
`

const ImgWrap = styled(ImgBgContain)`
  height: 100px;
  width: 30%;
  min-width: 100px;
`

const PriceTag = styled(CenterDiv)`
  left: 0;
  right: unset;
  width: 100%;
  top: 0;
  transform: translateY(-100%);
  background: #b42b29;
  color: #fff;
  font-size: 2em;
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;

  & .thumbs-info {
    font-size: .6em;

    i {
      vertical-align: middle;
    }
  }
`
const PriceTagNum = styled.div`
  width: "30%";
  padding: 0 10px;
`

// const PriceTagIcon = styled(Icon)`
//   position: absolute;
//   left: 10px;
// `

const DishSizeTitle = styled.span`
  color: #ccc;
  font-size: .8em;
`

// cover for unavailable product
const UACover = styled(Cover)`
  background: rgba(100,100,100,.5);
  filter: grayscale(.5);
  border-radius: 5px;
  cursor: not-allowed;
`

const Subname = styled.span`
  border-right: 1px solid #ccc;
  display: inline-block;
  padding: 0 7px;
`
// const PriceTag = styled(CenterDiv)`
//   right: 0;
//   left: unset;
//   height: 100%;
//   transform: translateX(100%);
//   background: #222;
//   top: 0;
//   background: #b42b29;
//   color: #fff;
//   font-size: 2em;
//   padding: 10px 20px;
//   border-top-right-radius: 5px;
//   border-bottom-right-radius: 5px;
// `


// const y = {
//   thumbsUpAction: (id)=>{
//     return {type: "THUMBS_UP", payload: id}
//   }
// }
// export default connect(null, y)(StarProduct);
export default StarProduct;