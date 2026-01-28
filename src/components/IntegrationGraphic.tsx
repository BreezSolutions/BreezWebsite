"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CreditCard,
  FileText,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const dataSources = [
  { icon: Building2, label: "Microsoft Dynamics", sublabel: "ERP & GL" },
  { icon: CreditCard, label: "Brex", sublabel: "Bank Feed" },
  { icon: FileText, label: "Invoices & Emails", sublabel: "Documents" },
];

const proposedUpdates = [
  {
    icon: CheckCircle,
    color: "#10B981",
    type: "MATCHED",
    description: "Invoice #4521 → Payment $2,450",
  },
  {
    icon: CheckCircle,
    color: "#10B981",
    type: "RECONCILED",
    description: "847 transactions matched",
  },
  {
    icon: AlertTriangle,
    color: "#F59E0B",
    type: "FLAGGED",
    description: "Duplicate entry in AP",
  },
  {
    icon: Clock,
    color: "#3B82F6",
    type: "PENDING REVIEW",
    description: "JE-2024-0892",
  },
  {
    icon: CheckCircle,
    color: "#10B981",
    type: "POSTED",
    description: "Accrual reversal $12,500",
  },
  {
    icon: AlertTriangle,
    color: "#F59E0B",
    type: "EXCEPTION",
    description: "Missing vendor - escalated",
  },
];

export default function IntegrationGraphic() {
  const [visibleUpdates, setVisibleUpdates] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleUpdates((prev) => {
        return prev.map((i) => (i + 1) % proposedUpdates.length);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: colors.primary,
        borderRadius: "20px",
        padding: "40px 48px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          color: `${colors.white}E6`,
          marginBottom: "32px",
        }}
      >
        Your data. Our agent. Your control.
      </motion.p>

      {/* Main 3-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr 200px",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {/* Left: Data Sources */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {dataSources.map((source, i) => (
            <motion.div
              key={source.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 18px",
                backgroundColor: `${colors.white}0D`,
                borderRadius: "10px",
                border: `1px solid ${colors.white}14`,
              }}
            >
              <source.icon
                size={20}
                color={`${colors.white}80`}
                strokeWidth={1.5}
              />
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: `${colors.white}F2`,
                    marginBottom: "2px",
                  }}
                >
                  {source.label}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: `${colors.white}73`,
                  }}
                >
                  {source.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center: Agent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
            }}
          >
            {/* Outer pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "50%",
                border: `2px solid ${colors.accent}`,
              }}
            />

            {/* Main circle */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: `${colors.accent}26`,
                border: `2px solid ${colors.accent}99`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Rotating gear */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Settings size={36} color={colors.accent} strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              fontWeight: 600,
              color: colors.white,
            }}
          >
            Breez Agent
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "4px",
            }}
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: colors.accent,
              }}
            />
            <span
              style={{
                fontSize: "12px",
                color: colors.accent,
              }}
            >
              Processing
            </span>
          </div>
        </motion.div>

        {/* Right: Output Feed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          style={{
            backgroundColor: `${colors.white}0D`,
            border: `1px solid ${colors.white}1A`,
            borderRadius: "12px",
            padding: "20px",
            minHeight: "280px",
          }}
        >
          {/* Header */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: `${colors.white}80`,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Proposed Updates
          </p>
          <div
            style={{
              height: "1px",
              backgroundColor: `${colors.white}1A`,
              marginBottom: "16px",
            }}
          />

          {/* Update items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <AnimatePresence mode="popLayout">
              {visibleUpdates.map((updateIndex, i) => {
                const update = proposedUpdates[updateIndex];
                return (
                  <motion.div
                    key={`${updateIndex}-${i}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <update.icon
                      size={16}
                      color={update.color}
                      strokeWidth={2}
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: update.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "4px",
                        }}
                      >
                        {update.type}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: `${colors.white}D9`,
                          lineHeight: 1.4,
                        }}
                      >
                        {update.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
