import React,{useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLogs } from '../../actions/logsAction';
import TechSelectOption from '../tech/TechSelectOption';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message.trim().length === 0 || tech.trim().length === 0){
            M.toast({html: 'Please enter a message and tech'});
        }
        else{
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            addLogs(newLog);

            M.toast({html: `Log Added By ${tech}`});
            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
        
    }
    

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                    <label htmlFor='message'className='active'>
                        Log Message
                    </label>
                </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                    <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                        <option value='' disabled>
                            Select Technician
                        </option>
                        <TechSelectOption />

                    </select>
                </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                    <p>
                        <label>
                            <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={ e => setAttention(!attention)}/>
                        
                        <span>Needs Attention</span>
                        </label>
                    </p>
                    
                </div>
            </div>
        </div>

        <div className='modal-footer'>
            <button className="modal-close btn blue waves-effect waves-light" type="submit" name="action" onClick={onSubmit}>Enter
                <i className="material-icons right">send</i>
            </button>
        </div>
    </div>
  )
}

AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired
}

const modalStyle = {
    widht: '75%',
    height: '75%'
}




export default connect(null, {addLogs})(AddLogModal);