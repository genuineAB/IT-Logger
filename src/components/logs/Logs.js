import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LogsItem from './LogsItem';
import PreLoader from '../layout/PreLoader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getLogs from '../../actions/logsAction'

const Logs = ({log : {logs, loading}, getLogs}) => {
    
    useEffect(() => {
        getLogs();
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
        {!loading && logs.length === 0 ? (<p className='center'></p>) : (
            logs.map(log => <LogsItem log={log} key={log.id}/>)
        )}
    </ul>
  )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        log: state.log
    }
}
export default connect(mapStateToProps, {getLogs})(Logs)