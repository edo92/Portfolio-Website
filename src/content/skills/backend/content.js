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

  cicd(data) {
    return [
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "AwsCodeBuild-logo",
        image: data.awscodebuildlogo.childImageSharp.fixed,
        name: "AwsCodeBuild",
        description: `Experianced in Node.js/JavaScirpt and Python/Django`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "AzureDevOps-logo",
        image: data.azuredevopslogo.childImageSharp.fixed,
        name: "AzureDevOps",
        description: `Experianced in Node.js/JavaScirpt and Python/Django`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Circleci-logo",
        image: data.circlecilogo.childImageSharp.fixed,
        name: "Circleci",
        description: `Experianced in Node.js/JavaScirpt and Python/Django`,
      },
      {
        background: "#ffff",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        alt: "Jenkins-logo",
        image: data.jenkinslogo.childImageSharp.fixed,
        name: "Jenkins",
        description: `Experianced in Node.js/JavaScirpt and Python/Django`,
      },
    ]
  },
}

export const projectList = {
  snippets(data) {
    return [
      {
        image: data.awsarchitecture.childImageSharp.fixed,
        title: "AWS ECS Infrastructure with CI CD Pipeline",
        description: "Dockerized containers React, NodeJS, Nginx",
        alt: "dockerized nginx nodejs containers",
        to: "/project",
      },
      {
        image: data.nodearchitecture.childImageSharp.fixed,
        title: "NodeJS Project",
        description: "NodeJS backend",
        alt: "page-index-get-started-eth-image-alt",
        to: "/project",
      },
    ]
  },
}

export const skillsChecklist = [
  [
    [
      {
        emoji: ":white_check_mark:",
        title: "Languages",
        description: "Python & JavaScript",
      },
      {
        emoji: ":white_check_mark:",
        title: "Frameworks",
        description: "Node.js & Django",
      },
      {
        emoji: ":white_check_mark:",
        title: "Other Languages",
        description: "Bash & Go",
      },
      {
        emoji: ":white_check_mark:",
        title: "Other Frameworks",
        description: "Flask & Apollo/GraphQL",
      },
    ],
    [
      {
        emoji: ":white_check_mark:",
        title: "Cloud Infrastructure",
        description: "AWS & Azure",
      },
      {
        emoji: ":white_check_mark:",
        title: "Aws Scalable Server",
        description: "ECS & ECK",
      },
      {
        emoji: ":white_check_mark:",
        title: "Azure Scalable Server",
        description: "Kubernetes & Service Fabric",
      },
      {
        emoji: ":white_check_mark:",
        title: "Serverless",
        description: "Fargate & Lambda",
      },
    ],
  ],
  [
    [
      {
        emoji: ":white_check_mark:",
        title: "Databases",
        description: "Relational & No SQL",
      },

      {
        emoji: ":white_check_mark:",
        title: "Architecture",
        description: "ORM & ODM",
      },

      {
        emoji: ":white_check_mark:",
        title: "In Memory",
        description: "Radis",
      },

      {
        emoji: ":white_check_mark:",
        title: "Other Databases",
        description: "SQLite & Postgresql",
      },
    ],
    [
      {
        emoji: ":white_check_mark:",
        title: "CI / CD",
        description: "CircleCI & Jenkins",
      },
      {
        emoji: ":white_check_mark:",
        title: "Aws Pipeline",
        description: "AWS Pipeline, CodeBuild & CodeDeploy",
      },
      {
        emoji: ":white_check_mark:",
        title: "Azure Pipeline",
        description: "Azure DevOps",
      },

      {
        emoji: ":white_check_mark:",
        title: "Mobile App CI/CD",
        description: "Azure AppCenter",
      },
    ],
  ],
]
