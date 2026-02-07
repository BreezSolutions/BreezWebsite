"use client";

import { motion } from "framer-motion";
import { Mail, DollarSign, Clock } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const valueProps = [
  {
    icon: Mail,
    title: "We Live in Your Inbox",
    description:
      "We read every email, contract, and confirmation — so we know when you're owed money before you do.",
  },
  {
    icon: DollarSign,
    title: "Collect End-to-End",
    description:
      "Once we find it, we invoice, follow up, resolve disputes, and reconcile payments back to your books.",
  },
  {
    icon: Clock,
    title: "Free Your Team",
    description:
      "No more chasing payments or cross-referencing spreadsheets. Focus on your business while we handle AR.",
  },
];

export default function IntegrationGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: colors.primary,
        borderRadius: "20px",
        padding: "40px 32px",
        overflow: "hidden",
      }}
    >
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
        Built for businesses where billing is complex
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="responsive-grid-3"
      >
        {valueProps.map((prop, i) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            style={{
              padding: "24px",
              backgroundColor: `${colors.white}0D`,
              borderRadius: "12px",
              border: `1px solid ${colors.white}14`,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: `${colors.accent}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <prop.icon size={20} color={colors.accent} strokeWidth={1.5} />
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: colors.white,
                marginBottom: "8px",
              }}
            >
              {prop.title}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: `${colors.white}99`,
                lineHeight: 1.6,
              }}
            >
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
