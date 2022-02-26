import { getUsers } from '../../services/getUsers'
import { useState, useEffect } from 'react'
import { UserList } from './UserList'

export const MainArea = () => {

  const [state, setState] = useState([])

  useEffect( () => {
    getUsers( )
        .then( users => {            
            setState(users)
        })
}, [])

console.log(state);

    return (
      <>
                {
                    state.map( user => (
                        <UserList 
                            key={ user.id }
                            { ...user }
                        />
                    ))
                }

      </>
    )
  }