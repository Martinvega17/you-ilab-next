import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
const About = () => {
    return (
        <main>
            <div className="w-full bg-banner-bg bg-center">
                <div className="w-full text-white">
                    <Navbar activeRoute="/About" />
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default About