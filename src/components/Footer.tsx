import TrackedLink from "@/components/TrackedLink";
import { theme } from "@/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 0",
        backgroundColor: colors.background,
        borderTop: `1px solid ${colors.secondary}15`,
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: 600,
              color: colors.primary,
              fontSize: "15px",
              marginBottom: "4px",
            }}
          >
            Breez Labs
          </p>
          <p
            style={{
              fontSize: "13px",
              color: colors.secondary,
            }}
          >
            AI-native finance operations
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <TrackedLink
            href="mailto:founders@breezlabs.com"
            eventName="email_link_clicked"
            eventProperties={{ email: "founders@breezlabs.com", location: "footer" }}
            style={{
              fontSize: "14px",
              color: colors.secondary,
              textDecoration: "none",
            }}
          >
            founders@breezlabs.com
          </TrackedLink>
        </div>
      </div>
    </footer>
  );
}
