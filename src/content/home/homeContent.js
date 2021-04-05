// Features images for features component
import f1 from "../../static/features/f1.png"
import f4 from "../../static/features/f4.png"
import f6 from "../../static/features/f6.png"
import f8 from "../../static/features/f8.png"

import f2 from "../../static/features/f2.png"
import f3 from "../../static/features/f3.png"
import f5 from "../../static/features/f5.png"
import f7 from "../../static/features/f7.png"

export const heroContent = data => {
  return {
    title: "PROFESSIONAL SKILLS",
    header: "Full Stack Software Engineer",
    subtitle: "Experianced in building full stack applications",
    image: data.hero.childImageSharp.fluid,
    alt: "page-wallets-alt",
    buttons: [
      {
        path: "/wallets/find-wallet/",
        content: "Find Out More",
      },
    ],
  }
}

export const skillsList = data => {
  return [
    {
      image: data.backendLogo.childImageSharp.fixed,
      title: "backend",
      to: "/backend/",
      alt: "backend development",
      description:
        "Developing Api and rest-api using Node.js or Django frameworks",
    },
    {
      image: data.frontendLogo.childImageSharp.fixed,
      title: "frontend",
      to: "/client/",
      alt: "frontend development",
      description:
        "Developing front end applications using React or Angular frameworks",
    },
    {
      image: data.mobileLogo.childImageSharp.fixed,
      title: "mobile",
      to: "/mobile/",
      alt: "Mobile development",
      description: "Mobile development using React Native or Expo frameworks",
    },
  ]
}

export const features = {
  row1: [
    {
      image: f1,
      title: "Mobile Apps",
      description:
        "Mobile apps can be developed from ground up using react native",
    },
    {
      image: f6,
      title: "Web UI/UX",
      description:
        "Web Applications can be built using react/angular, css, sass",
    },
    {
      image: f4,
      title: "Features",
      description: "Features can be adopted to existing website",
    },
    {
      image: f8,
      title: "Web UI/UX",
      description: "Web Applications can be built using react, css, sass",
    },
  ],
  row2: [
    {
      image: f5,
      title: "APIs",
      description: "APIs using nodejs express, django, flask",
    },
    {
      image: f3,
      title: "CI CD",
      description: "Continuous integration and deployment",
    },
    {
      image: f7,
      title: "Testing",
      description: "Unit, integration, and end to end testing",
    },
    { image: f2 },
  ],
}

const defaultContent = {
  title: "EJ Personal Portfolio",
  author: "Eduard Jacobs",
}

export default defaultContent
