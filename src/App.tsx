

import { Banner, Footer, Navbar} from './components'
import { Concept } from './components/landing-sections/Concept'

const App = () => {
    return (
        <div className='max-w-100vw overflow-x-hidden relative h-[100vh] !scroll-smooth'>
            <Navbar />
            <Banner />
            <Concept />
            <Footer />
        </div>
    )
}
export default App
