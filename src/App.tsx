import { Hero, NavBar, Accordion, Table, Image } from './index'
import './App.css'

function App() {
  return (
    <>
      <NavBar
        items={[
          { name: 'About', link: '#about' },
          { name: 'Work', link: '#work' },
          { name: 'Skills', link: '#skills' },
          { name: 'Resources', link: '#resources' },
          { name: 'Setup', link: '#setup' }
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
        />
        <section className='section about'>
          <h2 id='about' className='heading'>
            Welcome here
          </h2>
          <p>
            Welcome to my site. Here&apos;s a small snippet of my coding journey to date. It&apos;s
            been a wild ride and I&aspo;m happy to share this with you. The Web development world is
            in a constant state of change and innovation. I love learning about all the new
            technologies that are coming, and how it will improve the web of the future.
          </p>
          <p>Drop me a line if you have a project in mind. I&apos;d love to work with you.</p>
        </section>
        <section className='section work'>
          <h2 id='work' className='heading'>
            Work
          </h2>
          <div className='cards'>
            <div className='card section'>
              <a href='demos/Blog/index.php' target='_blank'>
                <Image source='src/assets/Blog.png' width='100%' />
                <h2>Blog Application</h2>
                <h4>Built with: PHP, HTML, CSS, MySQL</h4>
                <p>
                  Simple demo blog application using PHP and MySQL. It&apos;s able to add, edit, and
                  remove posts.
                </p>
              </a>
            </div>

            <div className='card section'>
              <a href='demos/WinnipegParkDemo/park.html' target='_blank'>
                <Image source='src/assets/WinnipegParkDemo.png' width='100%' />
                <h2>Winnipeg Park Demo</h2>
                <h4>Built with: HTML, CSS, JavaScript, RestAPI</h4>
                <p>
                  Neat little site that uses Winnipeg public apis to look up all the different parks
                  within Winnipeg and their location.
                </p>
              </a>
            </div>
            <div className='card section'>
              <a href='demos/CanadaFishing/index.php' target='_blank'>
                <Image source='src/assets/CanadaFishing.png' width='100%' />
                <h2>Canada Fishing Demo</h2>
                <h4>Built with: PHP, HTML, CSS, JavaScript, MySQL, TinyMCE, RestAPI</h4>
                <p>
                  Simple application fetching data on many of Canada&apos;s native fresh water fish
                  species.
                </p>
              </a>
            </div>

            <div className='card section'>
              <Image source='src/assets/WMF.png' width='100%' />
              <h2>Winnipeg Music Festival</h2>
              <h4>Frontend Built with: Vuejs, TypeScript, TailwindCSS, GraphQL, Apollo Client</h4>
              <h4>
                Backend Built with: Nodejs, TypeScript, Graphql, Apollo Server, Prisma Client,
                MariaDB
              </h4>
              <p>
                New online registration system for the Winnipeg Music Festival. Has ability for
                people make a number of different applications and save them before submission
              </p>
            </div>
          </div>
        </section>
        <section className='section skills'>
          <h2 id='skills' className='heading'>
            Skills
          </h2>
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
        <section className='section resources'>
          <h2 id='resources' className='heading'>
            Resources
          </h2>
        </section>
        <section id='setup' className='section setup'>
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
        <section className='section contact'>
          <h2 id='contact' className='heading'>
            Contact
          </h2>
          <p>Get in touch. I&apos;d love to work with you on you&apos;re next project</p>
          <a href='mailto:info@davesawatzky.com'>Send me an Email.</a>
        </section>
      </div>
    </>
  )
}

export default App
