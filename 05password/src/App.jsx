import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pasword, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copied = useCallback(() => {
    window.navigator.clipboard.writeText(pasword)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);

  }, [pasword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={pasword} className='outline-none w-full py-1 px-3 text-white' placeholder='password' readOnly ref={passwordRef}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copied}> copy</button>
      </div>
      <div className='flex item-center gap-x-3 mb-4'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}} />
        <label>Length: {length}</label>
        <label htmlFor='numberInput'>Number</label>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
        onChange={()=>{setNumberAllowed((prev) => !prev) }} />
        <label htmlFor='charInput  '>Character</label>
        <input type="checkbox" defaultChecked={charAllowed} id='charInput'
        onChange={()=>{setCharAllowed((prev) => !prev) }} />
      </div>
    </div>
    </>
  )
}

export default App
