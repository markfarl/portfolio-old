import logo from '../../public/me.png'
import ts from '../../public/ts.png'
import reactLogo from '../../public/reactLogo.png'
import Cards, { CardType } from '../components/Cards'
import Header from '../components/Header'
import { useDarkMode } from '../contexts/DarkModeContext'

const cardDetail: CardType[] = [
  {
    src: reactLogo,
    href: "/react",
    title: "React",
    description: "React",
  },
  {
    src: ts,
    href: "/typescript",
    title: "Typescript",
    description: "React",
  },
  {
    src: reactLogo,
    href: "/react",
    title: "React",
    description: "React",
  },
  {
    src: ts,
    href: "/typescript",
    title: "Typescript",
    description: "React",
  },
];

export default function Portfolio() {
  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 shadow">
          <img
            alt="Your Company"
            src={logo}
            className="h-auto w-auto shadow top-1"
            onClick={toggleDarkMode}
          />
          <div className='md:col-span-2'>
            <h1>About {darkMode.toString()}</h1>
            <p>Software Engineer with over 10 years industry experience, specialising in web technologies including: Javascript, Typescript, React (with Next.js), Nodejs, Jest, web services, AWS, Google Cloud Platform, Google Tag Manager, Snowflake, Hightouch, Segment, New Relic, Github, Jenkins (groovy)
            </p>
            <p>Check out the cards below to see what projects I have worked on and with which software and frameworks</p>
          </div>

        </div>
        <h1 className='mt-5'>Experience</h1>
        <div className="mt-5 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardDetail.map((item) => (
          <Cards {...item} />
        ))
        }
        </div>
      </main>
    </>
  )
}