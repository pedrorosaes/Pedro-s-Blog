import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const posts: { title: string; excerpt: string }[] = [
    { title: 'React Testing', excerpt: 'Learn React Testing' },
    { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  ]

  return (
    <div className="container mx-auto mb-8 bg-gray-300 px-10">
      <Head>
        <title>Pedro`s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {posts.map((post, index) => (
          <div key={index}>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
