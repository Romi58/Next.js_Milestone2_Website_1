import Image from 'next/image'
import Link from 'next/link'

const featuredCakes = [
  { id: 1, name: 'Chocolate Delight', category: 'chocolate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6Rc2zTGJ7hlpKCOUjllvaccSpSmk59W8mw&s' },
  { id: 2, name: 'Strawberry Dream', category: 'fruit', image: 'https://redribbonbakeshop.com/cdn/shop/files/RR-Strawberry-Dream-Shopify-Round-cake.jpg?v=1714093865' },
  { id: 3, name: 'Vanilla Bliss', category: 'vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ps-bzojicR67ErpG_61kTR7qTcLzohTfWA&s' },
  { id: 4, name: 'Red Velvet Passion', category: 'specialty', image: 'https://i.ytimg.com/vi/vGE-RfP6KRE/maxresdefault.jpg' },
]

export default function CakeOverview() {
  return (
    <section className="cake-overview container">
      <h2>Our Featured Cakes</h2>
      <div className="cake-grid">
        {featuredCakes.map((cake) => (
          <div key={cake.id} className="cake-item">
            <Image src={cake.image} alt={cake.name} width={300} height={200} />
            <div className="cake-item-content">
              <h3>{cake.name}</h3>
              <Link href={`/cakes/${cake.id}`} className="cta-button">View Details</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/cakes" className="cta-button">View All Cakes</Link>
      </div>
    </section>
  )
}

