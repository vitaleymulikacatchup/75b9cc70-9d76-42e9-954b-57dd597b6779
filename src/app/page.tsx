"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = /* provided JSON array */;
const heroImage = assetMap.find(a => a.id === "hero-pizza");
const menuImage = assetMap.find(a => a.id === "menu-items");
const teamChefImage = assetMap.find(a => a.id === "team-chef");
const testimonialCustomerImage = assetMap.find(a => a.id === "testimonial-customer");
const contactShopImage = assetMap.find(a => a.id === "contact-shop");

function resolveAsset(id) {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.url : "/public/images/placeholder.webp";
}

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the best pizzas in town with fresh ingredients and classic recipes."
            imageSrc={heroImage?.url}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Call Us", href: "contact" }
            ]}
            className="bg-yellow-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We use only the finest, freshest ingredients to create authentic Italian pizzas that delight the senses. Our experienced chefs craft each pie with love and care to ensure a memorable dining experience."
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Our Story", href: "contact" }
            ]}
            className="bg-yellow-100"
            titleClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="features" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Fresh Ingredients", description: "We use fresh, locally-sourced ingredients for all our pizzas.", icon: "Sparkles" },
              { title: "Authentic Recipes", description: "Traditional recipes handed down from generations.", icon: "BookOpen" },
              { title: "Cozy Atmosphere", description: "Enjoy your meal in our warm and welcoming setting.", icon: "Home" }
            ]}
            className="bg-yellow-100"
            textBoxTitleClassName="text-gray-900"
            textBoxDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="products" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Margherita Pizza", price: "$12", imageSrc: resolveAsset("menu-items") },
              { id: "2", name: "Pepperoni Pizza", price: "$15", imageSrc: resolveAsset("menu-items") },
              { id: "3", name: "Veggie Delight", price: "$13", imageSrc: resolveAsset("menu-items") }
            ]}
            className="bg-yellow-100"
            textBoxTitleClassName="text-gray-900"
            textBoxDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Luca Rossi", role: "Head Chef", imageSrc: resolveAsset("team-chef") },
              { id: "2", name: "Maria Esposito", role: "Pastry Chef", imageSrc: resolveAsset("team-chef") }
            ]}
            className="bg-yellow-100"
            textBoxTitleClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Jessica M.", role: "Food Blogger", testimonial: "Best pizza I've ever had! The crust is amazing, and the flavors are spot on.", imageSrc: resolveAsset("testimonial-customer") },
              { id: "2", name: "David L.", role: "Local Guide", testimonial: "A must-visit for pizza lovers. Friendly staff and a great atmosphere.", imageSrc: resolveAsset("testimonial-customer") }
            ]}
            className="bg-yellow-100"
            textBoxTitleClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="We're here to help"
            description="Reach out for reservations or questions."
            imageSrc={resolveAsset("contact-shop")}
            className="bg-yellow-100"
            textBoxTitleClassName="text-gray-900"
            textBoxDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [{ label: "Home", href: "home" }, { label: "Pizza Menu", href: "menu" }, { label: "Contact", href: "contact" }] },
              { title: "About", items: [{ label: "Our Story", href: "about" }, { label: "Team", href: "#team" }] }
            ]}
            copyrightText="© 2025 | Pizzeria"
            className="bg-yellow-200"
            copyrightTextClassName="text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}