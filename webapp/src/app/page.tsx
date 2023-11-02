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
  icons: [{rel: 'shortcut icon', url: 'favicons/favicon.ico'},
          {rel: 'apple-touch-icon', sizes: '180x180', url: 'favicons/apple-touch-icon.png'},
          {rel: 'icon', type: 'image/png', sizes: '512x512', url: 'favicons/android-chrome-512x512.png'},
          {rel: 'icon', type: 'image/png', sizes: '192x192', url: 'favicons/android-chrome-192x192.png'},
          {rel: 'icon', type: 'image/png', sizes: '32x32', url: 'favicons/favicon-32x32.png'},
          {rel: 'icon', type: 'image/png', sizes: '16x16', url: 'favicons/favicon-16x16.png'},
          {rel: 'manifest', url: 'favicons/site.webmanifest'}],
}

export default function Home() {
  return (
    <div className={roboto.className}>
        <Navbar />
        <Intro />
        <About />
        <Message />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}