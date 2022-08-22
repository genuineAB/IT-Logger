import React from 'react';
import { connect } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTech } from '../../actions/techAction';

const TechItems = ({tech:{id, firstName, lastName}, deleteTech}) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({html: `${firstName} ${lastName} deleted from technician list`});
    window.location.reload();
  }
  return (
    <li className='collection-item'>
        <div>
            {firstName} {lastName}

            <a href='#!' className='secondary-content' onClick={onDelete}>
              <i className='material-icons grey-text'>delete</i>
            </a>
        </div>
        
    </li>
  )
}

TechItems.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, {deleteTech})(TechItems)