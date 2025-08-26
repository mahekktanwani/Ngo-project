import React from 'react'
import './Help.css'

function Help() {
  return (
    <div className="help-container">
      <div className="help-card">
        <h1>How Can You Help</h1>
        <p>
          You can help by donating money, food, clothes, or even by volunteering.
        </p>

        <h3>Volunteering</h3>
        <p>
          All we need is <b>3 hours/week</b> at least twice a month to make a real
          impact. If we have a team in your city looking to grow, a Robin will reach
          out to you.
        </p>

        <h3>Contribute Food</h3>
        <p>
          If you manage a restaurant or want to contribute regular meals from your
          family or workplace, let’s connect.
        </p>

        <h3>Medico Provide</h3>
        <p>
          We are always looking for medical supplies, pet food, and other items to
          help us care for the animals we rescue. If you have any of these items to
          donate, please let us know.
        </p>

        {/* ✅ Proper button-styled link */}
        <a className="donate-btn" href="/Donation">
          Donate Now
        </a>
      </div>
    </div>
  )
}

export default Help
