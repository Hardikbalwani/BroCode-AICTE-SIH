import React, { useState } from 'react'
import TempContext  from './TempContext'


const UserContext = (props) => {
    const initial = ''
    const [userName, setUserName] = useState(initial);
    return (
        <TempContext.Provider value={{ userName,setUserName}}>
          {props.children}
        </TempContext.Provider>
      )
}

export default UserContext