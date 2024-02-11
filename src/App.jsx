import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quotes , setQuotes] = useState([])
  const [quote , setQuote] = useState('Loading....')

  function getQuote(){

    
    fetch('https://type.fit/api/quotes')
    .then( res => res.json())
    .then( data => setQuotes(data))
    
    let num = Math.floor(Math.random()* quotes.length)
    console.log(quotes[num])
    setQuote(quotes[num].text)
    console.log(quote);
  }

  return (
    <div className='mt-16'>
      <h1 className='m-4  inline-block p-5 text-4xl w-[50vw] font-semibold rounded-xl bg-[#3dd1e7]'>{quote}</h1>
      <br />
      <button onClick={getQuote}
      className='border border-none p-3 font-semibold text-2xl rounded-xl hover:bg-white/70 bg-[#e7da3d] '
      >Generate Quote</button>
    </div>
  )
}

export default App
