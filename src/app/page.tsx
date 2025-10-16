"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { id: "about-image", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { id: "contact-image", url: "https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Smiling Asian woman spreading tomato sauce on pizza dough while looking at funny female covering eyes with tomato slices in kitchen" },
];

export default function Home() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const products = [
    { id: "1", brand: "Classic Margherita", name: "Delicious Cheese Pizza", price: "$8", rating: 5, reviewCount: "200", imageSrc: assetMap.find(a => a.id === "about-image")?.url },
    { id: "2", brand: "Pepperoni Delight", name: "Spicy Pepperoni Pizza", price: "$10", rating: 4, reviewCount: "150", imageSrc: assetMap.find(a => a.id === "about-image")?.url },
    { id: "3", brand: "Veggie Feast", name: "Loaded Veggie Pizza", price: "$9", rating: 5, reviewCount: "180", imageSrc: assetMap.find(a => a.id === "about-image")?.url },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navItems} brandName="Pizzeria" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the best pizzas in town, crafted with the finest ingredients."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Order Now", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our pizzeria is family-owned and operated, bringing you the authentic taste of Italy.",
              "Join us for a slice of happiness!"
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo products={products} />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Get in Touch"
            description="Call us to place an order or for any inquiries. We are here to serve you."
            buttonText="Submit"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Menu",
                items: [
                  { label: "Home", href: "home" },
                  { label: "Menu", href: "menu" },
                  { label: "About", href: "about" }
                ]
              },
              {
                title: "Social",
                items: [
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "Instagram", href: "https://instagram.com" }
                ]
              }
            ]}
            copyrightText="© 2023 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}