"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const Modal = dynamic(() => import("./ui/Modal").then(mod => mod.Modal), { ssr: false });

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section CTA (~400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger scroll check on mount in case page is already scrolled down
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 text-base shadow-2xl"
            >
              ПОЛУЧИТЬ ДОСТУП К ЭФИРУ
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
