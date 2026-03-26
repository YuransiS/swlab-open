import { Bot, PlayCircle, Users } from "lucide-react";

export function Funnel() {
  const steps = [
    {
      num: 1,
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Перейдите в Telegram",
      desc: "Нажмите на кнопку и запустите нашего официального бота",
    },
    {
      num: 2,
      icon: <PlayCircle className="h-8 w-8 text-green-600" />,
      title: "Получите видео",
      desc: <>Вас ждет приветственное видео-сообщение от основателей SW <span className="text-[#DC2626]">LAB</span></>,
    },
    {
      num: 3,
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Вступите в канал",
      desc: "Бот выдаст ссылку на закрытый канал, где 4 апреля пройдет прямой эфир",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Как попасть на трансляцию
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-[4.5rem] left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                <span className="text-gray-400 mr-2">{step.num}.</span>
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
