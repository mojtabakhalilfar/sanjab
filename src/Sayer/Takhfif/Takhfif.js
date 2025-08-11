import './takhfif.css'
import Layout from '../../Components/Layout/Layout'

const Takhfif = () => {
  return (
    <Layout className='takhfif-class'>
        <div id='img-takhfif'>
            <img src={require('../../assest/takhfif.png')} alt='takhfif' />
        </div>
        <div id='text-takhfif' dir='rtl'>
            <p>
                <span>
                برای استفاده از کد تخفیف ابتدا بایستی در سایت سنجاب عضو باشید.
سپس کد تخفیف خود را به خاطر سپرده یا در جایی یادداشت کنید.
پس از نهایی کردن سفارش خود ، در نوار بالای صفحه گزینه سبد خرید را کلیک کنید.
در نواری که سمت راست صفحه باز میشود پایین صفحه گزینه مشاهده سبد خرید را کلیک کنید.
همانطور که مشاهده میکنید در مستطیلی در گوشه سمت راست نوشته شده است : کد تخفیف خود را وارد کنید . 
کد تخفیف خود را وارد کرده دکمه ثبت را کلیک کنید.
کد تخفیف شما در سایت اعمال شده و هزینه برایتان محاسبه میشود.
                </span>
            </p>
        </div>
    </Layout>
  )
}

export default Takhfif