import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleBid = this.handleBid.bind(this);
  }

  handleBid() {
    if (this.props.bid > this.props.viewer.curr_bid) {
      this.props.update(1)
    } else {
      alert('Cannot Place Bid. Please Bid Above Current Offer')
    }
    
  }


  
  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.viewer.image}></img> <br />
        <h2 style={{color: "black"}} >{this.props.viewer.item}</h2> <br />
        <form style={{backgroundColor: "white"}}>
        Original Post Price: ${this.props.viewer.min_cost} <br />
        Current Bid: ${this.props.viewer.curr_bid} <br />
        Bid Ends in {this.props.viewer.ends_in} Day(s) <br />
        New Bid: <input type="text" name="bid" onChange={this.props.handleChange}></input> <button onClick={this.handleBid}>Place Bid</button>
        </form>
      </div>
    )
  }
}