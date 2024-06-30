import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
    console.log(data)
  }, [])
  return <div> hello</div>
}

export default App
