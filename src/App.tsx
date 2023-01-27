import { Hero, NavBar, Accordion, Table } from './index'
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
          <h2 className='heading'>About</h2>
        </section>
        <section id='work' className='section work'>
          <h2 className='heading'>Work</h2>
        </section>
        <section id='skills' className='section skills'>
          <h2 className='heading'>Skills</h2>
          <Accordion
            accordionData={[
              {
                heading: 'Languages',
                content: 'HTML, CSS, JavaScript, TypeScript, PHP, Ruby, Python, Java, SQL'
              },
              { heading: 'Frameworks', content: 'React, Vue, Nodejs, Ruby on Rails, Flask' },
              {
                heading: 'Testing and DevOps',
                content: 'Jest, Cypress, Vitest, Husky, Git, Github, Jira, Agile'
              },
              {
                heading: 'Databases and ORMs',
                content:
                  'PostgreSQL, MySQL, MariaDB, Graphql, Apollo Client and Server, Objectionjs, Knex, Prisma'
              },
              {
                heading: 'Deployment',
                content: 'AWS, Azure, Google Cloud, Digital Ocean, Heroku'
              },
              {
                heading: 'Tools',
                content: 'VSCode, Docker, Virtual Box, XAMPP, Figma, OSWAP ZAP, Insomnia, Postman'
              }
            ]}
          />
        </section>
        <section id='resources' className='section resources'>
          <h2 className='heading'>Resources</h2>
        </section>
        <section id='tools' className='section setup'>
          <h2 className='heading'>Developer Setup</h2>
          <Table
            tableHeaderData={[
              { name: 'Colors and Fonts', columnSpan: 1 },
              { name: 'Plugins', columnSpan: 3 }
            ]}
            tableData={[
              ['Night Owl', 'Apollo Graphql', 'Auto Close Tag', 'Auto Rename Tag'],
              ['Cascadia Code Font', 'autoDocstring', 'Color Highlight', 'CSS Peek'],
              ['Material Icon Theme', 'Debugger for Java', 'Dev Containers', 'Docker'],
              ['Dracula Official', 'EditorConfig for VSCode', 'endwise', 'ESLint'],
              ['', 'Git History', 'gitignore', 'GitLens'],
              ['', 'Graphql', 'HTML CSS Support', 'html tag wrapper'],
              ['', 'IntelliCode', 'isort', 'Language Support for Java'],
              ['', 'Live Server', 'npm Intellisense', 'Open in GitHub'],
              ['', 'PHP Extension Pack', 'PHP Intelephense', 'PHP IntelliSense'],
              ['', 'Prettier', 'Prisma', 'Pylance'],
              ['', 'Python', 'Python Indent', 'Ruby'],
              ['', 'SQLite', 'Tailwind CSS', 'Thunder Client'],
              ['', 'Vitest', 'VSCode Ruby', 'vscode-styled-components'],
              ['', 'Vue Language Features', 'Vue VSCode Snippets', 'WSL']
            ]}
            tableHeaderColor={'#006e60'}
            tableColor={'#5f5f5f'}
          />
        </section>
        <section id='contact' className='section contact'>
          <h2 className='heading'>Contact</h2>
          <p>Get in touch. I&apos;d love to work with you on you&apos;re next project</p>
          <a href='mailto:info@davesawatzky.com'>Send me an Email.</a>
        </section>
      </div>
    </>
  )
}

export default App
