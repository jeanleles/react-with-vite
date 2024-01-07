import React from 'react'

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [produto])

  if(dados === null) return null;

  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  )
}

export default Produto
