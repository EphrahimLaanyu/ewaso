'use client';

import React, { useEffect, useRef } from 'react';

export default function Peep() {
  const topHalvesRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomHalvesRef = useRef<(HTMLDivElement | null)[]>([]);
  const wrappersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Array of all your requested images
  const sourceImages = [
    "/images/giza-full.jpg",
    "/images/lodge-night-sky.jpg",
    "/images/wild-dog-track.jpg",
    "/images/elephants-family.jpg"
  ];

  // We duplicate the array multiple times to create a seamless infinite scrolling track
  const displayImages = [...sourceImages, ...sourceImages, ...sourceImages, ...sourceImages];

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const centerX = window.innerWidth / 2;
      const barrierRadius = window.innerWidth < 768 ? 250 : 400; // Responsive barrier size

      wrappersRef.current.forEach((wrapper, index) => {
        const topHalf = topHalvesRef.current[index];
        const bottomHalf = bottomHalvesRef.current[index];
        
        if (!wrapper || !topHalf || !bottomHalf) return;

        // Calculate how close this specific image is to the center of the screen
        const rect = wrapper.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const distanceToCenter = Math.abs(centerX - elementCenterX);
        
        let splitGap = 0;
        let curvePercentage = 0;

        // If the image is inside the center barrier zone, start warping
        if (distanceToCenter < barrierRadius) {
          const intensity = 1 - (distanceToCenter / barrierRadius);
          
          // Gap distance (pushes top up and bottom down)
          splitGap = 130 * intensity; 
          
          // Curve percentage for the semi-circle effect (0% to 100%)
          curvePercentage = 100 * intensity; 
        }

        // Apply transformations to the halves
        topHalf.style.transform = `translateY(-${splitGap}px)`;
        topHalf.style.borderBottomLeftRadius = `${curvePercentage}%`;
        topHalf.style.borderBottomRightRadius = `${curvePercentage}%`;

        bottomHalf.style.transform = `translateY(${splitGap}px)`;
        bottomHalf.style.borderTopLeftRadius = `${curvePercentage}%`;
        bottomHalf.style.borderTopRightRadius = `${curvePercentage}%`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-screen bg-[#F4F1EB] overflow-hidden flex items-center justify-center selection:bg-[#591C27] selection:text-white">
      
      {/* CENTRAL TEXT - Protected by the warp shield */}
      <div className="absolute z-10 text-center pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25]/60 mb-4 block drop-shadow-sm">
          The Experience
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[#2C2A25] tracking-tight">
          Unseen
        </h2>
      </div>

      {/* 
        INJECTED CSS ANIMATION 
        Slides the entire track smoothly from left to right.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-slide-right {
          animation: slideRight 60s linear infinite;
          width: max-content;
        }
      `}} />

      {/* MOVING TRACK CONTAINER */}
      <div className="absolute z-20 flex items-center gap-16 md:gap-32 animate-slide-right px-16">
        
        {displayImages.map((src, idx) => (
          <div 
            key={idx}
            ref={(el) => {
              // @ts-ignore
              wrappersRef.current[idx] = el;
            }}
            className="relative w-64 md:w-80 h-[24rem] md:h-[30rem] flex flex-col will-change-transform shrink-0"
          >
            {/* TOP HALF */}
            <div 
              ref={(el) => {
                // @ts-ignore
                topHalvesRef.current[idx] = el;
              }}
              className="relative w-full h-1/2 overflow-hidden will-change-transform bg-[#EAE7E0]"
            >
              <img 
                src={src} 
                alt="Ewaso Safari" 
                className="absolute top-0 left-0 w-full h-[200%] object-cover pointer-events-none"
              />
            </div>

            {/* BOTTOM HALF */}
            <div 
              ref={(el) => {
                // @ts-ignore
                bottomHalvesRef.current[idx] = el;
              }}
              className="relative w-full h-1/2 overflow-hidden will-change-transform bg-[#EAE7E0]"
            >
              <img 
                src={src} 
                alt="Ewaso Safari" 
                className="absolute bottom-0 left-0 w-full h-[200%] object-cover pointer-events-none"
              />
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}