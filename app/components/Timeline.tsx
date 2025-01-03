const events = [
  { year: 2010, event: 'Founded Delightful Cakes in a small home kitchen' },
  { year: 2012, event: 'Opened our first physical store in downtown' },
  { year: 2015, event: 'Expanded to three locations across the city' },
  { year: 2018, event: 'Launched our online ordering system' },
  { year: 2020, event: 'Introduced nationwide shipping for our signature cakes' },
  { year: 2023, event: 'Celebrating over a million happy customers' },
]

export default function Timeline() {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{event.year}</h3>
            <p>{event.event}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

