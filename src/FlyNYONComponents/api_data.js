import React, { Component } from "react";
import Data from "./data.json"
import {getDogs } from '../apiCalls/basicCalls'
import { connect } from "react-redux";
import Header from "./header";
import SimpleMenu from "./nav-bar";
import FooterMenu from "./footer";
class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dagData:[],
    favList:[],
    favItem:[],
      res: "",
      result: []
    };
  }
   onSearch() {
    const { res } = this.state;
    if (res) {
    this.props.getDogssss(res)
    .then((response)=>{
      let apiData=[]; 
      response.message.map((item)=>{
        let newItem={
          item,
          isFav:false
        }
        apiData.push(newItem);
      })
      this.setState({dagData:apiData});
    })
    }
  }
  removeItem = (array, action) => {
    return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
  }
  addFavouriteItem = (value) =>{
    let selectedItem=this.state.dagData.find(x => x.item === value.item);
    let isAlreadyExistItem = this.state.favItem.map((item, index) => {
      return item.item;
    }).indexOf(value.item);
      if(isAlreadyExistItem=== -1){
    selectedItem.isFav= true;
    this.setState({favItem:[...this.state.favItem, selectedItem]})
    }else{
      let favList=this.state.favItem;
      favList=this.removeItem(favList, {index:isAlreadyExistItem});
      let apiDataArray= [];
      this.state.dagData.map((val)=>{
        if(val.item===value.item){
          val.isFav=false;
        }
        return apiDataArray.push(val);
      })
      this.setState({favItem:favList, dagData:apiDataArray});
    }
  }
  render() {
    const { dogs , message } = this.props;
    return (
      <div className="background">
        <Header />
        <SimpleMenu />
        <div className="container">
      <div className="dogs">
          <div className="click">
            <select
              type="text"
              id="res"
              value={this.state.res}
              onChange={(event) => {
                this.setState({ res: event.target.value });
              }}
            >
              <option defaultChecked>Please Choose a Dog's Category</option>
              { Data.Selection.option.map((item, i)=> {
              return <option key={i}>{item.name}</option>
            })}
            </select>
            <button onClick={() => this.onSearch()}> Search </button>
            <br />
          </div>
          <div className="img_class">
          {this.state.dagData && this.state.dagData.length >0
            ? this.state.dagData.map(value => (
              <div className="img_item">
                <img
                  src={value.item}
                  />
                  <button  onClick={() => this.addFavouriteItem(value)}><i className={value.isFav ? "fa fa-heart isFav" :"fa fa-heart"}></i></button>
                  </div>
            ))
                  : (<p>{message? message:''}</p>)
                  }
            </div>
        </div>
          <hr/>
        <div className="favouriteItem">
        {this.state.favItem && this.state.favItem.length >0 &&
         <h1>FavouriteItem:</h1>}
          {this.state.favItem && this.state.favItem.length >0
            && this.state.favItem.map(value => (
              <div className="img_item">
                <img
                  src={value.item}
                  />
                  <button onClick={() => this.addFavouriteItem(value)}><i className="fa fa-heart heart_clr"></i> </button>

                  </div>
            ))
                  }
        </div>
      </div>
      <FooterMenu />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
    getDogssss : (res)=> dispatch(getDogs(res))
})
const stateToProps = (state) => ({
  
    dogs : state?.store.dogs || [],
    message:state?.store.message || ''
})
export default connect(stateToProps,mapDispatchToProps)(Dogs) ;
