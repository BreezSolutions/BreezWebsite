import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationGraphic from "@/components/IntegrationGraphic";
import TrackedLink from "@/components/TrackedLink";
import { theme } from "@/theme";

const { colors } = theme;

export const metadata: Metadata = {
  title: "Breez Labs | AI-Native Finance Operations",
  description:
    "Building the system of action layer on top of today's ERPs. AI agents that run accounting workflows with approvals, provenance, and audit trails.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          backgroundColor: colors.background,
          minHeight: "100vh",
        }}
      >
        <article
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          {/* Header */}
          <header style={{ marginBottom: "48px" }}>
            <h1
              style={{
                fontSize: "var(--heading-xl)",
                fontWeight: 700,
                color: colors.primary,
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Breez Labs
            </h1>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: colors.primary,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              An AI-native finance operations lab building the &ldquo;system of
              action&rdquo; layer on top of today&apos;s ERPs and SORs.
            </p>
          </header>

          {/* Thesis */}
          <section style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Today, finance teams waste time and money acting as the
              integration layer between the ERP and the rest of the
              stack—manually entering data, reconciling inconsistencies, and
              coordinating work across disconnected systems. Breez Labs builds
              custom AI agents that can take over that coordination: interpret
              unstructured documents, apply your policies, execute actions
              across systems, and produce an audit trail your team—and your
              auditors—can rely on.
            </p>
          </section>

          {/* How it works visual */}
          <section style={{ marginBottom: "48px" }}>
            <IntegrationGraphic />
          </section>

          {/* Approach */}
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              Our approach
            </h2>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Breez Labs is not trying to rip out your ERP. We&apos;re starting
              by deeply understanding specific Controller workflows—where close
              and AP actually go manual—and then shipping targeted automations
              that plug into the existing stack. Our strategy is simple: learn
              the workflow, automate the loop, measure the results, and expand
              outward.
            </p>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
              }}
            >
              We are currently running a small number of paid pilots with
              controllers and accounting ops leaders where we automate one
              painful workflow end-to-end (with approvals, guardrails, and
              evidence by default). If you own close/AP/reconciliation pain and
              want a 1-page automation map of your workflow&apos;s bottlenecks
              and quick wins, we&apos;d love to talk.
            </p>
          </section>

          {/* Case Study Link */}
          <section
            style={{
              marginBottom: "48px",
              padding: "24px",
              backgroundColor: colors.callout,
              borderRadius: "8px",
              border: `1px solid ${colors.secondary}15`,
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              Case Study
            </p>
            <TrackedLink
              href="/case-studies/nowadays"
              eventName="case_study_link_clicked"
              eventProperties={{
                case_study: "nowadays",
                location: "home_page",
              }}
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: colors.primary,
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
              }}
            >
              How we helped Nowadays save 96% of reconciliation time →
            </TrackedLink>
            <p
              style={{
                fontSize: "15px",
                color: colors.secondary,
                lineHeight: 1.6,
              }}
            >
              Automated bank and credit card reconciliation for an event
              planning company, reducing monthly effort from 50 hours to 2
              hours.
            </p>
          </section>

          {/* Team & Backing */}
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              Team & backing
            </h2>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              We&apos;re backed by Y Combinator and Google Ventures. The team is
              led by technical founders (MIT) with a track record building and
              shipping complex systems. We take a long-term view—but we&apos;re
              obsessed with shipping pragmatic automation that finance teams
              will actually trust.
            </p>

            {/* Backed by logos */}
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
              <TrackedLink
                href="https://www.ycombinator.com"
                eventName="investor_link_clicked"
                eventProperties={{
                  investor: "Y Combinator",
                  location: "home_page",
                }}
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
              </TrackedLink>

              {/* Google Ventures */}
              <TrackedLink
                href="https://www.gv.com"
                eventName="investor_link_clicked"
                eventProperties={{
                  investor: "Google Ventures",
                  location: "home_page",
                }}
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
              </TrackedLink>
            </div>
          </section>

          {/* Trust Note */}
          <section
            style={{
              marginBottom: "48px",
              padding: "24px",
              backgroundColor: `${colors.primary}08`,
              borderRadius: "8px",
              borderLeft: `3px solid ${colors.primary}`,
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: colors.primary,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &ldquo;If you think AI should not be trusted to fully run the
              books—we agree with you. That&apos;s exactly why we&apos;re
              building approvals, provenance, and rollback into the
              foundation.&rdquo;
            </p>
          </section>

          {/* CTA */}
          <section style={{ textAlign: "center" }}>
            <TrackedLink
              href="https://calendly.com/daniel-breezlabs/intro-call"
              eventName="cta_clicked"
              eventProperties={{
                cta_text: "Talk to us",
                location: "home_page_footer",
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Talk to us
            </TrackedLink>
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginTop: "12px",
              }}
            >
              15 minutes · No commitment
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
