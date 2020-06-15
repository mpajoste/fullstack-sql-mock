import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';


import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      viewer: [],
      bid: '',
      search: null
    }
    this.getInfo = this.getInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateBid = this.updateBid.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.operationSearch = this.operationSearch.bind(this)
  }

  componentDidMount () {
    this.getInfo()
  }

  getInfo () {
    axios
    .get('/products')
    .then((result) => {
      this.setState({
        products: result.data,
        viewer: result.data[0]
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateBid (id) {
    axios
    .put(`/products/${id}`, {
      bid: this.state.bid
    })
    .then(() => {
      // this.getInfo();
    })
    .catch((err) => {
      console.error(err)
    })
  }

  clickItem (item) {
    this.setState({
      viewer: item
    })
  }

  searchItem(e) {
    let keyword = e.target.value;
    this.setState({
      search: keyword
    })
  }

  operationSearch () {
    this.state.products.filter((search) => {
      if(this.state.search !== null) {
        return search;
      } else if (search.item.includes(this.state.search)) {
        return search;
      }
    })

  }


  render(){
  
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange} searchItem={this.searchItem} state={this.state} search={this.operationSearch}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer viewer={this.state.viewer} handleChange={this.handleChange} bid={this.state.bid} update={this.updateBid} />
          </div>
          <div className="col-md-5 product-list-container">
            {/* <ProductList products={this.state.products} /> */}
            {this.state.products.map((product, index) => (<ProductList product={product} key={index} clickItem={this.clickItem} />))}
          </div>
        </div>
      </div>
    )
  }
}