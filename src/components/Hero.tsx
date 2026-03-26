"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./ui/Modal").then(mod => mod.Modal), { ssr: false });

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative px-4 pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 md:px-4 md:py-2 text-[10px] sm:text-sm font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="whitespace-nowrap">ONLINE-ТРАНСЛЯЦИЯ | 4 АПРЕЛЯ | БЕСПЛАТНО</span>
        </div>
        
        <h1 className="mb-8 text-3xl leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Узнай, как запустить прибыльный сервисный бизнес в Европе с нуля или стать востребованным мастером
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl sm:text-2xl font-medium text-gray-700 px-2 sm:px-0">
          Разберем бизнес-модель, которая позволяет мастеру по сервису зарабатывать от 10 000 злотых в месяц
        </p>

        {/* Real mockup image with motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/50"
        >
          <img 
            src="/swlab-event.png" 
            alt="SW LAB Offline Event" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 px-2 sm:px-0">
          Прямая трансляция из главного офиса SW LAB в Варшаве. Узнай, как работают наши
          бизнес-модели, и подготовься к запуску в своей стране.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto sm:min-w-[400px]">
            Зарегистрироваться на онлайн-трансляцию 4 апреля
          </Button>
          <p className="text-xs sm:text-sm shadow-none text-gray-500 max-w-xs sm:max-w-none">
            После регистрации вы получите секретное видео от основателей
          </p>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
