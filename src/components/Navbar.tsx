"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import posthog from "posthog-js";
import { theme } from "@/theme";

const { colors } = theme;

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "/case-studies/nowadays" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    posthog.capture("nav_cta_clicked", {
      cta_text: "Schedule a Call",
      location: "navbar",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: `${colors.background}F2`,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.secondary}15`,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: colors.primary,
            textDecoration: "none",
          }}
        >
          Breez Labs
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-only"
          style={{ display: "flex", alignItems: "center", gap: "32px" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: colors.secondary,
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/daniel-breezlabs/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            style={{
              backgroundColor: colors.accent,
              color: colors.white,
              padding: "10px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} color={colors.primary} />
          ) : (
            <Menu size={24} color={colors.primary} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-only"
          style={{
            display: "none",
            flexDirection: "column",
            backgroundColor: colors.background,
            borderTop: `1px solid ${colors.secondary}15`,
            padding: "16px var(--container-padding)",
            gap: "12px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: colors.secondary,
                textDecoration: "none",
                fontSize: "16px",
                padding: "12px 0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/daniel-breezlabs/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              handleCtaClick();
              setMobileMenuOpen(false);
            }}
            style={{
              backgroundColor: colors.accent,
              color: colors.white,
              padding: "14px 20px",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Schedule a Call
          </a>
        </div>
      )}
    </nav>
  );
}
