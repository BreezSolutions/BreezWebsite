"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ScrollText, Activity } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const trustItems = [
  { icon: ShieldCheck, label: "End-to-End Encryption" },
  { icon: ScrollText, label: "Audit Trail Logging" },
  { icon: Activity, label: "99.9% Uptime SLA" },
];

export default function Trust() {
  return (
    <section
      style={{
        padding: "48px 0",
        backgroundColor: colors.primary,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.white,
              marginBottom: "24px",
            }}
          >
            Enterprise-Grade Security & Compliance
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: `${colors.white}CC`,
                }}
              >
                <item.icon size={18} strokeWidth={1.5} />
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
