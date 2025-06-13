interface data {
  name1: string;
  img1: string;
  name2: string;
  img2: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
}

export default function Banner({ name1, img1, name2, img2, months, days, hours, minutes }: data) {
  return (
    <div className="couple_card flex p-10 bg-[#ff003d]/10 rounded-[100px] border-x-[1px] border-[#ff003d] mb-8">
      <div className="couple_content flex justify-between items-center">
        <div className="w-[25%] text-center text-[1.6em]">
          <img className="rounded-[50%] border-[1px] border-[#ff003d]" src={img1} />
          <h2 className="text-[1.2em text-white mt-5 p-0 couple_name">{name1}</h2>
        </div>

        <div className="w-[25%] flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img src="/couples/heart.png" className="hurt w-[70%]" />
            </div>
            <div className="p-0 m-0 w-[100%] flex justify-center ">
              <div className="flex gap-8 mt-4 justify-center ">
                <div className="text-center timer_text">
                  <h2 className="text-white text-[1.2em]">Мес</h2>
                  <span id="months" className="text-white text-center">
                    {months}
                  </span>
                </div>
                <div className="text-center timer_text">
                  <h2 className="text-white text-[1.2em]">Дн</h2>
                  <span id="days" className="text-white text-center">
                    {days}
                  </span>
                </div>
                <div className="text-center timer_text">
                  <h2 className="text-white text-[1.2em]">Час</h2>
                  <span id="hours" className="text-white text-center">
                    {hours}
                  </span>
                </div>
                <div className="text-center timer_text">
                  <h2 className="text-white text-[1.2em]">Мин</h2>
                  <span id="minutes" className="text-white text-center">
                    {minutes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] text-center text-[1.6em]">
          <img className="rounded-[50%] border-[1px] border-[#ff003d]" src={img2} />
          <h2 className="text-[1.2em text-white mt-5 p-0 couple_name">{name2}</h2>
        </div>
      </div>
    </div>
  );
}
