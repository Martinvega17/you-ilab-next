import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
const Projects = () => {
    return (
        <main>
            <div className="w-full bg-banner-bg bg-center">
                <div className="w-full text-white">
                    <Navbar activeRoute="/Projects" />
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default Projects