"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

export default function CaseStudy() {
  return (
    <section
      id="case-study"
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
          transition={{ duration: 0.6 }}
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
            Case Study
          </p>

          <div className="responsive-grid-2" style={{ alignItems: "center" }}>
            {/* Left Content */}
            <div>
              <h2
                style={{
                  fontSize: "var(--heading-xl)",
                  fontWeight: 700,
                  color: colors.primary,
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                How Nowadays reclaimed 50 hours a month
              </h2>

              <p
                style={{
                  fontSize: "var(--text-md)",
                  color: colors.secondary,
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                A 2-person finance team went from manually reconciling hundreds
                of invoices to letting our AI handle it — recovering 2% of ARR
                in the first week.
              </p>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  flexWrap: "wrap",
                  marginBottom: "32px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "var(--heading-md)",
                      fontWeight: 700,
                      color: colors.accent,
                    }}
                  >
                    96%
                  </p>
                  <p style={{ fontSize: "14px", color: colors.secondary }}>
                    Less time on manual work
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "var(--heading-md)",
                      fontWeight: 700,
                      color: colors.accent,
                    }}
                  >
                    $7k
                  </p>
                  <p style={{ fontSize: "14px", color: colors.secondary }}>
                    Recovered in week one
                  </p>
                </div>
              </div>

              <Link
                href="/case-studies/nowadays"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: colors.accent,
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Read the full story
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right - Quote */}
            <div
              style={{
                backgroundColor: colors.white,
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: `1px solid ${colors.secondary}15`,
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: colors.primary,
                  lineHeight: 1.6,
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;These guys are world class. They really took the time to
                understand my problem and built a custom solution that fit
                perfectly into our current process.&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: colors.primary,
                    fontSize: "15px",
                  }}
                >
                  Nowadays
                </p>
                <p style={{ fontSize: "13px", color: colors.secondary }}>
                  AI-Powered Event Planning Agency
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
