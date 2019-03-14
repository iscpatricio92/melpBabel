import React from 'react';
import ReactStars from 'react-stars'
export default class StarsComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state={};
        this.state={...props};
    }
    render() {
        const a=this.state.count;
        return (
            <div className="pb-2">
                <ReactStars 
                coount={5}
                value={a} 
                size={20} 
                edit={false}
                color2={'#ffd700'} />
            </div>
        );
    }
}