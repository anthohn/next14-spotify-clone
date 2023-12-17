import Header from '@/app/components/Header'
import Library from '@/app/components/Library'

export default function Home() {
  return (
    <>
      <div className='bg-neutral-900 rounded-lg flex-grow'>
        <Header />
        <Library />
      </div>
  </>
  )
}
