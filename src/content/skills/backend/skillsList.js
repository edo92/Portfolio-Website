export const skillsList = {
  languages(data) {
    return [
      {
        background: "#f0db4f",
        url: "https://google.com",
        alt: "js-logo",
        image: data.jslogo.childImageSharp.fixed,
        name: "JavaScript",
        description: `Worked with JavaScript in client side and server side`,
      },
      {
        background: "#212121",
        url: "https://google.com",
        alt: "node-logo",
        image: data.nodelogo.childImageSharp.fixed,
        name: "NodeJS",
        description: "Experianced building NodeJS restful apis",
      },
      {
        background: "linear-gradient(225deg, #AA589B 0%, #5CB8C4 100%)",
        url: "https://google.com",
        alt: "python-logo",
        image: data.pythonlogo.childImageSharp.fixed,
        name: "Python",
        description:
          "Used python in backend applications and in machine learning pytorch",
      },
      {
        background: "#132d24",
        url: "https://google.com",
        alt: "Django-logo",
        image: data.djangologo.childImageSharp.fixed,
        name: "Django",
        description: "Worked with django backend applications",
      },
    ]
  },
}
