import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItems from './TechItems';
import getTechs from '../../actions/techAction';

const TechListModal = ({tech:{techs, loading}, getTechs }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])


   
  return (
    <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
            <h4>Technician List</h4>
            <ul className='collection'>
                {!loading && techs !== null && techs !== undefined && techs.map( tech => (
                    <TechItems tech={tech} key={tech.id}/>
                    ))}
            </ul>
        </div>
    </div>
  )
}

TechListModal.propTypes = {
    getTechs: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        tech: state.tech.state
    }
}

export default connect(mapStateToProps, {getTechs})(TechListModal)