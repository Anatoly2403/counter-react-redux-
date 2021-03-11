import React from 'react';
import './buttons.css';
import Plus from './img/Plus.png';
import Minus from './img/Minus.png';
import ResetUp from './img/Vector.png';
import ResetDown from './img/Vector (1).png';
import { connect } from 'react-redux';
import { incr, decr, res } from './../../actions/actions';


const Buttons = ({ incr, decr, res }) => {
    return (
        <div className="buttons-container">
            <button className='inc' onClick={incr}>
                <img src={Plus} alt="Plus" />
            </button>
            <button className='dec' onClick={decr}>
                <img src={Minus} alt="Minus" />
            </button>
            <button className='res' onClick={res}>
                <img src={ResetUp} alt="reset" />
                <img src={ResetDown} alt="reset" />
            </button>
        </div>
    )
}

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = (dispatch) => ({
    incr: incr(dispatch),
    decr: decr(dispatch),
    res: res(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);