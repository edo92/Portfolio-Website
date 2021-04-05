export const heroContent = hero => {
  return {
    title: "PROFESSIONAL SKILLS",
    header: "Full Stack Software Engineer",
    subtitle: "Experianced in building full stack applications",
    image: hero.childImageSharp.fluid,
    alt: "page-wallets-alt",
    buttons: [
      {
        path: "/wallets/find-wallet/",
        content: "Find Out More",
      },
    ],
  }
}
