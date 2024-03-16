import { useEffect, useRef } from "react";

import { useSpring } from "@react-spring/web";

import cobe from "cobe";

const Globe = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 400, friction: 30, precision: 0.001 },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => ref.current && (width = ref.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = cobe(ref.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15,
      dark: 1,
      diffuse: 2,
      mapSamples: 30000,
      mapBrightness: 2,
      baseColor: [0.6, 0.6, 0.6],
      markerColor: [0.9, 0.9, 0.9],
      glowColor: [0.007, 0.78, 0.612],
      opacity: 0.8,
      markers: [
        { location: [13.7563, 100.5018], size: 0.06 }, // Bangkok
        { location: [3.1408, 101.6932], size: 0.06 }, // KL
        { location: [35.6764, 139.65], size: 0.06 }, // Tokyo
        { location: [34.6937, 135.5023], size: 0.06 }, // Osaka
        { location: [51.5072, 0.1276], size: 0.06 }, // London
        { location: [47.3769, 8.5417], size: 0.06 }, // Zurich
        { location: [-37.8409, 144.9464], size: 0.06 }, // Melbourne
        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (ref.current!.style.opacity = "1"));
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // Putting globe on z -1 to prevent canvas blocking other items
    <div className="flex items-center justify-center w-full h-full -mt-5 -z-1">
      <div className="w-full max-w-[900px] aspect-square m-auto">
        <canvas
          ref={ref}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            ref.current!.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            ref.current!.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            ref.current!.style.cursor = "grab";
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 200 });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 100 });
            }
          }}
          className="w-full h-full"
          style={{
            cursor: "grab",
            contain: "layout paint size",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Globe;
