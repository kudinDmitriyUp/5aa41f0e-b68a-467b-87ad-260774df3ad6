"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Bell, Bed, ChefHat, Coffee, Crown, Flame, Flower2, Quote, Sparkles, UtensilsCrossed, Utensils, Waves, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411874966-u0u4vrl3.jpg"
          logoAlt="Grandeur Hotel Logo"
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Grandeur Hotel"
          description="Experience luxury redefined with world-class amenities, exquisite dining, and unparalleled service in the heart of the city"
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.com"
            },
            {
              text: "Explore Amenities",
              href: "amenities"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411875503-cr8kcu0m.jpg"
          imageAlt="Grandeur Hotel luxury lobby"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grandeur Hotel, we believe luxury is not just about opulent surroundings, but about creating unforgettable moments that resonate long after your stay. Every detail has been carefully crafted to exceed your expectations."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFive
          title="World-Class Amenities"
          description="Discover the exceptional facilities and services that make your stay truly memorable"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          showIconBoxBackground={true}
          features={[
            {
              title: "Luxury Spa & Wellness",
              icon: Flower2
            },
            {
              title: "Fine Dining Restaurant",
              icon: ChefHat
            },
            {
              title: "Infinity Pool & Deck",
              icon: Waves
            },
            {
              title: "24/7 Concierge Service",
              icon: Bell
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardOne
          title="Exquisite Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Presidential Suite",
              description: "Our most luxurious accommodation with panoramic city views, private dining area, and dedicated butler service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411876056-kx5a9p7f.jpg",
              imageAlt: "Presidential Suite bedroom",
              button: {
                text: "View Details",
                href: "https://booking.com"
              }
            },
            {
              title: "Spa Wellness Room",
              description: "Tranquil sanctuary with in-room spa amenities, wellness features, and direct spa access",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411876567-f3u2xa3a.jpg",
              imageAlt: "Spa wellness room",
              button: {
                text: "View Details",
                href: "https://booking.com"
              }
            },
            {
              title: "Executive Suite",
              description: "Perfect blend of comfort and sophistication with business amenities and premium city views",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411877250-8lib0rjo.jpg",
              imageAlt: "Executive suite interior",
              button: {
                text: "View Details",
                href: "https://booking.com"
              }
            }
          ]}
        />
      </div>

      <div id="dining" data-section="dining">
        <FeatureCardTwo
          title="Culinary Excellence"
          description="Savor exceptional dining experiences crafted by world-renowned chefs"
          tag="Dining"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Rooftop Fine Dining",
              description: "Michelin-starred cuisine with breathtaking panoramic views of the city skyline",
              icon: Crown,
              button: {
                text: "Reserve Table",
                href: "https://opentable.com"
              }
            },
            {
              title: "Poolside Grill",
              description: "Casual elegance with fresh seafood and grilled specialties in a tropical setting",
              icon: Flame,
              button: {
                text: "View Menu",
                href: "dining"
              }
            },
            {
              title: "Artisan Café",
              description: "Handcrafted pastries, premium coffee, and light bites in an intimate atmosphere",
              icon: Coffee,
              button: {
                text: "Order Online",
                href: "https://cafe.com"
              }
            },
            {
              title: "Private Dining",
              description: "Exclusive culinary experiences with personalized menus and dedicated service",
              icon: Utensils,
              button: {
                text: "Inquire Now",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover why discerning travelers choose Grandeur Hotel for unforgettable stays"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Catherine Williams",
              role: "CEO, Williams & Partners",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411879336-2g3i1hc0.png",
              imageAlt: "Catherine Williams portrait"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "International Diplomat",
              company: "Embassy Relations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411880164-i8khfzfu.jpg",
              imageAlt: "Michael Thompson portrait"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Fashion Designer",
              company: "Rodriguez Couture",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411880796-e4ps4nv2.jpg",
              imageAlt: "Isabella Rodriguez portrait"
            },
            {
              id: "4",
              name: "James Harrison",
              role: "Investment Banker",
              company: "Harrison Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411881313-vcf7ebct.jpg",
              imageAlt: "James Harrison portrait"
            },
            {
              id: "5",
              name: "Sofia Chen",
              role: "Tech Entrepreneur",
              company: "Chen Innovations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411881831-babx1hss.png",
              imageAlt: "Sofia Chen portrait"
            },
            {
              id: "6",
              name: "Alexander Davis",
              role: "Real Estate Mogul",
              company: "Davis Properties",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411882354-vbv0itrn.jpg",
              imageAlt: "Alexander Davis portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Plan Your Perfect Stay"
          description="Get instant access to member rates up to 30% off standard pricing and exclusive luxury amenities with priority reservations"
          tagIcon={Calendar}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T4ddGC7kKKMdLbBqUvMgbBzGM/uploaded-1763411883149-bi3iegc0.jpg"
          imageAlt="Hotel reception and lobby"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Get Exclusive Offers"
          termsText="By subscribing, you'll receive exclusive rates and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grandeur Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "amenities" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "https://careers.example.com" },
                { label: "Press", href: "https://press.example.com" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.com" },
                { label: "Gift Cards", href: "https://giftcards.example.com" },
                { label: "Events", href: "https://events.example.com" },
                { label: "Concierge", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}