import React from 'react';
import { Card, Row, Col, CardImg, CardBody,
  CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import StarsComponent from '../Stars';
import ModalComponent from '../Modal';
import './Cards.scss';
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
  } from 'react-share';
export default class CardComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={data:[]};
        this.state={...props};
    }


    componentWillReceiveProps(newProps) {
        this.setState({...newProps});
    }

    render() {
        const a=this.state.data;
        const shareUrl = a.contact.site;
        return (
            <Card className="shadow p-3 mb-5 bg-white rounded">
                <CardImg top width="100%" src="http://lorempixel.com/300/150/food/" alt={a.name} />
                <CardBody className="text-left">
                    <CardTitle className="pb-0 mb-0"><h3 className="">{a.name}</h3></CardTitle>
                    <CardSubtitle><StarsComponent count={a.rating} /></CardSubtitle>
                    
                        <Row>
                            <Col xs="2"><i className="fa fa-map"></i></Col>
                            <Col xs="10">
                                <ModalComponent address={a.address} titleRestaurant={a.name} buttonLabel={a.address.street +", "+a.address.city} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-phone"></i></Col>
                            <Col xs="10"><p><a href={"tel:"+a.contact.phone}>{a.contact.phone}</a></p></Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-envelope"></i></Col>
                            <Col xs="10"><p><a href={"mailto:"+a.contact.email}>{a.contact.email}</a></p></Col>
                        </Row>
                        <Row>
                            <Col xs="2"><i className="fa fa-globe"></i></Col>
                            <Col xs="10"><p><a  href={a.contact.site}>{a.contact.site}</a></p></Col>
                        </Row>
                    
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col xs="6">
                            <FacebookShareButton
                                url={shareUrl}
                                quote={a.name}
                                className="share-button">
                                <FacebookIcon
                                size={32}
                                round />
                            </FacebookShareButton>
                        </Col>
                        <Col xs="6">
                            <TwitterShareButton
                                url={shareUrl}
                                quote={a.name}
                                className="share-button">
                                <TwitterIcon
                                size={32}
                                round />
                            </TwitterShareButton>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
}