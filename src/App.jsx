
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [itens, setItens] = useState([])

  async function carregarDadosApi() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(apiUrl)
    const body = await response.json()
    const results = body.results

    setItens(results)
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  console.log(itens)

  return (
    <>
      <div className="cards">
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App