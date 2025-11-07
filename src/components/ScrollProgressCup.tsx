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

      {/* Progress Container */}
      <div className="relative">
        <div className={`group glass-card rounded-full p-2 transition-all duration-300 pointer-events-auto ${
          showVisitUsAnimation ? 'animate-bounce scale-110 rotate-3' : 'hover:scale-105'
        }`}>
        {/* Shopping Bag Progress Indicator SVG */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="productsGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#FCA5A5" />
            </linearGradient>

            {/* Clip path for products fill - using the bag shape */}
            <clipPath id="bagClip">
              <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" />
            </clipPath>
          </defs>

          {/* Original Shopping Bag Outline */}
          <path 
            d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" 
            stroke="rgba(220, 38, 38, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(220, 38, 38, 0.1)"
          />

          {/* Products Fill (Progress) */}
          <g clipPath="url(#bagClip)">
            {/* Main fill - from bottom up (bag interior is roughly from y=10 to y=21) */}
            <rect
              x="4"
              y={10 + (11 * (1 - scrollProgress / 100))}
              width="16"
              height={11 * (scrollProgress / 100)}
              fill="url(#productsGradient)"
              className="transition-all duration-100 ease-out"
            />
            
            {/* Product icons inside bag (when filled) */}
            {scrollProgress > 10 && (
              <g opacity={Math.min(scrollProgress / 100, 1)}>
                {/* Badeschuhe icon */}
                {scrollProgress > 15 && (
                  <circle cx="9" cy={18 - (scrollProgress * 0.08)} r="1.2" fill="rgba(255, 255, 255, 0.95)" className="transition-all duration-200" />
                )}
                {/* Tasche icon */}
                {scrollProgress > 35 && (
                  <rect x="11.5" y={18 - (scrollProgress * 0.09)} width="1.8" height="1.2" rx="0.3" fill="rgba(255, 255, 255, 0.95)" className="transition-all duration-200" />
                )}
                {/* Seemode icon */}
                {scrollProgress > 55 && (
                  <circle cx="15" cy={18 - (scrollProgress * 0.1)} r="1" fill="rgba(255, 255, 255, 0.95)" className="transition-all duration-200" />
                )}
              </g>
            )}
          </g>

          {/* Products Surface Line (when filled) */}
          {scrollProgress > 5 && (
            <line
              x1="5"
              y1={10 + (11 * (1 - scrollProgress / 100))}
              x2="19"
              y2={10 + (11 * (1 - scrollProgress / 100))}
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="1"
              className="transition-all duration-100 ease-out"
            />
          )}

          {/* Spilling Products Animation (when nearly full) */}
          {scrollProgress > 80 && (
            <g opacity={Math.min((scrollProgress - 80) / 20, 1)}>
              {/* Badeschuhe */}
              <circle cx="8" cy="8" r="1.2" fill="#DC2626" className="animate-bounce" />
              {/* Tasche */}
              <rect x="11.5" y="7.5" width="1.5" height="1" rx="0.2" fill="#EF4444" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
              {/* Seemode */}
              <circle cx="16" cy="8.5" r="1" fill="#F87171" className="animate-bounce" style={{ animationDelay: '0.4s' }} />
            </g>
          )}

          {/* Products Flying Out (Visit Us Animation) */}
          {showVisitUsAnimation && (
            <g>
              {/* Product 1 - Badeschuhe */}
              <circle 
                cx="7" 
                cy="6" 
                r="1.5" 
                fill="#DC2626" 
                className="animate-ping"
                opacity="0.8"
              />
              {/* Product 2 - Tasche */}
              <rect 
                x="11.5" 
                y="5.5" 
                width="2" 
                height="1.5" 
                rx="0.3" 
                fill="#EF4444" 
                className="animate-ping"
                opacity="0.7"
                style={{ animationDelay: '0.3s' }}
              />
              {/* Product 3 - Seemode */}
              <circle 
                cx="17" 
                cy="6.5" 
                r="1.3" 
                fill="#F87171" 
                className="animate-ping"
                opacity="0.6"
                style={{ animationDelay: '0.6s' }}
              />
              {/* Sparkle effect */}
              <path 
                d="M12 4 L12 3 M12 4 L13 4 M12 4 L12 5 M12 4 L11 4" 
                stroke="#DC2626" 
                strokeWidth="1.2" 
                strokeLinecap="round"
                className="animate-pulse"
                opacity="0.9"
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

        {/* "Visit us now!" Message */}
        {showMessage && (
          <div className="absolute -left-48 top-1/2 -translate-y-1/2 animate-fade-in-up pointer-events-auto">
            <div className="relative">
              <div className="glass-card rounded-2xl px-4 py-3 shadow-2xl border-2 border-primary/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛍️</span>
                  <div>
                    <p className="text-sm font-bold text-primary">Besuchen Sie uns!</p>
                    <p className="text-xs text-muted-foreground">In unserem Geschäft</p>
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
