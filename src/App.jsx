import Nav from './components/Nav'
import './index.css'
import Hero from './sections/Hero'

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>

      <section className='padding'>
        Popular product
      </section>

      <section className='padding'>
        Super Quality
      </section>

      <section className='padding-x py-10'>
        Services
      </section>

      <section className='padding'>
        Special Offers 
      </section>

      <section className='padding bg-pale-blue'>
        Customer Review
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        Subscribe
      </section>

      <section className='bg-black padding-x padding-t pb-8'>
        Footer
      </section>
    </main>
  )
}