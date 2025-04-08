/**
 * World Map Component
 * 
 * An interactive dotted world map that can display location markers with pulsing animations.
 * Supports both light and dark themes with appropriate color adjustments.
 * 
 * Features:
 * - Responsive dotted world map visualization
 * - Theme-aware styling (light/dark mode)
 * - Ability to highlight specific locations with pulsing markers
 * - Optimized rendering with precomputed potential points
 * - Clean, minimalist aesthetic with subtle gradient effects
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <WorldMap />
 * 
 * // With location markers
 * <WorldMap
 *   dots={[
 *     { 
 *       start: { lat: 40.7128, lng: -74.0060, label: "New York" },
 *       end: { lat: 51.5074, lng: -0.1278, label: "London" }
 *     },
 *     {
 *       start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
 *       end: { lat: 1.3521, lng: 103.8198, label: "Singapore" }
 *     }
 *   ]}
 *   lineColor="#FF5500"
 * />
 * ```
 * 
 * @accessibility
 * - Uses semantic SVG elements with appropriate attributes
 * - Map is presented as a visual element without critical interactions
 * - Maintains sufficient contrast in both light and dark themes
 * - Images include alt text for screen readers
 */
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

/**
 * Props for the WorldMap component
 * 
 * @property dots - Array of location points to highlight on the map
 * @property lineColor - Color for the location markers and connecting lines
 * @property playOnce - Whether animations should play only once
 */
interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  playOnce?: boolean;
}

/**
 * Renders a dotted world map with optional location markers
 * 
 * @param dots - Array of location markers to display
 * @param lineColor - Color for the markers (defaults to the brand color variable)
 * @param playOnce - Whether animations should play only once
 */
export function WorldMap({
  dots = [],
  lineColor = "var(--brand)",
  playOnce = false,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Create the dotted map with a diagonal grid pattern
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  // Generate the SVG with theme-appropriate colors
  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  /**
   * Projects geographic coordinates (latitude/longitude) to SVG coordinates
   * 
   * @param lat - Latitude coordinate
   * @param lng - Longitude coordinate
   * @returns Object with x and y coordinates for the SVG
   */
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Precompute all potential points for a smoother experience
  const potentialPoints = [
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 51.5074, lng: -0.1278 },  // London
    { lat: 25.2048, lng: 55.2708 },  // Dubai
    { lat: -33.8688, lng: 151.2093 }, // Sydney
    { lat: 35.6762, lng: 139.6503 },  // Tokyo
    { lat: 1.3521, lng: 103.8198 },   // Singapore
  ];

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map visualization with dots"
        height="495"
        width="1056"
        draggable={false}
        priority={true}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Pre-render potential points to avoid layout shift */}
        {potentialPoints.map((point, i) => (
          <circle
            key={`potential-point-${i}`}
            cx={projectPoint(point.lat, point.lng).x}
            cy={projectPoint(point.lat, point.lng).y}
            r="0"
            fill="transparent"
          />
        ))}
        
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`location-${i}`}>
              {/* Static dot */}
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
              />
              {/* First pulsing circle */}
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="10"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Second pulsing circle (offset timing) */}
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="10"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
