import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
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
    <div className="h-screen bg-gray-900">
      <NextSeo
        title="Kimbo Space"
        description="Tenha a melhor experiencia com as suas compras e vendas"
        openGraph={{
          type: 'E-commerce',
          locale: 'pt-AO',
          url: 'https://my-store-azure.vercel.app/',
          title: 'Kimbo Space',
          description:
            'Tenha a melhor experiencia com as suas compras e vendas',
          images: [
            {
              url: 'http://links.papareact.com/gi1',
              width: 800,
              height: 420,
              alt: 'Kimbo Space',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: 'https://my-store-azure.vercel.app/',
          handle: '@kumbo_space',
        }}
        defaultTitle="Kumbu Space"
      />
      <Head>
        <title>Kimbo Space</title>
        <link rel="icon" href="img/logo.jpeg" />
      </Head>

      <Header />
      <main className="mx-auto max-w-screen-2xl bg-gray-800">
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
