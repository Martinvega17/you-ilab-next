import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
const Contact = () => {
    return (
        <main>
            <div className="w-full bg-banner-bg bg-center">
                <div className="w-full text-white">
                    <Navbar activeRoute="/Contact" />
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default Contact