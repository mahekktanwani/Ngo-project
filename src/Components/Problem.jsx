import React from "react";
import "./Problem.css";

const Problem = () => {
  const problems = [
    {
      img: "https://thumbs.dreamstime.com/b/stormy-sea-dog-shore-experiencing-hurricane-downpour-illustrates-challenges-animals-face-natural-disasters-388173895.jpg",
      text: "Every year, millions suffer from hunger",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrh6muxNm7tAqiCSsONja9Y3Qhs5PUcmGosg&s",
      text: "Animals are losing their habitats to deforestation",
    },
    {
      img: "https://hastingsvet.com/wp-content/uploads/2022/03/Hastings-Veterinary-Hospital-6-Common-Dog-Health-Problems-Prevention-Tips-and-Why-to-Prevent.jpg",
      text: "Education is the most powerful weapon to change the world",
    },
    {
      img: "https://th-thumbnailer.cdn-si-edu.com/2v8wHQFQfU03gmzeYd2Pb5aQMKs=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a5/a5/a5a5cfff-a4e7-454f-bae2-cfc6c1fed66a/19991130_jab_cs9_163.jpg",
      text: "Nonveg consumption harms animals and the planet",
    },
    {
      img: "https://user-image.kinnu.xyz/75512312-cf2e-4cec-9664-9db19593ff10?s=0x0x100x100&w=1000",
      text: "Animals are often subjected to cruelty and neglect",
    },
    {
      img: "https://www.17goalsmagazin.de/content/images/2021/02/41-1.jpg",
      text: "Together, we can make a difference",
    },
    {
      img: "https://media.4-paws.org/3/8/c/7/38c7accd87d0d2a743b0e60360208712be0a420d/VIER%20PFOTEN_2015-12-15_157-3854x2667-1920x1329.jpg",
      text: "cows are highly intelligent and social animals",
    },
    {
      img: "https://genv.org/wp-content/uploads/2022/03/dog-g2b94508b6_1920-1800x1199.jpg",
      text: "they are poor nd thursty",
    },
    {
      img: "https://media.4-paws.org/6/8/9/3/689354d6694789b45569cd647a6009e240b4afe7/VIER%20PFOTEN_2016-09-18_081-1927x1333-1920x1328.jpg",
      text: "look at them with love",
    },
    {
      img: "https://www.globalgiving.org/pfil/21618/pict_large.jpg",
      text: "they need our help",
    },
  ];

  return (
    <section id="problem" className="problem-section">
      <h2 className="problem-title">The Problem</h2>
      <p className="problem-subtitle">
        The challenge is not a lack of care — it is making compassion and safety consistently available to every being who needs it.
      </p>
      <div className="problem-grid">
        {problems.map((problem, index) => (
          <div key={index} className="problem-card">
            <img src={problem.img} alt="problem" className="problem-img" />
            <p className="problem-text">{problem.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
