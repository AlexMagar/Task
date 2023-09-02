import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap'

export const Task = () => {
    const [count, setCount] = useState(0)

    const hanldeOnClick = () =>{
        const amount = 1
        setCount( currentCount => {
            return currentCount + amount
        })
    }

  return (
    <Fragment>
        <Button onClick={hanldeOnClick}>Add</Button>
        <p>{count}</p>
    </Fragment>
  )
}
