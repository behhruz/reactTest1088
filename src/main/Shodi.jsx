import tugma from '../assets/tugma.png'; 
import tugma2 from '../assets/tugma2.png'; 



const Shodi = () => {
    return (
        <div className="px-4 md:px-[240px]">
        <div className='pt-[100px] md:pt-[200px]'>
          <h1 className="text-2xl md:text-4xl text-[#333333] text-center md:text-left font-semibold">
            Часто задаваемые вопросы
          </h1>
          <div className="pt-[30px] md:pt-[58px] border-b pb-4">
            <div className='flex justify-between items-center cursor-pointer'>
              <p className="text-lg md:text-2xl font-medium">
                Правила покупки недвижимости иностранцами
              </p>
              <img src={tugma} alt="toggle button" className="w-5 md:w-6" />
            </div>
            <p className="pt-[20px] md:pt-[30px] text-[#333333] text-sm md:text-base text-justify">
              Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. 
              Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. 
              Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, 
              а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, 
              как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, 
              а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, 
              такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, 
              где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости.
            </p>
          </div>
        </div>
  
        <div className='pt-[24px] space-y-6 md:space-y-12'>
          {[
            "Минимальная сумма инвестиций",
            "Процедура оформления сделки",
            "Стоимость обслуживания и коммунальные платежи"
          ].map((text, index) => (
            <div key={index} className='flex justify-between items-center border-b pb-4 cursor-pointer'>
              <p className='text-lg md:text-2xl font-medium'>{text}</p>
              <img src={tugma2} alt="toggle icon" className="w-5 md:w-6" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shodi;
  