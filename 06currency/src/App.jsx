import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import  useCurrencyInfo from './hooks/useCurrencyInfo'

function App() { 
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)

  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }     

  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
  }
    

    return (
        <div className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto p-6 bg-white shadow-md rounded-2xl gap-6">
  {/* Left side - Image */}
  <div className="flex items-center justify-center w-1/2">
    <img
      src="https://images.pexels.com/photos/33846425/pexels-photo-33846425.png"
      alt="Currency Background"
      className="w-full h-[500px] object-cover rounded-2xl shadow"
    />
  </div>

  {/* Right side - Functionality */}
  <div
    className="flex flex-col justify-center items-center w-1/2 bg-cover bg-no-repeat rounded-2xl p-5"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/33846425/pexels-photo-33846425.png')`,
    }}
  >
    <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/70">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="w-full mb-2">
          <InputBox
            label="From"
            amount={amount}
            currencyOption={option}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        {/* Swap button */}
        <div className="relative w-full h-0.5 my-4">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 shadow"
            onClick={swap}
          >
            Swap
          </button>
        </div>

        <div className="w-full mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={option}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable={true}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 shadow"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
</div>

    );
}

export default App
