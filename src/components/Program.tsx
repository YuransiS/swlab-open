"use client";

import { motion } from "framer-motion";
import { PieChart, ListChecks, Target, MessageCircleQuestion } from "lucide-react";

const items = [
  {
    icon: PieChart,
    title: "Финансовая модель",
    text: "Финансовые вложения и реальная окупаемость в условиях рынка Европы.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: ListChecks,
    title: "Мастерство как фундамент",
    text: "Как стать качественным мастером по сервису окон и почему это востребовано прямо сейчас.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Target,
    title: "Система",
    text: "Готовая бизнес-модель: от поиска первых клиентов до системной работы.",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: MessageCircleQuestion,
    title: "Q&A Сессия",
    text: "Прямой диалог. Вы сможете задать любые неудобные вопросы основателям компании в чате трансляции.",
    color: "text-purple-600 bg-purple-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Program() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          О чем будем говорить в прямом эфире
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-shadow hover:shadow-md sm:items-center"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-opacity-50 ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
