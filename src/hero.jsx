import './index.css'
import heroImg from './assets/hero.svg'
const hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h2>Contentful CMS Project</h2>
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem
            corrupti assumenda magnam voluptas iste quis nam accusamus. Quis
            nulla unde molestiae veritatis optio enim autem dolores pariatur non
            impedit.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='women and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}

export default hero
