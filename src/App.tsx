export default function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">Horizonte Imóveis</div>
          <nav aria-label="Navegação principal">
            <a href="#comprar">Comprar</a>
            <a href="#alugar">Alugar</a>
            <a href="#anunciar">Anuncie seu imóvel</a>
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

          <form className="search-box" onSubmit={(event) => event.preventDefault()}>
            <label>
              Objetivo
              <select defaultValue="comprar">
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
              </select>
            </label>
            <label>
              Localização
              <input type="text" placeholder="Bairro ou cidade" />
            </label>
            <label>
              Tipo de imóvel
              <select defaultValue="apartamento">
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

      <section className="intro" id="comprar">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow dark">Primeiro protótipo funcional</p>
            <h2>Uma base simples antes de adicionar complexidade.</h2>
          </div>
          <p>
            Esta primeira versão valida a estrutura principal: posicionamento da marca,
            hierarquia visual, busca inicial e navegação. Filtros reais, catálogo e página
            de imóvel entram nas próximas iterações.
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
          <strong>Horizonte Imóveis</strong>
          <span>Projeto fictício desenvolvido pela CentralizaWeb para fins demonstrativos.</span>
        </div>
      </footer>
    </main>
  )
}
