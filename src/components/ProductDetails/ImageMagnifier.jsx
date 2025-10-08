import React, { useRef, useState } from "react";

/*
  ImageMagnifier
  - Shows an image that zooms on hover, similar to Flipkart/Amazon.
  - Props:
    - src: main image url
    - zoom: multiplier for zoom (e.g., 2)
    - className: tailwind styles for the container size
    - lensSize: square lens size in px (default 120)
    - onPositionChange: callback({ isHover, bgPos, percentX, percentY }) for external zoom panel
*/
export default function ImageMagnifier({ src, zoom = 2, className = "", lensSize = 120, onPositionChange }) {
  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [bgPos, setBgPos] = useState("center");
  const [lensPos, setLensPos] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - left;
    const relY = e.clientY - top;

    // Clamp lens to stay fully inside container
    const half = lensSize / 2;
    const clampedX = Math.max(half, Math.min(width - half, relX));
    const clampedY = Math.max(half, Math.min(height - half, relY));

    const percentX = (clampedX / width) * 100;
    const percentY = (clampedY / height) * 100;

    setLensPos({ left: clampedX - half, top: clampedY - half });
    const pos = `${percentX}% ${percentY}%`;
    setBgPos(pos);
    onPositionChange?.({ isHover: true, bgPos: pos, percentX, percentY });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        onPositionChange?.({ isHover: false, bgPos: "center", percentX: 50, percentY: 50 });
      }}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden border rounded-md bg-white ${className}`}
      style={{
        // Disable internal background zoom; we only show lens here and use external panel for zoom
        backgroundImage: "none",
      }}
    >
      {/* Base image (visible when not hovering) */}
      <img
        src={src}
        alt="product"
        className={`w-full h-full object-contain`}
      />

      {/* Lens overlay */}
      {isHover && (
        <div
          className="pointer-events-none absolute border border-blue-500/70 bg-white/10 backdrop-blur-[1px]"
          style={{
            left: lensPos.left,
            top: lensPos.top,
            width: lensSize,
            height: lensSize,
            boxShadow: "0 0 0 1px rgba(59,130,246,0.4)",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(59,130,246,0.25) 0, rgba(59,130,246,0.25) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(90deg, rgba(59,130,246,0.25) 0, rgba(59,130,246,0.25) 1px, transparent 1px, transparent 12px)",
            backgroundSize: "12px 12px",
          }}
        />
      )}
    </div>
  );
}
