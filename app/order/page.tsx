'use client'

import { useState } from 'react'
import OrderForm from '../components/OrderForm'
import OrderConfirmation from '../components/OrderConfirmation'

export default function Order() {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const handleOrderSubmit = (details: any) => {
    setOrderDetails(details)
    setOrderPlaced(true)
  }

  return (
    <div className="order container">
      <h1>Place Your Order</h1>
      {orderPlaced ? (
        <OrderConfirmation details={orderDetails} />
      ) : (
        <OrderForm onSubmit={handleOrderSubmit} />
      )}
    </div>
  )
}

