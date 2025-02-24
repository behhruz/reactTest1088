import React from "react";
import img from  '../src/assets/1.png'
import img2 from '../src/assets/2.png'

const Header = () => {
    return (
        <header className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
            <div className="bg-white p-20  flex gap-12 items-center">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold text-[#333333] leading-tight">
                        Консалтинг и сопровождение при открытии и регистрации <br />    фирмы
                    </h1>
                    <p className="text-[#333333]  pt-[50px]">
                        Открытие бизнеса в Дубае с нашей помощью — это простой и быстрый процесс! Мы предлагаем полное сопровождение: от выбора формы компании до регистрации и получения лицензий. Экспертная поддержка на каждом этапе для успешного старта <br />    вашего бизнеса в ОАЭ.
                    </p>
                    <button className="mt-8 px-12 py-2 bg-[#E1AF93] text-white hover:bg-[white] text-lg font-semibold">
                        Подробнее
                    </button>
                </div>
                <div className="w-[487px] h-[685px] relative ">
                    <img
                        src={img}
                        alt="DXX"
                        className="w-[345px] h-[585px] absolute top-[20px] left-[50px]"
                    />
                    <img
                        src={img2}
                        alt="DXX"
                        className="w-[227px] h-[285px] absolute top-[300px]"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
