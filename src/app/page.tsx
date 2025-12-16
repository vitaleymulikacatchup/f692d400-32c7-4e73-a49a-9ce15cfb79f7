"use client"

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Coffee, Users, Globe, Leaf, MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="outline"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve a Table", href: "contact" }}
          brandName="BrewHaven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878945067-agb6ea0h.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="BrewHaven"
          description="Discover exceptional coffee crafted with passion. Premium blends, artisan roasts, and the perfect ambiance await you."
          buttons={[
            { text: "Explore Our Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878946195-5ukrvlo1.jpg"
          imageAlt="Premium coffee beans background"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Crafting exceptional coffee experiences since 2015. We source the finest beans globally and roast them fresh daily for our community."
          metrics={[
            { icon: Coffee, label: "Years Roasting", value: "9+" },
            { icon: Users, label: "Daily Visitors", value: "500+" },
            { icon: Globe, label: "Origins Sourced", value: "12+" },
            { icon: Leaf, label: "Organic Blends", value: "8" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose BrewHaven"
          description="Experience the difference that quality, care, and passion make in every cup"
          features={[
            {
              id: 1,
              title: "Freshly Roasted Daily",
              description: "Our beans are roasted in small batches every morning, ensuring peak flavor and aroma in every cup you enjoy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878946195-5ukrvlo1.jpg"
            },
            {
              id: 2,
              title: "Single-Origin Selection",
              description: "We partner directly with sustainable farms across East Africa, Central America, and Southeast Asia for exceptional quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878951639-ya0jbbfv.jpg"
            },
            {
              id: 3,
              title: "Expert Baristas",
              description: "Our certified baristas bring years of experience and passion to craft your perfect drink with precise technique.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878948438-j0lcuoex.jpg"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Blends"
          description="Discover our signature coffee selections, each sourced and roasted for optimal flavor and character"
          products={[
            {
              id: "1",
              name: "Ethiopian Yirgacheffe",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878947521-husy0zxi.jpg",
              imageAlt: "Ethiopian Yirgacheffe espresso"
            },
            {
              id: "2",
              name: "Colombian Geisha",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878948438-j0lcuoex.jpg",
              imageAlt: "Colombian Geisha blend"
            },
            {
              id: "3",
              name: "Costa Rican Tarrazú",
              price: "$15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878949588-9k4dyhuk.jpg",
              imageAlt: "Costa Rican Tarrazú blend"
            },
            {
              id: "4",
              name: "House Blend Espresso",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878950664-5tu2ia73.jpg",
              imageAlt: "House blend espresso"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Our Community"
          description="See what our customers have to say about their BrewHaven experience"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              testimonial: "BrewHaven has become my morning ritual. The quality of their espresso is unmatched, and the atmosphere is so welcoming. It's become my creative workspace.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878952908-wwg26fgc.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Coffee Enthusiast",
              testimonial: "As a true coffee aficionado, I appreciate the single-origin selections and the baristas' knowledge. Every visit introduces me to something new.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878954173-999s0vlo.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              testimonial: "I host client meetings here regularly. The perfect balance of ambiance, service, and exceptional coffee makes it ideal for business conversations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878955143-vhix77f1.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Student",
              testimonial: "Best place to study near campus. The coffee is fantastic, the WiFi is reliable, and the staff is incredibly friendly and supportive.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878956115-ahhsrdjy.jpg",
              imageAlt: "David Park"
            },
            {
              id: "5",
              name: "Jessica Walsh",
              role: "Barista Trainer",
              testimonial: "I recommend BrewHaven to everyone interested in learning about specialty coffee. Their commitment to excellence is truly inspiring.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878957127-kb9bwmie.jpg",
              imageAlt: "Jessica Walsh"
            },
            {
              id: "6",
              name: "Thomas Martinez",
              role: "Weekend Visitor",
              testimonial: "The weekend brunch pastries paired with their coffee are absolutely divine. It's become our family tradition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765878958412-0ctqbeu7.jpg",
              imageAlt: "Thomas Martinez"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit BrewHaven"
          ctaDescription="Stop by our cozy corner cafe. We're open daily, brewing fresh coffee and creating memorable moments."
          ctaButton={{ text: "Get Directions", href: "#" }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday to Friday 6:30 AM - 8:00 PM, Saturday 7:00 AM - 9:00 PM, and Sunday 8:00 AM - 7:00 PM. Closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi and seating for remote work?",
              content: "Absolutely! We have comfortable seating, reliable high-speed WiFi, and plenty of outlets for laptops. Perfect for working or studying throughout the day."
            },
            {
              id: "3",
              title: "Can I order coffee for large groups or events?",
              content: "Yes! We offer wholesale pricing for corporate orders and catering services. Contact us at least 48 hours in advance for details."
            },
            {
              id: "4",
              title: "Do you have a loyalty program?",
              content: "We offer a stamp card - buy 10 coffees, get one free. Additionally, our app provides exclusive deals and early access to seasonal blends."
            },
            {
              id: "5",
              title: "Are your beans available for retail purchase?",
              content: "Yes! All our single-origin and house blends are available in whole bean and ground formats for home brewing. Custom roasts can be ordered online."
            }
          ]}
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="BrewHaven"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Menu", href: "products" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Sustainability", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}