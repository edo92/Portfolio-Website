export const projectslist = {
  snippets(data) {
    return [
      {
        image: data.awsarchitecture.childImageSharp.fixed,
        title: "AWS ECS Infrastructure with CI CD Pipeline",
        description: "Dockerized containers React, NodeJS, Nginx",
        alt: "dockerized nginx nodejs containers",
        to: "https://github.com/edo92/AWS-ECS-Hosting-Pipeline",
      },
      {
        image: data.nodearchitecture.childImageSharp.fixed,
        title: "NodeJS Project",
        description: "NodeJS backend",
        alt: "page-index-get-started-eth-image-alt",
        to: "https://github.com",
      },
      {
        image: data.nodearchitecture.childImageSharp.fixed,
        title: "NodeJS Project",
        description: "NodeJS backend",
        alt: "page-index-get-started-eth-image-alt",
        to: "https://github.com",
      },
    ]
  },
  projects(data) {
    return [
      {
        image: data.wifi.childImageSharp.fixed,
        title: "NetworkX library",
        description:
          "Helps to control wifi network such as seaching for networks connecting to it, monitoring ports, etc..",
        alt: "networkx project",
        to: "https://github.com/edo92/NetworkX",
      },
      // {
      //   image: data.azureCognitive.childImageSharp.fixed,
      //   title: "Face recognition with azure cognitive",
      //   description:
      //     "Simplified api to make request to Azure face recognition api and saves data to azure cosmos",
      //   alt: "azure-face-recognition",
      //   to: "https://github.com/edo92/Azure-Face-Recognition-Resources",
      // },
    ]
  },
}
