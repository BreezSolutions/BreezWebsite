"use client";

import { motion } from "framer-motion";
import { Hourglass, CircleAlert, UserPlus, Puzzle } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const problems = [
  {
    icon: Hourglass,
    title: "Hours Lost to Manual Work",
    description:
      "Your team spends countless hours on repetitive tasks — data entry, follow-ups, reconciliation — instead of high-value work.",
  },
  {
    icon: CircleAlert,
    title: "Human Error is Expensive",
    description:
      "Manual processes lead to missed invoices, duplicate entries, and costly mistakes that compound over time.",
  },
  {
    icon: UserPlus,
    title: "Scaling Means More Headcount",
    description:
      "As your business grows, the only answer seems to be hiring more people — increasing costs and complexity.",
  },
  {
    icon: Puzzle,
    title: "Generic Software Falls Short",
    description:
      "Off-the-shelf tools don't understand your unique workflows, industry requirements, or business logic.",
  },
];

export default function Problem() {
  return (
    <section
      style={{
        padding: "var(--section-padding) 0",
        backgroundColor: colors.background,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: colors.secondary,
            marginBottom: "16px",
          }}
        >
          The Problem
        </p>
        <h2
          style={{
            fontSize: "var(--heading-xl)",
            fontWeight: 700,
            color: colors.primary,
            marginBottom: "24px",
          }}
        >
          Your operations are stuck in the past
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: colors.secondary,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Most businesses are buried in repetitive, manual processes that drain
          productivity and introduce costly errors.
        </p>

        <div className="responsive-grid-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: "var(--card-padding)",
                backgroundColor: colors.callout,
                borderRadius: "12px",
                border: `1px solid ${colors.secondary}20`,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: `1px solid ${colors.secondary}20`,
                }}
              >
                <problem.icon
                  size={24}
                  color={colors.primary}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: colors.primary,
                  marginBottom: "12px",
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.secondary,
                  lineHeight: 1.6,
                }}
              >
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
