import type { Property } from '../types/property'

interface PropertyDetailsProps {
  property: Property
  onClose: () => void
}

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

export function PropertyDetails({ property, onClose }: PropertyDetailsProps) {
  const priceSuffix = property.purpose === 'alugar' ? '/mês' : ''

  return (
    <section className="property-details" aria-labelledby="property-details-title">
      <div className="container details-grid">
        <div className={`details-visual tone-${property.imageTone}`} aria-hidden="true">
          <span>Imagem demonstrativa do imóvel</span>
        </div>

        <div className="details-content">
          <button type="button" className="back-button" onClick={onClose}>
            ← Voltar ao catálogo
          </button>
          <p className="eyebrow dark">
            {property.purpose === 'comprar' ? 'Imóvel à venda' : 'Imóvel para locação'} · {property.type}
          </p>
          <h2 id="property-details-title">{property.title}</h2>
          <p className="property-location">
            {property.neighborhood} · {property.city}
          </p>
          <p className="details-price">
            {currency.format(property.price)} <small>{priceSuffix}</small>
          </p>

          <dl className="details-facts">
            {property.bedrooms > 0 && <div><dt>Dormitórios</dt><dd>{property.bedrooms}</dd></div>}
            {property.bathrooms > 0 && <div><dt>Banheiros</dt><dd>{property.bathrooms}</dd></div>}
            {property.parkingSpaces > 0 && <div><dt>Vagas</dt><dd>{property.parkingSpaces}</dd></div>}
            <div><dt>Área</dt><dd>{property.areaM2} m²</dd></div>
          </dl>

          <div className="details-note">
            <strong>Sobre esta demonstração</strong>
            <p>
              Dados, valores e características são fictícios e foram criados exclusivamente para validar
              a experiência do produto. Nenhum imóvel desta página está sendo comercializado.
            </p>
          </div>

          <button type="button" className="contact-button">
            Tenho interesse neste perfil de imóvel
          </button>
        </div>
      </div>
    </section>
  )
}
