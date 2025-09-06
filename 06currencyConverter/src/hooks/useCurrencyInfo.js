import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/de17f984dd06a5221bb92b14/latest/${currency}`

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates)   
      })
      .catch((err) => console.error("Error fetching data:", err))
  }, [currency])

  return data
}

export default useCurrencyInfo
