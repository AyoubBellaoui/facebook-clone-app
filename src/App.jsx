import Leftsidebar from './Components/Leftsidebar'
import Navbar from './Components/Navbar'
import Rightsidebar from './Components/Rightsidebar'
import Content from './Components/Content'

function App() {

  return (

    <>
    <Navbar />
    <div className="wrapper">
    <Leftsidebar />
    <Content />
    <Rightsidebar />
    </div>
    </>
  )
}

export default App
