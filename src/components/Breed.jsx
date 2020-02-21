import React, { Component } from 'react';
import CatsGrid from './CatsGrid';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {connect} from 'react-redux';
import {FETCH_BREED, SELECT_BREED, RESELECT_BREED, RESET_GRID_LENGTH} from '../actions';

class Breed extends Component {
    componentDidMount() {
        // kuhaa daw ang tanan breed sa iring
        this.props.FETCH_BREED();

        // Gikan ka sa Cat Detail Page no? Unsa nga breed sa iring imong last gi tan-aw?
        const selected = queryString.parse(this.props.location.search);
        if(typeof selected.breed !== "undefined"){
            // Ahhh mao diay ni nga breed.
            this.props.RESELECT_BREED(selected.breed);
            this.props.RESET_GRID_LENGTH();
        }
    }
    
    render() { 
        return ( 
        <div>
            <h1>Cat Browser</h1>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="breed">Breed</label>
                    <select name="breed" id="breed" className="form-control" onChange={this.props.SELECT_BREED} value={this.props.selected}>
                        <option value="" key="">Select Breed</option>
                        { this.props.breed.map(cat => <option key={cat.id} value={cat.id} >{cat.name} </option>)}
                    </select>
                </div>
            </div>
            {/* E display imong iring sok    */}
            <CatsGrid id={this.props.selected}/>
        </div> 
        );
    }
}

const mapStateToProps = state => ({
    breed: state.breed.breed,
    selected: state.breed.selected
})
 
export default connect( mapStateToProps, { FETCH_BREED, SELECT_BREED, RESELECT_BREED, RESET_GRID_LENGTH })(withRouter(Breed));