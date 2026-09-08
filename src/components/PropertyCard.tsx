import type { Property } from '../types/property'

interface PropertyCardProps {
  property: Property
}

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

export function PropertyCard({ property }: PropertyCardProps) {
  const priceSuffix = property.purpose === 'alugar' ? '/mês' : ''

  return (
    <article className="property-card">
      <div className={`property-visual tone-${property.imageTone}`} aria-hidden="true">
        <span>Imagem demonstrativa</span>
      </div>
      <div className="property-body">
        <div className="property-meta">
          <span>{property.purpose === 'comprar' ? 'Venda' : 'Locação'}</span>
          <span>{property.type}</span>
        </div>
        <h3>{property.title}</h3>
        <p className="property-location">
          {property.neighborhood} · {property.city}
        </p>
        <p className="property-price">
          {currency.format(property.price)} <small>{priceSuffix}</small>
        </p>
        <ul className="property-features" aria-label="Características do imóvel">
          {property.bedrooms > 0 && <li>{property.bedrooms} dorm.</li>}
          {property.bathrooms > 0 && <li>{property.bathrooms} banh.</li>}
          {property.parkingSpaces > 0 && <li>{property.parkingSpaces} vaga(s)</li>}
          <li>{property.areaM2} m²</li>
        </ul>
        <button type="button" className="property-link">
          Ver detalhes
        </button>
      </div>
    </article>
  )
}
