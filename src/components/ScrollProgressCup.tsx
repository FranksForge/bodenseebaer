import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";

const ScrollProgressCup = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showVisitUsAnimation, setShowVisitUsAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const visitUsAnimationTriggered = useRef(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      setScrollProgress(Math.min(progress, 100));
      setShowScrollTop(scrollTop > 100);

      // Trigger Visit Us animation when reaching ~85% scroll
      if (progress >= 85 && !visitUsAnimationTriggered.current) {
        setShowVisitUsAnimation(true);
        setShowMessage(true);
        visitUsAnimationTriggered.current = true;
        
        // Auto-dismiss message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
          setShowVisitUsAnimation(false);
        }, 5000);
      }

      // Reset animation trigger when scrolling back up
      if (progress < 80) {
        visitUsAnimationTriggered.current = false;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show cup when scrolled past hero section to story section
  useEffect(() => {
    const checkVisibility = () => {
      const storySection = document.getElementById('story');
      if (!storySection) return;
      
      const storyTop = storySection.offsetTop;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Show cup when we've scrolled to or past the story section
      // Hide cup when scrolling back up above the story section
      if (scrollTop >= storyTop - 100) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility(); // Check initial state

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-28 right-5 z-[60] pointer-events-none">
      {/* Scroll to Top Arrow */}
      {showScrollTop && (
        <div className="mb-2 flex justify-center animate-fade-in-up">
          <button
            onClick={scrollToTop}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-105 pointer-events-auto group shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors duration-200" />
          </button>
        </div>
      )}

      {/* Coffee Cup Container */}
      <div className="relative">
        <div className={`group glass-card rounded-full p-2 transition-all duration-300 pointer-events-auto ${
          showVisitUsAnimation ? 'animate-bounce scale-110 rotate-3' : 'hover:scale-105'
        }`}>
        {/* Coffee Cup SVG */}
        <svg
          width="35"
          height="35"
          viewBox="0 0 100 100"
          className="drop-shadow-sm"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="coffeeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#D2B48C" />
            </linearGradient>
            
            <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 69, 19, 0.1)" />
              <stop offset="100%" stopColor="rgba(210, 180, 140, 0.1)" />
            </linearGradient>

            {/* Clip path for coffee fill */}
            <clipPath id="cupClip">
              <path d="M25 25 L25 75 Q25 80 30 80 L60 80 Q65 80 65 75 L65 25 Z" />
            </clipPath>
          </defs>

          {/* Cup Background */}
          <path 
            d="M25 25 L25 75 Q25 80 30 80 L60 80 Q65 80 65 75 L65 25 Z" 
            fill="url(#cupGradient)"
            stroke="rgba(139, 69, 19, 0.3)"
            strokeWidth="1"
          />

          {/* Coffee Fill */}
          <g clipPath="url(#cupClip)">
            <rect
              x="25"
              y={25 + (50 * (1 - scrollProgress / 100))}
              width="40"
              height={50 * (scrollProgress / 100)}
              fill="url(#coffeeGradient)"
              className="transition-all duration-100 ease-out"
            />
          </g>

          {/* Cup Outline */}
          <path 
            d="M25 25 L25 75 Q25 80 30 80 L60 80 Q65 80 65 75 L65 25" 
            fill="none"
            stroke="rgba(139, 69, 19, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Cup Handle */}
          <path 
            d="M65 35 Q75 35 75 45 Q75 55 65 55" 
            fill="none"
            stroke="rgba(139, 69, 19, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Coffee Surface (when filled) */}
          {scrollProgress > 5 && (
            <ellipse
              cx="45"
              cy={25 + (50 * (1 - scrollProgress / 100))}
              rx="18"
              ry="2"
              fill="rgba(139, 69, 19, 0.8)"
              className="transition-all duration-100 ease-out"
            />
          )}

          {/* Steam Effect (when nearly full) */}
          {scrollProgress > 80 && (
            <g opacity={Math.min((scrollProgress - 80) / 20, 1)}>
              <path 
                d="M40 20 Q42 15 40 10" 
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1"
                strokeLinecap="round"
                className="animate-pulse"
              />
              <path 
                d="M45 22 Q47 17 45 12" 
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <path 
                d="M50 20 Q52 15 50 10" 
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </g>
          )}

          {/* Coffee Overflow Effect (Visit Us Animation) */}
          {showVisitUsAnimation && (
            <g className="animate-pulse">
              {/* Overflow droplets */}
              <circle cx="30" cy="22" r="1.5" fill="url(#coffeeGradient)" opacity="0.8" />
              <circle cx="35" cy="20" r="1" fill="url(#coffeeGradient)" opacity="0.6" />
              <circle cx="55" cy="21" r="1.2" fill="url(#coffeeGradient)" opacity="0.7" />
              <circle cx="60" cy="23" r="0.8" fill="url(#coffeeGradient)" opacity="0.5" />
              
              {/* Overflow stream */}
              <path 
                d="M35 25 Q32 20 30 18" 
                fill="none"
                stroke="url(#coffeeGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          )}
        </svg>

        {/* Progress Text (optional, only shows on hover) */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="glass-dark rounded px-2 py-1">
            <span className="text-white text-xs font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
        </div>

        {/* "Grab your coffee now!" Message */}
        {showMessage && (
          <div className="absolute -left-48 top-1/2 -translate-y-1/2 animate-fade-in-up pointer-events-auto">
            <div className="relative">
              <div className="glass-card rounded-2xl px-4 py-3 shadow-2xl border-2 border-primary/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  <div>
                    <p className="text-sm font-bold text-primary">Grab your coffee now!</p>
                    <p className="text-xs text-muted-foreground">Visit us at our café</p>
                  </div>
                </div>
                
                {/* Tooltip arrow pointing to cup */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white/20"></div>
              </div>
              
              {/* Animated pulse ring around message */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollProgressCup;
