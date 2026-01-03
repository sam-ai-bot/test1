function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About CoverCraft</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            CoverCraft was born from a simple idea: your phone case should be as unique as you are.
            Founded in 2024, we set out to create phone covers that blend premium protection with
            artistic expression.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe that everyday items can be beautiful. That&apos;s why we work with artists and
            designers from around the world to create covers that turn heads and start conversations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every design in our collection is carefully curated to ensure it meets our standards for
            both aesthetics and quality. We&apos;re not just selling phone cases - we&apos;re helping you
            express your personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">Unique Designs</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">
                We use premium materials that protect your phone without adding bulk.
                Every case is tested to meet our durability standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Artistic Excellence</h3>
              <p className="text-gray-600 text-sm">
                We collaborate with talented artists to bring you designs that are
                truly one-of-a-kind.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We&apos;re committed to reducing our environmental impact with eco-friendly
                packaging and sustainable materials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Love</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our priority. We offer hassle-free returns and
                responsive customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
