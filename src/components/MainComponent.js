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
import { Routes,Route,Navigate, useParams } from "react-router-dom";

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: ITEMS
        }
    }

    render(){
        const ItemWithId = () => {
            // console.log(match.params)
            let {itemId} = useParams();
            return(
                <ItemDetail item={this.state.items.filter(item =>
                        item.id === itemId)[0]}/>
                        // this doens't work!!
            );
        }

        return(
            <div>
                <Header />
                <NavigationBar />
                <Routes>
                    <Route path='/home' element={<Home items={this.state.items} />} />
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

