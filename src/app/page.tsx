import Image from 'next/image';
import image from '../../image/AmmadAli.jpg';

export default function Home() {
  return (
    <div className='container'>
      <header className='main'>
        <h1>Ammad Ali</h1>
        <Image src={image} alt="Ammad Ali" className='image' width={150} height={200} />
        <p>Passionate Mechanical Engineering Student</p>
        <p>Governor Sindh Initiative Participant</p>
      </header>

      <section className='about'>
        <p>
          Hello, I am Ammad, a passionate Mechanical Engineering student currently enrolled in the Governor Sindh Initiative course. I am eager to learn, grow, and contribute to engineering projects that make an impact. Welcome to my portfolio!
        </p>
      </section>

      <footer className='footer'>
        <a href="https://www.linkedin.com/in/ammad-ali-623107292" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <a href="https://github.com/AmmadAli1122" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
