import Footer from '@/components/Footer';
import Head from 'next/head';
const About = () => {
    return (
        <main>
            <Head>
                <title>You- i Lab | About</title>
                <meta name='description' content='Page About'/>
            </Head>
            <div className="w-full bg-banner-bg bg-center">
                <div className="w-full text-white">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default About