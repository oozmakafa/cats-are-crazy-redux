import React, { Component } from 'react';
import CatsCard from './CatsCard'
import {connect} from 'react-redux';
import {FETCH_CAT_BY_BREED, INCREMENT_GRID_LENGTH} from '../actions';

class CatsGrid extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.props.FETCH_CAT_BY_BREED(this.props.id);
        }
    }
    
    showNoCatsAvail = () => {
        // Wa man guro kay iring?
        if (this.props.catgrid.cats.length === 0){
            return (<p>No Cats Available</p>)
        }
    }
        
    render() { 
        const hasMore = this.props.catgrid.cats.length && this.props.catgrid.cats.length > this.props.catgrid.length; // Wait! Daghan pakag iring? Dungangi if naa pa (Sig breeding ug iring :D)
        return (
            <div className="container-fluid">
                {this.showNoCatsAvail()}
                <div className="row">
                    {
                        this.props.catgrid.cats.map(
                            (cat, index) => {
                                // Ipakita imong iring pero limit lang ha.
                                if(index < this.props.catgrid.length) return <CatsCard id={cat.id} image_url={cat.url} key={cat.id}/>
                                return "";
                            }
                        )}
                </div> 
                {/* Daghan paman ka tingali ug iring */}
                <button className="btn btn-success" disabled={!hasMore} onClick={this.props.INCREMENT_GRID_LENGTH}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    catgrid: state.catgrid
})

export default connect( mapStateToProps, { FETCH_CAT_BY_BREED, INCREMENT_GRID_LENGTH })(CatsGrid);