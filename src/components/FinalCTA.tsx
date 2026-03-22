"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Send } from "lucide-react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./ui/Modal").then(mod => mod.Modal), { ssr: false });

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 text-center sm:p-16 relative shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        <div className="relative z-10">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Готовы узнать, как построить системный бизнес
          </h2>
          
          <Button 
            onClick={() => setIsModalOpen(true)} 
            variant="telegram"
            className="mb-8 w-full sm:w-auto gap-3 px-10 py-5 text-xl font-bold shadow-xl shadow-blue-500/20 md:animate-pulse transition-transform focus:ring-offset-gray-900"
          >
            <Send className="h-6 w-6" />
            ПЕРЕЙТИ В TELEGRAM-БОТА
          </Button>
          
          <p className="text-sm text-gray-400">
            Участие абсолютно бесплатно. Запись эфира будет доступна только участникам канала
          </p>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
