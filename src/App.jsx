// Milestone 1**
// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
// Milestone 2
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo 
// di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

import { useState } from 'react'
import strumentiMusicali from '../data/prodotti'

function App() {

 
  const [strumenti, setStrumenti] = useState(strumentiMusicali)
  const [nuovoStrumento, setNuovoStrumento] = useState("")

  const addStrumento = (e) => {
    e.preventDefault();
    const strumento = nuovoStrumento.trim()
    setStrumenti([...strumenti, strumento])
    setNuovoStrumento("")
  }

  return (
    <>
      <div>
        <h1>Elenco strumenti</h1>
        <ul>
          {
            strumenti.map((strumento, indice) => {

              return (
                <li key={indice}>{strumento}</li>
              )
            })
          }
        </ul>

        <form onSubmit={addStrumento}>
          <input type="text"
            value={nuovoStrumento}
            onChange={(e) => setNuovoStrumento(e.target.value)}
          />
          <button>Invia</button>
        </form>

      </div>
    </>
  )
}

export default App
