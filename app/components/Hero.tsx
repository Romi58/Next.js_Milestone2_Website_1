import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to Delightful Cakes</h1>
        <p>Indulge in our exquisite cake creations, handcrafted with love and passion</p>
        <Link href="/cakes" className="cta-button">Explore Our Cakes</Link>
      </div>
    </section>
  )
}

