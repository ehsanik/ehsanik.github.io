import papers from '../data/papers'

function Paper({ paper }) {
  return (
    <div className="paper">
      <img className="teaser" src={paper.image} alt={paper.title} />
      <div className="paper-details">
        <h3>{paper.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: `${paper.authors} &bull; ${paper.venue} &bull; ${paper.year}` }} />
        {paper.award && <p>{'🎉'} {paper.award}</p>}
        <p>
          {paper.links.map((link, i) => (
            <span key={i}>
              (<a href={link.url}>{link.label}</a>){' '}
            </span>
          ))}
        </p>
        <p>{paper.description}</p>
      </div>
    </div>
  )
}

function SelectedWorks() {
  return (
    <div className="container">
      <p>
        See? I told you don&apos;t count on it! I have stopped updating this page all together!
        Probably mainly because I have stopped publishing and I&apos;m doing cool product stuff instead.
        Am I gonna ever go back to it? Maybe! But right now, it&apos;s time to build!
      </p>
      <p>
        <s>Ugh! I stopped stopping to update this page because I got the feedback that it&apos;s not a good idea!
        I might stop stopping to stop! So don&apos;t count on it!</s>
      </p>
      <p>
        <s>I have stopped updating this page because it&apos;s too much work and I have been lazy with updating
        my resume and web pages lately! [Also aren&apos;t we passed the point of manually editing this stuff and AI
        should just take care of it without us asking? UGH!] But guess what? I have been busy with doing actual
        cool work instead! Checkout my twitter (or X or whatever!) for more updates!</s>
      </p>

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
