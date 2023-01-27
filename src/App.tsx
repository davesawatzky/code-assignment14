import { Hero, NavBar } from './index'
import './App.css'

function App() {
  return (
    <>
      <NavBar
        items={[
          { name: 'About', link: '#about' },
          { name: 'Work', link: '#skills' },
          { name: 'Skills', link: '#skills' },
          { name: 'Resources', link: '#resources' },
          { name: 'Tools', link: '#tools' }
        ]}
      />

      <div className='container'>
        <Hero
          image={'src/assets/field.jpg'}
          imageSize={'50%'}
          imagePosition={'left'}
          heroHeight={'50vh'}
          textBlockPosition={'right'}
          headingText={'David Sawatzky'}
          subText={'Web Developer Extraordinaire'}
          buttonText={'Explore'}
          primary
        />
        <section id='about' className='section about'>
          <h1 className='heading'>About</h1>
        </section>
        <section id='work' className='section work'>
          <h1 className='heading'>Work</h1>
        </section>
        <section id='skills' className='section skills'>
          <h1 className='heading'>Skills</h1>
        </section>
        <section id='resources' className='section resources'>
          <h1 className='heading'>Resources</h1>
        </section>
        <section id='tools' className='section setup'>
          <h1 className='heading'>Developer Setup</h1>
        </section>
        <section id='contact' className='section contact'>
          <h1 className='heading'>Contact</h1>
        </section>
      </div>
    </>
  )
}

export default App
