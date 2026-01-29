# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Breez Labs Next.js project. The integration uses the modern `instrumentation-client.ts` approach recommended for Next.js 15.3+, with a reverse proxy configured through Next.js rewrites to improve tracking reliability and avoid ad blockers.

## Integration Summary

### Files Created
- **`.env`** - Environment variables for PostHog API key and host
- **`instrumentation-client.ts`** - Client-side PostHog initialization with exception capture enabled
- **`src/components/TrackedLink.tsx`** - Reusable component for tracking link clicks

### Files Modified
- **`next.config.ts`** - Added reverse proxy rewrites for PostHog ingestion
- **`src/app/page.tsx`** - Added tracking for CTA, case study, and investor links
- **`src/app/case-studies/nowadays/page.tsx`** - Added tracking for CTA, external, and investor links
- **`src/components/Navbar.tsx`** - Added tracking for navigation CTA and case study links
- **`src/components/Footer.tsx`** - Added tracking for email link clicks

## Events Implemented

| Event Name | Description | File(s) |
|------------|-------------|---------|
| `cta_clicked` | User clicked a CTA button (Talk to us / Schedule a Call) | `src/app/page.tsx`, `src/app/case-studies/nowadays/page.tsx` |
| `case_study_link_clicked` | User clicked the case study link from the home page | `src/app/page.tsx` |
| `investor_link_clicked` | User clicked an investor logo/link (Y Combinator or Google Ventures) | `src/app/page.tsx`, `src/app/case-studies/nowadays/page.tsx` |
| `external_link_clicked` | User clicked an external link (e.g., Nowadays website) | `src/app/case-studies/nowadays/page.tsx` |
| `nav_cta_clicked` | User clicked the 'Talk to us' button in the navbar | `src/components/Navbar.tsx` |
| `nav_case_study_clicked` | User clicked the Case Study link in the navbar | `src/components/Navbar.tsx` |
| `email_link_clicked` | User clicked the email link in the footer | `src/components/Footer.tsx` |

### Event Properties

All events include the following properties where applicable:
- `location` - Where on the site the interaction occurred (e.g., "home_page", "navbar", "case_study_page")
- `link_url` - The destination URL of the clicked link
- `cta_text` - The text of the CTA button clicked
- `investor` - The name of the investor (for investor link clicks)
- `case_study` - The case study identifier (for case study link clicks)

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- **Analytics basics**: [https://us.posthog.com/project/300917/dashboard/1159394](https://us.posthog.com/project/300917/dashboard/1159394)

### Insights
1. **CTA Click Rate Over Time** - Tracks CTA button clicks over time
   [https://us.posthog.com/project/300917/insights/9cc5KLtH](https://us.posthog.com/project/300917/insights/9cc5KLtH)

2. **Case Study Engagement** - Tracks clicks on the Nowadays case study
   [https://us.posthog.com/project/300917/insights/stTyEY8r](https://us.posthog.com/project/300917/insights/stTyEY8r)

3. **Homepage to CTA Conversion Funnel** - Funnel from pageview to CTA click
   [https://us.posthog.com/project/300917/insights/cP79F9hH](https://us.posthog.com/project/300917/insights/cP79F9hH)

4. **Investor Link Engagement** - Tracks clicks on Y Combinator and Google Ventures links
   [https://us.posthog.com/project/300917/insights/LdkeRfjU](https://us.posthog.com/project/300917/insights/LdkeRfjU)

5. **All User Interactions Overview** - Table overview of all tracked interactions
   [https://us.posthog.com/project/300917/insights/0O2WqzvK](https://us.posthog.com/project/300917/insights/0O2WqzvK)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

## Technical Notes

- **Automatic Pageviews**: PostHog is configured with `defaults: '2025-11-30'` which automatically captures pageviews and pageleaves
- **Exception Capture**: Enabled via `capture_exceptions: true` for automatic error tracking
- **Debug Mode**: Enabled in development mode for easier debugging
- **Reverse Proxy**: All PostHog requests are proxied through `/ingest/*` to avoid ad blockers
