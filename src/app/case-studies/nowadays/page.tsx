import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  CreditCard,
  DollarSign,
  Building2,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

export default function NowadaysCaseStudy() {
  return (
    <main style={{ backgroundColor: colors.background, minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          padding: "20px 0",
          borderBottom: `1px solid ${colors.secondary}20`,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: colors.primary,
              textDecoration: "none",
            }}
          >
            Breez Labs
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "14px",
              color: colors.secondary,
              textDecoration: "none",
            }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "80px 0 60px",
          backgroundColor: colors.primary,
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.accent,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Case Study
          </p>
          <h1
            style={{
              fontSize: "var(--heading-lg)",
              fontWeight: 700,
              color: colors.white,
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            How Nowadays reclaimed 50 hours a month with AI-powered
            reconciliation
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: `${colors.white}CC`,
              lineHeight: 1.6,
            }}
          >
            How a finance team went from drowning in spreadsheets to focusing on
            growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          padding: "var(--section-padding) 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          {/* About the Company */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
            }}
          >
            About Nowadays
          </h2>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            <a
              href="https://nowadays.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.primary,
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Nowadays
            </a>{" "}
            is an AI-powered event planning agency specializing in corporate
            events and offsites. As an agent for their clients, they handle
            payments on their behalf—processing millions of dollars in
            pass-through transactions each month.
          </p>

          {/* The Challenge */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
              marginTop: "48px",
            }}
          >
            The Challenge
          </h2>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            The finance team was spending{" "}
            <strong style={{ color: colors.primary }}>50 hours a month</strong>{" "}
            on manual reconciliation—reading contracts for a 7% sourcing fee,
            tracking commissions, and matching hundreds of invoices. Each event
            required hours of tedious exporting, searching for documents,
            calculating fees, and manual data entry. Spreadsheets were used to
            track invoices and payments, but with hundreds per event, keeping up
            with the status of each invoice and payment was very difficult.
          </p>

          {/* The Solution */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
              marginTop: "48px",
            }}
          >
            The Solution
          </h2>

          {/* Paragraph 2: The New Way */}
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Breez Labs built a custom AI agent that changed everything. The
            agent connects directly to{" "}
            <strong style={{ color: colors.primary }}>
              Brex, Stripe, vendor portals, and email
            </strong>
            —pulling in transactions, invoices, contracts, and travel documents
            automatically. Nowadays provided workflow instructions and rules for
            the agnet to follow. It reads and understands each document,
            categorizes expenses, matches payments to invoices, and calculates
            fees based on contract terms, all with an easily auditable trail.
          </p>

          {/* Paragraph 3: The Simple Workflow */}
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "8px",
            }}
          >
            <strong style={{ color: colors.primary }}>
              Now, the Nowadays team&apos;s workflow is simple:
            </strong>
          </p>
          <ol
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "16px",
              paddingLeft: "24px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              Forward vendor emails to the agent
            </li>
            <li style={{ marginBottom: "8px" }}>
              Review the auto-generated ledger entries
            </li>
            <li>Approve with one click</li>
          </ol>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            No spreadsheets. No data entry. No chasing down missing receipts.
            The agent handles the grunt work so the team can focus on growing
            the business.
          </p>

          {/* How It Works Diagram */}
          <div
            style={{
              backgroundColor: colors.primary,
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: `${colors.white}80`,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              How It Works
            </p>

            {/* Desktop layout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {/* Inputs Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: "1",
                  minWidth: "140px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: `${colors.white}60`,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  Inputs
                </p>
                {[
                  { icon: Mail, label: "Emails" },
                  { icon: CreditCard, label: "Brex" },
                  { icon: DollarSign, label: "Stripe" },
                  { icon: Building2, label: "Vendor Portals" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 14px",
                      backgroundColor: `${colors.white}0D`,
                      borderRadius: "8px",
                      border: `1px solid ${colors.white}14`,
                    }}
                  >
                    <item.icon
                      size={18}
                      color={`${colors.white}80`}
                      strokeWidth={1.5}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: `${colors.white}E6`,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <ArrowRight
                size={24}
                color={colors.accent}
                style={{ flexShrink: 0 }}
              />

              {/* Agent Center */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  flex: "1",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: `${colors.accent}26`,
                    border: `2px solid ${colors.accent}99`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Settings size={32} color={colors.accent} strokeWidth={1.5} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: colors.white,
                    }}
                  >
                    Breez Agent
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: `${colors.white}80`,
                    }}
                  >
                    Reads & Matches
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={24}
                color={colors.accent}
                style={{ flexShrink: 0 }}
              />

              {/* Outputs Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: "1",
                  minWidth: "140px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: `${colors.white}60`,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  Output
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    backgroundColor: `${colors.accent}1A`,
                    borderRadius: "8px",
                    border: `1px solid ${colors.accent}33`,
                  }}
                >
                  <CheckCircle
                    size={18}
                    color={colors.accent}
                    strokeWidth={1.5}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: `${colors.white}E6`,
                    }}
                  >
                    Ledger Entries
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    backgroundColor: `${colors.accent}1A`,
                    borderRadius: "8px",
                    border: `1px solid ${colors.accent}33`,
                  }}
                >
                  <CheckCircle
                    size={18}
                    color={colors.accent}
                    strokeWidth={1.5}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: `${colors.white}E6`,
                    }}
                  >
                    Ready to Approve
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div
            style={{
              backgroundColor: colors.callout,
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "48px",
              borderLeft: `4px solid ${colors.accent}`,
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: colors.secondary,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: colors.accent }}>The first day:</strong>{" "}
              Our AI caught a $7,000 missing charge that had been buried in the
              noise—a flight credit that was never applied when a guest changed
              their travel plans. The human team had missed it not because they
              weren&apos;t capable, but because they were focused on
              higher-leverage work. The AI, on the other hand, never gets bored
              and never cuts corners—it checks every single line item with the
              same attention to detail, every time.
            </p>
          </div>

          {/* Report Screenshot */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
            }}
          >
            Sample Report Output
          </h2>
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: "16px",
              padding: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              border: `1px solid ${colors.secondary}20`,
              marginBottom: "48px",
            }}
          >
            <Image
              src="/images/nowadays-report.png"
              alt="Sector Reconciliation Report showing P&L Summary, Outstanding Balances, and Sector Summary for Nowadays"
              width={800}
              height={1000}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                display: "block",
              }}
            />
          </div>

          {/* Testimonial */}
          <div
            style={{
              backgroundColor: colors.callout,
              borderRadius: "12px",
              padding: "32px",
              border: `1px solid ${colors.secondary}20`,
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                color: colors.primary,
                lineHeight: 1.6,
                marginBottom: "20px",
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
                  fontSize: "16px",
                }}
              >
                Nowadays
              </p>
              <p style={{ fontSize: "14px", color: colors.secondary }}>
                AI-Powered Event Planning Agency
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              borderTop: `1px solid ${colors.secondary}20`,
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              Ready to transform your operations?
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: colors.secondary,
                marginBottom: "24px",
              }}
            >
              Let&apos;s discuss how AI agents can help your team.
            </p>
            <a
              href="https://calendly.com/daniel-breezlabs/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: colors.accent,
                color: colors.white,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Schedule a Call
            </a>

            {/* Backed By */}
            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: `1px solid ${colors.secondary}20`,
              }}
            >
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
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "32px",
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
        </div>
      </section>
    </main>
  );
}
