import React from 'react';

interface LogoProps {
  /** 
   * 'horizontal' = Best for Navbar
   * 'stacked' = Best for Footer or About Page
   * 'emblem' = Just the G·L oval (Favicons, Mobile Menu)
   */
  variant?: 'horizontal' | 'stacked' | 'emblem';
  /** 
   * 'dark' = Charcoal text for light backgrounds (Cream)
   * 'light' = Cream text for dark backgrounds (Hero Images/Charcoal)
   * 'burgundy' = Burgundy text for light backgrounds
   * 'midnight' = Gold/Cream combo for dark backgrounds
   */
  theme?: 'dark' | 'light' | 'burgundy' | 'midnight';
  className?: string;
  title?: string;
  desc?: string;
}

export default function GoshenLogo({ 
  variant = 'horizontal', 
  theme = 'dark',
  className = '',
  title = 'Goshen Laikipia Logo',
  desc = 'Goshen luxury safari camp emblem in Laikipia, Kenya'
}: LogoProps) {
  
  // Brand Palette Mapping (Automatically handles the clear backgrounds)
  const colors = {
    dark: {
      primary: '#2C2A25',   // Charcoal
      accent: '#591C27',    // Burgundy
      muted: 'rgba(44, 42, 37, 0.7)'
    },
    light: {
      primary: '#F4F1EB',   // Cream
      accent: '#F4F1EB',    // Cream
      muted: 'rgba(244, 241, 235, 0.7)'
    },
    burgundy: {
      primary: '#591C27',   // Burgundy
      accent: '#2C2A25',    // Charcoal
      muted: 'rgba(89, 28, 39, 0.7)'
    },
    midnight: {
      primary: '#F4F1EB',   // Cream
      accent: '#C5A059',    // Gold
      muted: 'rgba(244, 241, 235, 0.7)'
    }
  }[theme];

  const titleId = React.useId();
  const descId = React.useId();

  // ==========================================================================
  // THE EMBLEM: Concept 03 Interlocking G & L Oval
  // ==========================================================================
  const EmblemSVG = ({ size = 64 }: { size?: number }) => (
    <svg 
      width={size} 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 transition-transform duration-700 ease-out group-hover:scale-105"
      role="img"
      aria-hidden="true"
      aria-labelledby={`${titleId} ${descId}`}
      focusable="false"
    >
      <title id={titleId}>{title}</title>
      <desc id={descId}>{desc}</desc>

      {/* Tall Architectural Ovals */}
      <ellipse cx="50" cy="60" rx="42" ry="56" stroke={colors.primary} strokeWidth="1.2" />
      <ellipse cx="50" cy="60" rx="38" ry="52" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.4" />
      
      {/* Interlocking G and L */}
      <text 
        x="41" y="74" 
        textAnchor="middle" 
        fill={colors.primary} 
        fontSize="48" 
        fontWeight="300"
        className="font-serif"
      >
        G
      </text>
      <text 
        x="61" y="84" 
        textAnchor="middle" 
        fill={colors.accent} 
        fontSize="42"
        className="font-serif italic"
      >
        L
      </text>
    </svg>
  );

  // ==========================================================================
  // VARIATION 1: HORIZONTAL (Navbar)
  // ==========================================================================
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-4 group select-none ${className}`}>
        <EmblemSVG size={45} />
        <div className="flex flex-col justify-center">
          <span 
            className="font-serif text-2xl md:text-[28px] tracking-[0.25em] uppercase leading-none font-normal"
            style={{ color: colors.primary }}
          >
            Goshen
          </span>
          <div className="flex items-center gap-2 mt-2">
            <span 
              className="w-3 h-[1px]" 
              style={{ backgroundColor: colors.accent }}
            />
            <span 
              className="font-sans text-[8px] tracking-[0.38em] uppercase font-bold leading-none"
              style={{ color: colors.muted }}
            >
              Laikipia
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // VARIATION 2: STACKED CREST (Footer / About Page)
  // ==========================================================================
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center group select-none ${className}`}>
        <EmblemSVG size={70} />
        
        <span 
          className="font-serif text-2xl md:text-3xl tracking-[0.28em] uppercase leading-none mt-5 pl-[0.28em]"
          style={{ color: colors.primary }}
        >
          Goshen
        </span>
        
        <div className="flex items-center justify-center gap-3 mt-3">
          <span 
            className="font-sans text-[9px] tracking-[0.4em] uppercase font-bold leading-none pl-[0.4em]"
            style={{ color: colors.muted }}
          >
            Laikipia
          </span>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // VARIATION 3: EMBLEM ONLY (Mobile Menu / Watermark)
  // ==========================================================================
  return (
    <div className={`inline-flex items-center justify-center group select-none ${className}`}>
      <EmblemSVG size={56} />
    </div>
  );
}