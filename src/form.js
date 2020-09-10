import React , {useState, useEffect} from 'react';

import firebase from './firebase';



const Form = (props) => {


    const [value , setValue] = useState({
        age:'',
        name:'',
        lastName:''
    })

    // const [age , setAge] = useState();
    // const [name , setName] = useState('');
    // const [lastName , setLastName] = useState('');


    const handleChange = (e) => {
        const target=e.target;
        const namee=target.name;
        const valuee=target.value;
        setValue({
            ...value,
            [namee]:valuee //ushadir exirr ...value-n obekti heta pti anunnery chbrni
        });
    }


    const onSubbmit = (e) => {
        e.preventDefault();
        firebase
        .firestore()
        .collection('students')
        .add({
            age:value.age,
            name:value.name,
            lastName:value.lastName,
            
        })
        .then(() =>{
            // setAge('');
            // setName('');
            // setLastName('');


            
            setValue({
                age:'',
                name:'',
                lastName:''
            });
        })
    }




    return(
        <div>
            <form onSubmit={onSubbmit}>
                <h1>ADD Students Data</h1>
                <hr/>
                <div>
                    <label>Age</label>
                    <input type='number' value={value.age} onChange={handleChange} name='age'/>
                    {/* <input type='number' value={value.age} onChange={e => setAge(e.currentTarget.value)}/> */} 
                </div>
                <hr/>
                <hr/>
                <div>
                    <label>Name</label>
                    <input type='text' value={value.name} onChange={handleChange} name='name'/>
                </div>
                <hr/>
                <hr/>
                <div>
                    <label>LastName</label>
                    <input type='text' value={value.lastName} onChange={handleChange} name='lastName' />
                </div>
                <hr/>
                <hr/>
                <button style={{backgroundColor:'green',borderRadius:'80%'}}>ADD</button>
            </form>
        </div>
    )
}

export default Form;