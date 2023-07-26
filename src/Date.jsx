import React from 'react'


const Date = () => {
    let data=JSON
  return (
    <>
    
    <div>
        <table>
            <tr>
                <th>DATE</th>
            </tr>
            <tr>
                {data.map((x)=>{
                    return <li>{x.Date}</li>
                })}
            </tr>
        </table>

    </div>
    </>
  )
}

export default Date