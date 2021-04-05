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

const defaultContent = {
  title: "EJ Personal Portfolio",
  author: "Eduard Jacobs",
}

export default defaultContent
