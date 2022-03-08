import Head from 'next/head'
import Homes from '../components/Homes'
export default function Home() {
  return (
    <>
      <Head>
        <title>todo</title>
        <link rel='icon' href='#!' />
      </Head>
      <div>
      
        <Homes />
      </div>
    </>
  )
}
