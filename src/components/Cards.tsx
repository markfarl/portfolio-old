export type CardType = {
  href: string,
  src: string,
  title: string,
  description: string,
}

export default function Cards({...cards}: CardType ) {
  return (<div
    className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
    <div className="p-2 flex justify-center">
      <a href={cards.href}>
        <img className="rounded-md"
          src={cards.src}
          loading="lazy" />
      </a>
    </div>
    <div className="px-4 pb-3">
      <div>
        <a href="#">
          <h5
            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
            {cards.title}
          </h5>
        </a>

        <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
        {cards.description}
        </p>
      </div>
    </div>
  </div>)
}