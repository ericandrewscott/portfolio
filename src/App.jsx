import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1ebde;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 800px;
  width: 90vw;
  margin: 0 auto 16px;
  padding: 16px;
  font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  border-radius: 6px;
  color: #222;
  box-sizing: border-box;
  font-size: 1em;

  @media (min-width: 600px) {
    padding: 32px;
    margin: 0 auto 40px;
    border-radius: 0;
  }
`;

const Hero = styled.header`
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: 90% bottom;
  min-height: 200px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    min-height: 300px;
  }

  @media (min-width: 800px) {
    background-position: 98% bottom;
    background-image: url(${props => props.profileImageUrl});
    background-repeat: no-repeat;
    background-size: 370px auto;
  }

  @media (min-width: 1200px) {
    background-position: 90% bottom;
  }
`;

const Name = styled.h1`
  font-family: 'Inter', 'Helvetica Neue', Arial, 'Liberation Sans', 'Apple Color Emoji', 'Segoe UI', sans-serif;
  font-size: clamp(2.5rem, 10vw, 7rem);
  font-weight: 600;
  color: #111;
  letter-spacing: 2px;
  margin-bottom: -0.5rem;
  margin-top: 0.25rem;
  text-shadow: 0 2px 16px rgba(0,0,0,0.08);
  text-align: left;
  width: 100%;
  max-width: 1200px;
  margin-left: 0;
  margin-right: auto;
  @media (max-width: 600px) {
    font-size: clamp(2rem, 12vw, 3rem);
    margin-bottom: 1rem;
  }
`;

const SUBTITLES = [
  'Design Systems.',
  'Figma Plugins.',
  'Design Engineer.',
  'Workflows & Automation.',
];
const SubtitleWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  text-align: left;
`;

const SubtitleList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Subtitle = styled.div`
  font-size: 3.5rem;
  font-family: 'Inter', 'Helvetica Neue', Arial, 'Liberation Sans', 'Apple Color Emoji', 'Segoe UI', sans-serif;
  color: #222;
  font-weight: 700;
  width: 100%;
  position: relative;
  left: 1rem;
  margin-top: -1.5rem;
  margin-bottom: -0.75rem;
  text-shadow: 0px 0px 8px #fff, 0px 0px 3px #fff;
  z-index: 1;
  opacity: 0.95;
  @media (max-width: 600px) {
    font-size: 2rem;
    left: 1rem;
    margin-top: -0.7rem;
    margin-bottom: 0.25rem;
  }
`;

const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  margin-left: 2rem;
  padding: 0.75em 2em;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #3D5E6B 0%, #6B879C 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(61,94,107,0.12);
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  position: relative;
  overflow: hidden;
  text-align: left;
  &:hover {
    color: #fff;
    transform: scale(1.07);
  box-shadow: 0 8px 32px rgba(61,94,107,0.32);
    background: linear-gradient(90deg, #2C3E50 0%, #3D5E6B 100%);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Section = styled.section`
`;

const WorkExperienceSection = styled.section`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: start;
  }
`;

const WorkExperienceInfo = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 1200px) {
    margin-bottom: 0;
    position: sticky;
    top: 2rem;
  }
`;

const WorkExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CompanyItem = styled.li`
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3D5E6B;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyHeader = styled.div`
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.25rem 0;
`;

const CompanyLocation = styled.span`
  color: #666;
  font-size: 0.95rem;
`;

const RolesList = styled.div`
  margin-top: 1rem;
`;

const Role = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RoleTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #3D5E6B;
  margin: 0 0 0.25rem 0;
`;

const RoleTimeframe = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-bottom: 0.75rem;
`;

const ResponsibilitiesList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImpactNote = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: #e8f4f8;
  border-radius: 4px;
  font-size: 0.95rem;
  color: #2c5530;
  
  strong {
    color: #1a3d1f;
  }
`;

function App() {
  const profileImageUrl = `${import.meta.env.BASE_URL}profile.png`;

  return (
    <PageWrapper>
      <GlobalStyle />
      <Hero profileImageUrl={profileImageUrl}>
        <Name>Eric Scott</Name>
        <SubtitleWrapper>
          <SubtitleList>
            {SUBTITLES.map((text, i) => {
              const colors = ["#3D5E6B", "#9CA5B1", "#877C73", "#44474D"];
              return (
                <Subtitle key={i} style={{ color: colors[i % colors.length] }}>{text}</Subtitle>
              );
            })}
          </SubtitleList>
        </SubtitleWrapper>
        <ResumeLink href="https://github.com/ericandrewscott/portfolio/blob/main/README.md" target="_blank" rel="noopener noreferrer">
          View Resume (Markdown)
        </ResumeLink>
      </Hero>
      <Container>
        <Section>
          <h2>Greetings, humans 🧔 and friendly robots 🤖!</h2>
          <p>
            I'm Eric, a UX/Design Engineer who has been happily lost at the intersection of design and code for 18+ years. <strong>My natural habitat?</strong> Design systems, frontend engineering, and workflow automation. <strong>Tools of choice:</strong> React, TypeScript, Node.js, GraphQL, and the occasional wizardry with Figma plugins.<br /><br />
            Recently, I've been diving deep into AI-driven design systems—building pipelines that can literally take a spec and spit out usable assets like TypeScript interfaces, CSS stylesheets, or even a Figma plugin that generates ready-to-go component sets. Think: spec → button, with no detours.<br /><br />
            In short, I'm a bridge-builder: part diplomat (designers &lt;-&gt; engineers), part mad scientist 🧪 (multi-brand ecosystems, semantic markup, build tooling). If it helps teams move faster and keeps frontends looking sharp, chances are I'm already hacking on it.
          </p>
        </Section>
        <Section>
          <h2>Skills</h2>
          <ul>
            <li>🛠️ <strong>Design tooling:</strong> Figma plugins, Code Connect, workflow automation, design tokens/variables</li>
            <li>👨‍💻 <strong>Frontend systems:</strong> React, CSS (esp. Styled Components), TypeScript, Node, GraphQL, Gatsby, React Native</li>
            <li>🔍 <strong>Prototyping & Research:</strong> Rapid prototyping, UX Labs using eye tracking & sentiment analysis</li>
            <li>⚙️ <strong>Workflow & Build Tools:</strong> pnpm, asdf, SASS/Less</li>
            <li>🤝 <strong>Collaboration:</strong> Design systems, Cross-functional tooling, Design-to-code workflows</li>
          </ul>
        </Section>
        <WorkExperienceSection>
          <WorkExperienceInfo>
            <h2>Work Experience</h2>
            <h3>Building bridges between design and engineering</h3>
          </WorkExperienceInfo>
          
          <WorkExperienceList>
            <CompanyItem>
              <CompanyHeader>
                <CompanyName>Expedia Group</CompanyName>
                <CompanyLocation>Austin, TX</CompanyLocation>
              </CompanyHeader>
              
              <RolesList>
                <Role>
                  <RoleTitle>Senior UX Engineer</RoleTitle>
                  <RoleTimeframe>Sep 2020 – Present</RoleTimeframe>
                  <ResponsibilitiesList>
                    <li>Contributed to scalable design system components</li>
                    <li>Implemented Directus CMS for content management</li>
                    <li>Built Figma plugins for workflow automation</li>
                    <li>Delivered Figma Code Connect integration</li>
                    <li>Defined universal component properties</li>
                    <li>Prototyped AI-powered tooling for design system specs</li>
                  </ResponsibilitiesList>
                  <ImpactNote>
                    <strong>Impact:</strong> Reduced design-to-development friction, accelerated workflows, enabled scalable multi-brand adoption.
                  </ImpactNote>
                </Role>
                
                <Role>
                  <RoleTitle>Design Technologist</RoleTitle>
                  <RoleTimeframe>May 2018 – Sep 2020</RoleTimeframe>
                  <ResponsibilitiesList>
                    <li>Prototyped concepts with Gatsby, React, React Native</li>
                    <li>Built UX Lab prototypes using eye tracking and sentiment analysis</li>
                    <li>Partnered with design teams to validate and refine flows</li>
                  </ResponsibilitiesList>
                </Role>
                
                <Role>
                  <RoleTitle>Frontend Developer</RoleTitle>
                  <RoleTimeframe>May 2012 – May 2018</RoleTimeframe>
                  <ResponsibilitiesList>
                    <li>Sole UI developer for BedandBreakfast.com</li>
                    <li>Modernized ASP.NET project with LESS, Backbone.js, Node.js</li>
                    <li>Aligned frontend strategies with Java + React ecosystem</li>
                    <li>Shared best practices with backend engineers</li>
                  </ResponsibilitiesList>
                </Role>
              </RolesList>
            </CompanyItem>
            
            <CompanyItem>
              <CompanyHeader>
                <CompanyName>Williams-Forrest</CompanyName>
                <CompanyLocation>Lancaster County, PA</CompanyLocation>
              </CompanyHeader>
              
              <RolesList>
                <Role>
                  <RoleTitle>Lead User Interface Developer</RoleTitle>
                  <RoleTimeframe>Jul 2009 – Jun 2012</RoleTimeframe>
                  <ResponsibilitiesList>
                    <li>Delivered frontend experiences for BMW, General Mills, Volvo, Appalachian Trail</li>
                    <li>Established internal frontend standards</li>
                  </ResponsibilitiesList>
                </Role>
              </RolesList>
            </CompanyItem>
            
            <CompanyItem>
              <CompanyHeader>
                <CompanyName>Weidenhammer Systems</CompanyName>
                <CompanyLocation>Lancaster County, PA</CompanyLocation>
              </CompanyHeader>
              
              <RolesList>
                <Role>
                  <RoleTitle>Web Developer</RoleTitle>
                  <RoleTimeframe>Jun 2006 – Jul 2009</RoleTimeframe>
                  <ResponsibilitiesList>
                    <li>Developed websites and digital experiences for clients across multiple industries</li>
                  </ResponsibilitiesList>
                </Role>
              </RolesList>
            </CompanyItem>
          </WorkExperienceList>
        </WorkExperienceSection>
      </Container>
    </PageWrapper>
  );
}

export default App
