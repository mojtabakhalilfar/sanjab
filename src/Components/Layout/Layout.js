import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import Modal from '../../UI/Modal/Modal'
import Login from '../../Sayer/Login/Login'
import SabadKharid from '../../Sayer/SabadKharid/SabadKharid'

const Layout = (props) => {
  return (
    <div id='layout-id' className={props.className}>
      <SabadKharid />
      <Modal>
        <Login />
      </Modal>
      <Header/>
      <main className={props.className} id='main-layout'>
          {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout