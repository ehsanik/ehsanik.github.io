import { useState } from 'react'
import kianaMain from '../assets/images/kiana_main.jpg'
import mtnBg from '../assets/images/mtn_bg.jpg'
import githubLogo from '../assets/icons/github_logo.png'
import xLogo from '../assets/icons/x_logo.png'
import gscholar from '../assets/icons/gscholar.png'
import emailLogo from '../assets/icons/email_logo.png'

const recentUpdates = [
  { emoji: '\u{1F3C6}', date: '2025.06.12', text: <><a href="https://arxiv.org/abs/2409.17146">Molmo</a> won best paper honorable mention at CVPR 2025.</> },
  { emoji: '\u{1F3A4}', date: '2025.06.11', text: <>Gave talks at two CVPR 2025 workshops: <a href="https://syndata4cv.github.io/">Synthetic Data for Computer Vision</a> and <a href="https://scene-understanding.com/">3D Scene Understanding</a>.</> },
  { emoji: '\u{1F3A4}', date: '2024.11.09', text: <>Gave a talk @ <a href="https://sites.google.com/view/xembodimentworkshop">Workshop on X-Embodiment Robot Learning</a> @ CoRL 2024.</> },
  { emoji: '\u{1F3C6}', date: '2024.11.07', text: <><a href="https://poliformer.allen.ai/">Poliformer</a> got the best paper award at CoRL 2024.</> },
  { emoji: '\u{1F3A4}', date: '2024.11.04', text: <>Gave a talk at <a href="https://symposium-tuda-2024.robot-learning.net/">TU Darmstadt, Next-Gen Robot Learning Symposium</a>.</> },
  { emoji: '\u{1F3A4}', date: '2024.10.18', text: <>Gave a talk at the robotics colloquium at University of Washington.</> },
  { emoji: '\u{1F3C6}', date: '2024.10.14', text: <><a href="https://rchalyang.github.io/HarmonicMM/">HarmonicMM</a> got the best paper award at IROS 2024.</> },
]

const olderUpdates = [
  { emoji: '\u{1F91D}', date: '2024.06.21', text: <>Hosted the panel <a href="https://youtu.be/ucELzD2YpC4">&quot;CVPR: Past, Present and Future&quot;</a> @ CVPR 2024. Quite fun and lots of challenging topics!</> },
  { emoji: '\u{1F4C4}', date: '2024.06.20', text: <>Presented two papers @ CVPR 2024, <a href="https://promptable-behaviors.github.io/">Promptable Behavior</a> and <a href="https://spoc-robot.github.io/">SPOC</a>.</> },
  { emoji: '\u{1F3C6}', date: '2024.05.30', text: <><a href="https://robotics-transformer-x.github.io/">RT-X</a> got the best paper award at ICRA 2024.</> },
  { emoji: '\u{1F91D}', date: '2024.01.01', text: <>AC @ CVPR 2024.</> },
  { emoji: '\u{1F3A4}', date: '2024.02.16', text: <>Gave a talk at University of Pittsburgh.</> },
  { emoji: '\u{1F3A4}', date: '2024.01.16', text: <>Visited Stanford and Berkeley and gave a talk at BAIR.</> },
  { emoji: '\u{1F4C4}', date: '2023.12.12', text: <><a href="https://objaverse.allenai.org/">Objaverse-XL</a> @ NeurIPS 2023.</> },
  { emoji: '\u{1F91D}', date: '2023.11.06', text: <>Co-organized the Workshop <a href="https://sites.google.com/view/corl23-task-workshop">&quot;What tasks should robotics researchers focus on?&quot;</a> @ CoRL 2023.</> },
  { emoji: '\u{1F4C4}', date: '2023.06.21', text: <><a href="https://sfa.cs.columbia.edu/">Structure From Action</a> @ IROS 2023.</> },
  { emoji: '\u{1F4C4}', date: '2023.06.21', text: <><a href="https://phone2proc.allenai.org/">Phone2Proc</a> and <a href="https://objaverse.allenai.org/">Objaverse</a> @ CVPR 2023.</> },
  { emoji: '\u{1F3A4}', date: '2023.06.18', text: <>Gave a talk @ <a href="https://struco3d.github.io/cvpr2023/">Structural and Compositional Learning on 3D Data</a> @ CVPR 2023.</> },
  { emoji: '\u{1F91D}', date: '2023.01.03', text: <>DEI co-chair @ <a href="https://wacv2023.thecvf.com/organizers">WACV 2023</a>.</> },
  { emoji: '\u{1F3A4}', date: '2022.12.15', text: <>Gave a talk @ <a href="https://gjstein.github.io/corl2022wkshp-long-horizon-planning/">Long Horizon Planning Workshop</a> @ CoRL 2022.</> },
  { emoji: '\u{1F91D}', date: '2022.12.15', text: <>Co-organized the workshop @ <a href="https://sites.google.com/view/corl22benchmarkingworkshop/home">Benchmarking in Robotic Manipulation</a> @ CoRL 2022.</> },
  { emoji: '\u{1F3C6}', date: '2022.11.22', text: <>Won outstanding paper for our work <a href="https://procthor.allenai.org/">ProcTHOR</a> @ NeurIPS 2022.</> },
  { emoji: '\u{1F3A4}', date: '2022.11.17', text: <>Gave a talk @ CMU.</> },
  { emoji: '\u{1F4C4}', date: '2022.10.24', text: <><a href="https://prior.allenai.org/projects/m-vole">Object Manipulation via Visual Target Localization</a> @ ECCV 2022.</> },
  { emoji: '\u{1F4C4}', date: '2022.06.23', text: <><a href="https://prior.allenai.org/projects/csr">Continuous Scene Representation</a> @ CVPR 2022.</> },
]

function Home() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${mtnBg})` }}>
        <div className="hero-content">
          <div className="hero-photo">
            <img src={kianaMain} alt="Kiana Ehsani" />
            <p className="hero-caption">** It is not hard to see that I am the worst with design or visual art! Bear with me :D</p>
          </div>
          <div className="hero-text">
            <h1>Kiana Ehsani</h1>
            <p>Cofounder <br /> <a href="https://vercept.com">Vercept</a></p>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="bio">
          <h1>Who am I?</h1>
          <p>
            I am building the future of Computer AI with my amazing team at <a href="https://vercept.com">Vercept</a>.
            Previously, I was a senior research scientist @ <a href="https://allenai.org/">Ai2</a> and got my Ph.D. from{' '}
            <a href="https://www.cs.washington.edu/">Paul G. Allen School of Computer Science</a> at{' '}
            <a href="https://www.washington.edu/">University of Washington</a> (<a href="https://raivn.cs.washington.edu/">RAIVN Lab</a>).
            My research interest is in the intersection of computer vision, machine learning, and robotics (aka. embodied AI).
          </p>
        </section>

        <hr className="section-divider" />

        <section>
          <h1>What&apos;s up?</h1>
          <div className="updates-section">
            {recentUpdates.map((u, i) => (
              <div className="update-item" key={`r${i}`}>
                <span className="update-emoji">{u.emoji}</span>
                <span className="update-date">{u.date}</span>
                <span className="update-text">{u.text}</span>
              </div>
            ))}
            {showMore && olderUpdates.map((u, i) => (
              <div className="update-item" key={`o${i}`}>
                <span className="update-emoji">{u.emoji}</span>
                <span className="update-date">{u.date}</span>
                <span className="update-text">{u.text}</span>
              </div>
            ))}
          </div>
          <div className="show-more-container">
            <button className="text-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'Show more updates'}
            </button>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <h2>Get in touch</h2>
          <div className="contact">
            <a href="https://github.com/ehsanik" aria-label="GitHub"><img src={githubLogo} alt="GitHub" /></a>
            <a href="https://twitter.com/ehsanik" aria-label="Twitter"><img src={xLogo} alt="Twitter" /></a>
            <a href="https://scholar.google.com/citations?user=RScZCLEAAAAJ&hl=en" aria-label="Google Scholar"><img src={gscholar} alt="Google Scholar" /></a>
            <a href="mailto:ehsanik@gmail.com" aria-label="Email"><img src={emailLogo} alt="Email" /></a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
