import {useState} from 'react';

import './ConcatinateName.css'

const ConcatinateName = () =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [concatinateName, setConcatinateName] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        setConcatinateName(firstName + " " + lastName);

     }
    return (
        <div className='concatinate'>
            <form onSubmit={handleSubmit} className='concatinate-form'>
                <input type= 'text' placeholder="firstName"  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type= 'text' placeholder="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type='submit' className='submit'/>
            </form>
            <span>The Concatinated Name is: {concatinateName}</span>
        </div>
    )
}
export default ConcatinateName;