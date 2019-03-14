import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { isUndefined } from 'util';
import CardComponent  from '../Cards/';
export default class GridComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={date:[]};
    }
    componentDidMount(){
        console.error(this.props.data);
        this.setState({date:this.props.data});
    }
    dynamicSort(property) {
        var sortOrder = 1;
    
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
    
        return function (a,b) {
            if(sortOrder === -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    }
    sorted (){
        /*
        //console.log(this.props);
        let arrayCopy = [...this.props.data];
        //console.log(arrayCopy);
        arrayCopy.sort(this.compareBy('rating'));
        this.setState({data: arrayCopy});
        */
       console.log(this.state.data);
       (this.state.data).sort(this.dynamicSort("city"));
    }
    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }
    render() {
        console.log(this.state);
        let{data}=this.props;
        let Cols;
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
            <Row className="text-right hidden">
                <Col xs="12">
                    <Button color="info" onClick={()=>{this.sorted()}}>
                    <i className="fa fa-sort"></i>  Ordenar
                    </Button>
                </Col>
            </Row>
            <Row>
                {Cols}
            </Row>                
        </Container>
        );
        
    }
}
