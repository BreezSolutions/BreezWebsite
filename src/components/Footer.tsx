import TrackedLink from "@/components/TrackedLink";
import { theme } from "@/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      style={{
        padding: "64px 0 48px",
        backgroundColor: colors.primary,
        color: colors.white,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "20px",
                marginBottom: "8px",
              }}
            >
              Breez Labs
            </p>
            <p
              style={{
                fontSize: "14px",
                color: `${colors.white}99`,
                maxWidth: "300px",
                lineHeight: 1.6,
              }}
            >
              Custom AI automation built by engineers.
              <br />
              Backed by Y Combinator & Google Ventures.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: `${colors.white}66`,
                  marginBottom: "16px",
                }}
              >
                Company
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <a
                  href="#about"
                  style={{
                    color: `${colors.white}CC`,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  About
                </a>
                <a
                  href="/case-studies/nowadays"
                  style={{
                    color: `${colors.white}CC`,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Case Study
                </a>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: `${colors.white}66`,
                  marginBottom: "16px",
                }}
              >
                Contact
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TrackedLink
                  href="mailto:founders@breezlabs.com"
                  eventName="email_link_clicked"
                  eventProperties={{
                    email: "founders@breezlabs.com",
                    location: "footer",
                  }}
                  style={{
                    color: `${colors.white}CC`,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  founders@breezlabs.com
                </TrackedLink>
                <a
                  href="https://calendly.com/daniel-breezlabs/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: `${colors.white}CC`,
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: `1px solid ${colors.white}15`,
            paddingTop: "24px",
            fontSize: "13px",
            color: `${colors.white}66`,
          }}
        >
          &copy; {new Date().getFullYear()} Breez Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
