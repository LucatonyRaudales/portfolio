import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert</title>
        <meta name="description" content="Tony R. Raudales - Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder. Building scalable digital solutions and protecting companies from cyber threats." />
        <meta name="keywords" content="Tony Raudales, Software Engineer, Cybersecurity, DevSecOps, Full-Stack Developer, Cloud Infrastructure, Startup Founder, Go, TypeScript, React, Kubernetes, AWS, Azure" />
        <meta name="author" content="Tony R. Raudales" />
        <meta property="og:title" content="Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert" />
        <meta property="og:description" content="Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lucatonny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert" />
        <meta name="twitter:description" content="Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e1b4b" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
