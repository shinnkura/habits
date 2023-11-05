import DayState from "@/components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    水を飲む: {
      "2023-11-05": true,
      "2023-11-06": false,
      "2023-11-07": false,
    },
    プログラミングの勉強する: {
      "2023-11-05": false,
      "2023-11-06": true,
      "2023-11-07": false,
    },
  };
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            まだ習慣がありません。
            <br />
            最初の習慣を作りましょう！
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habit}
              </span>
              <button>
                <Image
                  src="/images/trash.svg"
                  width={20}
                  height={20}
                  alt="trash"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((day) => (
                <div key={day} className="flex flex-col">
                  <span className=" text-white font-sans text-xs text-center">
                    {day}
                  </span>
                  <DayState day={undefined} />
                </div>
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}
