"use client";

import { theme } from "@/theme";
import Image from "next/image";
import IntegrationGraphic from "./IntegrationGraphic";

const { colors } = theme;

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "var(--section-padding)",
        background: colors.background,
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
          {/* Left Content */}
          <div>
            <p
              style={{
                fontSize: "14px",
                color: colors.accent,
                marginBottom: "24px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              AI for agencies
            </p>

            <h1
              style={{
                fontSize: "var(--heading-lg)",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              AI that lands fast
              <br />
              inside your agency
            </h1>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                marginBottom: "36px",
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              An engineer embeds with your team, finds the workflow burning
              the most hours, and ships it inside the tools you already use.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://calendly.com/daniel-breezlabs/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.white,
                  fontWeight: 600,
                  padding: "16px 32px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Schedule a Call
              </a>
              <a
                href="#how-it-works"
                style={{
                  color: colors.primary,
                  fontWeight: 500,
                  padding: "16px 24px",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: `1px solid ${colors.secondary}`,
                  borderRadius: "8px",
                }}
              >
                Learn more &rarr;
              </a>
            </div>

            {/* Backed by section */}
            <div style={{ marginBottom: "32px" }}>
              <p
                style={{
                  fontSize: "13px",
                  color: colors.secondary,
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Backed by
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {/* Y Combinator */}
                <a
                  href="https://www.ycombinator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#FF6600",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.white,
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    Y
                  </div>
                  <span
                    style={{
                      fontWeight: 600,
                      color: colors.primary,
                      fontSize: "15px",
                    }}
                  >
                    Y Combinator
                  </span>
                </a>

                {/* Google Ventures */}
                <a
                  href="https://www.gv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Image
                    src="/images/gv-logo.svg"
                    alt="GV (Google Ventures)"
                    width={60}
                    height={32}
                    style={{
                      height: "32px",
                      width: "auto",
                      borderRadius: "4px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: colors.primary,
                      fontSize: "15px",
                    }}
                  >
                    Google Ventures
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual - Integration Graphic */}
          <div className="desktop-only" style={{ display: "block" }}>
            <IntegrationGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
