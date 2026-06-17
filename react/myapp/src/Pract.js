import React, { useState } from 'react'

const Pract = () => {
    const[fi,setfi] = useState([
        {
            id:1,
            course:"java",
            fees:"40k"
        },
        {
            id:2,
            course:"python",
            fees:"30k"
        },
        {
            id:3,
            course:"react",
            fees:"40k"
        }
    ])

    const handledelete=(id)=>{
        console.log(id)


        const total=fi.filter((f)=>{
            return(
                f.id!==id
            )
        })

        setfi(total)
    }



  return (
    <div>
        {fi.map((h)=>{
            return(
                <div key={h.id}>

                    <h4>joing course {h.course}</h4>
                    <h4>pais fees {h.fees}</h4>
                    <button onClick={()=>handledelete(h.id)}>save</button>



                </div>
            )
        })}
      
    </div>
  )
}

export default Pract


