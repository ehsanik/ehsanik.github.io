import img1 from '../assets/mountains/86216915b31a35c36cfd1d4f7bbb188d.jpg'
import img2 from '../assets/mountains/8b501046ce6f96d18151aa078227f189.jpg'
import img3 from '../assets/mountains/52c4c261eb65c6472c6d39864d09170e.jpg'
import img4 from '../assets/mountains/f1ad02478762ca732236f4437a36d842.jpg'
import img5 from '../assets/mountains/8e947c235293d09715ff7cca313f138c.jpg'
import img6 from '../assets/mountains/247220534885288aa453b3016101168a.jpg'
import img7 from '../assets/mountains/b18bca928d2ed482603b45e95b0b73ef.jpg'
import img8 from '../assets/mountains/6c135c00b370323d32fa3a183abfcee9.jpg'
import img9 from '../assets/mountains/5f4982a1af7fbf38de4aff74f6fecdde.jpg'
import img10 from '../assets/mountains/80cbe5c6fcc61e540f24a3255408cd60.jpg'
import img11 from '../assets/mountains/93677953cd347771f8be993472895947.jpg'
import img12 from '../assets/mountains/c3175b9f1410f01f9f5338485b1be6c9.jpg'

const photos = [
  { src: img1, caption: 'Red Rocks' },
  { src: img2, caption: 'Kazakhstan' },
  { src: img3, caption: 'Kyrgyzstan' },
  { src: img4, caption: 'Tajikstan' },
  { src: img5, caption: 'Paradise Glacier' },
  { src: img6, caption: 'Observation Rock (Ice Climbing)' },
  { src: img7, caption: 'SEWS (South Arrette)' },
  { src: img8, caption: 'Ruth Mountain' },
  { src: img9, caption: 'Rainbow Mountain (Peru)' },
  { src: img10, caption: 'Mount Bachelor' },
  { src: img11, caption: "Wayne's World (Dry tooling crag)" },
  { src: img12, caption: 'Mount Baker' },
]

function Mountains() {
  return (
    <div className="container">
      <div className="mtn-checklist-row">
        <p>I recently made myself a checklist generator for outdoor adventures.</p>
        <a className="btn" href="https://ehsanik.github.io/mountain-projects/">
          Use it for your adventures!
        </a>
      </div>

      <hr className="section-divider" />

      <h2>Some Random Memories</h2>
      <div className="photo-grid">
        {photos.map((photo, i) => (
          <div className="photo-card" key={i}>
            <img src={photo.src} alt={photo.caption} />
            <div className="photo-caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      <hr className="section-divider" />

      <h2>Some Travel Reports</h2>
      <p style={{ textAlign: 'center' }}>
        <a className="btn-outline" href="https://ehsanik.github.io/kiana-travels">Kiana Travels</a>
      </p>
    </div>
  )
}

export default Mountains
