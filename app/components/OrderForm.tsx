'use client'

import { useState, FormEvent } from 'react'

interface OrderFormProps {
  onSubmit: (details: OrderDetails) => void
}

interface OrderDetails {
  name: string
  email: string
  phone: string
  cakeType: string
  size: string
  flavor: string
  frosting: string
  message: string
}

const cakeTypes = ['Birthday', 'Wedding', 'Anniversary', 'Custom']
const sizes = ['6 inch', '8 inch', '10 inch', '12 inch']
const flavors = ['Chocolate', 'Vanilla', 'Red Velvet', 'Lemon', 'Strawberry']
const frostings = ['Buttercream', 'Fondant', 'Whipped Cream', 'Cream Cheese']

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    email: '',
    phone: '',
    cakeType: '',
    size: '',
    flavor: '',
    frosting: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cakeType">Cake Type</label>
        <select
          id="cakeType"
          name="cakeType"
          value={formData.cakeType}
          onChange={handleChange}
          required
        >
          <option value="">Select Cake Type</option>
          {cakeTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="size">Size</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
        >
          <option value="">Select Size</option>
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="flavor">Flavor</label>
        <select
          id="flavor"
          name="flavor"
          value={formData.flavor}
          onChange={handleChange}
          required
        >
          <option value="">Select Flavor</option>
          {flavors.map(flavor => (
            <option key={flavor} value={flavor}>{flavor}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="frosting">Frosting</label>
        <select
          id="frosting"
          name="frosting"
          value={formData.frosting}
          onChange={handleChange}
          required
        >
          <option value="">Select Frosting</option>
          {frostings.map(frosting => (
            <option key={frosting} value={frosting}>{frosting}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Special Instructions</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Place Order</button>
    </form>
  )
}

