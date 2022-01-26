import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import { Product } from '../models/product'

type HomeProps = {
  products: Product[]
}
const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className="h-screen">
      <Head>
        <title>Minha Loja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mx-auto max-w-screen-2xl">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products: Product[] = await fetch(
    'https://fakestoreapi.com/products'
  ).then((res) => res.json())
  return {
    props: {
      products,
    },
  }
}
