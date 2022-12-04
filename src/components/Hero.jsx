import styles from '../style'
import { robot, discount } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='discount' 
          className='w-[27px] h-[27px] mr-2'
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> DISCOUNT FOR {" "}
          <span className='text-white'>1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 
          className='flex-1 font-poppins font-semibold 
          ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'
        >
          The Next <br className='sm:block hidden'/> { " " }
          <span className='text-gradient'>Generation</span> { " " }
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1  className='font-poppins font-semibold 
      ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method.
      </h1>
    </div>
  </section>
) 

export default Hero