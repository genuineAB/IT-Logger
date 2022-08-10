import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TechItems from './TechItems';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, [])

    const getTechs = async () => {
        setLoading(true);
        const res = await axios.get('/technicians');

        setTechs(res.data);
        setLoading(false);
    }

   
  return (
    <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
            <h4>Technician List</h4>
            <ul className='collection'>
                {!loading && techs.map( tech => (
                    <TechItems tech={tech} key={tech.id}/>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default TechListModal