import { NextPageContext } from "next";

export function getServerSideProps(context: NextPageContext) {
  // ISSUE IS HERE!
  // context.rest.setHeader does not modify the header in
  // Vercel Preview / Production deployments.
  // This only works locally.
  console.error(
    "context.res",
    context.res.getHeader("Content-Security-Policy")
  );
  context.res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors 'self' https://example.com;"
  );

  return {
    props: {},
  };
}

export default function Home() {
  return null;
}
