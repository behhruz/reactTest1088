import logo from "./assets/Btn.png"
import logo1 from "./assets/Btn (1).png"

const Nur = () => {
    return (
        <div className="mx-[240px] flex flex-col gap-[58px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333]">Часто задаваемые вопросы</p>
            <div className="flex justify-between">
                <p className="font-[400] text-[30px] text-[#333333]">Правила покупки недвижимости иностранцами</p>
                <img src={logo} alt="" />
            </div>
            <p className="font-[400] text-[20px] text-[#333333] w-[90%]">Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости</p>
            <div className="flex justify-between">
                <p className="font-[400] text-[30px] text-[#333333]">Минимальная сумма инвестиций</p>
                <img src={logo1} alt="" />
            </div>
            <div className="flex justify-between">
                <p className="font-[400] text-[30px] text-[#333333]">Процедура оформления сделки</p>
                <img src={logo1} alt="" />
            </div>
            <div className="flex justify-between">
                <p className="font-[400] text-[30px] text-[#333333]">Стоимость обслуживания и коммунальные платежи</p>
                <img src={logo1} alt="" />
            </div>
        </div>
    )
}

export default Nur