"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Flower2,
  Church,
  Car,
  Gift,
  ChevronLeft,
  ChevronRight,
  BellIcon as Balloon,
  Facebook,
  X,
  Star,
  Clock,
  Award,
} from "lucide-react"

export default function KwiaciarniaPage() {
  const [isVisible, setIsVisible] = useState({})
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isGalleryOpen])

  // Prevent horizontal scroll on mobile
  useEffect(() => {
    document.body.style.overflowX = "hidden"
    return () => {
      document.body.style.overflowX = "auto"
    }
  }, [])

  const offers = [
    {
      id: "bukiety-slubne",
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Bukiety ślubne",
      description: "Wyjątkowe bukiety ślubne dopasowane do Twojego stylu",
      color: "from-pink-100 to-rose-200",
      imageCount: 10,
    },
    {
      id: "bukiety-okolicznosciowe",
      icon: <Flower2 className="w-8 h-8 text-rose-500" />,
      title: "Bukiety okolicznościowe",
      description: "Piękne bukiety na każdą okazję - urodziny, imieniny, rocznice",
      color: "from-rose-100 to-pink-200",
      imageCount: 30,
    },
    {
      id: "balony-z-helem",
      icon: <Balloon className="w-8 h-8 text-rose-500" />,
      title: "Balony z helem",
      description: "Kolorowe balony z helem na każdą uroczystość",
      color: "from-sky-100 to-blue-200",
      imageCount: 30,
    },
    {
      id: "dekoracje-sal-weselnych",
      icon: <Church className="w-8 h-8 text-rose-500" />,
      title: "Dekoracje sal",
      description: "Profesjonalne dekoracje sal weselnych i komunijnych żywymi kwiatami",
      color: "from-rose-200 to-pink-100",
      imageCount: 55,
    },
    {
      id: "auta-do-slubu",
      icon: <Car className="w-8 h-8 text-rose-500" />,
      title: "Auta do ślubu",
      description: "Eleganckie dekoracje samochodów ślubnych",
      color: "from-pink-200 to-rose-100",
      imageCount: 15,
    },
    {
      id: "oprawa-komunijna",
      icon: <Church className="w-8 h-8 text-rose-500" />,
      title: "Oprawa komunijna",
      description: "Dekoracje na Pierwszą Komunię Świętą",
      color: "from-blue-100 to-sky-200",
      imageCount: 12,
    },
    {
      id: "dekoracje-kosciola",
      icon: <Church className="w-8 h-8 text-rose-500" />,
      title: "Dekoracja kościoła",
      description: "Profesjonalne dekoracje kościelne na różne okazje",
      color: "from-purple-100 to-violet-200",
      imageCount: 65,
    },
    {
      id: "florystyka-pogrzebowa",
      icon: <Flower2 className="w-8 h-8 text-rose-500" />,
      title: "Florystyka pogrzebowa",
      description: "Wieńce, wiązanki i kompozycje pogrzebowe",
      color: "from-slate-100 to-gray-200",
      imageCount: 48,
    },
    {
      id: "flowerboxy",
      icon: <Gift className="w-8 h-8 text-rose-500" />,
      title: "Flowerboxy",
      description: "Nowoczesne kompozycje kwiatowe w eleganckich pudełkach",
      color: "from-teal-100 to-cyan-200",
      imageCount: 11,
    },
  ]

  const awards = [
    { year: "2025", type: "GOLD", image: "/images/awards/2025-gold.png" },
    { year: "2025", type: "LAUREAT KONKURSU", image: "/images/awards/2025-ambassador.png" },
    { year: "2024", type: "GOLD", image: "/images/awards/2024-gold.png" },
    { year: "2024", type: "LAUREAT KONKURSU", image: "/images/awards/2024-ambassador.png" },
    { year: "2023", type: "SILVER", image: "/images/awards/2023-silver.png" },
    { year: "2023", type: "LAUREAT KONKURSU", image: "/images/awards/2023-ambassador.png" },
    { year: "2022", type: "BRONZE", image: "/images/awards/2022-bronze.png" },
    { year: "2022", type: "LAUREAT KONKURSU", image: "/images/awards/2022-ambassador.png" },
    { year: "2021", type: "GOLD", image: "/images/awards/2021-gold.png" },
    { year: "2021", type: "LAUREAT KONKURSU", image: "/images/awards/2021-ambassador.png" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Anna Kowalska",
      rating: 5,
      text: "Przepiękny bukiet ślubny! Pani Beata doskonale zrozumiała moją wizję i stworzyła coś jeszcze piękniejszego niż sobie wyobrażałam. Polecam z całego serca!",
      date: "2024-01-15",
      service: "Bukiet ślubny",
    },
    {
      id: 2,
      name: "Marcin Nowak",
      rating: 5,
      text: "Fantastyczne dekoracje sali weselnej. Goście byli zachwyceni! Profesjonalna obsługa i piękne kompozycje kwiatowe. Dziękujemy!",
      date: "2024-01-10",
      service: "Dekoracje weselne",
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      rating: 5,
      text: "Balony z helem na urodziny córki były hitem! Dzieci były zachwycone, a jakość wykonania na najwyższym poziomie.",
      date: "2024-01-05",
      service: "Balony z helem",
    },
    {
      id: 4,
      name: "Tomasz Lewandowski",
      rating: 5,
      text: "Dekoracja kościoła na ślub była przepiękna. Pani Beata ma niesamowite wyczucie estetyki. Bardzo profesjonalne podejście.",
      date: "2023-12-28",
      service: "Dekoracja kościoła",
    },
    {
      id: 5,
      name: "Robert Kowalczyk",
      rating: 5,
      text: "Oprawa komunijna dla mojego syna była przepiękna! Dekoracje kościoła i bukiety były wykonane z największą starannością. Pani Beata ma ogromne doświadczenie i wyczucie.",
      date: "2023-12-10",
      service: "Oprawa komunijna",
    },
    {
      id: 6,
      name: "Robert Kowalczyk",
      rating: 5,
      text: "Oprawa komunijna dla mojego syna była przepiękna! Dekoracje kościoła i bukiety były wykonane z największą starannością. Pani Beata ma ogromne doświadczenie i wyczucie.",
      date: "2023-12-10",
      service: "Oprawa komunijna",
    },
  ]

  // Generate gallery images for selected offer
  const generateGalleryImages = (offer) => {
    const images = []
    for (let i = 1; i <= offer.imageCount; i++) {
      images.push({
        src: `/images/gallery/${offer.id}/${offer.id}-${i.toString().padStart(3, "0")}.jpg`,
        alt: `${offer.title} - realizacja ${i}`,
        id: `${offer.id}-${i}`,
      })
    }
    return images
  }

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer)
    setCurrentImageIndex(0)
    setIsGalleryOpen(true)
  }

  const handleCloseGallery = () => {
    setIsGalleryOpen(false)
    setTimeout(() => {
      setSelectedOffer(null)
      setCurrentImageIndex(0)
    }, 300)
  }

  const nextImage = () => {
    if (selectedOffer) {
      setCurrentImageIndex((prev) => (prev === selectedOffer.imageCount - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedOffer) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedOffer.imageCount - 1 : prev - 1))
    }
  }

  const handleKeyDown = (e) => {
    if (!isGalleryOpen) return

    if (e.key === "Escape") {
      handleCloseGallery()
    } else if (e.key === "ArrowLeft") {
      prevImage()
    } else if (e.key === "ArrowRight") {
      nextImage()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isGalleryOpen, selectedOffer])

  const galleryImages = selectedOffer ? generateGalleryImages(selectedOffer) : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-cream-50 pb-20">
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
              <Link href="#reviews" className="text-gray-700 hover:text-rose-500 transition-colors">
                Opinie
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero-background.png"
          >
            <source src="/content/tlo.mp4" type="video/mp4" />
            <Image
              src="/images/hero-background.png"
              alt="Eleganckie kwiaty ślubne - róże i piwonie"
              fill
              className="object-cover"
              priority
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-rose-900/10"></div>

          
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
            onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
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
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/florist-working.png"
                  alt="Kwiaciarka przy pracy"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
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
              Oferujemy kompleksowe usługi florystyczne na każdą okazję
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                id={`service-${index}`}
                data-animate
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`service-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer group"
                  onClick={() => handleOfferClick(offer)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`p-4 bg-gradient-to-br ${offer.color} rounded-full group-hover:scale-110 transition-transform duration-300`}
                      >
                        {offer.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 font-playfair group-hover:text-rose-600 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">{offer.description}</p>
                    <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                      {offer.imageCount} zdjęć
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div
            id="reviews-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["reviews-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Opinie klientów</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Zobacz, co mówią o nas nasi zadowoleni klienci</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                id={`review-${index}`}
                data-animate
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`review-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="ml-auto bg-rose-100 text-rose-700 text-xs">
                        {review.service}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed italic">"{review.text}"</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium text-gray-800">{review.name}</span>
                      <span>{new Date(review.date).toLocaleDateString("pl-PL")}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div
            id="awards-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["awards-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Nagrody i wyróżnienia</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prestiżowe nagrody branżowe potwierdzające najwyższą jakość naszych usług
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={`${award.year}-${award.type}`}
                id={`award-${index}`}
                data-animate
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`award-${index}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="text-center group">
                  <div className="relative mb-4 hover:scale-110 transition-transform duration-300">
                    <Image
                      src={award.image || "/placeholder.svg"}
                      alt={`Nagroda ${award.year} - ${award.type}`}
                      width={100}
                      height={100}
                      className="mx-auto drop-shadow-lg"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-800 text-base">{award.year}</p>
                    <p className="text-xs text-gray-600 font-medium">{award.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-6 py-3 rounded-full">
              <Award className="w-6 h-6 text-amber-600" />
              <span className="text-amber-800 font-semibold">Wielokrotnie nagradzana kwiaciarnia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
            <div
              id="contact-info"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-info"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">Dane kontaktowe</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <MapPin className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">Adres</p>
                        <p className="text-gray-600">ul. Nowogrodzka 250</p>
                        <p className="text-gray-600">18-400 Łomża</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Phone className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">Telefon</p>
                        <a href="tel:+48510403613" className="text-rose-600 hover:text-rose-700 text-lg font-medium">
                          +48 510 403 613
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Mail className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">Email</p>
                        <a href="mailto:kontakt@kwiaciarnia-beata.pl" className="text-rose-600 hover:text-rose-700">
                          kontakt@kwiaciarnia-beata.pl
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <Clock className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">Godziny otwarcia</p>
                        <p className="text-gray-600">Poniedziałek - Piątek: 8:00 - 18:00</p>
                        <p className="text-gray-600">Sobota: 8:00 - 15:00</p>
                        <p className="text-gray-600">Niedziela: 9:00 - 13:00</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Facebook className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">Facebook</p>
                        <a
                          href="https://www.facebook.com/p/Kwiaciarnia-Sztachańska-Beata-ul-Nowogrodzka-250-18-400-Łomża-100067674105803"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Kwiaciarnia Sztachańska Beata
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              id="contact-map"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-map"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm h-full">
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.8!2d22.0!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc0c9b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sNowogrodzka%20250%2C%2018-400%20%C5%81om%C5%BCa!5e0!3m2!1spl!2spl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "500px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja kwiaciarni - ul. Nowogrodzka 250, 18-400 Łomża"
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
            <p className="text-gray-400 mb-4"></p>
            <p className="text-gray-400 text-sm">© 2025 Kwiaciarnia Beata Sztachańska. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Flower2 className="w-4 h-4 text-rose-500" />
                <span className="font-semibold text-gray-800">Kwiaciarnia Beata Sztachańska</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Nowogrodzka 250, 18-400 Łomża</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+48510403613"
                className="flex items-center space-x-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+48 510 403 613</span>
              </a>

              <a
                href="https://www.facebook.com/p/Kwiaciarnia-Sztachańska-Beata-ul-Nowogrodzka-250-18-400-Łomża-100067674105803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedOffer && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex flex-col overflow-hidden">
          <div
            className={`relative w-full h-full flex flex-col transition-all duration-300 ${isGalleryOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-black/50 backdrop-blur-sm">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-playfair">{selectedOffer.title}</h2>
                <p className="text-white/80">{selectedOffer.description}</p>
              </div>
              <button
                onClick={handleCloseGallery}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 flex items-center justify-center relative p-4 min-h-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={galleryImages[currentImageIndex]?.src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex]?.alt || "Galeria"}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                  priority
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Footer with counter and thumbnail grid */}
            <div className="bg-black/50 backdrop-blur-sm p-4 text-white">
              {/* Image counter */}
              <div className="text-center mb-4">
                <span className="bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {currentImageIndex + 1} / {selectedOffer.imageCount}
                </span>
              </div>

              {/* Thumbnail grid - scrollable */}
              <div className="relative">
                <div className="overflow-x-auto overflow-y-hidden">
                  <div className="flex space-x-2 pb-2" style={{ width: `${galleryImages.length * 80}px` }}>
                    {galleryImages.map((image, index) => (
                      <div
                        key={image.id}
                        className={`relative w-16 h-16 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                          index === currentImageIndex
                            ? "ring-2 ring-rose-500 scale-110"
                            : "hover:scale-105 opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
