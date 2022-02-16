import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useAppSelector } from '../app/store'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'

const Checkout: NextPage = () => {
  const { data: session } = useSession()
  const products = useAppSelector(selectItems)
  const total = useAppSelector(selectTotal)

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-screen-2xl lg:flex">
        <div className="m-5 mr-5 flex-grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white">
            <h1 className="border-b pb-4 pl-5 pt-5 text-3xl">
              {products.length === 0
                ? 'Seu carrinho está vazio'
                : 'Seu Carrinho de Compras'}
            </h1>

            {products.map((product, index) => (
              <CheckoutProduct product={product} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {products.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({products.length} items):{' '}
                <span className="font-bold">
                  {Intl.NumberFormat('pt-AO', {
                    style: 'currency',
                    currency: 'AOA',
                  }).format(total)}
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300'
                }`}
              >
                {!session
                  ? 'Faça Login para Continuar'
                  : 'Continuar com o Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
