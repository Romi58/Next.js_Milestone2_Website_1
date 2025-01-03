'use client'

import { useState } from 'react'
import Image from 'next/image'

const cakes = [
  { id: 1, name: 'Chocolate Delight', category: 'chocolate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6Rc2zTGJ7hlpKCOUjllvaccSpSmk59W8mw&s' },
  { id: 2, name: 'Strawberry Dream', category: 'fruit', image: 'https://redribbonbakeshop.com/cdn/shop/files/RR-Strawberry-Dream-Shopify-Round-cake.jpg?v=1714093865' },
  { id: 3, name: 'Vanilla Bliss', category: 'vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ps-bzojicR67ErpG_61kTR7qTcLzohTfWA&s' },
  { id: 4, name: 'Red Velvet Passion', category: 'specialty', image: 'https://i.ytimg.com/vi/vGE-RfP6KRE/maxresdefault.jpg' },
  { id: 5, name: 'Lemon Zest Delight', category: 'fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzSq2oX3D1zTjMGuEfBUKuDswa0OK0Q869A&s' },
  { id: 6, name: 'Caramel Macchiato', category: 'coffee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aoN8J3NkQpBzGBWQJKmSEFFh6vsCUcU0pA&s' },
  { id: 7, name: 'Blueberry Cheesecake', category: 'cheesecake', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ4LuQWOXpDWkPfgl_p0Q4cVGXkObEAAs1g&s' },
  { id: 8, name: 'Tiramisu Temptation', category: 'coffee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vhR0AjbTtIj2blt8wpAXweH-vl6QYutSPQ&s' },
  { id: 9, name: 'Coconut Cream Paradise', category: 'tropical', image: 'https://pastrieslikeapro.com/wp-content/uploads/2023/03/coconut-cream-cake-2.jpg' },
  { id: 10, name: 'Black Forest Gateau', category: 'chocolate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlFFb9vBVWwSaDpBRIXm_dIqlUOgjvAPSrg&s' },
  // ... Add 40 more cake objects here
]

const categories = ['all', 'chocolate', 'fruit', 'vanilla', 'specialty', 'coffee', 'cheesecake', 'tropical']

export default function CakeGallery() {
  const [filter, setFilter] = useState('all')

  const filteredCakes = filter === 'all' 
    ? cakes 
    : cakes.filter(cake => cake.category === filter)

  return (
    <div className="cake-gallery">
      <div className="filters">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setFilter(category)}
            className={filter === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="cake-grid">
        {filteredCakes.map(cake => (
          <div key={cake.id} className="cake-item">
            <Image src={cake.image} alt={cake.name} width={300} height={200} />
            <div className="cake-item-content">
              <h3>{cake.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

