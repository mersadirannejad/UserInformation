import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import './index.scss'

function App() {

  const [data, setData] = useState([]);

  return (
    <>
      <Form setData={setData} />
      <Table data={data} />
    </>
  )
}

export default App