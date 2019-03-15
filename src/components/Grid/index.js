import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { isUndefined } from 'util';
import CardComponent  from '../Cards/';
import _ from 'lodash';
import PaginateComponent from '../Paginate/'
export default class GridComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={data:[],sorted:false};
    }
    componentDidMount(){
        this.setState({data:this.props.data});
    }

    sorted (filter){
        if(this.state.sorted){
            const sortedCollectionWithKey =  _.sortBy((this.state.data), filter) // 
            this.setState({data:sortedCollectionWithKey});
            this.setState({sorted:false});
        }
        else{
            const sortedCollectionWithKey =  _.sortBy((this.state.data), filter).reverse() // 
            this.setState({data:sortedCollectionWithKey});
            this.setState({sorted:true});
        }
    }
    render() { 
               
        let{data}=this.state;
        let Cols=[];
        if(isUndefined(data.length)){
            return <div>No hay datos</div>;
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
            <Row className="text-right">

                <Col sm="12" className="text-right">
                    <p className="mt-1 mr-2 d-inline">Ordenar por:</p>
                    <Button className="mr-1" color="info" onClick={()=>{this.sorted('name')}}>
                    <i className="fa fa-sort"></i>  A-Z
                    </Button>
                    <Button color="info" onClick={()=>{this.sorted('rating')}}>
                    <i className="fa fa-thumbs-up mr-1"></i><i className="fa fa-thumbs-down"></i>
                    </Button>
                </Col>
            </Row>
            <Row>
                {Cols}
            </Row>   
            <Row>
                <Col xs="12">
                <PaginateComponent />
                </Col>
            </Row>             
        </Container>
        );
        
    }
}
