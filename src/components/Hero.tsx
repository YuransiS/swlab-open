"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./ui/Modal").then(mod => mod.Modal), { ssr: false });

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end px-4 pb-12 overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg-workshop.webm" type="video/webm" />
          <source src="/hero-bg-workshop.mp4" type="video/mp4" />
        </video>
        {/* Dynamic Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        {/* Top Tag - Clean and Subtle */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
          <span className="tracking-wider">LIVE | 4 АПРЕЛЯ | БЕСПЛАТНО</span>
        </motion.div>
        
        <h1 className="mb-4 text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Узнай, как запустить бизнес в Европе или стать <span className="text-[#DC2626]">востребованным мастером</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-md text-base sm:text-lg font-medium text-gray-200 px-4 md:px-0 opacity-90">
          Разберем бизнес-модель, которая позволяет мастеру по сервису зарабатывать <span className="text-[#DC2626] font-bold text-lg md:text-xl whitespace-nowrap">от 10 000 злотых</span> в месяц.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4 px-2">
          <Button 
            onClick={() => setIsModalOpen(true)} 
            className="w-full sm:w-auto sm:min-w-[400px] h-16 text-lg font-bold shadow-2xl shadow-[#DC2626]/20 transition-all hover:shadow-[#DC2626]/40 active:scale-95"
          >
            Зарегистрироваться на эфир
          </Button>
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide uppercase opacity-70">
            Доступ в закрытый канал появится после регистрации
          </p>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
