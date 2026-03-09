import { theme } from "@/theme";

const { colors } = theme;

const services = [
  {
    title: "Process Automation",
    description:
      "We build AI agents that handle end-to-end workflows — invoicing, data entry, reconciliation, and reporting — so your team can focus on strategy.",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Extract, classify, and route information from emails, contracts, receipts, and any unstructured data automatically.",
  },
  {
    title: "Custom AI Integrations",
    description:
      "Connect your existing tools with AI-powered middleware that makes them work together seamlessly.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Real-time dashboards and alerts that surface insights from your operations, so nothing falls through the cracks.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
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
        <p
          style={{
            fontSize: "14px",
            color: colors.secondary,
            marginBottom: "16px",
          }}
        >
          What We Build
        </p>
        <h2
          style={{
            fontSize: "var(--heading-xl)",
            fontWeight: 700,
            color: colors.primary,
            marginBottom: "24px",
          }}
        >
          AI automation, tailored to your business
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: colors.secondary,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          We don&apos;t sell software licenses. We engineer custom AI systems
          that plug into your existing workflows and start delivering results
          immediately.
        </p>

        <div className="responsive-grid-4">
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                padding: "var(--card-padding)",
                backgroundColor: colors.white,
                borderRadius: "12px",
                border: `1px solid ${colors.secondary}30`,
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: colors.primary,
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.secondary,
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
