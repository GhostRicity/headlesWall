import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

export default function Wediliver(data){
  return(
    <StaticQuery
      query={graphql`
        query diliver {
          slideShow: allFile(filter: {relativePath: {eq: "slider/deliver@2x.png"}}) {
            edges {
              node {
                id
                base
                childImageSharp {
                  fluid(maxWidth: 752, maxHeight: 845,   quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        `}


        render={ data => (
          <div>
            {console.log(data.slideShow.edges)}
            {console.log(data.slideShow.edges.node)}

            {data.slideShow.edges.map (({ node }) => (
               <Image
                 fluid = {node.childImageSharp.fluid}
               />
             ))}
          </div>
        )}
      />
  )
}
