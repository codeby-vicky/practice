import React from 'react'

const Payment = ({cart,setCart}) => {

    const handleDelete=(id)=>{

        const total = cart.filter((item)=>{

            return item.id !== id

        })

        setCart(total)

    }


    const totalPrice = cart.reduce((sum,item)=>{

        return sum + Number(item.price)

    },0)



  return (

    <div>

        <h1>Payment Page</h1>

        {

            cart.length===0 ?

            <h2>Cart is Empty</h2>

            :

            cart.map((item)=>{

                return(

                    <div key={item.id}>

                        <img
                        src={item.image}
                        width="120"
                        height="120"
                        alt=""
                        />

                        <h3>{item.username}</h3>

                        <h4>₹ {item.price}</h4>

                        <button
                        onClick={()=>handleDelete(item.id)}
                        >
                            Remove
                        </button>

                        <hr/>

                    </div>

                )

            })

        }

        <h2>Total Price : ₹ {totalPrice}</h2>

        <button>
            Proceed To Pay
        </button>

    </div>

  )

}

export default Payment