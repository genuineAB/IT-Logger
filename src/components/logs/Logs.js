import React, { useEffect} from 'react';
import LogsItem from './LogsItem';
import PreLoader from '../layout/PreLoader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getLogs from '../../actions/logsAction'

const Logs = ({log : {logs, loading}, getLogs}) => {
    
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])

    if(loading || (logs === null)){
        return(
            <PreLoader />
        )
    }

   
  return (
    <ul className='collection with-header'>
        <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (<p className='center'>No logs to show. Add Logs</p>) : (
            logs.map(log => <LogsItem log={log} key={log.id}/>)
        )}
    </ul>
  )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        log: state.log
    }
}
export default connect(mapStateToProps, {getLogs})(Logs)