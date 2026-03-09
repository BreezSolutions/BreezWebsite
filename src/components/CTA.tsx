"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const features = [
  "Free 30-minute consultation",
  "Custom workflow analysis",
  "ROI estimate for your business",
];

export default function CTA() {
  return (
    <section
      id="book-call"
      style={{
        padding: "var(--section-padding) 0",
        backgroundColor: colors.accent,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
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
          <h2
            style={{
              fontSize: "var(--heading-xl)",
              fontWeight: 700,
              color: colors.white,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Ready to automate your operations?
          </h2>

          <p
            style={{
              fontSize: "var(--text-md)",
              color: `${colors.white}CC`,
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            Schedule a free discovery call to discuss your workflows and see how
            custom AI automation can eliminate your manual burden.
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: `${colors.white}EE`,
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: `${colors.white}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={12} color={colors.white} strokeWidth={3} />
                </div>
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://calendly.com/daniel-breezlabs/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: colors.white,
              color: colors.accent,
              fontWeight: 600,
              padding: "18px 40px",
              borderRadius: "8px",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Book Your Discovery Call
          </a>

          <p
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: `${colors.white}99`,
            }}
          >
            No commitment required. Let&apos;s just talk about your challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
