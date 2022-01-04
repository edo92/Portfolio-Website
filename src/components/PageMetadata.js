import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

const PageMetadata = ({ description, title, image, canonicalUrl }) => {
  const { site, ogImageDefault, ogImageBackend, ogImageClient, ogImageMobile } =
    useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              author
              url
            }
          }
          ogImageDefault: file(relativePath: { eq: "home/home-hero.png" }) {
            childImageSharp {
              fixed(width: 1200) {
                src
              }
            }
          }
          ogImageBackend: file(
            relativePath: { eq: "skills/backend/backend-hero.png" }
          ) {
            childImageSharp {
              fixed(width: 1200) {
                src
              }
            }
          }
          ogImageClient: file(
            relativePath: { eq: "skills/frontend/frontend-hero.png" }
          ) {
            childImageSharp {
              fixed(width: 1200) {
                src
              }
            }
          }
          ogImageMobile: file(
            relativePath: { eq: "skills/mobile/mobile-hero.png" }
          ) {
            childImageSharp {
              fixed(width: 1200) {
                src
              }
            }
          }
        }
      `
    )

  const desc = description || "Eduard Jacobs Personal Profolio Website"
  const siteTitle = "EJ Resume"

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location
        let canonicalPath = pathname

        const canonical =
          canonicalUrl || `${site.siteMetadata.url}${canonicalPath}`

        /* Set fallback ogImage based on path */
        const siteUrl = site.siteMetadata.url
        let ogImage = ogImageDefault.childImageSharp.fixed.src

        if (pathname.includes("/backend")) {
          ogImage = ogImageBackend.childImageSharp.fixed.src
        }
        if (pathname.includes("/frontend")) {
          ogImage = ogImageClient.childImageSharp.fixed.src
        }
        if (pathname.includes("/mobile")) {
          ogImage = ogImageMobile.childImageSharp.fixed.src
        }
        if (image) {
          ogImage = image
        }

        const ogImageUrl = siteUrl.concat(ogImage)

        return (
          <Helmet
            htmlAttributes={{ lang: "en" }}
            title={title}
            titleTemplate={`%s | ${siteTitle}`}
            link={[{ rel: "canonical", key: canonical, href: canonical }]}
            meta={[
              {
                name: `description`,
                content: desc,
              },
              {
                name: `image`,
                content: site.siteMetadata.image,
              },
              {
                property: `og:title`,
                content: `${title} | ${siteTitle}`,
              },
              {
                property: `og:description`,
                content: desc,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: siteUrl,
              },
              {
                property: `og:image`,
                content: ogImageUrl,
              },
              {
                property: `og:site_name`,
                content: `ejresume.com`,
              },
            ]}
          >
            <script type="application/ld+json">
              {`
        {
          "@context": "https://ejresume.com",
          "@type": "Portfolio",
          "url": "https://ejresume.com",
          "email": "edoter92@gmail.com",
          "name": "Personal-Portfolio",
          "logo": "https://ejresume.com/og-image.png"
        }
      `}
            </script>
          </Helmet>
        )
      }}
    </Location>
  )
}

PageMetadata.defaultProps = {
  description: `Eduard Jacobs Personal Portfolio Webaite`,
  meta: [
    {
      property: `og:type`,
      content: `website`,
    },
  ],
  image: ``,
  title: `EJ Resume`,
}

PageMetadata.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default PageMetadata
