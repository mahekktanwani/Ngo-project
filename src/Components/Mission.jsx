import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="overlay">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="title">Who we are?</h2>
            <p>
              Our NGO is a volunteer-based, zero-funds organization that works 
              to rescue, protect and provide care for abandoned, injured, and 
              endangered animals. We collaborate with shelters, vets, and 
              compassionate individuals to create a safe environment for animals 
              in need.
            </p>
            <p>
              Local chapters are run by friends and colleagues who want to 
              create a difference in their own unique way. Our volunteers 
              dedicate their free time to rescue operations, animal adoption 
              drives, and awareness campaigns. Together, we aim to give a 
              voice to the voiceless and protect wildlife as well as stray 
              animals.
            </p>
          </div>

          <div className="mission-stats">
            <div className="stat-card">
              <i className="fas fa-drumstick-bite"></i>
              <h3>+ 1,245,000</h3>
              <p>Animals Fed</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-paw"></i>
              <h3>+ 320</h3>
              <p>Cities Reached</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <h3>+ 12,800</h3>
              <p>Volunteers</p>
            </div>
          </div>
        </div>

        <div className="vision">
          <h2 className="title">Our Vision</h2>
          <p>
            A world where every animal is safe, loved, and free from cruelty. 
            We strive to build compassionate communities where humans and 
            animals coexist in harmony.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
