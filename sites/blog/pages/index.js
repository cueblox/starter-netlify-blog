import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'

export default function Index({ posts }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.Image}
              date={heroPost.publish_date}
              slug={heroPost.id}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const bloxdata = new GraphQLClient('https://brave-water-0fbfe4710.azurestaticapps.net/api/graphql');

  const { allArticles } = await bloxdata.request(`
  {
    allArticles {
      body
      title
      publish_date
      excerpt
      id
      Image {
        file_name
        width
        height
      }
    }
  }
  `);

  return {
    props: {
      posts: [...allArticles],
    },
  }
};