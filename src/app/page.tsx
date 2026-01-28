import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationGraphic from "@/components/IntegrationGraphic";
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
              We imagine a world where accounting workflows don&apos;t live in
              siloed inboxes, spreadsheets, and tribal knowledge. Where
              month-end close doesn&apos;t require heroics. Where the system
              doesn&apos;t just store the books—it continuously runs the
              workflow: reading the messy inputs, chasing missing context,
              routing approvals, posting with evidence, and escalating only the
              true exceptions.
            </p>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              What&apos;s missing is data synchronization. Today, humans act as
              the integration layer, manually inputting, translating and
              coordinating across disjointed systems. Modern agentic AI can
              finally do the coordination work: interpret unstructured
              documents, follow policies, take actions across systems, and leave
              an audit trail that a human (and an auditor) can trust.
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
              Breez Labs is not trying to replace the ERP. We&apos;re starting
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
            <a
              href="/case-studies/nowadays"
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
            </a>
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
              }}
            >
              We&apos;re backed by Y Combinator and Google Ventures. The team is
              led by technical founders (MIT) with a track record building and
              shipping complex systems. We take a long-term view—but we&apos;re
              obsessed with shipping pragmatic automation that finance teams
              will actually trust.
            </p>
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
            <a
              href="https://calendly.com/daniel-breezlabs/intro-call"
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
            </a>
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
