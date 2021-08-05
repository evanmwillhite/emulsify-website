import React from 'react'
import { Story } from '@storybook/react'

import { WithSidebar, WithSidebarProps } from '../templates/WithSidebar'
import { navItems } from '../data/navigation'
import { BackLink } from '../atoms/BackLink/BackLink'
import { PageMeta, PageMetaProps } from '../molecules/PageMeta/PageMeta'
import { AuthorInfo, AuthorInfoProps } from '../molecules/AuthorInfo/AuthorInfo'
import { Signup } from '../molecules/Signup/Signup'
import { RichText } from '../atoms/RichText/RichText'
import { ContentCta } from '../molecules/Ctas/ContentCta/ContentCta'

import { Video } from '../../img/video'

import { blogText } from '../data/blog'

export default {
  title: 'Pages/Blogs',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    location: {
      control: {
        type: 'text',
      },
      defaultValue: '/blog/test',
    },
    pageTitle: {
      control: {
        type: 'text',
      },
      defaultValue: 'Why Developers Shouldn’t Fear a No-Code Interface',
    },
    pageSubtitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'For those of you who manage digital projects, your world centers upon change. From deploying new versions of website platforms to navigating all manner of software updates, the fast pace of the technology industry requires (and rewards) persistent upending of the status quo.',
    },
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'Who Deany',
    },
    date: {
      control: {
        type: 'text',
      },
      defaultValue: 'January 27, 2021',
    },
    withAuthorImage: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    withHeroImage: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    contentCtaHeading: {
      control: {
        type: 'text',
      },
      defaultValue:
        "Emulsify is an open-source project that's free for everyone.",
    },
    contentCtaLinkText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Watch an Overview',
    },
  },
}

type HomepageProps = WithSidebarProps &
  PageMetaProps &
  AuthorInfoProps & {
    pageTitle: string
    pageSubtitle: string
    withAuthorImage: boolean
    withHeroImage: boolean
    contentCtaHeading: string
    contentCtaLinkText: string
  }

export const IndividualBlog: Story<HomepageProps> = ({
  pageTitle,
  pageSubtitle,
  location,
  withAuthorImage,
  withHeroImage,
  name,
  date,
  contentCtaHeading,
  contentCtaLinkText,
}) => {
  let image = null
  let heroImage = null
  if (withAuthorImage === true) {
    image = <img src="https://picsum.photos/90" alt="example image" />
  }
  if (withHeroImage === true) {
    heroImage = <img src="https://picsum.photos/1200/720" alt="example image" />
  }
  return (
    <WithSidebar location={location} navItems={navItems} sidebar={<Signup />}>
      <BackLink url="#" text="view all blog posts" />
      <PageMeta heading={pageTitle} text={pageSubtitle} heroImage={heroImage}>
        <AuthorInfo image={image} name={name} date={date} />
      </PageMeta>
      <RichText>{blogText}</RichText>
      <ContentCta
        heading={contentCtaHeading}
        linkText={contentCtaLinkText}
        to="#"
        icon={<Video />}
      />
    </WithSidebar>
  )
}
