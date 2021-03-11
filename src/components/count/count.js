import React from 'react';
import './count.css';
import { connect } from 'react-redux';


const Count = ({ count }) => {   
    return (
        <div className="count-container">
            <h1>{count}</h1>
        </div>
    )
}
const mapStateToProps = ({ count }) => ({ count });
export default connect(mapStateToProps)(Count);