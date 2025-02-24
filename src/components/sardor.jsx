import React from 'react';
import downtown from '../assets/downtown.png';
import build1 from '../assets/build1.png';
import build2 from '../assets/build2.png';
import build3 from '../assets/build3.png';
import build4 from '../assets/build4.png';
import build5 from '../assets/build5.png';

const Sardor = () => {
  return (
    <div className="bg-[#F9F7F4] text-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Основные районы для инвестиций
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img src={downtown} alt="Downtown Dubai" className="w-full h-auto rounded-md" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Downtown Dubai</h3>
              <p className="text-sm text-gray-600">
                Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая.
              </p>
              <button className="mt-4 px-5 py-2 bg-[#D9B99B] text-white rounded-md">
                Подробнее
              </button>
            </div>
          </div>
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462661.5320718049!2d54.8978302!3d25.0757595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68f4c5d3e37b%3A0xa0f3c5b1dc9713!2sDubai!5e0!3m2!1sen!2s!4v1617961027456!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 border border-gray-900 rounded-md text-lg">
            Посмотреть все районы
          </button>
        </div>

        <h2 className="text-4xl font-semibold mt-20 mb-12 text-center">
          Типы недвижимости
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-[400px] lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
            <img src={build1} alt="Жилые комплексы" className="w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold">Жилые комплексы</p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img src={build2} alt="Коммерческая недвижимость" className="w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold">Коммерческая недвижимость</p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img src={build3} alt="Офисы и коворкинги" className="w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold">Офисы и коворкинги</p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img src={build4} alt="Отели и гостиничные апартаменты" className="w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold">Отели и гостиничные апартаменты</p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img src={build5} alt="Виллы и таунхаусы" className="w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold">Виллы и таунхаусы</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sardor;
