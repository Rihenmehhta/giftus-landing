import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>GiftUs - Digital Lifafa</title>
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GiftUs 🎁</h1>
        <p className="text-lg">We're building a smarter way to gift for weddings and celebrations.</p>
      </main>
    </div>
  )
}