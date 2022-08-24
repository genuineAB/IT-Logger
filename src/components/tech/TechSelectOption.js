import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import getTechs from '../../actions/techAction';

const TechSelectOption = ({tech: {techs, loading}, getTechs}) => {

    getTechs();
    
  return (
    !loading && techs !== null && techs !== undefined && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
    </option>)
  )
}


TechSelectOption.propTypes = {
    getTechs: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        tech: state.tech.state
    }
}
export default connect(mapStateToProps, {getTechs})(TechSelectOption)