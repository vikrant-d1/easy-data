import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md-2'>
         <div className='sidebar-wrapper'>
         <Sidebar />
         </div>
        </div>
        <div className='col-md-10'>
          <div className='inner-wrapper'>
          <Header />
          <main>{children}</main>
          </div>
        </div>
        <div className='col-md-12 p-0'>
        <Footer />
        </div>
      </div>
    
    </div>
  )
}