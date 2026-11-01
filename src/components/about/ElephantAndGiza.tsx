import React from 'react';
import Image from 'next/image';

export default function ElephantAndGiza() {
  const elephantImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/Elephants-walking.jpeg";
  const gizaImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/giza-alone.jpeg";

  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]" aria-label="Elephant Kingdom and Black Leopard Wildlife">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="w-12 h-[1px] bg-[#2C2A25]/30"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2C2A25]/50">
            The Inhabitants — Wildlife of Ewaso Enclave, Laikipia
          </h2>
        </div>

        {/* 
          Staggered Editorial Grid
          Left side: Text top, Image bottom
          Right side: Image top, Text bottom
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Elephants */}
          <article className="flex flex-col justify-between">
            
            <div className="mb-12 md:mb-24 lg:pr-12">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                The Elephant <br />
                <span className="italic text-[#591C27] font-light">Kingdom</span>
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80">
                Goshen sits right on paths that elephants have used for generations. You can sit back and watch these gentle giants walk by right from the comfort and privacy of your own luxury tented suite.
              </p>
            </div>

            {/* Elephant Image */}
            <div className="w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] group shadow-xl">
              <Image 
                src={elephantImage} 
                alt="Gentle elephant giants walking migratory paths near Goshen Safari Camp in Laikipia" 
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/40">
                Daylight Giants
              </span>
            </div>
          </article>

          {/* RIGHT COLUMN: Giza */}
          <article className="flex flex-col justify-between pt-0 md:pt-16 lg:pt-32">
            
            {/* Giza Image */}
            <div className="w-full aspect-[4/5] overflow-hidden bg-[#1A1817] group shadow-xl mb-12 md:mb-24">
              <Image 
                src={gizaImage} 
                alt="Giza the rare melanistic black leopard in Ewaso Enclave Conservancy Laikipia" 
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-90"
              />
            </div>

            <div className="lg:pl-12">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                The Elusive <br />
                <span className="italic text-[#591C27] font-light">Giza</span>
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80">
                When the sun goes down, a different side of the wild wakes up. This is when Giza, the rare black leopard, steps out of the shadows. Using our specially designed hides and expert tracking, you get a safe and incredibly rare chance to see her up close in her natural home.
              </p>
            </div>
            
          </article>

        </div>

      </div>
    </section>
  );
}
