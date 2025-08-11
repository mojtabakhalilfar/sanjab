import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section id='sectin1-id' className='section-class'><a className='link-footer-class' href='#header-id'>​بازگشت به بالا</a></section>
      <section id='sectin2-id' className='section-class'>
        <div className='section2-class'>
          <div className='div-section1-class'>
            <span>اطلاعات تماس</span>
            <Link className='link-footer-class' to={'#'}>شماره تماس بخش فروش (در ساعات اداری) : 08134923025</Link>
            <Link className='link-footer-class' to={'#'}>شماره تماس برای پیگیری سفارشات : 09201200148</Link>
            <span>نشانی : همدان ، تویسرکان ، بلوار بهشتی</span>
            <Link className='link-footer-class' to={'#'}> info@Sanjabwalnut.com : ایمیل</Link>
          </div>
          <div className='div-section1-class'>
            <Link className='link-footer-class' to={'#'}>قوانین و مقررات</Link>
            <Link className='link-footer-class' to={'#'}>حریم خصوصی</Link>
            <Link className='link-footer-class' to={'#'}>رویه بازگشت کالا</Link>
          </div>
          <div className='div-section1-class'>
            <Link className='link-footer-class' to={'#'}>راهنمای خرید</Link>
            <Link className='link-footer-class' to={'#'}>روش های ارسال</Link>
            <Link className='link-footer-class' to={'#'}>سوالات متداول</Link>
            <Link className='link-footer-class' to={'#'}>روش های پرداخت</Link>
          </div>
        </div>
        <div className='div-section1-class'>
          <img src={require('../../assest/logo.png')} alt='logo'/>            
        </div>
      </section>
      <section id='sectin3-id' className='section-class'>
        <p>
          <span>
          مجموعه خشکبار سنجاب یک تولیدی خصوصی می‌باشد که در زمینه‌ی خشکبار خصوصا گردو، بادام، توت خشک و عسل و سایر محصولات وابسته با هدف پر کردن خلاء عرضه‌ی گردو و بادام با کیفیت ایرانی (تویسرکان) و ایجاد شناخت و قدرت تشخیص محصول اصیل ایرانی از محصول خارجی (عموما گردوهای چینی و آمریکای جنوبی) از بهمن ماه سال 95 در تویسرکان تاسیس و از همان سال فعالیت خود را آغاز نمود. این مجموعه با پشتوانه‌ی چندین دهه فعالیت موسسین خود در قالب عمده فروشی و عرضه‌ی سنتی در خاستگاه گردو و بادام ایران و همچنین اخیرا فرهنگسازی و آموزش با بهره‌گیری از نیروی متخصص، تکنولوژی و دانش روز بر بستر دنیای تجارت الکترونیک، هدف خود را تامین و تولید محصولات با کیفیت طبق استانداردهای جهانی در این شهرستان گذاشته است.
          </span>
        </p>
      </section>
      <section id='sectin4-id' className='section-class'>
        <div className='child-sectin4-class'>
          <Link><img src={require('../../assest/whatsapp.png')} alt='whatsapp'/></Link>
        </div>
        <div className='child-sectin4-class'>
          <img src={require('../../assest/pardakht.png')} alt='pardakht'/>
        </div>
        <div className='child-sectin4-class'>
          <Link><img src={require('../../assest/nemadEtminan.png')} alt='nemadEtminan'/></Link>
        </div>
      </section>
      <section id='sectin5-id' className='section-class'>
        <span>استفاده از مطالب فروشگاه اینترنتی سنجاب فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به فروشگاه سنجاب می‌باشد</span>
        <Link className='link-footer-class' to={'#'}>طراحی ، پشتیبانی و اجرا : مجتبی خلیل فر</Link>
        <Link className='link-footer-class' to={'https://sanjabnuts.com/'}>go</Link>
      </section>
    </footer>
  )
}

export default Footer