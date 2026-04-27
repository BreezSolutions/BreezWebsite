"use client";

import { motion } from "framer-motion";
import { Target, Plug, Users } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const steps = [
  {
    icon: Target,
    caption: "Find one bottleneck",
    description:
      "Our engineer spends a week with your team and picks the single workflow eating the most hours — and the number we'll move. No 30-page audit, no 12-workflow roadmap.",
  },
  {
    icon: Plug,
    caption: "Connect, don't migrate",
    description:
      "Your data stays in HubSpot, your billing system, your Drive — wherever it already lives. We read from it, we don't move it. That means we're shipping in week two instead of waiting on IT in month three.",
  },
  {
    icon: Users,
    caption: "Deploy embedded",
    description:
      "Our engineer ships the first version into the tool your team already opens every day, then stays in your Slack to fix what breaks the week it breaks.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "var(--section-padding) 0",
        backgroundColor: colors.callout,
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
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.secondary,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Our Process
          </p>
          <h2
            style={{
              fontSize: "var(--heading-xl)",
              fontWeight: 700,
              color: colors.primary,
            }}
          >
            How AI actually lands inside an agency
          </h2>
        </motion.div>

        <div className="responsive-grid-3" style={{ gap: "48px" }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ textAlign: "center" }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  marginBottom: "24px",
                  borderRadius: "24px",
                  backgroundColor: colors.white,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <step.icon
                  size={64}
                  color={colors.accent}
                  strokeWidth={1.2}
                />
              </div>

              {/* Step number + Caption */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: colors.primary,
                    color: colors.white,
                    fontSize: "14px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: colors.primary,
                  }}
                >
                  {step.caption}
                </span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.secondary,
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
