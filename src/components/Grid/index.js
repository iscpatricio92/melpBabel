import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { isUndefined } from 'util';
import CardComponent  from '../Cards/';
export default class GridComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={...props};
    }
    render() {
        const{data}=this.props;
        let Cols;
        if(isUndefined(data.length)){
            return <p>No hay datos</p>;
        }else{
            Cols=(data).map((itm,i)=>{
                return(
                    <Col className="p-2" xs="12" sm="6" lg="3" key={i.toString()}>
                        <CardComponent data={itm} /> 
                    </Col>
                );
            });
        }
    
        return (
        <Container  className="mt-3 listContact">
            <Row>
                {Cols}
            </Row>                
        </Container>
        );
        
    }
}
