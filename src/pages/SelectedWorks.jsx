import papers from '../data/papers'

function Paper({ paper }) {
  return (
    <div className="paper">
      <img className="teaser" src={paper.image} alt={paper.title} />
      <div className="paper-details">
        <h3>{paper.title}</h3>
        <p className="paper-authors" dangerouslySetInnerHTML={{ __html: `${paper.authors} &middot; ${paper.venue} &middot; ${paper.year}` }} />
        {paper.award && <div className="paper-award">{'🎉'} {paper.award}</div>}
        <div className="paper-links">
          {paper.links.map((link, i) => (
            <a key={i} href={link.url}>{link.label}</a>
          ))}
        </div>
        <p className="paper-desc">{paper.description}</p>
      </div>
    </div>
  )
}

function SelectedWorks() {
  return (
    <div className="container">
      <p className="works-intro">
        See? I told you don&apos;t count on it! I have stopped updating this page all together!
        Probably mainly because I have stopped publishing and I&apos;m doing cool product stuff instead.
        Am I gonna ever go back to it? Maybe! But right now, it&apos;s time to build!
      </p>
      <p className="works-intro">
        <s>Ugh! I stopped stopping to update this page because I got the feedback that it&apos;s not a good idea!
        I might stop stopping to stop! So don&apos;t count on it!</s>
      </p>
      <p className="works-intro">
        <s>I have stopped updating this page because it&apos;s too much work and I have been lazy with updating
        my resume and web pages lately! [Also aren&apos;t we passed the point of manually editing this stuff and AI
        should just take care of it without us asking? UGH!] But guess what? I have been busy with doing actual
        cool work instead! Checkout my twitter (or X or whatever!) for more updates!</s>
      </p>

      <hr className="section-divider" />

      <h2>Selected Works</h2>
      <div className="papers-container">
        {papers.map((paper, i) => (
          <Paper key={i} paper={paper} />
        ))}
      </div>
    </div>
  )
}

export default SelectedWorks
