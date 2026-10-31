import React, { useEffect, useRef, useState, memo } from "react";

const CustomCursor = memo(() => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [canUseCustomCursor, setCanUseCustomCursor] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [hoverText, setHoverText] = useState("");

  const hoverStateRef = useRef(false);
  const hoverTimeoutRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia("(any-pointer: fine)");
    const updateCursorCapability = () => {
      setCanUseCustomCursor(mediaQuery.matches);
    };

    updateCursorCapability();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateCursorCapability);
      return () => mediaQuery.removeEventListener("change", updateCursorCapability);
    }

    mediaQuery.addListener(updateCursorCapability);
    return () => mediaQuery.removeListener(updateCursorCapability);
  }, []);

  useEffect(() => {
    if (!canUseCustomCursor) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    initializedRef.current = false;
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const isTouchPointer = (e) => e.pointerType === "touch";

    const onPointerMove = (e) => {
      if (isTouchPointer(e)) return;

      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      if (!initializedRef.current) {
        dotX = ringX = mouseX;
        dotY = ringY = mouseY;
        initializedRef.current = true;
      }
    };

    // More efficient hover detection using event delegation
    const onPointerOver = (e) => {
      if (isTouchPointer(e)) return;

      const target = e.target;
      if (!target) return;

      const interactiveElement = target.closest('a, button, [data-cursor], input, textarea, [role="button"]');

      if (interactiveElement) {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }

        if (!hoverStateRef.current) {
          hoverStateRef.current = true;
          setIsHovering(true);
          setHoverText(interactiveElement.dataset?.cursor || "");
        }
      } else {
        if (hoverStateRef.current && !hoverTimeoutRef.current) {
          hoverTimeoutRef.current = setTimeout(() => {
            hoverStateRef.current = false;
            setIsHovering(false);
            setHoverText("");
            hoverTimeoutRef.current = null;
          }, 50);
        }
      }
    };

    const animate = () => {
      if (initializedRef.current) {
        // Precise movement with lerp
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        // Use independent translate property to avoid transform conflicts
        // This ensures translate and scale never overwrite each other
        dot.style.setProperty("--x", `${dotX}px`);
        dot.style.setProperty("--y", `${dotY}px`);
        ring.style.setProperty("--x", `${ringX}px`);
        ring.style.setProperty("--y", `${ringY}px`);
      }

      rafId = requestAnimationFrame(animate);
    };

    const handlePointerDown = (e) => {
      if (isTouchPointer(e)) return;
      setIsClicking(true);
    };
    const handlePointerUp = (e) => {
      if (isTouchPointer(e)) return;
      setIsClicking(false);
    };
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [canUseCustomCursor]);

  if (!canUseCustomCursor) return null;

  return (
    <>
      <style>{`
        html:not(.no-custom-cursor) * { cursor: none !important; }
        .no-custom-cursor * { cursor: auto !important; }
        .no-custom-cursor .custom-cursor-element { display: none !important; }
      `}</style>

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center
          transition-[width,height,opacity,visibility] duration-300 ease-out custom-cursor-element
          ${isHidden || (typeof document !== 'undefined' && document.documentElement.classList.contains('no-custom-cursor')) ? "opacity-0 invisible" : "opacity-100 visible"}
        `}
        style={{
          width: isHovering ? "65px" : "40px",
          height: isHovering ? "65px" : "40px",
          translate: "calc(var(--x, 0px) - 50%) calc(var(--y, 0px) - 50%)",
          willChange: "translate, width, height, opacity",
        }}
      >
        <div
          className={`
            w-full h-full rounded-full border-[1.5px]
            transition-all duration-300 ease-out
            ${isHovering
              ? "border-primary bg-primary/10 scale-100"
              : "border-primary/60 scale-100"
            }
            ${isClicking ? "scale-75 border-primary bg-primary/40" : ""}
          `}
          style={{
            // Specific property to prevent transform conflicts if classes use them
            transformOrigin: "center center",
          }}
        />
        {hoverText && isHovering && (
          <span className="absolute text-[10px] font-bold uppercase tracking-wider text-primary animate-in fade-in zoom-in duration-300">
            {hoverText}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[10000] block
          transition-[opacity,scale,visibility] duration-200 ease-out bg-primary custom-cursor-element
          ${isHidden || (typeof document !== 'undefined' && document.documentElement.classList.contains('no-custom-cursor')) ? "opacity-0 invisible" : "opacity-100 visible"}
          ${isHovering ? "opacity-0 scale-0 invisible" : "opacity-100 scale-100 visible"}
          ${isClicking ? "scale-[2]" : "scale-100"}
        `}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          boxShadow: `0 0 15px var(--color-primary), 0 0 30px var(--color-primary)`,
          translate: "calc(var(--x, 0px) - 50%) calc(var(--y, 0px) - 50%)",
          willChange: "translate, opacity, scale",
        }}
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;
