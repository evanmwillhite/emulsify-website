import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './band.module.css'

export type BandProps = {
  bgColor?: 'default' | 'primary' | 'secondary' | 'waves'
}

interface BandData {
  file: {
    childImageSharp: {
      fluid: []
    }
  }
}

export const Band: FC<BandProps> = ({ bgColor = 'default', children }) => {
  const data: BandData = useStaticQuery(graphql`
    query HeadingQuery {
      file(relativePath: { eq: "wavebkg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const bgImage = bgColor === 'waves'

  return (
    <div className={styles.band} data-band-color={bgColor}>
      {bgImage && (
        <div className={styles.bandImage}>
          <Img alt="" fluid={data.file.childImageSharp.fluid} />
        </div>
      )}
      <div className={styles.bandContent}>{children}</div>
    </div>
  )
}
