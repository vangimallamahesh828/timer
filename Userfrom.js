import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import "./Color.css"
function Userfrom() {
    let mydata = useDispatch()
    let [name, setname] = useState("")
    let [source, setsource] = useState("")
    let [des, setdes] = useState("")
    let [start, setstart] = useState("")
    let [end, setend] = useState("")
    let [id, setid] = useState("")


    const handleSubmit = (e) => {
        const newEntry = {
            id: uuidv4(), 
            name: name,
            source: source,
            designation: des,
            startdate: start,
            enddate: end
        };
        mydata({ type: 'Add', payload: newEntry })
        mydata({ type: 'updatename', payload: name });
        mydata({ type: 'updatsource', payload: source });
        mydata({ type: 'updatedis', payload: des });
        mydata({ type: 'updatestart', payload: start });
        mydata({ type: 'updateend', payload: end });

        setname("");
        setsource("");
        setdes("");
        setstart("");
        setend("");

    };

    return (
        <>
            
            <div className='form'>
            <p>USER FORM SUBMIT::</p>
            <div >
                <div className=' row'>
                    <div className='col-2'>
                        <label>name</label><br />
                        <input type='text' value={name} onChange={(e) => {
                            let data = e.target.value
                            setname(data)

                        }} />
                    </div>

                </div>
            </div>
            <br />
            <div>
                <div className=' row'>
                    <div className='col-2'>
                        <label>source</label><br />
                        <input type='text' value={source} onChange={(e) => {
                            let data = e.target.value
                            setsource(data)

                        }} />
                    </div>

                </div>
            </div>
            <div>
                <div className=' row'>
                    <div className='col-2'>
                        <label>disgination</label><br />
                        <input type='text' value={des} onChange={(e) => {
                            let data = e.target.value
                            setdes(data)

                        }} />
                    </div>

                </div>
            </div>
            <div>
                <div className=' row'>
                    <div className='col-2'>
                        <label>startdate</label><br />
                        <input type='date' value={start} onChange={(e) => {
                            let data = e.target.value
                            setstart(data)

                        }} />
                    </div>

                </div>
            </div>
            <div>
                <div className=' row'>
                    <div className='col-2'>
                        <label>enddate</label><br />
                        <input type='date' value={end} onChange={(e) => {
                            let data = e.target.value
                            setend(data)

                        }} />
                    </div>

                </div>
            </div>
            <button className=' btn btn-danger ' onClick={handleSubmit}  >submit</button>
            </div>
          
           

        </>
    )
}

export default Userfrom