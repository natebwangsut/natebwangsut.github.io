import { useEffect, useRef } from "react";

import { useSpring } from "@react-spring/web";

import createGlobe from "cobe";

type City = {
  location: [number, number];
  city: string;
  country: string;
};

const CITIES: City[] = [
  { location: [13.7563, 100.5018], city: "Bangkok", country: "Thailand" },
  { location: [3.1408, 101.6932], city: "Kuala Lumpur", country: "Malaysia" },
  { location: [35.6764, 139.65], city: "Tokyo", country: "Japan" },
  { location: [34.6937, 135.5023], city: "Osaka", country: "Japan" },
  { location: [51.5072, 0.1276], city: "London", country: "United Kingdom" },
  { location: [47.3769, 8.5417], city: "Zurich", country: "Switzerland" },
  { location: [-37.8409, 144.9464], city: "Melbourne", country: "Australia" },
  { location: [-33.8688, 151.2093], city: "Sydney", country: "Australia" },
  { location: [40.7128, -74.006], city: "New York", country: "United States" },
  { location: [42.3601, -71.0589], city: "Boston", country: "United States" },
  { location: [51.0447, -114.0719], city: "Calgary", country: "Canada" },
  { location: [43.6532, -79.3832], city: "Toronto", country: "Canada" },
  { location: [49.2827, -123.1207], city: "Vancouver", country: "Canada" },
  { location: [43.0618, 141.3545], city: "Sapporo", country: "Japan" },
];

const THETA = 0.15;
const RADIUS = 0.8; // cobe sphere radius (markerElevation is 0)

// Replicates cobe's internal marker → screen projection so the HTML markers
// track exactly where cobe renders the dots on the rotating globe. Returns
// normalized [0..1] coordinates plus a `facing` value (>0 = front hemisphere).
const project = (location: [number, number], phi: number) => {
  const [lat, lng] = location;
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latR);
  const v = [
    -cosLat * Math.cos(lngR) * RADIUS,
    Math.sin(latR) * RADIUS,
    cosLat * Math.sin(lngR) * RADIUS,
  ];
  const cosT = Math.cos(THETA);
  const sinT = Math.sin(THETA);
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);
  const c = cosP * v[0] + sinP * v[2];
  const s = sinP * sinT * v[0] + cosT * v[1] - cosP * sinT * v[2];
  const facing = -sinP * cosT * v[0] + sinT * v[1] + cosP * cosT * v[2];
  return { x: (c + 1) / 2, y: (-s + 1) / 2, facing };
};

const Globe = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 400, friction: 30, precision: 0.001 },
  }));

  useEffect(() => {
    if (!ref.current) return;

    let phi = 0;
    let width = 0;
    let raf = 0;
    const onResize = () => ref.current && (width = ref.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(ref.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: THETA,
      dark: 1,
      diffuse: 2,
      mapSamples: 30000,
      mapBrightness: 2,
      baseColor: [0.6, 0.6, 0.6],
      markerColor: [0.9, 0.9, 0.9],
      markerElevation: 0,
      glowColor: [0.007, 0.78, 0.612],
      opacity: 0.8,
      // Markers are rendered as polished HTML elements in the overlay below
      // (perfectly aligned via project()), so cobe draws none of its own.
      markers: [],
    });

    // cobe v2 removed the `onRender` option; drive rotation via update() in a rAF
    // loop, and reposition the interactive HTML markers in the same frame.
    const render = () => {
      if (!pointerInteracting.current) phi += 0.002;
      const currentPhi = phi + r.get();
      globe.update({
        phi: currentPhi,
        width: width * 2,
        height: width * 2,
      });
      for (let i = 0; i < CITIES.length; i++) {
        const el = markerRefs.current[i];
        if (!el || !width) continue;
        const { x, y, facing } = project(CITIES[i].location, currentPhi);
        el.style.transform = `translate(${x * width}px, ${y * width}px) translate(-50%, -50%)`;
        // Fade out as a marker rotates to the back of the globe.
        const opacity = facing > 0 ? Math.min(1, facing * 6) : 0;
        el.style.opacity = `${opacity}`;
        el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    setTimeout(() => {
      if (ref.current) ref.current.style.opacity = "1";
    });
    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // Putting globe on z -1 to prevent canvas blocking other items
    <div className="flex items-center justify-center w-full h-full mt-20">
      <div className="relative w-full max-w-[900px] aspect-square">
        <canvas
          ref={ref}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            if (ref.current) ref.current.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            if (ref.current) ref.current.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            if (ref.current) ref.current.style.cursor = "grab";
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
        <div className="absolute inset-0 pointer-events-none">
          <style>{`
            @keyframes globeMarkerPulse {
              0% { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
              70%, 100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
            }
          `}</style>
          {CITIES.map((c, i) => (
            <div
              key={c.city}
              ref={(el) => {
                markerRefs.current[i] = el;
              }}
              className="group absolute top-0 left-0 h-6 w-6 cursor-pointer will-change-transform"
              style={{ opacity: 0 }}
            >
              {/* slow pulse halo */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white/60"
                style={{ animation: "globeMarkerPulse 3s ease-out infinite" }}
              ></span>
              {/* expanding ring on hover */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full ring-1 ring-white/0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:ring-white/70"
              ></span>
              {/* crisp core dot */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.55)] transition-transform duration-200 ease-out group-hover:scale-125"
              ></span>
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md border border-white/10 bg-darkslate-900/90 px-2.5 py-1 text-xs font-light tracking-wide text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
              >
                {c.city}, {c.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Globe;
