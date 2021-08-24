import { useEffect, useState } from 'react'
import SideListItem from './components/SideListItem'
import { CRIPTO_LIST } from './constants'

import MainDetail from './components/MainDetail'

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null)
  const [coins, setCoins] = useState([])

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id
  }
  useEffect(() => {
    fetch(CRIPTO_LIST)
      .then(response => response.json())
      .then(result => {
        setCoins(result)
      })
  }, [])

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
          {coins.map(coin => {
            return (
              <SideListItem item={coin} isSelectedCripto={isSelectedCripto} />
            )
          })}
        </ul>
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? 'Create the main detail component here'
          : 'Select a coin bro!'}
        {/* News feed component needs to go here */}
      </main>
    </>
  )
}

export default App
