import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import axios from 'axios';
import TechItems from './TechItems';
import getTechs from '../../actions/techAction';

const TechListModal = (/*{tech:{techs, loading}, getTechs }*/) => {
    const [techs, setTechs] = useState(null);
    const [loading, setLoading] = useState(false);
    console.log(techs);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        setLoading(true);
        const res = await axios.get('/techs');

        setTechs(res.data);
        setLoading(false);
    }

   
  return (
    <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
            <h4>Technician List</h4>
            <ul className='collection'>
                {!loading && techs !== null && techs.map( tech => (
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
        tech: state.tech
    }
}

export default connect(mapStateToProps, {getTechs})(TechListModal)