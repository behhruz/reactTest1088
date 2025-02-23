import ismoil from './assets/ismoil.png'
import card from './assets/ismoilcard.png'
import arrow from './assets/ismoilarrow.png'
import logo from './assets/ismoillogo.png'
import inst from './assets/instagram.png'
import logotwo from './assets/logotwo.png'
import cardtwo from './assets/ismoilcardtwo.png'
import cardtri from './assets/ismoilcardtri.png'

const Ismoil = () => {
    return (
        <div className="flex flex-col mt-[150px] ">
            <div className="flex self-center w-[1080px] h-[550px] bg-[#EDF3F5] justify-between items-start">
                <div className="left flex flex-col font-[Jost] justify-center items-start py-[45px] pl-[45px] text-[#333333] text-[40px] font-[500] w-[500px]">
                    <h2>Остались вопросы? Свяжитесь с нами</h2>
                    <div className="inputs gap-y-[22.5px] mt-[37.5px] flex flex-col justify-center items-start">
                        <input className="w-[407px] h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="text" placeholder="ФИО *" />
                        <input className="w-[407px] h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="number" placeholder="Номер телефона *" />
                        <input className="w-[407px] h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="email" placeholder="E-mail *" />
                        <input className="w-[407px] h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="text" placeholder="Ваш вопрос" />
                    </div>
                    <button className="w-[223px] h-[50px] bg-[#E1AF93] mt-[37.5px] text-white text-[18px] font-[500]">Отправить</button>

                </div>
                <img className='w-[441px] h-[550px]' src={ismoil} alt="" />
            </div>
            <div className="ismoiltwo flex flex-col mt-[150px] w-[1080px] self-center">
                <h2 className='text-[45px] text-[#333333] font-[Jost] font-[500]'>Блог</h2>
                <div className="cards2 mt-[22.5px] flex justify-between items-center ">
                    <div className="card222 flex flex-col items-start">
                        <img src={card} className='w-[350.25px]' alt="" />
                        <p className='text-[18px] mt-[15px] font-[500] font-[Jost] w-[350px]'>Тенденции и прогнозы рынка недвижимости на 2024 год</p>
                        <a href="" className='mt-[15px] text-[13.5px] text-[#E1AF93] font-[600] font-[Jost] flex justify-center items-center gap-[4px]'>Подробнее<img src={arrow} alt="" /></a>
                    </div>                    <div className="card222 flex flex-col items-start">
                        <img src={cardtwo} className='w-[350.25px]' alt="" />
                        <p className='text-[18px] mt-[15px] font-[500] font-[Jost] w-[350px]'>Тенденции и прогнозы рынка недвижимости на 2024 год</p>
                        <a href="" className='mt-[15px] text-[13.5px] text-[#E1AF93] font-[600] font-[Jost] flex justify-center items-center gap-[4px]'>Подробнее<img src={arrow} alt="" /></a>
                    </div>                    <div className="card222 flex flex-col items-start">
                        <img src={cardtri} className='w-[350.25px]' alt="" />
                        <p className='text-[18px] mt-[15px] font-[500] font-[Jost] w-[350px]'>Тенденции и прогнозы рынка недвижимости на 2024 год</p>
                        <a href="" className='mt-[15px] text-[13.5px] text-[#E1AF93] font-[600] font-[Jost] flex justify-center items-center gap-[4px]'>Подробнее<img src={arrow} alt="" /></a>
                    </div>
                </div>
                <button className='w-[167.25px] h-[37.5px] mt-[45px] self-center bg-[#E1AF93] text-white text-[13.5px] font-[600] font-[Jost]'>Все статьи</button>
            </div>
            <footer className='w-[1080px] mt-[150px] self-center'>
                <div className="upfooter flex py-[37.5px] border-b border-[#EAEAEA] justify-between items-center">
                    <img src={logo} alt="" />
                    <div className='flex justify-center items-center gap-[20px]'>
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                    </div>
                </div>
                <div className="footermid border-b items-center border-[#EAEAEA] py-[37.5px] flex gap-[138px]">
                    <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div>
                </div>
                <div className="footerbottom flex justify-between items-center py-[10px]">
                    <a className='text-[#B3B3B3] text-[16px] font-[400] font-[Jost]' href="">2024 © RMC De Luxe real estate LLC. Все права защищены</a>
                    <img src={logotwo} alt="" />
                </div>
            </footer>
        </div>

    )


}

export default Ismoil