import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from "./LoadingComponent"
import { SearchBar } from "./Search"

function RenderItemCard({item}){
    return(
        <Card>
            <Link to={`/item/${item.id}`}>
                <CardImg width="100%" src={item.image} alt={item.title} />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>${item.price}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

export default function Home(props) {

    const itemInfo = props.itemsHolder;

    const itemCards = itemInfo.items.map( (item ,index) => {
        return(
            <div key={index} className="col-sm-5 col-md-3 col-xl-2 m-1">
                <RenderItemCard item={item} />
            </div>
        );
    });

    if(itemInfo.isLoading){
        return (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
    }

    if (itemInfo.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>{itemInfo.errMess}</h4>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        {/* <!-- search bar  --> */}
        <SearchBar />
        
        {/* <!-- item cards, populated by script --> */}
        <div className="row justify-content-center">{itemCards}</div>
      </div>
    );
}