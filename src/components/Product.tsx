import Image from 'next/image'
import { Product } from '../models/product'
import { StarIcon, HeartIcon, EyeIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { addToBasket } from '../slices/basketSlice'
import { useAppDispatch } from '../app/store'

type ProductProps = {
  product: Product
  isRow?: boolean
}

const MAX_RATING = 5
const MIN_RATING = 1
const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const [rate] = useState(
    Math.floor(Math.random() * (MAX_RATING + 1)) + MIN_RATING
  )
  function addItemToBasket() {
    dispatch(addToBasket(product))
  }

  return (
    <div className="relative z-30 m-5 mb-10 flex flex-col bg-white p-10 shadow-lg">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image src={product.image} objectFit="contain" width={200} height={200} />
      <div className="flex flex-col">
        <h2 className="my-3 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
          {product.title}
        </h2>

        <div className="mb-5">
          <p className="text-xl font-bold">
            {Intl.NumberFormat('pt-AO', {
              style: 'currency',
              currency: 'AOA',
            }).format(product.price)}
          </p>
        </div>
        <div className="flex">
          {Array(rate)
            .fill('')
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-rose-500" />
            ))}
        </div>
        <div className="mt-5 flex gap-2">
          <button onClick={addItemToBasket} className="button mt-auto">
            Adicionar para o Carrinho
          </button>

          <button className="flex flex-grow items-center justify-center rounded-md bg-gray-300/60 transition hover:bg-gray-300/80">
            <HeartIcon className="h-5 w-5 text-black opacity-50" />
          </button>

          <button className="flex flex-grow items-center justify-center rounded-md bg-gray-300/60 transition hover:bg-gray-300/80">
            <EyeIcon className="h-5 w-5 text-black opacity-50" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
