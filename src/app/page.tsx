
import Banner from '@/Components/Banner'
import CategoryCard from '@/Components/CategoryCard'
import ProductCard from '@/Components/ProductCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <main className='mt-5 max-w-7xl mx-auto px-4'>
        <section>
        <div className='text-2xl font-semibold'>Categories</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        </section>
        <section className='mt-5'>
        <div className='text-2xl font-semibold mb-5'>Products</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </section>
      </main>
    </div>
  )
}
