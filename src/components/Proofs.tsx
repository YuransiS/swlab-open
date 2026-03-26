"use client";

import { motion } from "framer-motion";

const videos = [
  {
    src: "proof-offline-practice-1",
    title: "Общий план обучения",
    desc: "Показываем реальный процесс работы группы в нашем хабе в Варшаве."
  },
  {
    src: "proof-offline-practice-2",
    title: "Детальная практика",
    desc: "Каждый участник оттачивает навыки на реальных оконных конструкциях."
  },
  {
    src: "proof-offline-practice-3",
    title: "Работа с инструментом",
    desc: "Профессиональный инструмент — залог качества и высокой скорости работы."
  }
];

export function Proofs() {
  return (
    <section className="bg-white px-4 py-24 border-t border-gray-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Практика — это фундамент SW LAB
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Мы не просто даем теорию. На ДОД вы увидите, как выстроено наше обучение, где каждый 
            превращается из новичка в востребованного специалиста.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-gray-100 transition-all hover:shadow-2xl hover:shadow-gray-200/50"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
                  <source src={`/${video.src}.webm`} type="video/webm" />
                  <source src={`/${video.src}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{video.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
