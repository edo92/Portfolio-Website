import React from "react"
import styled from "styled-components"
import HorizontalCard from "../../../components/HorizontalCard"
import { Content } from "../../../components/SharedStyles"

const ChecklistItem = styled(HorizontalCard)`
  border: 0px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`

export const TwoColumnContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 0 2.5rem 2.5rem 2.5rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const BackendSkills = () => {
  return (
    <TwoColumnContent>
      <div>
        <ChecklistItem
          key="0"
          emoji=":white_check_mark:"
          title="Languages"
          description="Python & JavaScript"
        />

        <ChecklistItem
          key="1"
          emoji=":white_check_mark:"
          title="Frameworks"
          description="Node.js & Django"
        />

        <ChecklistItem
          key="2"
          emoji=":white_check_mark:"
          title="Other Languages"
          description="Bash & Go"
        />
        <ChecklistItem
          key="3"
          emoji=":white_check_mark:"
          title="Other Frameworks"
          description="Flask & Apollo/GraphQL"
        />
      </div>

      <div>
        <ChecklistItem
          key="0"
          emoji=":white_check_mark:"
          title="Cloud Infrastructure"
          description="AWS & Azure"
        />

        <ChecklistItem
          key="1"
          emoji=":white_check_mark:"
          title="Aws Scalable Server"
          description="ECS & ECK"
        />

        <ChecklistItem
          key="2"
          emoji=":white_check_mark:"
          title="Azure Scalable Server"
          description="Kubernetes & Service Fabric"
        />
        <ChecklistItem
          key="3"
          emoji=":white_check_mark:"
          title="Serverless"
          description="Fargate & Lambda"
        />
      </div>

      <div>
        <ChecklistItem
          key="0"
          emoji=":white_check_mark:"
          title="Databases"
          description="Relational & No SQL"
        />

        <ChecklistItem
          key="2"
          emoji=":white_check_mark:"
          title="Architecture"
          description="ORM & ODM"
        />

        <ChecklistItem
          key="1"
          emoji=":white_check_mark:"
          title="In Memory"
          description="Radis"
        />

        <ChecklistItem
          key="3"
          emoji=":white_check_mark:"
          title="Other Databases"
          description="SQLite & Postgresql"
        />
      </div>

      <div>
        <ChecklistItem
          key="0"
          emoji=":white_check_mark:"
          title="Continuous Integration"
          description="CircleCI & Jenkins"
        />

        <ChecklistItem
          key="3"
          emoji=":white_check_mark:"
          title="Aws Pipeline"
          description="AWS Pipeline, CodeBuild & CodeDeploy"
        />

        <ChecklistItem
          key="2"
          emoji=":white_check_mark:"
          title="Azure Pipeline"
          description="Azure DevOps"
        />

        <ChecklistItem
          key="1"
          emoji=":white_check_mark:"
          title="Mobile App CI/CD"
          description="Azure AppCenter"
        />
      </div>
    </TwoColumnContent>
  )
}

export default BackendSkills
