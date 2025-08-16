import Text from './Text';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import ContactPage from './Contactpage';
import MessageInbox from './Messageinbox';
import EducationandExperience from './EducationandExperience';
import Projectdisplay from './Projectdisplay';

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container-lg py-5" style={{ marginTop: "-5px" }}>
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="w-100">
                <Text />
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="w-100" style={{ padding: '-10px', marginTop: '-30px' }}>
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills"><Skills /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><ContactPage /></section>
      <section id="messagebox"><MessageInbox /></section>
      <section id="about"><EducationandExperience /></section>
      <section id="projectdisplay"><Projectdisplay /></section>
    </>
  );
};

export default Home;
