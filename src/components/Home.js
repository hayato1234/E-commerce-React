import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderItemCard({item}){
    return(
        <Card>
            <Link to={`/home/${item.id}`}>
                <CardImg width="100%" src={item.imgPath} alt={item.title} />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

export default function Home(props) {

    const itemCards = props.items.map(item => {
        return(
            <div key={item.id} className="col-md-3 m-1">
                <RenderItemCard item={item} />
            </div>
        );
    });

    return (
        <div className='container'>
            {/* <!-- search bar  --> */}
            <div className="form-row mt-4 mb-2">
                <div className="col-md-8 mx-auto">
                    <div className="input-group input-group-lg">
                        <input className="form-control" type="text" placeholder="Search for items..." />
                            <div className="input-group-append">
                                <button className="btn btn-sm btn-secondary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                    </div>
                </div>
            </div>

            {/* <!-- item cards, populated by script --> */}
            <div className="row">
                {itemCards}
            </div>
        </div>
    );
}