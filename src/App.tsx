import { useMemo, useState } from 'react'
import { PropertyCard } from './components/PropertyCard'
import { PropertyDetails } from './components/PropertyDetails'
import { properties } from './data/properties'
import type { Property, PropertyPurpose, PropertyType } from './types/property'

export default function App() {
  const [purpose, setPurpose] = useState<PropertyPurpose>('comprar')
  const [location, setLocation] = useState('')
  const [type, setType] = useState<PropertyType | 'todos'>('todos')
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const filteredProperties = useMemo(() => {
    const normalizedLocation = location.trim().toLocaleLowerCase('pt-BR')

    return properties.filter((property) => {
      const matchesPurpose = property.purpose === purpose
      const matchesType = type === 'todos' || property.type === type
      const searchableLocation = `${property.neighborhood} ${property.city}`.toLocaleLowerCase('pt-BR')
      const matchesLocation = !normalizedLocation || searchableLocation.includes(normalizedLocation)

      return matchesPurpose && matchesType && matchesLocation
    })
  }, [location, purpose, type])

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSelectedProperty(null)
    document.querySelector('#imoveis')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSelectProperty(property: Property) {
    setSelectedProperty(property)
    window.setTimeout(() => {
      document.querySelector('#detalhes')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  function handleCloseDetails() {
    setSelectedProperty(null)
    window.setTimeout(() => {
      document.querySelector('#imoveis')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">CentralizaWeb — Imobiliária</div>
          <nav aria-label="Navegação principal">
            <a href="#imoveis">Imóveis</a>
            <a href="#anunciar">Anuncie seu imóvel</a>
            <a href="#sobre">Sobre o projeto</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Projeto Conceito · CentralizaWeb</p>
          <h1>Encontre um imóvel que faça sentido para a sua próxima fase.</h1>
          <p className="hero-copy">
            Uma experiência imobiliária demonstrativa criada para explorar busca clara,
            apresentação confiável e contato rápido.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <label>
              Objetivo
              <select value={purpose} onChange={(event) => setPurpose(event.target.value as PropertyPurpose)}>
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
              </select>
            </label>
            <label>
              Localização
              <input
                type="search"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Bairro ou cidade"
              />
            </label>
            <label>
              Tipo de imóvel
              <select value={type} onChange={(event) => setType(event.target.value as PropertyType | 'todos')}>
                <option value="todos">Todos os tipos</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="terreno">Terreno</option>
                <option value="comercial">Comercial</option>
              </select>
            </label>
            <button type="submit">Buscar imóveis</button>
          </form>
        </div>
      </section>

      <section className="properties-section" id="imoveis">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">Catálogo demonstrativo</p>
              <h2>Imóveis para explorar</h2>
            </div>
            <p>
              {filteredProperties.length} {filteredProperties.length === 1 ? 'resultado' : 'resultados'} com os filtros atuais.
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} onSelect={handleSelectProperty} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>Nenhum imóvel encontrado.</strong>
              <p>Tente remover algum filtro ou pesquisar outra localização.</p>
              <button
                type="button"
                onClick={() => {
                  setLocation('')
                  setType('todos')
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProperty && (
        <div id="detalhes">
          <PropertyDetails property={selectedProperty} onClose={handleCloseDetails} />
        </div>
      )}

      <section className="intro" id="sobre">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow dark">Evolução do protótipo</p>
            <h2>Complexidade adicionada somente quando resolve algo.</h2>
          </div>
          <p>
            Esta iteração valida catálogo tipado, filtros por objetivo, localização e tipo de imóvel,
            estado vazio e ficha individual. Os imóveis e valores são fictícios e existem apenas para
            demonstrar a experiência de navegação.
          </p>
        </div>
      </section>

      <section className="owner-cta" id="anunciar">
        <div className="container owner-inner">
          <div>
            <p className="eyebrow">Para proprietários</p>
            <h2>Quer entender como seu imóvel pode ser apresentado?</h2>
          </div>
          <button type="button">Solicitar avaliação</button>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <strong>CentralizaWeb — Imobiliária</strong>
          <span>Projeto conceito desenvolvido pela CentralizaWeb para fins demonstrativos.</span>
        </div>
      </footer>
    </main>
  )
}
