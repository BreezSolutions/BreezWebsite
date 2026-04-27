"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiBrex,
  SiQuickbooks,
  SiStripe,
  SiSlack,
  SiGmail,
  SiSap,
} from "react-icons/si";
import { theme } from "@/theme";

const { colors } = theme;

const platforms: {
  name: string;
  color: string;
  Icon: IconType;
  angle: number;
  distance: number;
}[] = [
  { name: "Brex", color: "#FF5722", Icon: SiBrex, angle: 210, distance: 140 },
  { name: "QuickBooks", color: "#2CA01C", Icon: SiQuickbooks, angle: 250, distance: 120 },
  { name: "Stripe", color: "#635BFF", Icon: SiStripe, angle: 290, distance: 140 },
  { name: "Slack", color: "#E01E5A", Icon: SiSlack, angle: 330, distance: 120 },
  { name: "Email", color: "#4285F4", Icon: SiGmail, angle: 10, distance: 140 },
  { name: "ERP", color: "#0078D4", Icon: SiSap, angle: 50, distance: 120 },
];

function getPosition(angle: number, distance: number) {
  const radian = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radian) * distance,
    y: Math.sin(radian) * distance,
  };
}

function DataParticle({
  startX,
  startY,
  delay,
  color,
}: {
  startX: number;
  startY: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 12px ${color}`,
        left: "50%",
        top: "50%",
        marginLeft: "-5px",
        marginTop: "-5px",
        zIndex: 10,
      }}
      initial={{
        x: startX,
        y: startY,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: [startX, startX * 0.5, 0],
        y: [startY, startY * 0.5, 0],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 0.8, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    />
  );
}

function PlatformLogo({
  name,
  color,
  Icon,
  angle,
  distance,
  index,
}: {
  name: string;
  color: string;
  Icon: IconType;
  angle: number;
  distance: number;
  index: number;
}) {
  const position = getPosition(angle, distance);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-24px",
        marginTop: "-24px",
        zIndex: 20,
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 150,
      }}
    >
      <motion.div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 20px ${color}50`,
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          y: {
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Icon
          size={22}
          color="#ffffff"
          style={{ userSelect: "none" }}
        />
      </motion.div>
      <div
        style={{
          position: "absolute",
          bottom: "-24px",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{ fontSize: "11px", fontWeight: 500, color: colors.secondary }}
        >
          {name}
        </span>
      </div>
    </motion.div>
  );
}

function CentralAgent() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 30,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          left: "-30px",
          top: "-30px",
          borderRadius: "50%",
          border: `2px solid ${colors.secondary}20`,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          left: "-10px",
          top: "-10px",
          borderRadius: "50%",
          border: `2px dashed ${colors.secondary}30`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 40px ${colors.primary}40`,
        }}
        animate={{
          boxShadow: [
            `0 0 40px ${colors.primary}40`,
            `0 0 60px ${colors.primary}60`,
            `0 0 40px ${colors.primary}40`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.white}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: "90px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: colors.white,
          padding: "8px 16px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: `1px solid ${colors.secondary}20`,
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: colors.accent,
          }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span
          style={{ fontSize: "12px", fontWeight: 600, color: colors.primary }}
        >
          Learning
        </span>
      </motion.div>
    </div>
  );
}

const NOTIFICATIONS = [
  "Client report drafted",
  "Brief parsed",
  "Invoice matched",
  "Status updated",
];

function KnowledgeNotification({
  startIndex,
  side,
  delaySeconds = 0,
}: {
  startIndex: number;
  side: "left" | "right";
  delaySeconds?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 2) % NOTIFICATIONS.length);
      }, 9000);
      return () => clearInterval(interval);
    }, delaySeconds * 1000);
    return () => clearTimeout(timeout);
  }, [delaySeconds]);

  return (
    <motion.div
      style={{
        position: "absolute",
        [side]: "10px",
        top: "45%",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "12px 16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        border: "1px solid #e5e7eb",
        zIndex: 40,
      }}
      initial={{ opacity: 0, x: side === "right" ? -20 : 20, scale: 0.8 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: side === "right" ? [-20, 0, 0, 20] : [20, 0, 0, -20],
        scale: [0.8, 1, 1, 0.8],
      }}
      transition={{
        duration: 3,
        delay: delaySeconds,
        repeat: Infinity,
        repeatDelay: 6,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            flexShrink: 0,
            borderRadius: "50%",
            backgroundColor: "#065F4620",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#065F46"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#0A0F1F",
          }}
        >
          {NOTIFICATIONS[currentIndex]}
        </span>
      </div>
    </motion.div>
  );
}

export default function IntegrationGraphic() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${colors.secondary}10 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {platforms.map((platform, index) => (
        <PlatformLogo key={platform.name} {...platform} index={index} />
      ))}

      {platforms.map((platform, index) => {
        const pos = getPosition(platform.angle, platform.distance);
        return (
          <DataParticle
            key={`particle-${platform.name}`}
            startX={pos.x}
            startY={pos.y}
            delay={index * 0.4 + 1}
            color={platform.color}
          />
        );
      })}

      <CentralAgent />

      <KnowledgeNotification startIndex={0} side="right" delaySeconds={0} />
      <KnowledgeNotification startIndex={1} side="left" delaySeconds={4.5} />
    </div>
  );
}
