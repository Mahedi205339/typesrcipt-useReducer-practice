import React, { useState } from 'react'

const NewUser = () => {

    const [userName, setUserName] = useState("");
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
        event.preventDefault()
    }

    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" name="" placeholder='Enter your user name' id=""
                value={userName}
                onChange={handleUserNameChange}
            />
            <button onClick={handleClick}>Show Name</button>
            <p className='text-xl font-bold text-violet-800'>
                {userName}
            </p>
        </div>
    )
}

export default NewUser