interface OrderConfirmationProps {
  details: {
    name: string
    email: string
    phone: string
    cakeType: string
    size: string
    flavor: string
    frosting: string
    message: string
  }
}

export default function OrderConfirmation({ details }: OrderConfirmationProps) {
  return (
    <div className="order-confirmation">
      <h2>Thank you for your order, {details.name}!</h2>
      <p>We've received your order and will contact you shortly to confirm the details.</p>
      <h3>Order Summary:</h3>
      <ul>
        <li><strong>Cake Type:</strong> {details.cakeType}</li>
        <li><strong>Size:</strong> {details.size}</li>
        <li><strong>Flavor:</strong> {details.flavor}</li>
        <li><strong>Frosting:</strong> {details.frosting}</li>
        {details.message && (
          <li><strong>Special Instructions:</strong> {details.message}</li>
        )}
      </ul>
      <p>We'll send a confirmation email to {details.email} and may contact you at {details.phone} if we need any additional information.</p>
    </div>
  )
}

