import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { ShoppingBagIcon } from '@heroicons/react/solid'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex flex-grow items-center justify-between bg-blue-800 p-1 py-2">
        <div className="mt-2 flex flex-grow cursor-pointer items-center sm:flex-grow-0">
          <Image height={48} width={48} src="/img/logo.jpeg" />
          <h1 className="ml-2 text-xl font-bold text-white">Kimbo Space</h1>
        </div>

        <div className="flex items-center space-x-2 whitespace-nowrap text-xs text-white">
          <div className="flex items-center">
            <Image
              width={40}
              height={40}
              className="mr-2 rounded-full"
              src="/img/user.jpg"
            />
            <div className="link pl-2">
              <p className="hover:underline">Benedito Kavungo</p>
              <p className="font-extrabold md:text-sm">Contas & Lista</p>
            </div>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-rose-500 text-center font-bold text-black md:right-14">
              2
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
              Carrinho
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Header
