import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartSidebar from './CartSidebar'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}

export default Layout
