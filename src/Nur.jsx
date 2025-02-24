import img1 from "./assets/Step number.png"
import img2 from "./assets/Step number (1).png"
import img3 from "./assets/Step number (2).png"
import img4 from "./assets/Step number (3).png"

const Nur = () => {
    return (
        <div className="mx-[5%]">
            <p className="text-[55px] font-[500]">Процесс покупки недвижимости</p>
            <div className="flex mt-[120px] gap-[72px]">
                <div className="w-[20%] flex flex-col gap-[35px]">
                    <img className="w-[100px] h-[100px]" src={img1} alt="" />
                    <p className="text-[30px] font-[500] font-Jost">Консультация и подбор объекта</p>
                    <p className="text-[20px] text-[#858585] font-[400] font-Jost w-[350px]">Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки</p>
                </div>
                <div className="w-[20%] flex flex-col gap-[35px]">
                    <img className="w-[100px] h-[100px]" src={img2} alt="" />
                    <p className="text-[30px] font-[500] font-Jost">Юридическое сопровождение</p>
                    <p className="text-[20px] text-[#858585] font-[400] font-Jost w-[350px]">Обеспечение соблюдения законодательства и защиты интересов клиента</p>
                </div>
                <div className="w-[20%] flex flex-col gap-[35px]">
                    <img className="w-[100px] h-[100px]" src={img3} alt="" />
                    <p className="text-[30px] font-[500] font-Jost">Оформление сделки</p>
                    <p className="text-[20px] text-[#858585] font-[400] font-Jost w-[350px]">Подготовка и подписание всех необходимых документов. Осуществление  оплаты</p>
                </div>
                <div className="w-[20%] flex flex-col gap-[35px]">
                    <img className="w-[100px] h-[100px]" src={img4} alt="" />
                    <p className="text-[30px] font-[500] font-Jost w-[350px]">Услуги по управлению недвижимостью</p>
                    <p className="text-[20px] text-[#858585] font-[400] font-Jost w-[350px]">Наши специалисты обеспечат полный спектр услуг по управлению вашим объектом</p>
                </div>
            </div>
        </div>
    )
}

export default Nur