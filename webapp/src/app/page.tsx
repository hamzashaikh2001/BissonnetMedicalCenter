import About from '@/components/About'
import Contact from '@/components/Contact'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import { Roboto } from 'next/font/google';
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import Message from '@/components/Message';
import { Metadata } from 'next'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bissonnet Medical Center | Family Clinic in Houston, TX',
  description: "Discover exceptional healthcare at Bissonnet Medical Center, your trusted family clinic in Houston, TX. Led by Dr. Muhammad Shaikh, we offer expert internal medicine care, preventative services, immunizations, and compassionate patient support. Your well-being is our priority, and we're committed to providing comprehensive, personalized care to ensure your health and happiness. Partner with us for a healthier, happier life.",
  keywords: ['Bissonnet Medical Center', 'Internal Medicine', 'Family Clinic', 'Healthcare in Houston', 'Preventative Care', 'Immunizations', 'Dr. Muhammad Shaikh', 'Houston Medical Center', 'Primary Care Physician', 'Comprehensive Healthcare', 'Wellness Services', 'Medical Consultations', 'Diagnostic Testing', 'Patient-Centered Care', 'Trusted Healthcare Provider', 'Houston, TX Clinic', 'General Medical Services', 'Bissonnet'],
  publisher: 'Bissonnet Medical Center',
  authors: [{name: 'Hamza Shaikh'}],
  creator: 'Hamza Shaikh',
}

export default function Home() {
  return (
    <div lang="en" className={roboto.className}>
        <Navbar />
        <Intro />
        <About />
        <Message />
        <Services />
        <Contact />
        <Footer />
    </div>
    /*
    <html lang="en" className={roboto.className}>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <Intro />
          <About />
          <Message />
          <Services />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
    */
  )
}
