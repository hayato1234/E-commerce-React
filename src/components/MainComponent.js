import React, {Component} from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import UserForm from "./UserForm";
import OfficialGear from "./OfficailGear";
import About from "./About";
import Footer from "./Footer";
import ItemDetail from "./ItemDetail";
import Checkout from "./Checkout"
import {
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { fetchItemList, addToCart, deleteAllCart, deleteCart } from "../redux/ActionCreators";


const mapStateToProps = (state) => {
  return {
    itemsHolder: state.itemReducer,
    cartHolder: state.cartReducer
  }
};

const mapDispatchToProps = {
  fetchItemList: () => fetchItemList(),
  addToCart: (item) => addToCart(item),
  deleteCart: (item) => deleteCart(item),
  deleteAllCart: () => deleteAllCart()
};

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};


class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
          didMountCount: 0
        }
    }
    

    componentDidMount(){
      if(this.state.didMountCount===0){
          this.props.fetchItemList();
          this.setState={
            didMountCount: this.state.didMountCount++
          }
      }
    }

    render(){
        const ItemWithId = () => {
          let { itemId } = useParams();
          return (
            <ItemDetail
              item={
                this.props.itemsHolder.items.filter(
                  (item) => item.id === +itemId
                )[0]
              }
              addToCart={this.props.addToCart}
              cartHolder={this.props.cartHolder}
            />
          );
        }

        return (
          <div>
            <Header />
            <NavigationBar
              cartHolder={this.props.cartHolder}
              deleteCart={this.props.deleteCart}
              deleteAllCart={this.props.deleteAllCart}
            />
            <Routes>
              <Route
                path="/"
                element={<Home itemsHolder={this.props.itemsHolder} />}
              />
              <Route path="/item/:itemId" element={<ItemWithId />} />
              <Route path="/userform" element={<UserForm />} />
              <Route
                path="/officialgear"
                element={
                  <OfficialGear
                    cartHolder={this.props.cartHolder}
                    addToCart={this.props.addToCart}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/checkout"
                element={
                  <Checkout
                    cartHolder={this.props.cartHolder}
                    deleteAllCart={this.props.deleteAllCart}
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

