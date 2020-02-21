import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {FETCH_CAT_DETAIL} from '../actions';

class CatDetail extends Component {

    componentDidMount(){
        this.props.FETCH_CAT_DETAIL(this.props.match.params.id);
    }
    
    render() { 
        const {url, breeds, id} = this.props.catdetail.cats;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Link to={`/?breed=${breeds.id}`}><button className="btn btn-primary">Back</button></Link>
                    </div>
                    <img src={url} className="card-img-top" alt={id} />
                    <div className="card-body">
                        <h4 className="card-title">{breeds.name}</h4>
                        <h5>Origin Type: {breeds.origin}</h5>
                        <h6>{breeds.temperament}</h6>
                        <p>{breeds.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    catdetail: state.catdetail
})
 
 
export default connect( mapStateToProps, { FETCH_CAT_DETAIL })(withRouter(CatDetail));