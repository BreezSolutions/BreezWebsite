"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BrainCircuit, TrendingUp } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

const credentials = [
  {
    icon: Award,
    title: "MIT Background",
    description: "Math Olympiad winners & AI researchers",
  },
  {
    icon: BrainCircuit,
    title: "Deep Technical Expertise",
    description:
      "AI/ML systems, enterprise architecture, full-stack engineering",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Real ROI delivered for real businesses — not proofs of concept",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
        <div className="responsive-grid-2" style={{ alignItems: "center" }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginBottom: "16px",
              }}
            >
              About the Founders
            </p>

            <h2
              style={{
                fontSize: "var(--heading-xl)",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Built by engineers who&apos;ve been in your shoes
            </h2>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                marginBottom: "24px",
                lineHeight: 1.7,
              }}
            >
              Breez Labs was founded by MIT engineers who experienced the pain
              of manual operations firsthand while running their own business.
              When generic software couldn&apos;t handle their unique workflows,
              they built their own AI-powered solution — and eliminated manual
              work entirely.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: colors.secondary,
                marginBottom: "24px",
                lineHeight: 1.7,
              }}
            >
              Today, we bring that same problem-solving rigor to every client.
              We don&apos;t just automate — we engineer precision solutions
              grounded in deep technical expertise and a firsthand understanding
              of what operators actually need.
            </p>

            {/* Credentials */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
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
                      border: `1px solid ${colors.secondary}20`,
                      flexShrink: 0,
                    }}
                  >
                    <credential.icon
                      size={24}
                      color={colors.primary}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: colors.primary,
                        fontSize: "15px",
                      }}
                    >
                      {credential.title}
                    </div>
                    <div style={{ fontSize: "14px", color: colors.secondary }}>
                      {credential.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founders Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/founders.jpeg"
                alt="Breez Labs Founders"
                width={600}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: colors.secondary,
                marginTop: "16px",
                lineHeight: 1.6,
              }}
            >
              &ldquo;We didn&apos;t set out to build an automation company. We
              just wanted to solve our own operational nightmare. Turns out,
              everyone has the same problem.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
