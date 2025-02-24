import React from "react"
import img from "../src/assets/1.png"


function App() {


  return (
    <>
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={img} alt="Burj Khalifa" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Вложите в будущее: Недвижимость в Дубае</h2>
          <p className="mb-4">
            Дубай, один из самых быстроразвивающихся городов мира, предлагает огромные
            возможности для инвестиций в недвижимость. Благоприятный налоговый климат, устойчивый рост
            экономики и высокий уровень жизни делают этот рынок привлекательным для инвесторов со всего
            мира.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Отсутствие налогов на доходы от недвижимости</li>
            <li>Рост возможностей для получения пассивного дохода</li>
            <li>Стабильная экономика и растущий рынок</li>
            <li>Стратегическое расположение и инфраструктура</li>
          </ul>
        </div>
      </section>

    </>
  )
}

export default App
