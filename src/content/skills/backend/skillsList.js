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
  cloud(data) {
    return [
      {
        background: "#f9971c",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Aws-logo",
        image: data.awslogo.childImageSharp.fixed,
        name: "AWS",
        description: `Experianced with aws pipline, hosting, and other services`,
      },
      {
        background: "rgb(33, 47, 70)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Azure-logo",
        image: data.azurelogo.childImageSharp.fixed,
        name: "Azure",
        description: `Experianced with Azure container services and databases`,
      },
      {
        background: "rgb(255, 255, 255)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "GCP-logo",
        image: data.gcplogo.childImageSharp.fixed,
        name: "Google Cloud Platform",
        description: `Experianced with GCP cloud functions and compute engine`,
      },
    ]
  },
  databases(data) {
    return [
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "mongodb-logo",
        image: data.mongologo.childImageSharp.fixed,
        name: "MongoDB",
        description: `Experianced in building complex noSQL queries`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Redis-logo",
        image: data.redislogo.childImageSharp.fixed,
        name: "Redis",
        description: `Worked with in memory chaching with redis database`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Redis-logo",
        image: data.mysqllogo.childImageSharp.fixed,
        name: "MySQL",
        description: `Experianced with sequel databases, writing complex queries such as MySQL`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "MarinaDB-logo",
        image: data.marinadblogo.childImageSharp.fixed,
        name: "MarinaDB",
        description: `Experianced with sequel databases, writing complex queries such as MarinaDB`,
      },
    ]
  },
}
