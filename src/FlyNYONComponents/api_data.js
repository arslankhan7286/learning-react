import React, { Component } from "react";
import Data from "./data.json"
import {getDogs } from '../apiCalls/basicCalls'
import { connect } from "react-redux";
class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   item: [],
      res: "",
      result: []
    };
  } onSearch() {
    const { res } = this.state;
    if (res) {
    //   fetch(`https://dog.ceo/api/breed/${res}/images/random/10`)
    //     .then((response) => response.json())
    //     .then((item) => this.setState({ item: item }));
    this.props.getDogssss(res)
    }
  }
  render() {
    const { dogs } = this.props;
    return (
      <div className="dogs">
        <div className="container">
          <div className="click">
            <select
              type="text"
              id="res"
              value={this.state.res}
              onChange={(event) => {
                this.setState({ res: event.target.value });
              }}
            >
              <option defaultChecked>Please choose a value</option>
              { Data.Selection.option.map((item, i)=> {
              return <option key={i}>{item.name}</option>
            })}
            </select>
            <button onClick={() => this.onSearch()}> Search </button>
            <br />
          </div>
          {dogs.length 
            ? dogs.map((value, id) => (
                <img
                  key={id}
                  alt={id}
                  src={value}
                />
              ))
            : "The Item you are looking cannot be found"}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
    getDogssss : (res)=> dispatch(getDogs(res))
})
const stateToProps = (state) => ({
    dogs : state?.store.dogs || []
})
export default connect(stateToProps,mapDispatchToProps)(Dogs) ;
