import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-shadow-lg font-bold bg-amber-300 text-amber-100 p-5 m-10'> Hello this is Tailwind working </h1>
      <Card details = "This Card is First and Have Nothing more" tagline = "Explore More"/>
      <br />
      <Card details = "This Card is Second Card and Have lots of things" tagline = "Visit More"/>
      <br />
      <Card />
    </>
  )
}

export default App
