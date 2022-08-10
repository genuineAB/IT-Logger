import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LogsItem from './LogsItem';
import PreLoader from '../layout/PreLoader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, [])

    const getLogs = async () => {
        setLoading(true);
        const res = await axios.get('/logs');

        setLogs(res.data);
        setLoading(false);
    }

    if(loading){
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

export default Logs