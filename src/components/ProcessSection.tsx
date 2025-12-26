'use client';

import { motion } from 'motion/react';

const DiscoveryInfographic = () => (
  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
    <motion.div
      className="absolute inset-0 border border-zinc-500/30 rounded-full"
      variants={{
        hover: { 
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
      }}
    />
    <motion.div
      className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center"
      variants={{
        hover: { 
          scale: [1, 0.9, 1],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
      }}
    >
      <div className="w-1.5 h-1.5 bg-black rounded-full" />
    </motion.div>
    <motion.div
      className="absolute w-8 md:w-10 h-px bg-zinc-500/50 top-1/2 left-1/2 origin-left"
      variants={{
        hover: { 
          rotate: [0, 360],
          transition: { duration: 4, repeat: Infinity, ease: "linear" }
        }
      }}
    />
  </div>
);

const ExecutionInfographic = () => (
  <div className="flex gap-1 md:gap-1.5 items-end h-12 md:h-16 w-12 md:w-16 justify-center">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="w-2 md:w-2.5 bg-white rounded-t-sm"
        initial={{ height: "30%" }}
        variants={{
          hover: { 
            height: ["20%", "80%", "40%", "100%", "20%"],
            transition: { 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut" 
            }
          }
        }}
      />
    ))}
  </div>
);

const DeliveryInfographic = () => (
  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
    <motion.div
      className="w-full h-full border border-zinc-700 rounded-lg md:rounded-xl overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-white/10 origin-left"
        initial={{ scaleX: 0 }}
        variants={{
          hover: { 
            scaleX: [0, 1, 1, 0],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              times: [0, 0.4, 0.8, 1],
              ease: "easeInOut" 
            }
          }
        }}
      />
    </motion.div>
    <motion.div
      className="absolute w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center border border-zinc-200"
      initial={{ x: 0, y: 0 }}
      variants={{
        hover: { 
          x: [-18, 18, 18, -18],
          y: [-18, -18, 18, 18],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-black rounded-full"
        variants={{
          hover: { 
            scale: [1, 1.4, 1],
            transition: { duration: 1, repeat: Infinity }
          }
        }}
      />
    </motion.div>
  </div>
);

export default function ProcessSection() {
  const steps = [
    {
      number: '/01',
      title: 'Strategic Discovery',
      description: 'We align on your vision, goals, and user needs within 48 hours. No fluff, just pure strategy.',
      infographic: DiscoveryInfographic,
    },
    {
      number: '/02',
      title: 'Rapid Execution',
      description: 'Our elite team designs and builds in parallel. We ship high-fidelity results every single week.',
      infographic: ExecutionInfographic,
    },
    {
      number: '/03',
      title: 'Scalable Delivery',
      description: 'Launch with confidence. We provide a battle-tested product ready for your next million users.',
      infographic: DeliveryInfographic,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-12 md:py-24 lg:py-32 w-full text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-24">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-white leading-tight">
              We ship high-performance <br className="hidden md:block" />
              <span className="text-zinc-500">digital products at lightning speed.</span>
            </h2>
          </div>
          
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-0 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-zinc-200 transition-all duration-300 font-medium text-base md:text-lg group overflow-hidden hover:gap-2 shadow-lg hover:scale-105 active:scale-95 w-fit shrink-0 mb-2"
          >
            <span>Book a Strategy Call</span>
            <svg
              className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
          {steps.map((step, index) => {
            const Infographic = step.infographic;
            return (
              <motion.div 
                key={index} 
                initial="initial"
                whileHover="hover"
                className="bg-[#141414] p-6 md:p-10 rounded-lg border border-white/5 transition-all duration-300 cursor-default group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <span className="text-sm md:text-base font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">{step.number}</span>
                    <div className="bg-zinc-900/50 p-4 md:p-6 rounded-xl flex items-center justify-center min-w-[80px] min-h-[80px] md:min-w-[112px] md:min-h-[112px] border border-white/5 shadow-inner">
                      <Infographic />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
