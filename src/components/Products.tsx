import { theme } from "@/theme";

const { colors } = theme;

const services = [
  {
    title: "Process Automation",
    description:
      "AI agents that handle the work between systems — client reporting, reconciliation, status follow-ups — so account leads stop being the integration layer.",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Pull structured data out of briefs, RFPs, contracts, and inbound creative — into the format your team already reviews.",
  },
  {
    title: "Custom AI Integrations",
    description:
      "Connect the tools your agency already runs on. We meet your data where it lives instead of standing up a parallel stack.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Dashboards and alerts that surface margin leaks, at-risk accounts, and overdue work — auditable, with the source of every number visible.",
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
          AI that fits the way your agency works
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: colors.secondary,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          We don&apos;t sell software. We pick the one workflow burning the
          most agency hours, build it into HubSpot or Slack or wherever your
          team already works, and our engineer stays in your channel until
          it&apos;s saving you real time.
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
