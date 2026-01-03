function Shipping() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Shipping & Returns</h1>

        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                  <p>Orders over $50 qualify for free standard shipping within the US.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Delivery Times</h3>
                  <ul className="mt-2 space-y-1">
                    <li>Standard Shipping: 3-5 business days</li>
                    <li>Express Shipping: 1-2 business days</li>
                    <li>International: 7-14 business days</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Shipping Rates</h3>
                  <ul className="mt-2 space-y-1">
                    <li>Standard (under $50): $5.99</li>
                    <li>Express: $12.99</li>
                    <li>International: Calculated at checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Returns & Exchanges</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We want you to love your CoverCraft case. If you&apos;re not completely satisfied,
                we offer hassle-free returns within 30 days of purchase.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Return Eligibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Items must be unused and in original packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Return request must be made within 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Proof of purchase required</span>
                  </li>
                </ul>
              </div>
              <h3 className="font-semibold text-gray-900 mt-6">How to Return</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact our support team at support@covercraft.com</li>
                <li>Receive your prepaid return label via email</li>
                <li>Pack your item securely in the original packaging</li>
                <li>Drop off at any authorized shipping location</li>
                <li>Refund processed within 5-7 business days of receipt</li>
              </ol>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Damaged or Defective Items</h2>
            <p className="text-gray-600">
              If you receive a damaged or defective product, please contact us immediately at
              support@covercraft.com with photos of the damage. We&apos;ll send you a replacement
              at no additional cost.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Shipping
