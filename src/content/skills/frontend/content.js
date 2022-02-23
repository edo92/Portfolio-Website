export const editorChoices = data => {
  return [
    {
      image: data.astrnt.childImageSharp.fixed,
      name: "Graphic Design",
      description: "Graphic design and illustration projects",
      url: "https://github.com/edo92/Visuals",
      alt: "graphic design and illustration",
      background: "#212F46",
      type: "ILLUSTRATION",
      pillColor: "tagPink",
    },
    {
      image: data.uiuxrobot.childImageSharp.fixed,
      name: "Web Design",
      description: "Web UI UX Design and development",
      url: "/project",
      alt: "page-dapps-uniswap-logo-alt",
      background: "#212F46",
      type: "UI/UX",
      pillColor: "tagRed",
    },
    {
      image: data.electree.childImageSharp.fixed,
      name: "Uniswap",
      description: "Client Side APIs, such as payments with strip & paypal",
      url: "/project",
      alt: "page-dapps-uniswap-logo-alt",
      background: "#212F46",
      type: "API",
      pillColor: "tagBlue",
    },
  ]
}
