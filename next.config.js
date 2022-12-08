const ContentSecurityPolicy = `
  frame-ancestors 'self';
`;

// Learn more: https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Here, we define custom HTTP headers that will be added to responses.
  // More context: https://nextjs.org/docs/api-reference/next.config.js/headers
  async headers() {
    // Match all sources, including homepage. https://github.com/vercel/next.js/discussions/17991
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
