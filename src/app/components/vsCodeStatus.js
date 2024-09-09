import React, { useState, useEffect } from 'react'

function VsCodeStatus({codeStatus}) {

    const [vsStatus, setvsStatus] = useState("")
    useEffect(()=>{
            const fetchStatus = async () => {
                try{
                    const status  = await  fetchStatus(codeStatus)
                }catch{
                    return
                }
                
            }
    })
  return (
    <div>{vsStatus}</div>
  )
}

export default VsCodeStatus;