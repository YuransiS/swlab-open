"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import IntlTelInput from 'intl-tel-input/reactWithUtils';
import 'intl-tel-input/styles';
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setIsLoading(true);

    const searchParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          page_url: window.location.href,
          ...utmData,
        }),
      });
      
      if (!res.ok) {
        throw new Error("Submission failed");
      }

      // Fire FB event ONLY after successful submission
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setIsSubmitted(true);
      setIsLoading(false);

    } catch (error) {
      console.error("Failed to submit form:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isSubmitted && countdown === 0) {
      window.location.href = "https://t.me/swlab_education_bot?start=69c565bae08bbbc079059830";
    }
    return () => clearInterval(timer);
  }, [isSubmitted, countdown]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">Доступ к эфиру</h2>
                  <p className="text-gray-600 text-sm">
                    Оставьте свои данные, чтобы получить персональную ссылку-приглашение в нашего Telegram-бота.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-colors focus:border-[#DC2626] focus:bg-white focus:ring-1 focus:ring-[#DC2626]"
                    />
                  </div>
                  <div className="iti-wrapper">
                    <IntlTelInput
                      initialValue={phone}
                      onChangeNumber={setPhone}
                      initOptions={{
                        initialCountry: "auto",
                        geoIpLookup: function(success: any, failure: any) {
                          fetch("https://ipapi.co/json")
                            .then(function(res) { return res.json(); })
                            .then(function(data) { success(data.country_code.toLowerCase()); })
                            .catch(function() { failure(); });
                        },
                        strictMode: true,
                      }}
                      inputProps={{
                        required: true,
                        className: "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-colors focus:border-[#DC2626] focus:bg-white focus:ring-1 focus:ring-[#DC2626] !pl-12"
                      }}
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={isLoading}
                      className="w-full gap-3 relative flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 hidden sm:block" />
                      <span>{isLoading ? "Обработка..." : "Открыть Telegram"}</span>
                    </Button>
                    <p className="mt-3 text-center text-xs text-gray-400">
                      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-green-500/20" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h2 className="mb-3 text-2xl font-bold text-gray-900">Регистрация успешна!</h2>
                <p className="mb-8 text-gray-600">
                  Вы будете перенаправлены в Telegram через <span className="font-bold text-[#DC2626]">{countdown}</span> сек.
                </p>

                <Button 
                  onClick={() => window.location.href = "https://t.me/swlab_education_bot?start=69c565bae08bbbc079059830"}
                  variant="primary" 
                  className="w-full h-14 text-lg font-bold shadow-lg"
                >
                  Перейти в Telegram сейчас
                </Button>
                
                <p className="mt-4 text-xs text-gray-400">
                  Если переход не произошел автоматически, нажмите на кнопку выше.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
