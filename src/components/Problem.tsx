"use client";

import { motion } from "framer-motion";
import { TrendingDown, ShieldAlert, Users, Unplug } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const problems = [
  {
    icon: TrendingDown,
    title: "Vague Value",
    description:
      "Pilots that look impressive in demos but never tie to a number anyone on the leadership team cares about.",
  },
  {
    icon: ShieldAlert,
    title: "Untrusted Data",
    description:
      "Outputs that sound right but reference the wrong client, the wrong period, or data the team doesn't believe.",
  },
  {
    icon: Users,
    title: "Skills Gap",
    description:
      "Account teams struggle to learn the tools and write the prompts needed to get reliable output, so adoption stalls after onboarding.",
  },
  {
    icon: Unplug,
    title: "Workflow Mismatch",
    description:
      "Tools that live in a separate tab nobody opens, instead of inside the systems your account leads already use.",
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
          Why most agency AI bets stall
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: colors.secondary,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Most agency AI pilots die for the same four reasons.
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
