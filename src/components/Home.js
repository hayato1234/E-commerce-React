import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from "./LoadingComponent"

function RenderItemCard({item}){
    return(
        <Card>
            <Link to={`/home/${item.id}`}>
                <CardImg width="100%" src={item.image} alt={item.title} />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    {/* <CardText>{item.description}</CardText> */}
                    <CardText>${item.price}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

export default function Home(props) {

    const itemInfo = props.itemsHolder;

    const itemCards = props.itemsHolder.items.map(item => {
        return(
            <div key={item.id} className="col-sm-5 col-md-3 col-xl-2 m-1">
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
        <div className="form-row mt-4 mb-2">
          <div className="col-md-8 mx-auto">
            <div className="input-group input-group-lg">
              <input
                className="form-control"
                type="text"
                placeholder="Search for items..."
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  <i className="fa fa-search fa-lg" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* {console.log(props.itemsHolder.isLoading)} */}
        {/* <!-- item cards, populated by script --> */}
        <div className="row justify-content-center">{itemCards}</div>
      </div>
    );
}