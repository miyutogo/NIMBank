import React, { useState } from 'react';
/* import from '@material-ui/core' */

function CreateAcct() {

    const [client, setClientAcct] = useState([])
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [balance, setBalance] = useState('')
    const [accountNumber, setAccountNumber] = useState ('')

    const handleAcctNum = (e) => {
        let date = new Date();
        let min = (date.getMinutes()).toString().substr(-2);
        setAccountNumber(Math.floor(Math.random() * 90) + min)
    }

    const handleCreate = (e) => {
        handleAcctNum()
        
        e.preventDefault();

        const newAcctDetails = {
            AccountNumber : accountNumber,
            Name : name,
            Email : email,
            Password : password,
            Balance : balance
        }

        
        if (localStorage.getItem('client')) {
            
            let container = []
            for (let i = 0; i < JSON.parse(localStorage.getItem('client')).length; i++) {
                container.push(JSON.parse(localStorage.getItem('client'))[i])
            } 

            container.push(newAcctDetails)
            
            localStorage.setItem('client',JSON.stringify(container))
        } else {
           let container = []

           container.push(newAcctDetails)
            
           localStorage.setItem('client',JSON.stringify(container))
        }

    
    }


        return (
            
            <div className="Accounts">
                <h2>Create A Client Account</h2>
                <label> Name: </label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} /> <br/>
                <label> Email: </label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />  <br/>
                <label> Password: </label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />  <br/>
                <label> Initial Balance: </label>
                    <input type='number' value={balance} onChange={e => setBalance(e.target.value)} />  <br/>
                <button onClick={handleCreate}>Submit</button>
                </div>  
        )
    };

export default CreateAcct;