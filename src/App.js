import React , {useState , useEffect} from 'react';



import Form from './form';

import {db , auth} from './firebase';

import './style.css';



class App extends React.Component {
    constructor(){
        super();
        this.state={
            students:[]
        }
        this.fetchArr=this.fetchArr.bind(this);
    }


    fetchArr(){
        console.log('Mounting');
        // console.log(db)
        db.collection('students')
        .get()
        .then(snapshot => {
            // console.log(snapshot)
            const students = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                students.push(data);
            })
            this.setState({
                students:students
            },() => this.fetchArr())
            console.log(students)

        })
        .catch(error => console.log('ERROR'))
    }





    componentDidMount(){
        this.fetchArr();
    }

    




     addNewStudent = () => {
        db.collection('students')
        .add({
            age:29,
            name:'Rafo',
            lastName:'Torosyan',
            join:{
                nanoseconds:5
            }
        })
    }

    










    render(){
        return(
            <div>
                <center><Form/></center>
                <hr/>
                <div style={{backgroundColor:'red'}}>!</div>
                <hr/>
                <h1>Add Students Data BUTTON</h1> <button onClick={this.addNewStudent}>ADD</button> 
                <hr/>
                <div style={{backgroundColor:'red'}}>!</div>
                <hr/>

                <center style={{fontSize:'50px'}}>Students List</center>
                {   
                    this.state.students.map((item,index) => {
                        return(
                            <div key={index} className='div1'>
                                
                                    <h1> {item.age} </h1><hr/>
                                    <h1> {item.name} </h1><hr/>
                                    <h1> {item.lastName}</h1><hr/>
                                    {/* <h1> {item.join.nanoseconds} </h1> */}
                                    <hr/>
                                    <div style={{backgroundColor:'red'}}>!</div>
                                    <hr/>
                            </div>
                            
                        )
                    })
                }
                
            </div>
        )
    }
}

export default App;