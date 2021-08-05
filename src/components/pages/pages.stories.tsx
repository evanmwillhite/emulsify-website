import React from 'react'
import { Story } from '@storybook/react'

import { FullWidth, FullWidthProps } from '../templates/FullWidth'
import { CtaGrid } from '../organisms/CtaGrid/CtaGrid'
import { Band } from '../molecules/Band/Band'
import { Callout } from '../molecules/Callout/Callout'
import { Features } from '../organisms/Features/Features'
import { Hr } from '../atoms/Hr/Hr'
import { Signup } from '../molecules/Signup/Signup'
import { CardGrid } from '../organisms/CardGrid/CardGrid'
import {
  PreFooter,
  PreFooterProps,
} from '../organisms/site/PreFooter/PreFooter'

import { ctas } from '../data/ctas'
import { featuresData } from '../data/features'
import { cards } from '../data/cards'
import { navItems } from '../data/navigation'
import { ActonForm } from '../data/actonForm'
import {
  blogLabel,
  blogHeading,
  blogTeaser,
  blogHeroImage,
  blogReadMoreText,
} from '../data/blog'

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams',
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/',
    },
    callout1Heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Unify your websites and teams with a design system.',
    },
    teaserLabel: {
      control: {
        type: 'text',
      },
      defaultValue: blogLabel,
    },
    teaserHeading: {
      control: {
        type: 'text',
      },
      defaultValue: blogHeading,
    },
    teaserText: {
      control: {
        type: 'text',
      },
      defaultValue: blogTeaser,
    },
    teaserLinkText: {
      control: {
        type: 'text',
      },
      defaultValue: blogReadMoreText,
    },
  },
}

type HomepageProps = FullWidthProps &
  PreFooterProps & {
    pageTitle: string
    callout1Heading: string
  }

export const Homepage: Story<HomepageProps> = ({
  pageTitle,
  location,
  callout1Heading,
  teaserLabel,
  teaserHeading,
  teaserText,
  teaserLinkText,
}) => (
  <FullWidth
    location={location}
    navItems={navItems}
    heading={pageTitle}
    heroChildren={<CtaGrid ctas={ctas} />}
  >
    <Band>
      <Callout
        heading={callout1Heading}
        text="Complex organizations need a design system that simplifies development, encourages consistency, reduces maintenance effort, and scales quickly and affordably — without hampering flexibility for individual developers or departments."
        image={<img src="https://picsum.photos/580" alt="example image" />}
      />
      <Callout
        layout="media-end"
        heading="Give your developer and designers powerful tools all in one place."
        text="Emulsify doesn’t just conveniently join your component library and style guide, but includes all of the workflow tools necessary for prototyping, testing, checking accessibility, and documenting."
        image={<img src="https://picsum.photos/579" alt="example image" />}
      />
    </Band>
    <Band bgColor="primary" size="medium">
      <Features features={featuresData} />
      <Hr />
      <Signup>
        <ActonForm />
      </Signup>
    </Band>
    <PreFooter
      teaserLabel={teaserLabel}
      teaserHeading={teaserHeading}
      teaserLinkUrl="#"
      teaserText={teaserText}
      teaserLinkText={teaserLinkText}
      teaserHeroImage={blogHeroImage}
    >
      <Callout
        heading="Emulsify is open source, built using well-supported technologies developers love."
        text={
          <p>
            Emulsify is an open-source project that's free for everyone. Check
            out the project on{' '}
            <a href="https://github.com/emulsify-ds">GitHub</a> and join us on{' '}
            <a href="https://launchpass.com/emulsify">Slack</a> for help
          </p>
        }
      />
      <CardGrid cards={cards.slice(3, 5)} />
    </PreFooter>
  </FullWidth>
)
