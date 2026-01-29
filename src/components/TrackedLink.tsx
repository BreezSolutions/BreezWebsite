"use client";

import posthog from "posthog-js";
import { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
  children: ReactNode;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export default function TrackedLink({
  href,
  eventName,
  eventProperties = {},
  children,
  style,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    posthog.capture(eventName, {
      ...eventProperties,
      link_url: href,
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={style}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
