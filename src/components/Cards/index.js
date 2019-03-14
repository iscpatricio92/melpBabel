import React from 'react';
import { Card, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import StarsComponent from '../Stars';
import './Cards.scss';
export default class CardComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={};
        this.state={...props};
    }
    render() {
        const a=this.state.data;
        console.log(a);
        return (
            <div>
            <Card>
                <CardImg top width="100%" src="http://lorempixel.com/300/150/food/" alt={a.name} />
                <CardBody className="text-left">
                    <CardTitle className="pb-0 mb-0"><h1 className="">{a.name}</h1></CardTitle>
                    <CardSubtitle><StarsComponent count={a.rating} /></CardSubtitle>
                    
                    <CardText>
                        <Row>
                            <Col xs="2"><i className="fa fa-2x fa-map-pin"></i></Col>
                            <Col xs="10">{a.address.street +", "+a.address.city}</Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-2x fa-phone"></i></Col>
                            <Col xs="10"><a href={"tel:"+a.contact.phone}>{a.contact.phone}</a></Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-2x fa-envelope"></i></Col>
                            <Col xs="10"><a href={"mailto:"+a.contact.email}>{a.contact.email}</a></Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-2x fa-globe"></i></Col>
                            <Col xs="10"><a target="_blank" href={a.contact.site}>{a.contact.site}</a></Col>
                        </Row>
                    </CardText>
                    <Button>Ver mapa</Button>
                </CardBody>
            </Card>
            </div>
        );
    }
}