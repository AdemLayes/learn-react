import React, {useState} from 'react'

export default function () {
  let [num, setNum] = useState(5)
  function increment() {
    setNum((pre) => pre - 1)
    setNum((pre) => pre - 1)
  }
  return (
    <>
      <h1>Hello: {num}</h1>
      <button
      onClick={increment}>
        Change num
      </button>
    </>
  )
}