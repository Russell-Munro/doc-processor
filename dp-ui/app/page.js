import Image from 'next/image'
import Banner from './banner'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-2"  >
      <Banner  >Hello React World</Banner>      
         
    </main>
  )
};
export default Home;