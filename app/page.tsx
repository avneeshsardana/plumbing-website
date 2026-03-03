import Image from "next/image";
export default function PlumbingWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Best & Affordable Plumbing</h1>
          <a
            href="tel:+19052265558"
            className="mt-4 md:mt-0 bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-100"
          >
            Call Now – 24/7 Emergency
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Trusted 24/7 Emergency Plumber in Brampton</h2>
            <p className="text-lg mb-6">
              We provide fast, reliable, and affordable plumbing services in Brampton, Mississauga,
              Caledon, and surrounding areas. From drain cleaning to water heater repair, we handle it all.
            </p>
            <a
              href="tel:+19052265558"
              className="bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-800"
            >
              Get Immediate Help
            </a>
          </div>
          <div className="relative w-full h-80 overflow-hidden rounded-2xl">
                <Image
                  src="/plumbing-image.jpg"
                  alt="Plumber working"
                  width={800}
                  height={480}
                  className="object-cover w-full h-full"
                />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Emergency Plumbing",
              "Drain Cleaning",
              "Water Heater Repair & Installation",
              "Leak Detection",
              "Sump Pump Installation",
              "Basement Plumbing"
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-3">{service}</h4>
                <p>
                  Professional and affordable {service.toLowerCase()} services with fast response time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">24/7 Availability</h4>
              <p>We are available day and night for emergency plumbing needs.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">Licensed & Insured</h4>
              <p>Professional and certified plumbers you can trust.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">Upfront Pricing</h4>
              <p>No hidden fees. Transparent and competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
     <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Customer Reviews</h3>

          {/* Option: use structured reviews with multiple paragraphs */}
          {/*
            You can add more paragraphs by either:
            1) adding extra <p> elements inside each card, or
            2) keeping paragraphs in an array and mapping them (shown below).
          */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                paragraphs: [
                  "Deep ji has done an amazing work. Very punctual and very affordable price. I would definitely recommend him for any plumbing services.",
                  "He arrived on time, diagnosed the issue quickly, and explained the repair before starting.",
                  "Great value and excellent customer service."
                ],
                rating: "★★★★★"
              },
              {
                paragraphs: [
                  "Deep is Very professional and quick to answer. Fixed our plumbing issues same day . Really recommend. We have almost got 4-5 jobs done from him. Really good."
                ],
                rating: "★★★★★"
              },
              {
                paragraphs: [
                  "Deep has helped me out multiple times and is always reliable and professional. He answers calls promptly, responds quickly to messages, and is always willing to help — even on short notice. Highly recommend their services!"
                ],
                rating: "★★★★★"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md">
                {review.paragraphs.map((text, pIdx) => (
                  <p key={pIdx} className="mb-4">{text}</p>
                ))}
                <p className="font-semibold">{review.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Need a Plumber Right Now?</h3>
          <p className="text-lg mb-8">
            Call us anytime for fast and affordable plumbing services in your area.
          </p>
          <a
            href="tel:+19052265558"
            className="bg-white text-blue-700 px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-gray-100"
          >
            Call 905 226 5558
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Best & Affordable Plumbing. All rights reserved.</p>
      </footer>
    </div>
  );
}
