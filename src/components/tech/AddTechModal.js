import React,{useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTechs } from '../../actions/techAction';

const AddTechModal = ({addTechs}) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onSubmit = () => {
        if(firstName.trim().length === 0 || lastName.trim().length === 0){
            M.toast({html: 'Please enter a First Name and Last Name'});
        }
        else{
            const newTech = {
                firstName,
                lastName
            }
            addTechs(newTech);
            window.location.reload();

            M.toast({html: `${firstName} ${lastName} was added as a technician`});
            //Clear Fields
            setfirstName('');
            setlastName('');
        }
        
    }
    

  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Add New Technician</h4>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='firstName' value={firstName} onChange={e => setfirstName(e.target.value)} />
                    <label htmlFor='firstName'className='active'>
                        First Name
                    </label>
                </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='lastName' value={lastName} onChange={e => setlastName(e.target.value)} />
                    <label htmlFor='lastName'className='active'>
                        Last Name
                    </label>
                </div>
            </div>
            
        </div>

        <div className='modal-footer'>
            {/* <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green btn-flat' >Enter</a> */}
            <button className="modal-close btn blue waves-effect waves-light" type="submit" name="action" onClick={onSubmit}>Enter
                <i className="material-icons right">send</i>
            </button>
        </div>
    </div>
  )
}
const modalStyle = {
    width: '30%',
    heigth: '30%'
}

AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
}

export default connect(null, {addTechs})(AddTechModal);