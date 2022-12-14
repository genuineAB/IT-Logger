import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOption from '../tech/TechSelectOption';
import { updateLogs } from '../../actions/logsAction';

const EditLogModal = ({updateLogs, current}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current])

    const onSubmit = () => {
        if(message.trim().length === 0 || tech.trim().length === 0){
            M.toast({html: 'Please enter a message and tech'});
        }
        else{
            const updateLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLogs(updateLog);
            M.toast({html: 'Logs Updated'});
            window.location.reload();
            

            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
        
    }
    

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
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
const modalStyle = {
    widht: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    updateLogs: PropTypes.func.isRequired,
    current: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        current: state.log.current
    }
}
export default connect(mapStateToProps, {updateLogs})(EditLogModal);