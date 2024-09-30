import Nav from "../components/Nav"
import logo from '../../public/me.png';

function App() {

  return (
    <div className="">
      <Nav />
      <header className="bg-white shadow">

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <div className="flex align-top md:space-x-4">
            <div>
              <img
                alt="Your Company"
                src={logo}
                className="hidden lg:block h-80 w-80 shadow top-1"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mark Farrell</h1>
              <p>Contact: mk@gmail.com</p>
              <p>linkedin: markfarl</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
            <div className="bg-white">1</div>
            <div className="bg-gray-800">2</div>
            <div className="bg-white">1</div>
            <div className="bg-gray-800">2</div>
            <div className="bg-white">1</div>
            <div className="bg-gray-800">2</div>
            <div className="bg-white">1</div>
            <div className="bg-gray-800">2</div>
            <div>9</div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
