import { useState, useEffect, useRef } from 'react'
import './InternationalTravel.css'

const STORAGE_KEY = 'europe_trip_checklist_v1'

const initialSections = [
  { id: 'identity', name: 'Identity & money', items: [
    'Passport', 'Passport copies (printed & digital)', 'Visas (if required)', "Driver's license", 'International Driving Permit',
    'Credit card(s)', 'Debit/ATM card', 'Backup card (stored separately)', 'Local currency (cash)', 'Emergency hidden cash (€100–200)', 'Travel insurance documents', 'Student/teacher ID'
  ]},
  { id: 'electronics', name: 'Electronics', items: [
    'Universal power adapter (EU Type C/E/F)', 'Phone + charger', 'Laptop/tablet + charger (if needed)', 'Portable power bank', 'Headphones/earbuds',
    'SIM/eSIM or roaming plan', 'Camera (optional)', 'Extra memory card', 'Backup storage (USB/drive or cloud access)', 'E-reader + charger (optional)', 'AirTag/Tile for bags (optional)'
  ]},
  { id: 'toiletries', name: 'Toiletries & personal care', items: [
    'Toothbrush', 'Toothpaste', 'Floss', 'Deodorant', 'Shampoo', 'Conditioner', 'Soap/body wash', 'Face wash', 'Moisturizer', 'Sunscreen', 'Lip balm (SPF)',
    'Razor', 'Shaving cream/gel', 'Hairbrush/comb', 'Hair ties/clips', 'Feminine hygiene products', 'Nail clippers', 'Tweezers', 'Pain relief meds', 'Allergy meds',
    'Cold meds', 'Sleep aid (melatonin)', 'First-aid kit', 'Band-aids', 'Antiseptic wipes', 'Prescriptions (with copies)', 'Quick-dry travel towel'
  ]},
  { id: 'clothes', name: 'Clothes & footwear', items: [
    'Tops ×5', 'Bottoms ×3', 'Dress/jumpsuit or smart shirt', 'Mid-layers ×2 (sweater/fleece)', 'Outer layer (rain shell/trench)', 'Seasonal extras (coat/thermals or linen/sun hat)',
    'Underwear (7–10)', 'Socks (5–7)', 'Sleepwear', 'Swimwear', 'Workout/hike outfit', 'Walking shoes (broken-in)', 'Dressier shoes', 'Sandals/boots (seasonal)',
    'Scarf/shawl', 'Belt', 'Simple jewelry', 'Packing cubes/compression bags', 'Lint roller', 'Mini sewing kit/safety pins', 'Reusable tote', 'Spare outfit in carry-on'
  ]},
  { id: 'comfort', name: 'Comfort & convenience', items: [
    'Eye mask', 'Earplugs', 'Neck pillow', 'Snacks', 'Reusable utensils/spork', 'Journal + pen', 'Compact umbrella', 'Electrolyte packets', 'Hand sanitizer', 'Wipes',
    'Laundry kit (detergent sheets)', 'Sink stopper', 'Travel clothesline', 'Stain stick'
  ]},
  { id: 'security', name: 'Security', items: [
    'Crossbody/day bag with zippers', 'Luggage locks', 'RFID wallet/money belt', 'Document photocopies (stored separately)', 'Backup card stored separately', 'Trackers for bags (AirTag/Tile)'
  ]},
  { id: 'logistics', name: 'Logistics & reservations', items: [
    'Flight tickets/boarding passes', 'Train/rail passes & tickets', 'Hotel/Airbnb confirmations (address + contact)', 'Airport transfers booked', 'Lounge card/priority pass',
    'Public transport cards/apps', 'Car rental + insurance', 'Driving routes & toll info', 'Restaurant/attraction reservations', 'Emergency contacts (embassy/consulate)',
    'Offline maps (Google Maps/Citymapper)', 'Translation app (Google Translate/DeepL)', 'Guidebook/offline notes'
  ]},
  { id: 'preleave', name: 'Before leaving home', items: [
    'Set bill autopay', 'Out-of-office email', 'Hold mail arranged', 'Pet/house care arranged', 'Notify bank/credit cards', 'Cloud backup of documents',
    'Download tickets & maps offline', 'Check passport validity (6+ months)', 'Set roaming or buy eSIM', 'Check weather & adjust packing', 'Check baggage/liquids rules',
    'Obtain International Driving Permit (if needed)'
  ]},
]

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.warn('Could not save state', e)
  }
}

function ChecklistSection({ section, checked, collapsed, onToggleItem, onToggleCollapse, onToggleAll, filter }) {
  const total = section.items.length
  const done = section.items.filter(item => checked[`${section.id}|${item}`]).length
  const isOpen = !collapsed[section.id]

  return (
    <section className="card" data-id={section.id}>
      <details open={isOpen} onToggle={(e) => onToggleCollapse(section.id, !e.target.open)}>
        <summary style={{ listStyle: 'none' }}>
          <div>
            <div className="h2">
              <span>{section.name}</span>
              <span className="count">{done}/{total}</span>
            </div>
            <div className="sec-controls">
              <button onClick={(e) => { e.preventDefault(); onToggleAll(section.id, true) }}>Check all</button>
              <button onClick={(e) => { e.preventDefault(); onToggleAll(section.id, false) }}>Uncheck</button>
            </div>
          </div>
        </summary>
        <div className="list">
          {section.items.map((item) => {
            const key = `${section.id}|${item}`
            const visible = !filter || item.toLowerCase().includes(filter)
            return (
              <label
                key={key}
                className="item"
                style={{ display: visible ? '' : 'none' }}
                data-txt={item.toLowerCase()}
              >
                <input
                  type="checkbox"
                  checked={!!checked[key]}
                  onChange={() => onToggleItem(key)}
                />
                <div className="txt">{item}</div>
              </label>
            )
          })}
        </div>
      </details>
    </section>
  )
}

function InternationalTravel() {
  const [state, setState] = useState(loadState)
  const [filter, setFilter] = useState('')
  const dialogRef = useRef(null)
  const addTextRef = useRef(null)
  const addSectionRef = useRef(null)
  const [sections, setSections] = useState(initialSections)

  const checked = state.checked || {}
  const collapsed = state.collapsed || {}

  useEffect(() => {
    saveState(state)
  }, [state])

  const updateChecked = (newChecked) => {
    setState(prev => ({ ...prev, checked: newChecked }))
  }

  const updateCollapsed = (newCollapsed) => {
    setState(prev => ({ ...prev, collapsed: newCollapsed }))
  }

  const handleToggleItem = (key) => {
    const newChecked = { ...checked }
    if (newChecked[key]) {
      delete newChecked[key]
    } else {
      newChecked[key] = true
    }
    updateChecked(newChecked)
  }

  const handleToggleAll = (sectionId, value) => {
    const section = sections.find(s => s.id === sectionId)
    const newChecked = { ...checked }
    section.items.forEach(item => {
      const key = `${sectionId}|${item}`
      if (value) {
        newChecked[key] = true
      } else {
        delete newChecked[key]
      }
    })
    updateChecked(newChecked)
  }

  const handleToggleCollapse = (sectionId, isCollapsed) => {
    updateCollapsed({ ...collapsed, [sectionId]: isCollapsed })
  }

  const handleReset = () => {
    if (confirm('Uncheck all items?')) {
      updateChecked({})
    }
  }

  const handleExpandAll = () => {
    const newCollapsed = {}
    sections.forEach(s => { newCollapsed[s.id] = false })
    updateCollapsed(newCollapsed)
    document.querySelectorAll('details').forEach(d => { d.open = true })
  }

  const handleCollapseAll = () => {
    const newCollapsed = {}
    sections.forEach(s => { newCollapsed[s.id] = true })
    updateCollapsed(newCollapsed)
    document.querySelectorAll('details').forEach(d => { d.open = false })
  }

  const handleAddItem = (e) => {
    e.preventDefault()
    const text = addTextRef.current.value.trim()
    const secId = addSectionRef.current.value
    if (!text) return
    setSections(prev => prev.map(s =>
      s.id === secId ? { ...s, items: [...s.items, text] } : s
    ))
    dialogRef.current.close()
  }

  const filterLower = filter.trim().toLowerCase()

  return (
    <div className="travel-checklist">
      <div className="container">
        <header>
          <div className="title" aria-label="Europe Trip Checklist">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Europe trip checklist
          </div>
          <div className="search" role="search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              placeholder="Filter items… (e.g., passport, adapter)"
              autoComplete="off"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="controls" role="group" aria-label="global controls">
            <button className="primary" onClick={() => window.print()}>Print</button>
            <button onClick={handleExpandAll}>Expand all</button>
            <button onClick={handleCollapseAll}>Collapse all</button>
            <button className="danger" onClick={handleReset}>Reset</button>
            <button onClick={() => { dialogRef.current.showModal(); setTimeout(() => addTextRef.current?.focus(), 50) }}>Add custom item</button>
          </div>
        </header>

        <div className="grid">
          {sections.map(section => (
            <ChecklistSection
              key={section.id}
              section={section}
              checked={checked}
              collapsed={collapsed}
              onToggleItem={handleToggleItem}
              onToggleCollapse={handleToggleCollapse}
              onToggleAll={handleToggleAll}
              filter={filterLower}
            />
          ))}
        </div>

        <div className="footer">
          <span className="stamp">Changes are saved automatically.</span>
        </div>
      </div>

      <dialog ref={dialogRef}>
        <div className="modal">
          <header>
            <div className="title" style={{ fontSize: '18px' }}>Add a custom item</div>
          </header>
          <div className="body">
            <form className="add-form" onSubmit={handleAddItem}>
              <input ref={addTextRef} required placeholder="e.g., City museum pass" />
              <select ref={addSectionRef}>
                {sections.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <button className="primary" type="submit">Add</button>
              <button type="button" onClick={() => dialogRef.current.close()}>Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default InternationalTravel
