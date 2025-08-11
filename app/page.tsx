"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MapPin, Phone, Mail, Flower2, BombIcon as Balloon, Church, Camera } from "lucide-react"

export default function KwiaciarniaPage() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Church className="w-8 h-8 text-rose-500" />,
      title: "Dekoracje sal weselnych i kościołów",
      description: "Profesjonalne dekoracje żywymi kwiatami na Twój wyjątkowy dzień",
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Bukiety ślubne",
      description: "Wyjątkowe bukiety ślubne dopasowane do Twojego stylu",
    },
    {
      icon: <Balloon className="w-8 h-8 text-rose-500" />,
      title: "Dekoracje balonowe",
      description: "Kolorowe dekoracje balonowe na każdą okazję",
    },
    {
      icon: <Flower2 className="w-8 h-8 text-rose-500" />,
      title: "Pompowanie balonów helem",
      description: "Profesjonalne pompowanie balonów helem",
    },
  ]

  const galleryImages = [
    { src: "/images/wedding-bouquet.png", alt: "Bukiet ślubny z różami" },
    { src: "/images/church-decoration.png", alt: "Dekoracja kościoła" },
    { src: "/images/balloon-decoration.png", alt: "Dekoracja balonowa" },
    { src: "/images/wedding-hall.png", alt: "Dekoracja sali weselnej" },
    { src: "/images/bridal-bouquet.png", alt: "Bukiet panny młodej" },
    { src: "/images/helium-balloons.png", alt: "Balony z helem" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-cream-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Flower2 className="w-8 h-8 text-rose-500" />
              <span className="text-xl font-bold text-gray-800">Kwiaciarnia Beata</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-rose-500 transition-colors">
                Strona główna
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">
                O nas
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-rose-500 transition-colors">
                Oferta
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-rose-500 transition-colors">
                Galeria
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero-background.png"
          >
            <source src="/content/tlo.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <Image
              src="/images/hero-background.png"
              alt="Eleganckie kwiaty ślubne - róże i piwonie"
              fill
              className="object-cover"
              priority
            />
          </video>

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

          {/* Additional subtle overlay for extra elegance */}
          <div className="absolute inset-0 bg-rose-900/10"></div>

          {/* Floating elements animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-rose-200/30 rounded-full animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-white/15 rounded-full animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-2 h-2 bg-rose-200/25 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight drop-shadow-lg">
            Kwiaciarnia
            <br />
            <span className="text-rose-200">Beata Sztachańska</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light drop-shadow-md">Pompowanie balonów helem</p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto drop-shadow-md">
            Tworzymy magiczne dekoracje na Twój wyjątkowy dzień. Żywe kwiaty, eleganckie bukiety i kolorowe balony.
          </p>
          <Button
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          >
            Poznaj naszą ofertę
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            id="about-content"
            data-animate
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible["about-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-playfair">O nas</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Kwiaciarnia Beata Sztachańska to miejsce, gdzie pasja do kwiatów spotyka się z profesjonalizmem.
                  Specjalizujemy się w tworzeniu wyjątkowych dekoracji na najważniejsze chwile w Twoim życiu.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Nasze doświadczenie i kreatywność pozwalają nam tworzyć niepowtarzalne kompozycje kwiatowe, które
                  dodają magii każdej uroczystości.
                </p>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-rose-500" />
                  <span className="text-lg">ul. Nowogrodzka 250, 18-400 Łomża</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/florist-working.png"
                  alt="Kwiaciarka przy pracy"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div
            id="services-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Nasza oferta</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi dekoracyjne na każdą okazję
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`transition-all duration-1000 delay-${index * 200} ${
                  isVisible[`service-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-rose-100 rounded-full">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            id="gallery-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["gallery-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Galeria realizacji</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zobacz nasze najpiękniejsze prace i zainspiruj się na swój wyjątkowy dzień
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                id={`gallery-${index}`}
                data-animate
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`gallery-${index}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-rose-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div
            id="contact-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["contact-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Kontakt</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły Twojego wyjątkowego dnia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div
              id="contact-form"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-form"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Napisz do nas</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
                        <Input
                          type="text"
                          className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                          placeholder="Twoje imię i nazwisko"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                        <Input
                          type="tel"
                          className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                          placeholder="Numer telefonu"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Twój adres email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                      <Textarea
                        rows={5}
                        className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Opisz swoje potrzeby..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Wyślij wiadomość
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 transition-all duration-1000 ${
                isVisible["contact-info"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Dane kontaktowe</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <MapPin className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Adres</p>
                        <p className="text-gray-600">ul. Nowogrodzka 250, 18-400 Łomża</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Phone className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Telefon</p>
                        <p className="text-gray-600">+48 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Mail className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">kontakt@kwiaciarnia-beata.pl</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.8!2d22.0!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA2JzAwLjAiTiAyMsKwMDAnMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja kwiaciarni"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Flower2 className="w-8 h-8 text-rose-400" />
              <span className="text-2xl font-bold font-playfair">Kwiaciarnia Beata Sztachańska</span>
            </div>
            <p className="text-gray-400 mb-4">Pompowanie balonów helem</p>
            <p className="text-gray-400 text-sm">© 2024 Kwiaciarnia Beata Sztachańska. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
