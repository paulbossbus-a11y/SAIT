const cameraConfigs = [
  { left: "6%", size: 26, duration: 9, delay: 0, rotateEnd: 340 },
  { left: "18%", size: 18, duration: 12, delay: 1.5, rotateEnd: -260 },
  { left: "32%", size: 22, duration: 10.5, delay: 3, rotateEnd: 300 },
  { left: "48%", size: 16, duration: 13, delay: 0.7, rotateEnd: -220 },
  { left: "63%", size: 24, duration: 8.5, delay: 2.2, rotateEnd: 260 },
  { left: "77%", size: 19, duration: 11, delay: 4, rotateEnd: -300 },
  { left: "90%", size: 21, duration: 9.8, delay: 1, rotateEnd: 320 },
];

function CameraIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

export default function FallingCameras() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {cameraConfigs.map((cfg, i) => (
        <span
          key={i}
          className="absolute top-[-10%] text-accent/25 dark:text-accent/20"
          style={{
            left: cfg.left,
            animation: `camera-fall ${cfg.duration}s linear ${cfg.delay}s infinite`,
            // @ts-expect-error custom property for keyframe
            "--rotate-end": `${cfg.rotateEnd}deg`,
          }}
        >
          <CameraIcon size={cfg.size} />
        </span>
      ))}
    </div>
  );
}
