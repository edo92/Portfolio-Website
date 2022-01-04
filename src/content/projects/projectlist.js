export const uiux = {
  projects(data) {
    return [
      {
        image: data.chatApp.childImageSharp.fixed,
        title: "Chat App",
        description: "Modern chat application ui, built from ground up",
        alt: "chat application",
        to: "https://github.com/edo92/Chat-App-UI",
      },
      {
        image: data.portfolio.childImageSharp.fixed,
        title: "Personal portfolio",
        description:
          "Personal portfolio website, projects skills, projects, and snippets",
        alt: "personal portfolio",
        to: "https://github.com/edo92/Portfolio-Website",
      },
      {
        image: data.paymentUi.childImageSharp.fixed,
        title: "Payment Ui",
        description: "Payment Ui integrated with stripe api",
        alt: "payment ui",
        to: "https://github.com/edo92/payment-ui",
      },
      {
        image: data.exoui.childImageSharp.fixed,
        title: "Exo Ui",
        description: "Exo-ui is a custom React ui/ux library",
        alt: "exoui",
        to: "https://github.com/edo92/payment-ui",
      },
    ]
  },
}

export const cloud = {
  projects(data) {
    return [
      {
        image: data.awsStaticWeb.childImageSharp.fixed,
        title: "Static website hosting infrastructure on AWS by CDK",
        description:
          " Deploys react source code to S3, serves website with low latency content delivery network with an origin access identity and Lambda@Edge.",
        alt: "aws static website",
        to: "https://github.com/edo92/Aws-Static-Website-CI-CD",
      },
      {
        image: data.ecsService.childImageSharp.fixed,
        title: "Aws cdk ecs service infrastructure",
        description:
          "Aws elastic container service with blue/green deployment, Includes pipeline for express app, and cdk self update pipeline",
        alt: "aws ecs service",
        to: "https://github.com/edo92/Aws-Ecs-BlueGreen-Deployment",
      },
      {
        image: data.azureCognitive.childImageSharp.fixed,
        title: "Azure cognitive face recognition",
        description:
          "Face recognition which identifies age, gender, etc. then it will save the date in cosnos database",
        alt: "chat application",
        to: "https://github.com/edo92/Azure-Face-Recognition-Resources",
      },
      {
        image: data.cognito_signin.childImageSharp.fixed,
        title: "Aws Cognito user authentication management",
        description: "asdf",
        alt: "aws cognito",
        to: "https://github.com/edo92/AWS-Cognito-User-Managment-React",
      },
    ]
  },
}
