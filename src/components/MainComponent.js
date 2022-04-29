import React, {Component} from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import UserForm from "./UserForm";
import OfficialGear from "./OfficailGear";
import About from "./About";
import Footer from "./Footer";
import ItemDetail from "./ItemDetail";
import { ITEMS } from "../shared/items"
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { fetchItemList } from "../redux/ActionCreators";


const mapStateToProps = (state) => {
  return {items: state.items}
};

const mapDispatchToProps = {
    fetchItemList: () => fetchItemList()
}

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
            items: ITEMS
        }
    }

    render(){
        const ItemWithId = () => {
          let { itemId } = useParams();
          console.log(typeof(this.state.items[1].id));
          console.log(typeof(+itemId));
          return (
            <ItemDetail
              item={this.state.items.filter((item) => item.id === +itemId)[0]}
            />
          );
        }

        return(
            <div>
                <Header />
                <NavigationBar />
                <Routes>
                    <Route exact path='/home' element={<Home items={this.state.items} />} />
                    <Route path='/home/:itemId' element={<ItemWithId/>} />
                    <Route path='/userform' element={<UserForm />} />
                    <Route path='/officialgear' element={<OfficialGear />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Navigate to="/home"/>} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

