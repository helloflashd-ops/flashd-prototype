import { useState } from 'react';

// ─── DATA ───────────────────────────────────────────────
const flashData = [
  {
    id: 1,
    artistId: 1,
    artist: 'Maya Chen',
    city: 'New York',
    style: 'Fine line',
    price: 180,
    size: 'sm',
    available: true,
    design: 'Serpent',
    motif: '🐍',
  },
  {
    id: 2,
    artistId: 2,
    artist: 'Dario Reyes',
    city: 'Los Angeles',
    style: 'Traditional',
    price: 250,
    size: 'lg',
    available: true,
    design: 'Red Rose',
    motif: '🌹',
  },
  {
    id: 3,
    artistId: 3,
    artist: 'Sable North',
    city: 'Chicago',
    style: 'Blackwork',
    price: 320,
    size: 'lg',
    available: false,
    design: 'Death Moth',
    motif: '🦋',
  },
  {
    id: 4,
    artistId: 4,
    artist: 'Lena Park',
    city: 'Miami',
    style: 'Watercolor',
    price: 200,
    size: 'md',
    available: true,
    design: 'Koi',
    motif: '🐟',
  },
  {
    id: 5,
    artistId: 2,
    artist: 'Dario Reyes',
    city: 'Los Angeles',
    style: 'Traditional',
    price: 150,
    size: 'sm',
    available: true,
    design: 'Dagger',
    motif: '🗡️',
  },
  {
    id: 6,
    artistId: 1,
    artist: 'Maya Chen',
    city: 'New York',
    style: 'Fine line',
    price: 280,
    size: 'md',
    available: true,
    design: 'All-Seeing Eye',
    motif: '👁',
  },
  {
    id: 7,
    artistId: 4,
    artist: 'Lena Park',
    city: 'Miami',
    style: 'Watercolor',
    price: 220,
    size: 'md',
    available: true,
    design: 'Butterfly',
    motif: '🦋',
  },
  {
    id: 8,
    artistId: 3,
    artist: 'Sable North',
    city: 'Chicago',
    style: 'Blackwork',
    price: 190,
    size: 'sm',
    available: false,
    design: 'Wolf',
    motif: '🐺',
  },
  {
    id: 9,
    artistId: 1,
    artist: 'Maya Chen',
    city: 'New York',
    style: 'Fine line',
    price: 300,
    size: 'lg',
    available: true,
    design: 'Black Panther',
    motif: '🐆',
  },
  {
    id: 10,
    artistId: 2,
    artist: 'Dario Reyes',
    city: 'Los Angeles',
    style: 'Traditional',
    price: 160,
    size: 'sm',
    available: true,
    design: 'Crescent Moon',
    motif: '🌙',
  },
  {
    id: 11,
    artistId: 3,
    artist: 'Sable North',
    city: 'Chicago',
    style: 'Blackwork',
    price: 240,
    size: 'md',
    available: true,
    design: 'Memento Mori',
    motif: '💀',
  },
  {
    id: 12,
    artistId: 4,
    artist: 'Lena Park',
    city: 'Miami',
    style: 'Watercolor',
    price: 350,
    size: 'lg',
    available: true,
    design: 'Phoenix',
    motif: '🔥',
  },
];

const artists = {
  1: {
    id: 1,
    name: 'Maya Chen',
    handle: 'mayaink',
    homeBase: 'Brooklyn, NY',
    bio: 'Fine line and delicate blackwork. I specialize in botanical motifs, celestial designs, and custom script. Based in Brooklyn — walk-ins welcome on Fridays.',
    styles: ['Fine line', 'Blackwork', 'Botanical'],
    instagram: 'mayaink',
    nextAvailable: 'Jan 14, 2025',
    startingPrice: 150,
    avatar: '🧑‍🎨',
    totalDesigns: 12,
    completedTattoos: 148,
    guestSpots: [
      {
        city: 'Los Angeles, CA',
        studio: 'Ink & Anchor',
        dateFrom: 'Jan 20',
        dateTo: 'Jan 22',
        spotsLeft: 3,
      },
      {
        city: 'Chicago, IL',
        studio: 'North Side Tattoo',
        dateFrom: 'Feb 3',
        dateTo: 'Feb 5',
        spotsLeft: 1,
      },
    ],
  },
  2: {
    id: 2,
    name: 'Dario Reyes',
    handle: 'darioreyes',
    homeBase: 'Los Angeles, CA',
    bio: 'Traditional American tattoos with bold lines and vibrant color. Specializing in roses, daggers, and classic Americana.',
    styles: ['Traditional', 'American'],
    instagram: 'darioreyes',
    nextAvailable: 'Jan 18, 2025',
    startingPrice: 120,
    avatar: '🎨',
    totalDesigns: 8,
    completedTattoos: 203,
    guestSpots: [
      {
        city: 'Miami, FL',
        studio: 'Collins Ave Studio',
        dateFrom: 'Feb 10',
        dateTo: 'Feb 12',
        spotsLeft: 4,
      },
    ],
  },
  3: {
    id: 3,
    name: 'Sable North',
    handle: 'sablenorth',
    homeBase: 'Chicago, IL',
    bio: 'Dark, intricate blackwork. Moths, geometry, and the macabre. Not taking walk-ins — bookings only.',
    styles: ['Blackwork', 'Geometric', 'Dark art'],
    instagram: 'sablenorth',
    nextAvailable: 'Feb 1, 2025',
    startingPrice: 180,
    avatar: '🖤',
    totalDesigns: 15,
    completedTattoos: 91,
    guestSpots: [],
  },
  4: {
    id: 4,
    name: 'Lena Park',
    handle: 'lenapark',
    homeBase: 'Miami, FL',
    bio: 'Loose, painterly watercolor tattoos. I love koi, botanicals, and anything with movement. Every piece is one of a kind.',
    styles: ['Watercolor', 'Botanical'],
    instagram: 'lenapark',
    nextAvailable: 'Jan 22, 2025',
    startingPrice: 160,
    avatar: '🌸',
    totalDesigns: 10,
    completedTattoos: 117,
    guestSpots: [
      {
        city: 'New York, NY',
        studio: 'LES Tattoo Co.',
        dateFrom: 'Mar 5',
        dateTo: 'Mar 7',
        spotsLeft: 2,
      },
    ],
  },
};

// ─── SHARED STYLES ───────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  button { font-family: inherit; cursor: pointer; }
  input, textarea, select { font-family: inherit; }
  input:focus, textarea:focus, select:focus { border-color: #1a1a1a !important; outline: none; }
  select { appearance: none; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes popUp { from{opacity:0;transform:scale(0.94) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
  @keyframes spin { to{transform:rotate(360deg)} }
  @keyframes pop { from{opacity:0;transform:scale(0.93)} to{opacity:1;transform:scale(1)} }
`;

const inp = {
  width: '100%',
  background: '#fafafa',
  border: '1.5px solid #ebebeb',
  borderRadius: 10,
  padding: '11px 14px',
  fontSize: 14,
  color: '#1a1a1a',
  outline: 'none',
};
const lbl = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: '#666',
  marginBottom: 6,
};

// ─── NAV ─────────────────────────────────────────────────
function Nav({ page, onNavigate, backLabel }) {
  return (
    <header
      style={{
        background: '#fff',
        borderBottom: '1px solid #efefef',
        padding: '0 24px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        onClick={() => onNavigate('browse')}
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-0.02em',
          cursor: 'pointer',
        }}
      >
        flashd
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {backLabel && (
          <button
            onClick={() => onNavigate(-1)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 13,
              color: '#aaa',
              fontWeight: 500,
            }}
          >
            ← {backLabel}
          </button>
        )}
        {page !== 'signup' && (
          <button
            onClick={() => onNavigate('signup')}
            style={{
              background: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '8px 18px',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            List Your Flash
          </button>
        )}
        <button
          onClick={() => onNavigate('dashboard')}
          style={{
            background: 'transparent',
            color: '#1a1a1a',
            border: '1.5px solid #e0e0e0',
            borderRadius: 100,
            padding: '7px 16px',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Artist Login
        </button>
        <button
          onClick={() => onNavigate('client-login')}
          style={{
            background: '#f5f5f5',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: 100,
            padding: '7px 16px',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

// ─── BROWSE PAGE ─────────────────────────────────────────
function BrowsePage({ onNavigate }) {
  const [city, setCity] = useState('All');
  const [style, setStyle] = useState('All');
  const [avail, setAvail] = useState(false);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const cities = ['All', 'New York', 'Los Angeles', 'Chicago', 'Miami'];
  const styles = ['All', 'Traditional', 'Fine line', 'Blackwork', 'Watercolor'];

  const suggestions =
    query.trim().length < 1
      ? []
      : (() => {
          const q = query.toLowerCase();
          const results = [];
          const seen = new Set();
          flashData.forEach((f) => {
            if (f.design.toLowerCase().includes(q) && !seen.has('d' + f.id)) {
              results.push({
                type: 'design',
                label: f.design,
                sub: `${f.style} · ${f.artist}`,
                motif: f.motif,
                item: f,
              });
              seen.add('d' + f.id);
            }
          });
          Object.values(artists).forEach((a) => {
            if (
              (a.name.toLowerCase().includes(q) ||
                a.handle.toLowerCase().includes(q)) &&
              !seen.has('a' + a.id)
            ) {
              results.push({
                type: 'artist',
                label: a.name,
                sub: `Artist · ${a.homeBase}`,
                motif: a.avatar,
                artistId: a.id,
              });
              seen.add('a' + a.id);
            }
          });
          ['Traditional', 'Fine line', 'Blackwork', 'Watercolor'].forEach(
            (s) => {
              if (s.toLowerCase().includes(q) && !seen.has('s' + s)) {
                results.push({
                  type: 'style',
                  label: s,
                  sub: 'Browse by style',
                  motif: '🎨',
                });
                seen.add('s' + s);
              }
            }
          );
          ['New York', 'Los Angeles', 'Chicago', 'Miami'].forEach((c) => {
            if (c.toLowerCase().includes(q) && !seen.has('c' + c)) {
              results.push({
                type: 'city',
                label: c,
                sub: 'Browse by city',
                motif: '📍',
              });
              seen.add('c' + c);
            }
          });
          return results.slice(0, 7);
        })();

  const handleSelect = (s) => {
    setQuery('');
    setShowSuggestions(false);
    setActiveIdx(-1);
    if (s.type === 'design') setSelected(s.item);
    else if (s.type === 'artist')
      onNavigate('artist', { artistId: s.artistId });
    else if (s.type === 'style') setStyle(s.label);
    else if (s.type === 'city') setCity(s.label);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0)
      handleSelect(suggestions[activeIdx]);
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveIdx(-1);
    }
  };

  const typeColors = {
    design: '#f0f8ff',
    artist: '#f5f0ff',
    style: '#fff8f0',
    city: '#f0fff4',
  };
  const typeLabels = {
    design: 'Design',
    artist: 'Artist',
    style: 'Style',
    city: 'City',
  };

  const filtered = flashData.filter((f) => {
    if (city !== 'All' && f.city !== city) return false;
    if (style !== 'All' && f.style !== style) return false;
    if (avail && !f.available) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      return (
        f.design.toLowerCase().includes(q) ||
        f.artist.toLowerCase().includes(q) ||
        f.style.toLowerCase().includes(q) ||
        f.city.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const Pill = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: active ? '#1a1a1a' : '#f5f5f5',
        color: active ? '#fff' : '#555',
        border: 'none',
        borderRadius: 100,
        padding: '7px 15px',
        fontSize: 13,
        fontWeight: 500,
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Nav page="browse" onNavigate={onNavigate} />

      {/* Hero */}
      <div
        style={{
          background: '#fff',
          padding: '40px 24px 32px',
          borderBottom: '1px solid #efefef',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(28px,5vw,48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#1a1a1a',
            letterSpacing: '-0.03em',
            marginBottom: 10,
          }}
        >
          Find your next
          <br />
          <span style={{ color: '#aaa', fontWeight: 400, fontStyle: 'italic' }}>
            flash tattoo.
          </span>
        </h1>
        <p
          style={{
            fontSize: 14,
            color: '#999',
            lineHeight: 1.6,
            maxWidth: 380,
            marginBottom: 20,
          }}
        >
          Browse original flash from independent artists. Filter, discover,
          book.
        </p>

        {/* Search bar */}
        <div
          style={{ position: 'relative', maxWidth: 480 }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setShowSuggestions(false);
              setActiveIdx(-1);
            }
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 16,
                color: '#bbb',
                pointerEvents: 'none',
              }}
            >
              🔍
            </div>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
                setActiveIdx(-1);
              }}
              onFocus={() => {
                if (query.trim()) setShowSuggestions(true);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search designs, artists, styles, cities..."
              style={{
                width: '100%',
                background: '#f5f5f5',
                border: '1.5px solid transparent',
                borderRadius: 12,
                padding: '12px 14px 12px 42px',
                fontSize: 14,
                color: '#1a1a1a',
                outline: 'none',
                transition: 'all 0.15s',
                boxShadow:
                  showSuggestions && suggestions.length > 0
                    ? '0 2px 20px rgba(0,0,0,0.08)'
                    : 'none',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#f0f0f0')}
              onMouseLeave={(e) => {
                if (document.activeElement !== e.target)
                  e.target.style.background = '#f5f5f5';
              }}
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setShowSuggestions(false);
                }}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#ddd',
                  border: 'none',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  fontSize: 11,
                  color: '#888',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                right: 0,
                background: '#fff',
                borderRadius: 14,
                boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
                border: '1px solid #f0f0f0',
                overflow: 'hidden',
                zIndex: 50,
                animation: 'fadeUp 0.15s ease',
              }}
            >
              {suggestions.map((s, i) => (
                <div
                  key={i}
                  tabIndex={0}
                  onMouseDown={() => handleSelect(s)}
                  onMouseEnter={() => setActiveIdx(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '11px 14px',
                    background: activeIdx === i ? '#f8f8f8' : '#fff',
                    cursor: 'pointer',
                    borderBottom:
                      i < suggestions.length - 1 ? '1px solid #f8f8f8' : 'none',
                    transition: 'background 0.1s',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: typeColors[s.type],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {s.motif}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>{s.sub}</div>
                  </div>
                  <div
                    style={{
                      background: '#f5f5f5',
                      borderRadius: 100,
                      padding: '3px 9px',
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#888',
                      flexShrink: 0,
                    }}
                  >
                    {typeLabels[s.type]}
                  </div>
                </div>
              ))}
              <div
                style={{
                  padding: '9px 14px',
                  background: '#fafafa',
                  borderTop: '1px solid #f0f0f0',
                }}
              >
                <span style={{ fontSize: 12, color: '#bbb' }}>
                  ↑↓ navigate · Enter to select · Esc to close
                </span>
              </div>
            </div>
          )}

          {/* No results */}
          {showSuggestions &&
            query.trim().length > 0 &&
            suggestions.length === 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  borderRadius: 14,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  padding: '20px 16px',
                  textAlign: 'center',
                  zIndex: 50,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>🔍</div>
                <div style={{ fontSize: 13, color: '#aaa' }}>
                  No results for "
                  <strong style={{ color: '#888' }}>{query}</strong>"
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Filters */}
      <div
        style={{
          background: '#fff',
          padding: '14px 24px',
          borderBottom: '1px solid #efefef',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          position: 'sticky',
          top: 56,
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: '#ccc',
              fontWeight: 600,
              marginRight: 2,
            }}
          >
            CITY
          </span>
          {cities.map((c) => (
            <Pill
              key={c}
              label={c}
              active={city === c}
              onClick={() => setCity(c)}
            />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: '#ccc',
              fontWeight: 600,
              marginRight: 2,
            }}
          >
            STYLE
          </span>
          {styles.map((s) => (
            <Pill
              key={s}
              label={s}
              active={style === s}
              onClick={() => setStyle(s)}
            />
          ))}
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: avail ? '#1a1a1a' : '#bbb',
                fontWeight: 500,
              }}
            >
              Available only
            </span>
            <div
              onClick={() => setAvail(!avail)}
              style={{
                width: 38,
                height: 21,
                borderRadius: 100,
                background: avail ? '#1a1a1a' : '#e0e0e0',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 2.5,
                  left: avail ? 18 : 2.5,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{ padding: '28px 24px 60px', maxWidth: 1100, margin: '0 auto' }}
      >
        <div style={{ fontSize: 13, color: '#bbb', marginBottom: 16 }}>
          {filtered.length} designs
        </div>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 0',
              fontSize: 15,
              color: '#ccc',
            }}
          >
            No designs match your filters.
          </div>
        ) : (
          <div
            style={{
              columns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {filtered.map((item, i) => (
              <FlashCard
                key={item.id}
                item={item}
                index={i}
                onClick={setSelected}
                onArtistClick={(artistId) => onNavigate('artist', { artistId })}
              />
            ))}
          </div>
        )}
      </div>

      <footer
        style={{
          borderTop: '1px solid #efefef',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fff',
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>
          flashd
        </div>
        <div style={{ fontSize: 12, color: '#ccc' }}>
          © 2025 Flashd · getflashd.com
        </div>
        <div
          onClick={() => onNavigate('signup')}
          style={{
            fontSize: 13,
            color: '#1a1a1a',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Are you an artist? →
        </div>
      </footer>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 20,
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.15s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 20,
              maxWidth: 380,
              width: '100%',
              overflow: 'hidden',
              animation: 'popUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
            }}
          >
            <div
              style={{
                height: 220,
                background: 'linear-gradient(145deg,#f8f8f8,#f0f0f0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 88,
              }}
            >
              {selected.motif}
            </div>
            <div style={{ padding: '22px 24px 28px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <div
                  style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a' }}
                >
                  {selected.design}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>
                  ${selected.price}
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#999', marginBottom: 16 }}>
                {selected.artist} · {selected.city}
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                {[selected.style, selected.city].map((t) => (
                  <span
                    key={t}
                    style={{
                      background: '#f5f5f5',
                      borderRadius: 100,
                      padding: '4px 11px',
                      fontSize: 12,
                      color: '#666',
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelected(null);
                  onNavigate('booking', { design: selected });
                }}
                style={{
                  width: '100%',
                  background: '#1a1a1a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  padding: '13px',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Book This Flash
              </button>
              <button
                onClick={() => {
                  setSelected(null);
                  onNavigate('artist', { artistId: selected.artistId });
                }}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '10px',
                  fontSize: 13,
                  color: '#aaa',
                  marginTop: 4,
                }}
              >
                View artist profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FlashCard({ item, index, onClick, onArtistClick }) {
  const [hov, setHov] = useState(false);
  const imgH = { sm: 170, md: 210, lg: 250 }[item.size];
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        borderRadius: 14,
        overflow: 'hidden',
        opacity: 0,
        animation: `fadeUp 0.4s ease forwards`,
        animationDelay: `${index * 0.05}s`,
        boxShadow: hov
          ? '0 10px 36px rgba(0,0,0,0.11)'
          : '0 2px 10px rgba(0,0,0,0.06)',
        transform: hov ? 'translateY(-3px)' : 'none',
        transition: 'all 0.2s ease',
        breakInside: 'avoid',
        marginBottom: 16,
      }}
    >
      <div
        onClick={() => item.available && onClick(item)}
        style={{
          height: imgH,
          background: '#f8f8f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          cursor: item.available ? 'pointer' : 'default',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div
          style={{
            fontSize: { sm: 52, md: 64, lg: 76 }[item.size],
            opacity: item.available ? 1 : 0.3,
            filter: item.available ? 'none' : 'grayscale(1)',
            transform: hov && item.available ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.2s',
          }}
        >
          {item.motif}
        </div>
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            background: '#fff',
            borderRadius: 100,
            padding: '3px 9px',
            fontSize: 11,
            fontWeight: 500,
            color: '#555',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          }}
        >
          {item.style}
        </div>
        {item.available ? (
          <div
            style={{
              position: 'absolute',
              top: 14,
              right: 12,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#5cb87a',
              boxShadow: '0 0 0 3px rgba(92,184,122,0.2)',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: '#f5f5f5',
              borderRadius: 100,
              padding: '3px 9px',
              fontSize: 11,
              fontWeight: 500,
              color: '#aaa',
            }}
          >
            Claimed
          </div>
        )}
      </div>
      <div style={{ padding: '13px 15px 15px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 4,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a' }}>
            {item.design}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: item.available ? '#1a1a1a' : '#ccc',
            }}
          >
            ${item.price}
          </div>
        </div>
        <div
          onClick={() => onArtistClick(item.artistId)}
          style={{
            fontSize: 12,
            color: '#aaa',
            cursor: 'pointer',
            fontWeight: 500,
          }}
          onMouseEnter={(e) => (e.target.style.color = '#1a1a1a')}
          onMouseLeave={(e) => (e.target.style.color = '#aaa')}
        >
          {item.artist} · {item.city} →
        </div>
      </div>
    </div>
  );
}

// ─── ARTIST PROFILE ───────────────────────────────────────
function ArtistProfile({ artistId, onNavigate }) {
  const artist = artists[artistId];
  const artistDesigns = flashData.filter((d) => d.artistId === artistId);
  const featured = artistDesigns.slice(0, 3);
  const [tab, setTab] = useState('all');
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [inquirySent, setInquirySent] = useState(false);

  const displayed =
    tab === 'all'
      ? artistDesigns
      : tab === 'available'
      ? artistDesigns.filter((d) => d.available)
      : artistDesigns.filter((d) => !d.available);

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Nav page="artist" onNavigate={onNavigate} backLabel="Browse" />

      {/* Profile header */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '32px 24px 28px',
          animation: 'fadeUp 0.35s ease',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#e8e8e8,#d4d4d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                flexShrink: 0,
              }}
            >
              {artist.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexWrap: 'wrap',
                  marginBottom: 4,
                }}
              >
                <h1
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {artist.name}
                </h1>
                <span
                  style={{
                    background: '#f5f5f5',
                    borderRadius: 100,
                    padding: '3px 10px',
                    fontSize: 12,
                    color: '#666',
                    fontWeight: 500,
                  }}
                >
                  @{artist.instagram}
                </span>
              </div>
              <div style={{ fontSize: 13, color: '#aaa', marginBottom: 10 }}>
                📍 Based in {artist.homeBase}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: '#555',
                  lineHeight: 1.6,
                  maxWidth: 480,
                  marginBottom: 12,
                }}
              >
                {artist.bio}
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {artist.styles.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: '#f5f5f5',
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                minWidth: 180,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 14,
                  background: '#f8f8f8',
                  borderRadius: 12,
                  padding: '12px 16px',
                }}
              >
                {[
                  ['Designs', artist.totalDesigns],
                  ['Tattooed', artist.completedTattoos],
                  ['From', `$${artist.startingPrice}`],
                ].map(([l, v]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: '#1a1a1a',
                      }}
                    >
                      {v}
                    </div>
                    <div
                      style={{ fontSize: 11, color: '#aaa', fontWeight: 500 }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: '#f0faf4',
                  borderRadius: 10,
                  padding: '9px 13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#5cb87a',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{ fontSize: 12, fontWeight: 600, color: '#2d7a4a' }}
                  >
                    Taking bookings
                  </div>
                  <div style={{ fontSize: 11, color: '#5cb87a' }}>
                    Next: {artist.nextAvailable}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowInquiry(true)}
                style={{
                  background: '#1a1a1a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '11px',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Send booking inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: 860, margin: '0 auto', padding: '32px 24px 60px' }}
      >
        {/* Guest spots */}
        {artist.guestSpots.length > 0 && (
          <div
            style={{
              marginBottom: 40,
              animation: 'fadeUp 0.35s ease 0.05s both',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#aaa',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Upcoming Guest Spots
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {artist.guestSpots.map((g, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 10,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        background: '#f5f5f5',
                        borderRadius: 8,
                        padding: '7px 12px',
                        textAlign: 'center',
                        minWidth: 72,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: '#1a1a1a',
                        }}
                      >
                        {g.dateFrom}
                      </div>
                      <div style={{ fontSize: 10, color: '#aaa' }}>
                        – {g.dateTo}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#1a1a1a',
                          marginBottom: 2,
                        }}
                      >
                        {g.city}
                      </div>
                      <div style={{ fontSize: 12, color: '#aaa' }}>
                        {g.studio}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        background: g.spotsLeft <= 1 ? '#fff5f5' : '#f0faf4',
                        borderRadius: 100,
                        padding: '4px 11px',
                        fontSize: 12,
                        fontWeight: 500,
                        color: g.spotsLeft <= 1 ? '#e05c5c' : '#2d7a4a',
                      }}
                    >
                      {g.spotsLeft} spot{g.spotsLeft !== 1 ? 's' : ''} left
                    </span>
                    <button
                      onClick={() => setShowInquiry(true)}
                      style={{
                        background: '#1a1a1a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '7px 14px',
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      Book this spot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured */}
        <div
          style={{ marginBottom: 40, animation: 'fadeUp 0.35s ease 0.1s both' }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#aaa',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Featured Flash
          </div>
          <div
            style={{
              columns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: 14,
            }}
          >
            {featured.map((d) => (
              <ProfileDesignCard
                key={d.id}
                item={d}
                onBook={() => onNavigate('booking', { design: d })}
              />
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #efefef', marginBottom: 32 }} />

        {/* All flash */}
        <div style={{ animation: 'fadeUp 0.35s ease 0.15s both' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#aaa',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              All Flash
            </div>
            <div
              style={{
                display: 'flex',
                gap: 3,
                background: '#f5f5f5',
                borderRadius: 100,
                padding: 3,
              }}
            >
              {[
                ['all', `All (${artistDesigns.length})`],
                [
                  'available',
                  `Available (${
                    artistDesigns.filter((d) => d.available).length
                  })`,
                ],
                [
                  'booked',
                  `Booked (${
                    artistDesigns.filter((d) => !d.available).length
                  })`,
                ],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  style={{
                    background: tab === key ? '#fff' : 'transparent',
                    border: 'none',
                    borderRadius: 100,
                    padding: '5px 13px',
                    fontSize: 12,
                    fontWeight: 500,
                    color: tab === key ? '#1a1a1a' : '#999',
                    boxShadow:
                      tab === key ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.15s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              columns: 'repeat(auto-fill, minmax(165px, 1fr))',
              gap: 12,
            }}
          >
            {displayed.map((d) => (
              <ProfileDesignCard
                key={d.id}
                item={d}
                small
                onBook={() => onNavigate('booking', { design: d })}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry modal */}
      {showInquiry && (
        <div
          onClick={() => setShowInquiry(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 20,
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.15s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 20,
              maxWidth: 400,
              width: '100%',
              boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
              animation: 'popUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              overflow: 'hidden',
            }}
          >
            {inquirySent ? (
              <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: 44, marginBottom: 14 }}>✉️</div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  Inquiry sent!
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: '#999',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {artist.name} will get back to you within 48 hours.
                </div>
                <button
                  onClick={() => {
                    setShowInquiry(false);
                    setInquirySent(false);
                  }}
                  style={{
                    background: '#f5f5f5',
                    border: 'none',
                    borderRadius: 10,
                    padding: '10px 24px',
                    fontSize: 13,
                    color: '#666',
                    fontWeight: 500,
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <div style={{ padding: '26px 26px 30px' }}>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 4,
                  }}
                >
                  Booking inquiry
                </div>
                <div style={{ fontSize: 13, color: '#999', marginBottom: 20 }}>
                  Send {artist.name} a message.
                </div>
                {[
                  ['name', 'Your name', 'Full name', 'text'],
                  ['email', 'Email', 'you@example.com', 'email'],
                ].map(([k, l, p, t]) => (
                  <div key={k} style={{ marginBottom: 12 }}>
                    <label style={lbl}>{l}</label>
                    <input
                      style={inp}
                      type={t}
                      value={inquiryForm[k]}
                      onChange={(e) =>
                        setInquiryForm((f) => ({ ...f, [k]: e.target.value }))
                      }
                      placeholder={p}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 18 }}>
                  <label style={lbl}>Your idea</label>
                  <textarea
                    style={{
                      ...inp,
                      height: 90,
                      resize: 'none',
                      lineHeight: 1.5,
                    }}
                    value={inquiryForm.message}
                    onChange={(e) =>
                      setInquiryForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Style, placement, size, references..."
                  />
                </div>
                <button
                  onClick={() => {
                    if (
                      inquiryForm.name &&
                      inquiryForm.email &&
                      inquiryForm.message
                    )
                      setInquirySent(true);
                  }}
                  style={{
                    width: '100%',
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    padding: '13px',
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Send Inquiry
                </button>
                <button
                  onClick={() => setShowInquiry(false)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    fontSize: 13,
                    color: '#bbb',
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileDesignCard({ item, onBook, small }) {
  const [hov, setHov] = useState(false);
  const h = small ? 140 : { sm: 160, md: 195, lg: 235 }[item.size];
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        borderRadius: 13,
        overflow: 'hidden',
        boxShadow:
          hov && item.available
            ? '0 8px 28px rgba(0,0,0,0.1)'
            : '0 2px 8px rgba(0,0,0,0.06)',
        transform: hov && item.available ? 'translateY(-3px)' : 'none',
        transition: 'all 0.2s',
        breakInside: 'avoid',
        marginBottom: small ? 12 : 14,
      }}
    >
      <div
        style={{
          height: h,
          background: '#f8f8f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: small ? 42 : { sm: 46, md: 58, lg: 70 }[item.size],
          position: 'relative',
          opacity: item.available ? 1 : 0.5,
          filter: item.available ? 'none' : 'grayscale(0.5)',
        }}
      >
        <div
          style={{
            transform: hov && item.available ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s',
          }}
        >
          {item.motif}
        </div>
        {!item.available && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.5)',
            }}
          >
            <span
              style={{
                background: '#fff',
                borderRadius: 100,
                padding: '3px 10px',
                fontSize: 11,
                color: '#aaa',
                fontWeight: 500,
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              Booked
            </span>
          </div>
        )}
        {item.available && (
          <div
            style={{
              position: 'absolute',
              top: 9,
              right: 9,
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#5cb87a',
              boxShadow: '0 0 0 3px rgba(92,184,122,0.2)',
            }}
          />
        )}
      </div>
      <div style={{ padding: small ? '10px 12px' : '12px 14px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: item.available ? 8 : 0,
          }}
        >
          <div
            style={{
              fontSize: small ? 13 : 14,
              fontWeight: 600,
              color: '#1a1a1a',
            }}
          >
            {item.design}
          </div>
          <div
            style={{
              fontSize: small ? 13 : 14,
              fontWeight: 700,
              color: item.available ? '#1a1a1a' : '#ccc',
            }}
          >
            ${item.price}
          </div>
        </div>
        {item.available && (
          <button
            onClick={onBook}
            style={{
              width: '100%',
              background: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: 7,
              padding: small ? '7px' : '8px',
              fontSize: 12,
              fontWeight: 600,
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.target.style.background = '#333')}
            onMouseLeave={(e) => (e.target.style.background = '#1a1a1a')}
          >
            Reserve
          </button>
        )}
      </div>
    </div>
  );
}

// ─── BOOKING FLOW ─────────────────────────────────────────
function BookingFlow({ design, onNavigate }) {
  const DEPOSIT_PCT = 0.2;
  const FLASHD_FEE_PCT = 0.15;
  const deposit = Math.round(design.price * DEPOSIT_PCT);
  const flashdFee = Math.round(deposit * FLASHD_FEE_PCT);
  const artistReceives = deposit - flashdFee;
  const remaining = design.price - deposit;

  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const [card, setCard] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: '',
  });
  const [processing, setProcessing] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);

  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const setC = (k, v) => setCard((f) => ({ ...f, [k]: v }));

  function getDates() {
    const dates = [];
    const today = new Date();
    let added = 0,
      i = 1;
    while (added < 14) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() !== 0) {
        dates.push(d);
        added++;
      }
      i++;
    }
    return dates;
  }
  const allDates = getDates();
  const visibleDates = allDates.slice(weekOffset * 7, weekOffset * 7 + 7);
  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];
  const takenSlots = ['11:00 AM', '3:00 PM'];

  const fmt = (d) =>
    d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  const fmtLong = (d) =>
    d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  const calLink = () => {
    if (!selectedDate || !selectedTime) return '#';
    const [tp, ap] = selectedTime.split(' ');
    let [h, m] = tp.split(':').map(Number);
    if (ap === 'PM' && h !== 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
    const s = new Date(selectedDate);
    s.setHours(h, m, 0);
    const e = new Date(s);
    e.setHours(s.getHours() + 2);
    const f = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Flash Tattoo with ${design.artist} via Flashd`
    )}&dates=${f(s)}/${f(e)}&details=${encodeURIComponent(
      `Deposit paid: $${deposit}. Remaining: $${remaining} due at studio.`
    )}`;
  };

  const STEPS = ['Date', 'Time', 'Info', 'Payment'];

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Nav
        page="booking"
        onNavigate={onNavigate}
        backLabel={step === 4 ? null : 'Artist'}
      />

      <div
        style={{ maxWidth: 520, margin: '0 auto', padding: '24px 20px 60px' }}
      >
        {/* Design pill */}
        {step < 4 && (
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '14px 16px',
              marginBottom: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              animation: 'fadeUp 0.3s ease',
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
              }}
            >
              {design.motif}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>
                {design.design}
              </div>
              <div style={{ fontSize: 12, color: '#aaa' }}>
                {design.artist} · {design.city}
              </div>
            </div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>${design.price}</div>
          </div>
        )}

        {/* Progress */}
        {step < 4 && (
          <div style={{ display: 'flex', gap: 4, marginBottom: 26 }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ flex: 1 }}>
                <div
                  style={{
                    height: 3,
                    borderRadius: 2,
                    background: i <= step ? '#1a1a1a' : '#e8e8e8',
                    marginBottom: 5,
                    transition: 'background 0.3s',
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: i === step ? '#1a1a1a' : '#ccc',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 0: Date */}
        {step === 0 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 4,
                letterSpacing: '-0.02em',
              }}
            >
              Pick a date
            </div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 18 }}>
              {design.artist}'s available dates
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <button
                onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
                disabled={weekOffset === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 20,
                  color: weekOffset === 0 ? '#ddd' : '#1a1a1a',
                  padding: '2px 6px',
                }}
              >
                ‹
              </button>
              <span style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>
                {fmt(visibleDates[0])} –{' '}
                {fmt(visibleDates[visibleDates.length - 1])}
              </span>
              <button
                onClick={() => setWeekOffset((w) => w + 1)}
                disabled={(weekOffset + 1) * 7 >= allDates.length}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 20,
                  color:
                    (weekOffset + 1) * 7 >= allDates.length
                      ? '#ddd'
                      : '#1a1a1a',
                  padding: '2px 6px',
                }}
              >
                ›
              </button>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7,1fr)',
                gap: 5,
                marginBottom: 22,
              }}
            >
              {visibleDates.map((d, i) => {
                const sel =
                  selectedDate &&
                  d.toDateString() === selectedDate.toDateString();
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(d)}
                    style={{
                      background: sel ? '#1a1a1a' : '#fff',
                      color: sel ? '#fff' : '#1a1a1a',
                      border: `1.5px solid ${sel ? '#1a1a1a' : '#ebebeb'}`,
                      borderRadius: 10,
                      padding: '8px 2px',
                      textAlign: 'center',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        fontWeight: 500,
                        color: sel ? '#aaa' : '#bbb',
                        marginBottom: 3,
                      }}
                    >
                      {d.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>
                      {d.getDate()}
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                if (selectedDate) setStep(1);
              }}
              style={{
                width: '100%',
                background: selectedDate ? '#1a1a1a' : '#e8e8e8',
                color: selectedDate ? '#fff' : '#aaa',
                border: 'none',
                borderRadius: 12,
                padding: '13px',
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              {selectedDate
                ? `Continue with ${fmt(selectedDate)} →`
                : 'Select a date'}
            </button>
          </div>
        )}

        {/* Step 1: Time */}
        {step === 1 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 4,
                letterSpacing: '-0.02em',
              }}
            >
              Pick a time
            </div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 18 }}>
              {fmtLong(selectedDate)} · ~2 hours
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
                marginBottom: 20,
              }}
            >
              {timeSlots.map((t) => {
                const taken = takenSlots.includes(t);
                const sel = selectedTime === t;
                return (
                  <button
                    key={t}
                    onClick={() => !taken && setSelectedTime(t)}
                    style={{
                      background: sel ? '#1a1a1a' : taken ? '#fafafa' : '#fff',
                      color: sel ? '#fff' : taken ? '#ccc' : '#1a1a1a',
                      border: `1.5px solid ${
                        sel ? '#1a1a1a' : taken ? '#f0f0f0' : '#ebebeb'
                      }`,
                      borderRadius: 11,
                      padding: '13px 16px',
                      fontSize: 14,
                      fontWeight: 500,
                      display: 'flex',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s',
                      textDecoration: taken ? 'line-through' : 'none',
                    }}
                  >
                    <span>{t}</span>
                    {taken && (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: '#ddd',
                          textDecoration: 'none',
                        }}
                      >
                        Booked
                      </span>
                    )}
                    {sel && <span>✓</span>}
                  </button>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setStep(0)}
                style={{
                  flex: 1,
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#888',
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  if (selectedTime) setStep(2);
                }}
                style={{
                  flex: 2,
                  background: selectedTime ? '#1a1a1a' : '#e8e8e8',
                  color: selectedTime ? '#fff' : '#aaa',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                {selectedTime
                  ? `Continue with ${selectedTime} →`
                  : 'Select a time'}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Info */}
        {step === 2 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 4,
                letterSpacing: '-0.02em',
              }}
            >
              Your info
            </div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 20 }}>
              So {design.artist} knows who's coming in.
            </div>
            {[
              ['name', 'Full name', 'Your name', 'text'],
              ['email', 'Email', 'you@example.com', 'email'],
              ['phone', 'Phone (optional)', '', 'tel'],
            ].map(([k, l, p, t]) => (
              <div key={k} style={{ marginBottom: 13 }}>
                <label style={lbl}>{l}</label>
                <input
                  style={inp}
                  type={t}
                  value={form[k]}
                  onChange={(e) => setF(k, e.target.value)}
                  placeholder={p}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>
                Note{' '}
                <span style={{ fontWeight: 400, color: '#ccc' }}>
                  (optional)
                </span>
              </label>
              <textarea
                style={{ ...inp, height: 75, resize: 'none', lineHeight: 1.5 }}
                value={form.note}
                onChange={(e) => setF('note', e.target.value)}
                placeholder="Placement, size, questions..."
              />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1,
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#888',
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  if (form.name && form.email) setStep(3);
                }}
                style={{
                  flex: 2,
                  background: form.name && form.email ? '#1a1a1a' : '#e8e8e8',
                  color: form.name && form.email ? '#fff' : '#aaa',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 4,
                letterSpacing: '-0.02em',
              }}
            >
              Pay deposit
            </div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 18 }}>
              Locks in your appointment. Applied to your total.
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 13,
                padding: '15px 17px',
                marginBottom: 16,
                border: '1.5px solid #ebebeb',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#aaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 11,
                }}
              >
                Booking Summary
              </div>
              {[
                ['Design', `${design.design} by ${design.artist}`],
                ['Date', fmt(selectedDate)],
                ['Time', selectedTime],
                ['Location', design.city],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 7,
                  }}
                >
                  <span style={{ fontSize: 13, color: '#999' }}>{k}</span>
                  <span
                    style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a' }}
                  >
                    {v}
                  </span>
                </div>
              ))}
              <div
                style={{
                  borderTop: '1px solid #f0f0f0',
                  marginTop: 10,
                  paddingTop: 10,
                }}
              >
                {[
                  ['Design price', `$${design.price}`],
                  ['Deposit due now (20%)', `$${deposit}`],
                  ['Remaining at studio', `$${remaining}`],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#999' }}>{k}</span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: i === 1 ? 700 : 400,
                        color: i === 2 ? '#bbb' : '#1a1a1a',
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 13,
                padding: '16px',
                marginBottom: 14,
                border: '1.5px solid #ebebeb',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#aaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 12,
                }}
              >
                Card Details
              </div>
              <div style={{ marginBottom: 11 }}>
                <label style={lbl}>Name on card</label>
                <input
                  style={inp}
                  value={card.name}
                  onChange={(e) => setC('name', e.target.value)}
                  placeholder="Full name"
                />
              </div>
              <div style={{ marginBottom: 11 }}>
                <label style={lbl}>Card number</label>
                <input
                  style={inp}
                  value={card.number}
                  onChange={(e) =>
                    setC(
                      'number',
                      e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 16)
                        .replace(/(.{4})/g, '$1 ')
                        .trim()
                    )
                  }
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                }}
              >
                <div>
                  <label style={lbl}>Expiry</label>
                  <input
                    style={inp}
                    value={card.expiry}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                      if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2);
                      setC('expiry', v);
                    }}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label style={lbl}>CVC</label>
                  <input
                    style={inp}
                    value={card.cvc}
                    onChange={(e) =>
                      setC('cvc', e.target.value.replace(/\D/g, '').slice(0, 3))
                    }
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                background: '#f8f8f8',
                borderRadius: 10,
                padding: '10px 13px',
                marginBottom: 16,
                fontSize: 12,
                color: '#aaa',
                lineHeight: 1.6,
              }}
            >
              A 15% platform fee (${flashdFee}) is included. ${artistReceives}{' '}
              goes directly to {design.artist}.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setStep(2)}
                style={{
                  flex: 1,
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#888',
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  setProcessing(true);
                  setTimeout(() => {
                    setProcessing(false);
                    setStep(4);
                  }, 1800);
                }}
                disabled={
                  processing ||
                  !card.name ||
                  !card.number ||
                  !card.expiry ||
                  !card.cvc
                }
                style={{
                  flex: 2,
                  background: processing ? '#e8e8e8' : '#1a1a1a',
                  color: processing ? '#aaa' : '#fff',
                  border: 'none',
                  borderRadius: 11,
                  padding: '12px',
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                }}
              >
                {processing ? (
                  <>
                    <div
                      style={{
                        width: 15,
                        height: 15,
                        border: '2px solid #ccc',
                        borderTopColor: '#999',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                      }}
                    />
                    Processing...
                  </>
                ) : (
                  `Pay $${deposit} →`
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmed */}
        {step === 4 && (
          <div
            style={{
              animation: 'pop 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              textAlign: 'center',
              paddingTop: 16,
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                background: '#f0faf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 34,
                margin: '0 auto 18px',
              }}
            >
              ✅
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 8,
                letterSpacing: '-0.02em',
              }}
            >
              You're booked!
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#999',
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Deposit of{' '}
              <strong style={{ color: '#1a1a1a' }}>${deposit}</strong> received.
              <br />
              Confirmation sent to{' '}
              <strong style={{ color: '#1a1a1a' }}>{form.email}</strong>.
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '18px',
                marginBottom: 16,
                boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#aaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 12,
                }}
              >
                Your Appointment
              </div>
              {[
                [`${design.motif} ${design.design}`, 'Design'],
                [design.artist, 'Artist'],
                [fmtLong(selectedDate), 'Date'],
                [selectedTime, 'Time'],
                [design.city, 'Location'],
                [`$${deposit} paid`, 'Deposit'],
                [`$${remaining} at studio`, 'Remaining'],
              ].map(([v, k]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 13, color: '#aaa', flexShrink: 0 }}>
                    {k}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#1a1a1a',
                      textAlign: 'right',
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={calLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                background: '#fff',
                border: '1.5px solid #ebebeb',
                borderRadius: 12,
                padding: '12px',
                fontSize: 14,
                fontWeight: 600,
                color: '#1a1a1a',
                textDecoration: 'none',
                marginBottom: 10,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = '#1a1a1a')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = '#ebebeb')
              }
            >
              📅 Add to Google Calendar
            </a>
            <button
              onClick={() => onNavigate('browse')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                fontSize: 13,
                color: '#bbb',
                padding: '10px',
              }}
            >
              Browse more flash →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ARTIST SIGNUP ────────────────────────────────────────
const STYLES_LIST = [
  'Traditional',
  'Fine line',
  'Blackwork',
  'Watercolor',
  'Neo-trad',
  'Japanese',
  'Geometric',
  'Illustrative',
];
const CITIES_LIST = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Miami',
  'Houston',
  'Atlanta',
  'Seattle',
  'Portland',
  'Austin',
  'Other',
];
const SIGNUP_STEPS = [
  'Your Info',
  'Your Work',
  'Your Flash',
  'Guest Spots',
  'Review',
];

function ArtistSignup({ onNavigate }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    instagram: '',
    city: '',
    bio: '',
    styles: [],
    designs: [
      {
        name: '',
        price: '',
        size: '',
        description: '',
        repeatable: false,
        repeatCount: '',
      },
    ],
    guestSpots: [],
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleStyle = (s) =>
    set(
      'styles',
      form.styles.includes(s)
        ? form.styles.filter((x) => x !== s)
        : [...form.styles, s]
    );
  const updateDesign = (i, k, v) => {
    const u = [...form.designs];
    u[i] = { ...u[i], [k]: v };
    set('designs', u);
  };
  const addDesign = () => {
    if (form.designs.length < 5)
      set('designs', [
        ...form.designs,
        {
          name: '',
          price: '',
          size: '',
          description: '',
          repeatable: false,
          repeatCount: '',
        },
      ]);
  };
  const removeDesign = (i) => {
    if (form.designs.length > 1)
      set(
        'designs',
        form.designs.filter((_, idx) => idx !== i)
      );
  };
  const addSpot = () => {
    if (form.guestSpots.length < 6)
      set('guestSpots', [
        ...form.guestSpots,
        { city: '', studio: '', dateFrom: '', dateTo: '' },
      ]);
  };
  const updateSpot = (i, k, v) => {
    const u = [...form.guestSpots];
    u[i] = { ...u[i], [k]: v };
    set('guestSpots', u);
  };
  const removeSpot = (i) =>
    set(
      'guestSpots',
      form.guestSpots.filter((_, idx) => idx !== i)
    );

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.name.trim()) e.name = 'Required';
      if (!form.instagram.trim()) e.instagram = 'Required';
      if (!form.city) e.city = 'Required';
    }
    if (step === 1) {
      if (form.styles.length === 0) e.styles = 'Select at least one';
    }
    if (step === 2) {
      form.designs.forEach((d, i) => {
        if (!d.name.trim()) e[`dn${i}`] = 'Required';
        if (!d.price) e[`dp${i}`] = 'Required';
      });
    }
    if (step === 3) {
      form.guestSpots.forEach((g, i) => {
        if (!g.city.trim()) e[`gc${i}`] = 'Required';
        if (!g.dateFrom) e[`gf${i}`] = 'Required';
        if (!g.dateTo) e[`gt${i}`] = 'Required';
      });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const si = (err) => ({
    ...inp,
    border: `1.5px solid ${err ? '#e05c5c' : '#ebebeb'}`,
  });
  const er = { fontSize: 11, color: '#e05c5c', marginTop: 4 };

  if (submitted)
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            padding: '48px 36px',
            maxWidth: 420,
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
            animation: 'pop 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 14 }}>🖤</div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 8,
              letterSpacing: '-0.02em',
            }}
          >
            You're in the queue.
          </div>
          <div
            style={{
              fontSize: 14,
              color: '#999',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            We review submissions within 48 hours.
            <br />
            We'll reach out via Instagram DM.
          </div>
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: 100,
              display: 'inline-block',
              padding: '7px 18px',
              fontSize: 12,
              color: '#888',
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            Free during launch period
          </div>
          <br />
          <button
            onClick={() => onNavigate('browse')}
            style={{
              background: '#1a1a1a',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Browse the marketplace →
          </button>
        </div>
      </div>
    );

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Nav page="signup" onNavigate={onNavigate} backLabel="Browse" />

      {/* Progress */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          display: 'flex',
        }}
      >
        {SIGNUP_STEPS.map((s, i) => (
          <div
            key={s}
            style={{
              flex: 1,
              padding: '10px 12px',
              borderRight:
                i < SIGNUP_STEPS.length - 1 ? '1px solid #efefef' : 'none',
              background: i === step ? '#1a1a1a' : 'transparent',
              transition: 'background 0.2s',
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: i === step ? '#fff' : i < step ? '#aaa' : '#ddd',
                marginBottom: 2,
              }}
            >
              Step {i + 1}
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: i === step ? '#fff' : i < step ? '#1a1a1a' : '#ccc',
              }}
            >
              {s}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ maxWidth: 580, margin: '0 auto', padding: '36px 24px 60px' }}
      >
        {/* Step 0 */}
        {step === 0 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              Tell us who you are.
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#999',
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Basic info to get your listing live.
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>Artist name *</label>
              <input
                style={si(errors.name)}
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="e.g. Maya Chen"
              />
              {errors.name && <div style={er}>{errors.name}</div>}
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>Instagram handle *</label>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 14,
                    color: '#bbb',
                  }}
                >
                  @
                </div>
                <input
                  style={{ ...si(errors.instagram), paddingLeft: 28 }}
                  value={form.instagram}
                  onChange={(e) =>
                    set('instagram', e.target.value.replace('@', ''))
                  }
                  placeholder="yourhandle"
                />
              </div>
              {errors.instagram && <div style={er}>{errors.instagram}</div>}
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>City *</label>
              <div style={{ position: 'relative' }}>
                <select
                  style={si(errors.city)}
                  value={form.city}
                  onChange={(e) => set('city', e.target.value)}
                >
                  <option value="">Select your city</option>
                  {CITIES_LIST.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    position: 'absolute',
                    right: 14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#aaa',
                    fontSize: 11,
                  }}
                >
                  ▼
                </div>
              </div>
              {errors.city && <div style={er}>{errors.city}</div>}
            </div>
            <div>
              <label style={lbl}>
                Short bio{' '}
                <span style={{ fontWeight: 400, color: '#ccc' }}>
                  (optional)
                </span>
              </label>
              <textarea
                style={{
                  ...si(false),
                  height: 85,
                  resize: 'none',
                  lineHeight: 1.5,
                }}
                value={form.bio}
                onChange={(e) => set('bio', e.target.value)}
                placeholder="1–2 sentences about your style"
                maxLength={200}
              />
              <div
                style={{
                  fontSize: 11,
                  color: '#ccc',
                  marginTop: 3,
                  textAlign: 'right',
                }}
              >
                {form.bio.length}/200
              </div>
            </div>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              What styles do you work in?
            </div>
            <div style={{ fontSize: 14, color: '#999', marginBottom: 28 }}>
              Select all that apply.
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 8,
              }}
            >
              {STYLES_LIST.map((s) => {
                const a = form.styles.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleStyle(s)}
                    style={{
                      background: a ? '#1a1a1a' : '#f5f5f5',
                      color: a ? '#fff' : '#555',
                      border: 'none',
                      borderRadius: 100,
                      padding: '9px 18px',
                      fontSize: 13,
                      fontWeight: 500,
                      transition: 'all 0.12s',
                    }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            {errors.styles && <div style={er}>{errors.styles}</div>}
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              List your flash.
            </div>
            <div style={{ fontSize: 14, color: '#999', marginBottom: 24 }}>
              Add up to 5 designs. You can add more after approval.
            </div>
            {form.designs.map((d, i) => (
              <div
                key={i}
                style={{
                  border: '1.5px solid #ebebeb',
                  borderRadius: 13,
                  padding: '18px',
                  marginBottom: 12,
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Design {i + 1}
                  </span>
                  {form.designs.length > 1 && (
                    <button
                      onClick={() => removeDesign(i)}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: 12,
                        color: '#e05c5c',
                        fontWeight: 500,
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <div>
                    <label style={lbl}>Name *</label>
                    <input
                      style={si(errors[`dn${i}`])}
                      value={d.name}
                      onChange={(e) => updateDesign(i, 'name', e.target.value)}
                      placeholder="e.g. Red Rose"
                    />
                    {errors[`dn${i}`] && (
                      <div style={er}>{errors[`dn${i}`]}</div>
                    )}
                  </div>
                  <div>
                    <label style={lbl}>Price *</label>
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: 13,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#bbb',
                        }}
                      >
                        $
                      </div>
                      <input
                        type="number"
                        style={{ ...si(errors[`dp${i}`]), paddingLeft: 26 }}
                        value={d.price}
                        onChange={(e) =>
                          updateDesign(i, 'price', e.target.value)
                        }
                        placeholder="150"
                      />
                    </div>
                    {errors[`dp${i}`] && (
                      <div style={er}>{errors[`dp${i}`]}</div>
                    )}
                  </div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label style={lbl}>Size</label>
                  <div style={{ display: 'flex', gap: 7 }}>
                    {['Small', 'Medium', 'Large'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => updateDesign(i, 'size', sz)}
                        style={{
                          flex: 1,
                          background: d.size === sz ? '#1a1a1a' : '#f5f5f5',
                          color: d.size === sz ? '#fff' : '#555',
                          border: 'none',
                          borderRadius: 8,
                          padding: '8px',
                          fontSize: 13,
                          fontWeight: 500,
                          transition: 'all 0.12s',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={lbl}>
                    Notes{' '}
                    <span style={{ fontWeight: 400, color: '#ccc' }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    style={si(false)}
                    value={d.description}
                    onChange={(e) =>
                      updateDesign(i, 'description', e.target.value)
                    }
                    placeholder="e.g. Available in black or color"
                  />
                </div>

                {/* Repeatable toggle */}
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: d.repeatable ? 12 : 0,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: '#1a1a1a',
                        }}
                      >
                        Repeatable design?
                      </div>
                      <div
                        style={{ fontSize: 12, color: '#aaa', marginTop: 2 }}
                      >
                        {d.repeatable
                          ? "You'll tattoo this on multiple clients"
                          : "One-of-a-kind — once booked, it's gone"}
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        updateDesign(i, 'repeatable', !d.repeatable);
                        if (d.repeatable) updateDesign(i, 'repeatCount', '');
                      }}
                      style={{
                        width: 42,
                        height: 24,
                        borderRadius: 100,
                        background: d.repeatable ? '#1a1a1a' : '#e0e0e0',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 3,
                          left: d.repeatable ? 20 : 3,
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: '#fff',
                          transition: 'left 0.2s',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Count selector — only shows when repeatable is on */}
                  {d.repeatable && (
                    <div style={{ animation: 'fadeUp 0.2s ease' }}>
                      <label style={{ ...lbl, marginBottom: 8 }}>
                        How many times can this be booked?
                      </label>
                      <div
                        style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}
                      >
                        {['1', '2', '3', '4', '5', '∞'].map((n) => {
                          const active = d.repeatCount === n;
                          return (
                            <button
                              key={n}
                              onClick={() => updateDesign(i, 'repeatCount', n)}
                              style={{
                                background: active ? '#1a1a1a' : '#f5f5f5',
                                color: active ? '#fff' : '#555',
                                border: 'none',
                                borderRadius: 9,
                                width: 44,
                                height: 44,
                                fontSize: n === '∞' ? 20 : 14,
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.12s',
                                flexShrink: 0,
                              }}
                            >
                              {n}
                            </button>
                          );
                        })}
                      </div>
                      {d.repeatCount && (
                        <div
                          style={{ fontSize: 12, color: '#aaa', marginTop: 8 }}
                        >
                          {d.repeatCount === '∞'
                            ? 'This design can be booked unlimited times.'
                            : `This design can be booked up to ${
                                d.repeatCount
                              } time${d.repeatCount !== '1' ? 's' : ''}.`}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {form.designs.length < 5 && (
              <button
                onClick={addDesign}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1.5px dashed #d0d0d0',
                  borderRadius: 12,
                  padding: '12px',
                  fontSize: 13,
                  color: '#aaa',
                  fontWeight: 500,
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#1a1a1a';
                  e.target.style.color = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#d0d0d0';
                  e.target.style.color = '#aaa';
                }}
              >
                + Add another design ({form.designs.length}/5)
              </button>
            )}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              Do you travel for guest spots?
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#999',
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              Optional. Clients can find and book you wherever you'll be.
            </div>
            {form.guestSpots.length === 0 ? (
              <div
                style={{
                  border: '1.5px dashed #e0e0e0',
                  borderRadius: 14,
                  padding: '36px 20px',
                  textAlign: 'center',
                  marginBottom: 14,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>✈️</div>
                <div style={{ fontSize: 14, color: '#bbb', marginBottom: 16 }}>
                  No guest spots added yet
                </div>
                <button
                  onClick={addSpot}
                  style={{
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 100,
                    padding: '9px 20px',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  + Add a guest spot
                </button>
              </div>
            ) : (
              <>
                {form.guestSpots.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      border: '1.5px solid #ebebeb',
                      borderRadius: 13,
                      padding: '18px',
                      marginBottom: 12,
                      background: '#fff',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 14,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#aaa',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Guest Spot {i + 1}
                      </span>
                      <button
                        onClick={() => removeSpot(i)}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: 12,
                          color: '#e05c5c',
                          fontWeight: 500,
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <label style={lbl}>City *</label>
                        <input
                          style={si(errors[`gc${i}`])}
                          value={g.city}
                          onChange={(e) =>
                            updateSpot(i, 'city', e.target.value)
                          }
                          placeholder="Los Angeles, CA"
                        />
                        {errors[`gc${i}`] && (
                          <div style={er}>{errors[`gc${i}`]}</div>
                        )}
                      </div>
                      <div>
                        <label style={lbl}>
                          Studio{' '}
                          <span style={{ fontWeight: 400, color: '#ccc' }}>
                            (optional)
                          </span>
                        </label>
                        <input
                          style={si(false)}
                          value={g.studio}
                          onChange={(e) =>
                            updateSpot(i, 'studio', e.target.value)
                          }
                          placeholder="Studio name"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10,
                      }}
                    >
                      <div>
                        <label style={lbl}>From *</label>
                        <input
                          type="date"
                          style={si(errors[`gf${i}`])}
                          value={g.dateFrom}
                          onChange={(e) =>
                            updateSpot(i, 'dateFrom', e.target.value)
                          }
                        />
                        {errors[`gf${i}`] && (
                          <div style={er}>{errors[`gf${i}`]}</div>
                        )}
                      </div>
                      <div>
                        <label style={lbl}>To *</label>
                        <input
                          type="date"
                          style={si(errors[`gt${i}`])}
                          value={g.dateTo}
                          onChange={(e) =>
                            updateSpot(i, 'dateTo', e.target.value)
                          }
                        />
                        {errors[`gt${i}`] && (
                          <div style={er}>{errors[`gt${i}`]}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {form.guestSpots.length < 6 && (
                  <button
                    onClick={addSpot}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1.5px dashed #d0d0d0',
                      borderRadius: 12,
                      padding: '12px',
                      fontSize: 13,
                      color: '#aaa',
                      fontWeight: 500,
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#1a1a1a';
                      e.target.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#d0d0d0';
                      e.target.style.color = '#aaa';
                    }}
                  >
                    + Add another city ({form.guestSpots.length}/6)
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              Almost there.
            </div>
            <div style={{ fontSize: 14, color: '#999', marginBottom: 24 }}>
              Review before submitting.
            </div>
            {[
              {
                label: 'Your Info',
                goTo: 0,
                rows: [
                  ['Name', form.name],
                  ['Instagram', `@${form.instagram}`],
                  ['City', form.city],
                  ...(form.bio ? [['Bio', form.bio]] : []),
                ],
              },
              {
                label: 'Your Work',
                goTo: 1,
                rows: [['Styles', form.styles.join(', ') || '—']],
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  border: '1.5px solid #ebebeb',
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    padding: '11px 15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {s.label}
                  </span>
                  <button
                    onClick={() => setStep(s.goTo)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: 12,
                      color: '#1a1a1a',
                      fontWeight: 600,
                    }}
                  >
                    Edit
                  </button>
                </div>
                {s.rows.map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      padding: '9px 15px',
                      borderBottom: '1px solid #f8f8f8',
                      display: 'flex',
                      gap: 14,
                    }}
                  >
                    <span style={{ fontSize: 12, color: '#aaa', minWidth: 80 }}>
                      {k}
                    </span>
                    <span style={{ fontSize: 13, color: '#1a1a1a' }}>{v}</span>
                  </div>
                ))}
              </div>
            ))}
            <div
              style={{
                border: '1.5px solid #ebebeb',
                borderRadius: 12,
                marginBottom: 12,
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <div
                style={{
                  padding: '11px 15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#aaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Flash ({form.designs.length})
                </span>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 12,
                    color: '#1a1a1a',
                    fontWeight: 600,
                  }}
                >
                  Edit
                </button>
              </div>
              {form.designs.map((d, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 15px',
                    borderBottom:
                      i < form.designs.length - 1
                        ? '1px solid #f8f8f8'
                        : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: '#1a1a1a',
                        fontWeight: 500,
                      }}
                    >
                      {d.name || 'Untitled'}
                      {d.size ? ` · ${d.size}` : ''}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#1a1a1a',
                      }}
                    >
                      {d.price ? `$${d.price}` : '—'}
                    </span>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    {d.repeatable ? (
                      <span
                        style={{
                          fontSize: 11,
                          background: '#f0faf4',
                          color: '#2d7a4a',
                          borderRadius: 100,
                          padding: '2px 8px',
                          fontWeight: 500,
                        }}
                      >
                        Repeatable{' '}
                        {d.repeatCount
                          ? `· ${
                              d.repeatCount === '∞'
                                ? 'unlimited'
                                : `${d.repeatCount}×`
                            }`
                          : ''}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: 11,
                          background: '#f5f5f5',
                          color: '#aaa',
                          borderRadius: 100,
                          padding: '2px 8px',
                          fontWeight: 500,
                        }}
                      >
                        One-of-a-kind
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {form.guestSpots.length > 0 && (
              <div
                style={{
                  border: '1.5px solid #ebebeb',
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    padding: '11px 15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Guest Spots ({form.guestSpots.length})
                  </span>
                  <button
                    onClick={() => setStep(3)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: 12,
                      color: '#1a1a1a',
                      fontWeight: 600,
                    }}
                  >
                    Edit
                  </button>
                </div>
                {form.guestSpots.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '9px 15px',
                      borderBottom:
                        i < form.guestSpots.length - 1
                          ? '1px solid #f8f8f8'
                          : 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#1a1a1a' }}>
                      {g.city}
                      {g.studio ? ` · ${g.studio}` : ''}
                    </span>
                    <span style={{ fontSize: 12, color: '#aaa' }}>
                      {g.dateFrom} – {g.dateTo}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div
              style={{
                background: '#f8f8f8',
                borderRadius: 10,
                padding: '12px 15px',
                marginBottom: 18,
                fontSize: 12,
                color: '#aaa',
                lineHeight: 1.7,
              }}
            >
              By submitting, you confirm this is your original work. Listing is
              free during Flashd's launch period.
            </div>
          </div>
        )}

        {/* Nav buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 28,
          }}
        >
          {step > 0 ? (
            <button
              onClick={() => {
                setStep((s) => s - 1);
                setErrors({});
              }}
              style={{
                background: '#f5f5f5',
                border: 'none',
                borderRadius: 10,
                padding: '11px 22px',
                fontSize: 13,
                fontWeight: 500,
                color: '#888',
              }}
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <button
              onClick={() => {
                if (validate()) setStep((s) => s + 1);
              }}
              style={{
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '11px 26px',
                fontSize: 13,
                fontWeight: 600,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#333')}
              onMouseLeave={(e) => (e.target.style.background = '#1a1a1a')}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              style={{
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '12px 28px',
                fontSize: 14,
                fontWeight: 700,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#333')}
              onMouseLeave={(e) => (e.target.style.background = '#1a1a1a')}
            >
              Submit Application →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── APP SHELL ────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('browse');
  const [pageProps, setPageProps] = useState({});
  const [history, setHistory] = useState([]);

  const navigate = (target, props = {}) => {
    if (target === -1) {
      if (history.length > 0) {
        const prev = history[history.length - 1];
        setHistory((h) => h.slice(0, -1));
        setPage(prev.page);
        setPageProps(prev.props);
      } else {
        setPage('browse');
        setPageProps({});
      }
      return;
    }
    setHistory((h) => [...h, { page, props: pageProps }]);
    setPage(target);
    setPageProps(props);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{GLOBAL_STYLES}</style>
      {page === 'browse' && <BrowsePage onNavigate={navigate} />}
      {page === 'artist' && (
        <ArtistProfile artistId={pageProps.artistId} onNavigate={navigate} />
      )}
      {page === 'booking' && (
        <BookingFlow design={pageProps.design} onNavigate={navigate} />
      )}
      {page === 'signup' && <ArtistSignup onNavigate={navigate} />}
      {page === 'dashboard' && <ArtistDashboard onNavigate={navigate} />}
      {page === 'client-login' && <ClientLogin onNavigate={navigate} />}
      {page === 'client-dashboard' && <ClientDashboard onNavigate={navigate} />}
      <EmailWidget />
    </div>
  );
}

// ─── ARTIST DASHBOARD ────────────────────────────────────
const dashboardArtist = artists[1];
const dashboardDesigns = [
  {
    id: 1,
    name: 'Serpent',
    motif: '🐍',
    style: 'Fine line',
    price: 180,
    size: 'Small',
    available: true,
    repeatable: false,
    repeatCount: '',
    bookings: 0,
  },
  {
    id: 2,
    name: 'All-Seeing Eye',
    motif: '👁',
    style: 'Fine line',
    price: 280,
    size: 'Medium',
    available: true,
    repeatable: true,
    repeatCount: '3',
    bookings: 1,
  },
  {
    id: 3,
    name: 'Black Panther',
    motif: '🐆',
    style: 'Fine line',
    price: 300,
    size: 'Large',
    available: false,
    repeatable: false,
    repeatCount: '',
    bookings: 1,
  },
  {
    id: 4,
    name: 'Moth & Moon',
    motif: '🌙',
    style: 'Blackwork',
    price: 240,
    size: 'Medium',
    available: true,
    repeatable: true,
    repeatCount: '∞',
    bookings: 4,
  },
  {
    id: 5,
    name: 'Botanical Arch',
    motif: '🌿',
    style: 'Fine line',
    price: 320,
    size: 'Large',
    available: true,
    repeatable: false,
    repeatCount: '',
    bookings: 0,
  },
];

const bookingRequests = [
  {
    id: 1,
    client: 'Jordan Lee',
    email: 'jordan@email.com',
    design: 'All-Seeing Eye',
    date: 'Jan 14',
    time: '2:00 PM',
    deposit: 56,
    status: 'pending',
    note: 'Left forearm, medium size',
  },
  {
    id: 2,
    client: 'Sam Rivera',
    email: 'sam@email.com',
    design: 'Serpent',
    date: 'Jan 16',
    time: '11:00 AM',
    deposit: 36,
    status: 'confirmed',
    note: '',
  },
  {
    id: 3,
    client: 'Alex Kim',
    email: 'alex@email.com',
    design: 'Moth & Moon',
    date: 'Jan 20',
    time: '3:00 PM',
    deposit: 48,
    status: 'pending',
    note: 'Can we do it slightly smaller?',
  },
  {
    id: 4,
    client: 'Taylor Moss',
    email: 'taylor@email.com',
    design: 'Black Panther',
    date: 'Jan 10',
    time: '10:00 AM',
    deposit: 60,
    status: 'completed',
    note: '',
  },
  {
    id: 5,
    client: 'Morgan Chen',
    email: 'morgan@email.com',
    design: 'Moth & Moon',
    date: 'Jan 22',
    time: '4:00 PM',
    deposit: 48,
    status: 'confirmed',
    note: 'Ribcage placement',
  },
];

function ArtistDashboard({ onNavigate }) {
  const [tab, setTab] = useState('overview');
  const [designs, setDesigns] = useState(dashboardDesigns);
  const [bookings, setBookings] = useState(bookingRequests);
  const [guestSpots, setGuestSpots] = useState(dashboardArtist.guestSpots);
  const [profileEdit, setProfileEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: dashboardArtist.name,
    bio: dashboardArtist.bio,
    instagram: dashboardArtist.instagram,
    homeBase: dashboardArtist.homeBase,
    startingPrice: dashboardArtist.startingPrice,
  });

  const totalEarnings = bookings
    .filter((b) => b.status === 'completed')
    .reduce((sum, b) => sum + b.deposit, 0);
  const pendingEarnings = bookings
    .filter((b) => b.status === 'confirmed')
    .reduce((sum, b) => sum + b.deposit, 0);
  const pendingCount = bookings.filter((b) => b.status === 'pending').length;

  const tabs = [
    { key: 'overview', label: 'Overview' },
    {
      key: 'bookings',
      label: `Bookings ${pendingCount > 0 ? `(${pendingCount})` : ''}`,
    },
    { key: 'flash', label: 'My Flash' },
    { key: 'guestspots', label: 'Guest Spots' },
    { key: 'profile', label: 'Profile' },
  ];

  const statusColors = {
    pending: { bg: '#fff8e6', color: '#b8860b' },
    confirmed: { bg: '#f0faf4', color: '#2d7a4a' },
    completed: { bg: '#f5f5f5', color: '#888' },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fafafa',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '0 24px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          onClick={() => onNavigate('browse')}
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
          }}
        >
          flashd
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}
            >
              {dashboardArtist.avatar}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>
              {dashboardArtist.name}
            </span>
          </div>
          <button
            onClick={() => onNavigate('artist', { artistId: 1 })}
            style={{
              background: '#f5f5f5',
              border: 'none',
              borderRadius: 100,
              padding: '7px 14px',
              fontSize: 12,
              fontWeight: 500,
              color: '#555',
              cursor: 'pointer',
            }}
          >
            View profile →
          </button>
        </div>
      </header>

      <div
        style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 60px' }}
      >
        {/* Page title */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              marginBottom: 4,
            }}
          >
            Artist Dashboard
          </div>
          <div style={{ fontSize: 13, color: '#aaa' }}>
            Welcome back, {dashboardArtist.name.split(' ')[0]}.
          </div>
        </div>

        {/* Tab nav */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            borderBottom: '1px solid #efefef',
            marginBottom: 28,
            overflowX: 'auto',
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom:
                  tab === t.key ? '2px solid #1a1a1a' : '2px solid transparent',
                padding: '10px 16px',
                fontSize: 13,
                fontWeight: tab === t.key ? 600 : 500,
                color: tab === t.key ? '#1a1a1a' : '#aaa',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                marginBottom: -1,
                transition: 'all 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {tab === 'overview' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: 14,
                marginBottom: 28,
              }}
            >
              {[
                {
                  label: 'Total earned',
                  value: `$${totalEarnings}`,
                  sub: 'from deposits',
                  color: '#2d7a4a',
                  bg: '#f0faf4',
                },
                {
                  label: 'Pending deposits',
                  value: `$${pendingEarnings}`,
                  sub: 'confirmed bookings',
                  color: '#b8860b',
                  bg: '#fff8e6',
                },
                {
                  label: 'New requests',
                  value: pendingCount,
                  sub: 'awaiting response',
                  color: '#1a1a1a',
                  bg: '#f5f5f5',
                },
                {
                  label: 'Live designs',
                  value: designs.filter((d) => d.available).length,
                  sub: `of ${designs.length} total`,
                  color: '#1a1a1a',
                  bg: '#f5f5f5',
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '18px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 8,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      background: s.bg,
                      color: s.color,
                      borderRadius: 100,
                      padding: '3px 10px',
                      fontSize: 11,
                      fontWeight: 500,
                      display: 'inline-block',
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent bookings */}
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}
                >
                  Recent Requests
                </div>
                <button
                  onClick={() => setTab('bookings')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 12,
                    color: '#aaa',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  View all →
                </button>
              </div>
              {bookings.slice(0, 3).map((b, i) => (
                <div
                  key={b.id}
                  style={{
                    padding: '14px 20px',
                    borderBottom: i < 2 ? '1px solid #f8f8f8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {b.client}
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>
                      {b.design} · {b.date} at {b.time}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}
                  >
                    ${b.deposit}
                  </div>
                  <span
                    style={{
                      background: statusColors[b.status].bg,
                      color: statusColors[b.status].color,
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    {b.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}
            >
              {[
                {
                  label: 'Add new flash design',
                  icon: '➕',
                  action: () => setTab('flash'),
                },
                {
                  label: 'Add guest spot',
                  icon: '✈️',
                  action: () => setTab('guestspots'),
                },
              ].map((a) => (
                <button
                  key={a.label}
                  onClick={a.action}
                  style={{
                    background: '#fff',
                    border: '1.5px solid #ebebeb',
                    borderRadius: 12,
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = '#1a1a1a')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = '#ebebeb')
                  }
                >
                  <span style={{ fontSize: 20 }}>{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── BOOKINGS ── */}
        {tab === 'bookings' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                overflow: 'hidden',
              }}
            >
              {bookings.map((b, i) => (
                <div
                  key={b.id}
                  style={{
                    padding: '18px 20px',
                    borderBottom:
                      i < bookings.length - 1 ? '1px solid #f8f8f8' : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: 10,
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 180 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 4,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#1a1a1a',
                          }}
                        >
                          {b.client}
                        </div>
                        <span
                          style={{
                            background: statusColors[b.status].bg,
                            color: statusColors[b.status].color,
                            borderRadius: 100,
                            padding: '2px 10px',
                            fontSize: 11,
                            fontWeight: 600,
                            textTransform: 'capitalize',
                          }}
                        >
                          {b.status}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: '#aaa',
                          marginBottom: b.note ? 6 : 0,
                        }}
                      >
                        {b.design} · {b.date} at {b.time}
                      </div>
                      {b.note && (
                        <div
                          style={{
                            fontSize: 12,
                            color: '#888',
                            background: '#f8f8f8',
                            borderRadius: 8,
                            padding: '5px 10px',
                            display: 'inline-block',
                          }}
                        >
                          "{b.note}"
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: '#1a1a1a',
                        }}
                      >
                        ${b.deposit} deposit
                      </div>
                      {b.status === 'pending' && (
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button
                            onClick={() =>
                              setBookings((bks) =>
                                bks.map((bk) =>
                                  bk.id === b.id
                                    ? { ...bk, status: 'confirmed' }
                                    : bk
                                )
                              )
                            }
                            style={{
                              background: '#1a1a1a',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 8,
                              padding: '7px 14px',
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() =>
                              setBookings((bks) =>
                                bks.map((bk) =>
                                  bk.id === b.id
                                    ? { ...bk, status: 'completed' }
                                    : bk
                                )
                              )
                            }
                            style={{
                              background: '#f5f5f5',
                              color: '#888',
                              border: 'none',
                              borderRadius: 8,
                              padding: '7px 14px',
                              fontSize: 12,
                              fontWeight: 500,
                              cursor: 'pointer',
                            }}
                          >
                            Decline
                          </button>
                        </div>
                      )}
                      {b.status === 'confirmed' && (
                        <button
                          onClick={() =>
                            setBookings((bks) =>
                              bks.map((bk) =>
                                bk.id === b.id
                                  ? { ...bk, status: 'completed' }
                                  : bk
                              )
                            )
                          }
                          style={{
                            background: '#f0faf4',
                            color: '#2d7a4a',
                            border: 'none',
                            borderRadius: 8,
                            padding: '7px 14px',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Mark complete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FLASH ── */}
        {tab === 'flash' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                marginBottom: 14,
              }}
            >
              {/* Header row */}
              <div
                style={{
                  padding: '12px 20px',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                  gap: 12,
                }}
              >
                {['Design', 'Price', 'Bookings', 'Repeatable', 'Status'].map(
                  (h) => (
                    <div
                      key={h}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: '#aaa',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {h}
                    </div>
                  )
                )}
              </div>
              {designs.map((d, i) => (
                <div
                  key={d.id}
                  style={{
                    padding: '14px 20px',
                    borderBottom:
                      i < designs.length - 1 ? '1px solid #f8f8f8' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                    gap: 12,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span style={{ fontSize: 24 }}>{d.motif}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: '#1a1a1a',
                        }}
                      >
                        {d.name}
                      </div>
                      <div style={{ fontSize: 11, color: '#aaa' }}>
                        {d.style} · {d.size}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}
                  >
                    ${d.price}
                  </div>
                  <div style={{ fontSize: 13, color: '#888' }}>
                    {d.bookings} booked
                  </div>
                  <div>
                    {d.repeatable ? (
                      <span
                        style={{
                          fontSize: 11,
                          background: '#f0faf4',
                          color: '#2d7a4a',
                          borderRadius: 100,
                          padding: '3px 9px',
                          fontWeight: 500,
                        }}
                      >
                        {d.repeatCount === '∞'
                          ? 'Unlimited'
                          : `${d.repeatCount}×`}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: 11,
                          background: '#f5f5f5',
                          color: '#aaa',
                          borderRadius: 100,
                          padding: '3px 9px',
                          fontWeight: 500,
                        }}
                      >
                        One-off
                      </span>
                    )}
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <div
                      onClick={() =>
                        setDesigns((ds) =>
                          ds.map((dd) =>
                            dd.id === d.id
                              ? { ...dd, available: !dd.available }
                              : dd
                          )
                        )
                      }
                      style={{
                        width: 36,
                        height: 20,
                        borderRadius: 100,
                        background: d.available ? '#1a1a1a' : '#e0e0e0',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 2,
                          left: d.available ? 17 : 2,
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          background: '#fff',
                          transition: 'left 0.2s',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: d.available ? '#2d7a4a' : '#aaa',
                        fontWeight: 500,
                      }}
                    >
                      {d.available ? 'Live' : 'Hidden'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              style={{
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '11px 22px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              + Add new design
            </button>
          </div>
        )}

        {/* ── GUEST SPOTS ── */}
        {tab === 'guestspots' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            {guestSpots.length === 0 ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  padding: '48px 24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>✈️</div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 6,
                  }}
                >
                  No guest spots yet
                </div>
                <div style={{ fontSize: 13, color: '#aaa', marginBottom: 20 }}>
                  Add upcoming cities so clients can find and book you on the
                  road.
                </div>
                <button
                  onClick={() =>
                    setGuestSpots([
                      ...guestSpots,
                      {
                        city: 'Los Angeles, CA',
                        studio: 'Ink & Anchor',
                        dateFrom: 'Feb 10',
                        dateTo: 'Feb 12',
                        spotsLeft: 4,
                      },
                    ])
                  }
                  style={{
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 100,
                    padding: '10px 22px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  + Add a guest spot
                </button>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  {guestSpots.map((g, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#fff',
                        borderRadius: 14,
                        padding: '18px 20px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 14,
                        }}
                      >
                        <div
                          style={{
                            background: '#f5f5f5',
                            borderRadius: 10,
                            padding: '8px 14px',
                            textAlign: 'center',
                            minWidth: 80,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: '#1a1a1a',
                            }}
                          >
                            {g.dateFrom}
                          </div>
                          <div style={{ fontSize: 10, color: '#aaa' }}>
                            – {g.dateTo}
                          </div>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: '#1a1a1a',
                              marginBottom: 2,
                            }}
                          >
                            {g.city}
                          </div>
                          <div style={{ fontSize: 12, color: '#aaa' }}>
                            {g.studio}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            background:
                              g.spotsLeft <= 1 ? '#fff5f5' : '#f0faf4',
                            borderRadius: 100,
                            padding: '4px 12px',
                            fontSize: 12,
                            fontWeight: 500,
                            color: g.spotsLeft <= 1 ? '#e05c5c' : '#2d7a4a',
                          }}
                        >
                          {g.spotsLeft} spots left
                        </span>
                        <button
                          onClick={() =>
                            setGuestSpots((gs) =>
                              gs.filter((_, idx) => idx !== i)
                            )
                          }
                          style={{
                            background: 'none',
                            border: 'none',
                            fontSize: 12,
                            color: '#e05c5c',
                            fontWeight: 500,
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setGuestSpots([
                      ...guestSpots,
                      {
                        city: 'Miami, FL',
                        studio: 'Collins Ave Studio',
                        dateFrom: 'Mar 1',
                        dateTo: 'Mar 3',
                        spotsLeft: 3,
                      },
                    ])
                  }
                  style={{
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    padding: '11px 22px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  + Add another city
                </button>
              </>
            )}
          </div>
        )}

        {/* ── PROFILE ── */}
        {tab === 'profile' && (
          <div style={{ animation: 'fadeUp 0.3s ease', maxWidth: 560 }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '24px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}
                >
                  Profile Info
                </div>
                <button
                  onClick={() => setProfileEdit(!profileEdit)}
                  style={{
                    background: profileEdit ? '#1a1a1a' : '#f5f5f5',
                    color: profileEdit ? '#fff' : '#555',
                    border: 'none',
                    borderRadius: 100,
                    padding: '6px 16px',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {profileEdit ? 'Save changes' : 'Edit'}
                </button>
              </div>
              {[
                { label: 'Artist name', key: 'name' },
                { label: 'Instagram', key: 'instagram', prefix: '@' },
                { label: 'Home base', key: 'homeBase' },
                { label: 'Starting price', key: 'startingPrice', prefix: '$' },
              ].map((f) => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#666',
                      marginBottom: 6,
                    }}
                  >
                    {f.label}
                  </label>
                  {profileEdit ? (
                    <div style={{ position: 'relative' }}>
                      {f.prefix && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 13,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#bbb',
                            fontSize: 14,
                          }}
                        >
                          {f.prefix}
                        </div>
                      )}
                      <input
                        value={profile[f.key]}
                        onChange={(e) =>
                          setProfile((p) => ({ ...p, [f.key]: e.target.value }))
                        }
                        style={{
                          width: '100%',
                          background: '#fafafa',
                          border: '1.5px solid #ebebeb',
                          borderRadius: 10,
                          padding: `10px 14px 10px ${
                            f.prefix ? '28px' : '14px'
                          }`,
                          fontSize: 14,
                          color: '#1a1a1a',
                          outline: 'none',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        fontSize: 14,
                        color: '#1a1a1a',
                        padding: '10px 0',
                        borderBottom: '1px solid #f5f5f5',
                      }}
                    >
                      {f.prefix}
                      {profile[f.key]}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ marginBottom: 0 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#666',
                    marginBottom: 6,
                  }}
                >
                  Bio
                </label>
                {profileEdit ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile((p) => ({ ...p, bio: e.target.value }))
                    }
                    style={{
                      width: '100%',
                      background: '#fafafa',
                      border: '1.5px solid #ebebeb',
                      borderRadius: 10,
                      padding: '10px 14px',
                      fontSize: 14,
                      color: '#1a1a1a',
                      outline: 'none',
                      fontFamily: 'inherit',
                      height: 90,
                      resize: 'none',
                      lineHeight: 1.6,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                      padding: '6px 0',
                    }}
                  >
                    {profile.bio}
                  </div>
                )}
              </div>
            </div>

            {/* Tattoo styles */}
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '20px 24px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: 14,
                }}
              >
                Tattoo Styles
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {dashboardArtist.styles.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: '#f5f5f5',
                      borderRadius: 100,
                      padding: '6px 14px',
                      fontSize: 13,
                      color: '#555',
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </span>
                ))}
                <button
                  style={{
                    background: 'transparent',
                    border: '1.5px dashed #d0d0d0',
                    borderRadius: 100,
                    padding: '6px 14px',
                    fontSize: 13,
                    color: '#aaa',
                    cursor: 'pointer',
                  }}
                >
                  + Add style
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CLIENT LOGIN ─────────────────────────────────────────
function ClientLogin({ onNavigate }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = () => {
    if (!form.email || !form.password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('client-dashboard');
    }, 1200);
  };

  const handleGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('client-dashboard');
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '0 24px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          onClick={() => onNavigate('browse')}
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
          }}
        >
          flashd
        </div>
        <button
          onClick={() => onNavigate('browse')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 13,
            color: '#aaa',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          ← Back to browse
        </button>
      </header>

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            padding: '40px 36px',
            maxWidth: 400,
            width: '100%',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            animation: 'fadeUp 0.35s ease',
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
                fontStyle: 'italic',
                marginBottom: 6,
              }}
            >
              flashd
            </div>
            <div style={{ fontSize: 14, color: '#999' }}>
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </div>
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogle}
            style={{
              width: '100%',
              background: '#fff',
              border: '1.5px solid #ebebeb',
              borderRadius: 12,
              padding: '12px',
              fontSize: 14,
              fontWeight: 500,
              color: '#1a1a1a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 16,
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = '#1a1a1a')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = '#ebebeb')
            }
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div style={{ flex: 1, height: 1, background: '#f0f0f0' }} />
            <span style={{ fontSize: 12, color: '#ccc', fontWeight: 500 }}>
              or
            </span>
            <div style={{ flex: 1, height: 1, background: '#f0f0f0' }} />
          </div>

          {/* Form */}
          {mode === 'signup' && (
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#666',
                  marginBottom: 6,
                }}
              >
                Full name
              </label>
              <input
                value={form.name}
                onChange={(e) => setF('name', e.target.value)}
                placeholder="Your name"
                style={{
                  width: '100%',
                  background: '#fafafa',
                  border: '1.5px solid #ebebeb',
                  borderRadius: 10,
                  padding: '11px 14px',
                  fontSize: 14,
                  color: '#1a1a1a',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                color: '#666',
                marginBottom: 6,
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setF('email', e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                background: '#fafafa',
                border: '1.5px solid #ebebeb',
                borderRadius: 10,
                padding: '11px 14px',
                fontSize: 14,
                color: '#1a1a1a',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <label style={{ fontSize: 12, fontWeight: 600, color: '#666' }}>
                Password
              </label>
              {mode === 'login' && (
                <span
                  style={{ fontSize: 12, color: '#aaa', cursor: 'pointer' }}
                >
                  Forgot password?
                </span>
              )}
            </div>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setF('password', e.target.value)}
              placeholder="••••••••"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%',
                background: '#fafafa',
                border: '1.5px solid #ebebeb',
                borderRadius: 10,
                padding: '11px 14px',
                fontSize: 14,
                color: '#1a1a1a',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#e8e8e8' : '#1a1a1a',
              color: loading ? '#aaa' : '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '13px',
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 16,
              transition: 'background 0.15s',
            }}
          >
            {loading ? (
              <>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    border: '2px solid #ccc',
                    borderTopColor: '#999',
                    borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite',
                  }}
                />
                Signing in...
              </>
            ) : mode === 'login' ? (
              'Sign in'
            ) : (
              'Create account'
            )}
          </button>

          <div style={{ textAlign: 'center', fontSize: 13, color: '#aaa' }}>
            {mode === 'login'
              ? "Don't have an account? "
              : 'Already have an account? '}
            <span
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              style={{ color: '#1a1a1a', fontWeight: 600, cursor: 'pointer' }}
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CLIENT DASHBOARD ─────────────────────────────────────
const clientData = {
  name: 'Jordan Lee',
  email: 'jordan@email.com',
  avatar: 'JL',
  memberSince: 'Dec 2024',
};

const upcomingAppointments = [
  {
    id: 1,
    design: 'All-Seeing Eye',
    motif: '👁',
    artist: 'Maya Chen',
    city: 'New York, NY',
    date: 'Jan 14, 2025',
    time: '2:00 PM',
    deposit: 56,
    total: 280,
    status: 'confirmed',
  },
  {
    id: 2,
    design: 'Moth & Moon',
    motif: '🌙',
    artist: 'Maya Chen',
    city: 'New York, NY',
    date: 'Feb 3, 2025',
    time: '11:00 AM',
    deposit: 48,
    total: 240,
    status: 'pending',
  },
];

const pastTattoos = [
  {
    id: 1,
    design: 'Serpent',
    motif: '🐍',
    artist: 'Maya Chen',
    city: 'New York, NY',
    date: 'Nov 12, 2024',
    price: 180,
  },
  {
    id: 2,
    design: 'Red Rose',
    motif: '🌹',
    artist: 'Dario Reyes',
    city: 'Los Angeles, CA',
    date: 'Sep 4, 2024',
    price: 250,
  },
];

const savedDesigns = [
  {
    id: 1,
    design: 'Phoenix',
    motif: '🔥',
    artist: 'Lena Park',
    city: 'Miami',
    style: 'Watercolor',
    price: 350,
    available: true,
  },
  {
    id: 2,
    design: 'Death Moth',
    motif: '🦋',
    artist: 'Sable North',
    city: 'Chicago',
    style: 'Blackwork',
    price: 320,
    available: false,
  },
  {
    id: 3,
    design: 'Koi',
    motif: '🐟',
    artist: 'Lena Park',
    city: 'Miami',
    style: 'Watercolor',
    price: 200,
    available: true,
  },
];

const favoriteArtists = [
  {
    id: 1,
    name: 'Maya Chen',
    handle: 'mayaink',
    avatar: '🧑‍🎨',
    city: 'Brooklyn, NY',
    styles: ['Fine line', 'Blackwork'],
    nextAvailable: 'Jan 14',
  },
  {
    id: 2,
    name: 'Lena Park',
    handle: 'lenapark',
    avatar: '🌸',
    city: 'Miami, FL',
    styles: ['Watercolor', 'Botanical'],
    nextAvailable: 'Jan 22',
  },
];

const paymentHistory = [
  {
    id: 1,
    description: 'Deposit — All-Seeing Eye',
    artist: 'Maya Chen',
    date: 'Jan 2, 2025',
    amount: 56,
    status: 'paid',
  },
  {
    id: 2,
    description: 'Full payment — Serpent',
    artist: 'Maya Chen',
    date: 'Nov 12, 2024',
    amount: 180,
    status: 'paid',
  },
  {
    id: 3,
    description: 'Full payment — Red Rose',
    artist: 'Dario Reyes',
    date: 'Sep 4, 2024',
    amount: 250,
    status: 'paid',
  },
  {
    id: 4,
    description: 'Deposit — Moth & Moon',
    artist: 'Maya Chen',
    date: 'Dec 28, 2024',
    amount: 48,
    status: 'paid',
  },
];

function ClientDashboard({ onNavigate }) {
  const [tab, setTab] = useState('overview');
  const [saved, setSaved] = useState(savedDesigns);

  const tabs = [
    { key: 'overview', label: 'Overview' },
    {
      key: 'appointments',
      label: `Appointments (${upcomingAppointments.length})`,
    },
    { key: 'saved', label: `Saved (${saved.length})` },
    { key: 'artists', label: 'Artists' },
    { key: 'payments', label: 'Payments' },
  ];

  const statusColors = {
    confirmed: { bg: '#f0faf4', color: '#2d7a4a' },
    pending: { bg: '#fff8e6', color: '#b8860b' },
    paid: { bg: '#f0faf4', color: '#2d7a4a' },
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Header */}
      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '0 24px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          onClick={() => onNavigate('browse')}
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
          }}
        >
          flashd
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              {clientData.avatar}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>
              {clientData.name}
            </span>
          </div>
          <button
            onClick={() => onNavigate('browse')}
            style={{
              background: '#f5f5f5',
              border: 'none',
              borderRadius: 100,
              padding: '7px 14px',
              fontSize: 12,
              fontWeight: 500,
              color: '#555',
              cursor: 'pointer',
            }}
          >
            Browse flash →
          </button>
        </div>
      </header>

      <div
        style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px 60px' }}
      >
        {/* Page title */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              marginBottom: 4,
            }}
          >
            My Dashboard
          </div>
          <div style={{ fontSize: 13, color: '#aaa' }}>
            Member since {clientData.memberSince}
          </div>
        </div>

        {/* Tab nav */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            borderBottom: '1px solid #efefef',
            marginBottom: 28,
            overflowX: 'auto',
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom:
                  tab === t.key ? '2px solid #1a1a1a' : '2px solid transparent',
                padding: '10px 16px',
                fontSize: 13,
                fontWeight: tab === t.key ? 600 : 500,
                color: tab === t.key ? '#1a1a1a' : '#aaa',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                marginBottom: -1,
                transition: 'all 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {tab === 'overview' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: 14,
                marginBottom: 28,
              }}
            >
              {[
                {
                  label: 'Tattoos',
                  value: pastTattoos.length,
                  sub: 'completed',
                  color: '#1a1a1a',
                  bg: '#f5f5f5',
                },
                {
                  label: 'Upcoming',
                  value: upcomingAppointments.length,
                  sub: 'booked',
                  color: '#2d7a4a',
                  bg: '#f0faf4',
                },
                {
                  label: 'Saved designs',
                  value: saved.length,
                  sub: 'on wishlist',
                  color: '#1a1a1a',
                  bg: '#f5f5f5',
                },
                {
                  label: 'Fav artists',
                  value: favoriteArtists.length,
                  sub: 'following',
                  color: '#1a1a1a',
                  bg: '#f5f5f5',
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '18px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 8,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      background: s.bg,
                      color: s.color,
                      borderRadius: 100,
                      padding: '3px 10px',
                      fontSize: 11,
                      fontWeight: 500,
                      display: 'inline-block',
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Next appointment */}
            {upcomingAppointments.length > 0 && (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  padding: '20px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#aaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 14,
                  }}
                >
                  Next Appointment
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      flexShrink: 0,
                    }}
                  >
                    {upcomingAppointments[0].motif}
                  </div>
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {upcomingAppointments[0].design}
                    </div>
                    <div style={{ fontSize: 13, color: '#999' }}>
                      with {upcomingAppointments[0].artist} ·{' '}
                      {upcomingAppointments[0].city}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {upcomingAppointments[0].date}
                    </div>
                    <div style={{ fontSize: 13, color: '#aaa' }}>
                      {upcomingAppointments[0].time}
                    </div>
                  </div>
                  <span
                    style={{
                      background:
                        statusColors[upcomingAppointments[0].status].bg,
                      color: statusColors[upcomingAppointments[0].status].color,
                      borderRadius: 100,
                      padding: '5px 14px',
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    {upcomingAppointments[0].status}
                  </span>
                </div>
              </div>
            )}

            {/* Saved designs preview */}
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}
                >
                  Saved Designs
                </div>
                <button
                  onClick={() => setTab('saved')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 12,
                    color: '#aaa',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  View all →
                </button>
              </div>
              {saved.slice(0, 3).map((d, i) => (
                <div
                  key={d.id}
                  style={{
                    padding: '14px 20px',
                    borderBottom: i < 2 ? '1px solid #f8f8f8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {d.motif}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 1,
                      }}
                    >
                      {d.design}
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>
                      {d.artist} · {d.style}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}
                  >
                    ${d.price}
                  </div>
                  {d.available ? (
                    <button
                      onClick={() => onNavigate('browse')}
                      style={{
                        background: '#1a1a1a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '6px 14px',
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Book
                    </button>
                  ) : (
                    <span
                      style={{
                        background: '#f5f5f5',
                        color: '#bbb',
                        borderRadius: 8,
                        padding: '6px 12px',
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Claimed
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── APPOINTMENTS ── */}
        {tab === 'appointments' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            {upcomingAppointments.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#aaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 12,
                  }}
                >
                  Upcoming
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    marginBottom: 28,
                  }}
                >
                  {upcomingAppointments.map((a) => (
                    <div
                      key={a.id}
                      style={{
                        background: '#fff',
                        borderRadius: 14,
                        padding: '20px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: 14,
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: 12,
                            background: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 26,
                            flexShrink: 0,
                          }}
                        >
                          {a.motif}
                        </div>
                        <div style={{ flex: 1, minWidth: 160 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              marginBottom: 4,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 15,
                                fontWeight: 600,
                                color: '#1a1a1a',
                              }}
                            >
                              {a.design}
                            </div>
                            <span
                              style={{
                                background: statusColors[a.status].bg,
                                color: statusColors[a.status].color,
                                borderRadius: 100,
                                padding: '2px 10px',
                                fontSize: 11,
                                fontWeight: 600,
                                textTransform: 'capitalize',
                              }}
                            >
                              {a.status}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              color: '#aaa',
                              marginBottom: 8,
                            }}
                          >
                            with {a.artist} · {a.city}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: 16,
                              flexWrap: 'wrap',
                            }}
                          >
                            {[
                              ['Date', a.date],
                              ['Time', a.time],
                              ['Deposit paid', `$${a.deposit}`],
                              [
                                'Remaining',
                                `$${a.total - a.deposit} at studio`,
                              ],
                            ].map(([k, v]) => (
                              <div key={k}>
                                <div
                                  style={{
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: '#ccc',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                  }}
                                >
                                  {k}
                                </div>
                                <div
                                  style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: '#1a1a1a',
                                  }}
                                >
                                  {v}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#aaa',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 12,
              }}
            >
              Past tattoos
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              {pastTattoos.map((t, i) => (
                <div
                  key={t.id}
                  style={{
                    padding: '16px 20px',
                    borderBottom:
                      i < pastTattoos.length - 1 ? '1px solid #f8f8f8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                      filter: 'grayscale(0.3)',
                    }}
                  >
                    {t.motif}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {t.design}
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>
                      by {t.artist} · {t.date}
                    </div>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#aaa' }}>
                    ${t.price}
                  </div>
                  <span
                    style={{
                      background: '#f5f5f5',
                      color: '#888',
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    Completed
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SAVED ── */}
        {tab === 'saved' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            {saved.length === 0 ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  padding: '60px 24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>🤍</div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 6,
                  }}
                >
                  No saved designs yet
                </div>
                <div style={{ fontSize: 13, color: '#aaa', marginBottom: 20 }}>
                  Browse flash and save designs you love.
                </div>
                <button
                  onClick={() => onNavigate('browse')}
                  style={{
                    background: '#1a1a1a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 100,
                    padding: '10px 22px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Browse flash →
                </button>
              </div>
            ) : (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                {saved.map((d, i) => (
                  <div
                    key={d.id}
                    style={{
                      padding: '16px 20px',
                      borderBottom:
                        i < saved.length - 1 ? '1px solid #f8f8f8' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                        flexShrink: 0,
                        opacity: d.available ? 1 : 0.4,
                      }}
                    >
                      {d.motif}
                    </div>
                    <div style={{ flex: 1, minWidth: 140 }}>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#1a1a1a',
                          marginBottom: 2,
                        }}
                      >
                        {d.design}
                      </div>
                      <div style={{ fontSize: 12, color: '#aaa' }}>
                        {d.artist} · {d.style} · {d.city}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: '#1a1a1a',
                      }}
                    >
                      ${d.price}
                    </div>
                    <div
                      style={{ display: 'flex', gap: 8, alignItems: 'center' }}
                    >
                      {d.available ? (
                        <button
                          onClick={() => onNavigate('browse')}
                          style={{
                            background: '#1a1a1a',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '7px 16px',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Book now
                        </button>
                      ) : (
                        <span
                          style={{
                            background: '#f5f5f5',
                            color: '#bbb',
                            borderRadius: 8,
                            padding: '7px 12px',
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Claimed
                        </span>
                      )}
                      <button
                        onClick={() =>
                          setSaved((s) => s.filter((x) => x.id !== d.id))
                        }
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: 12,
                          color: '#e05c5c',
                          fontWeight: 500,
                          cursor: 'pointer',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── ARTISTS ── */}
        {tab === 'artists' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {favoriteArtists.map((a) => (
                <div
                  key={a.id}
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '20px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                      flexShrink: 0,
                    }}
                  >
                    {a.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {a.name}
                    </div>
                    <div
                      style={{ fontSize: 12, color: '#aaa', marginBottom: 8 }}
                    >
                      @{a.handle} · {a.city}
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {a.styles.map((s) => (
                        <span
                          key={s}
                          style={{
                            background: '#f5f5f5',
                            borderRadius: 100,
                            padding: '3px 10px',
                            fontSize: 11,
                            color: '#555',
                            fontWeight: 500,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{ fontSize: 11, color: '#aaa', marginBottom: 4 }}
                    >
                      Next available
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#2d7a4a',
                        marginBottom: 10,
                      }}
                    >
                      {a.nextAvailable}
                    </div>
                    <button
                      onClick={() => onNavigate('artist', { artistId: a.id })}
                      style={{
                        background: '#1a1a1a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '7px 16px',
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      View profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <button
                onClick={() => onNavigate('browse')}
                style={{
                  background: 'none',
                  border: '1.5px solid #ebebeb',
                  borderRadius: 100,
                  padding: '10px 22px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#555',
                  cursor: 'pointer',
                }}
              >
                Discover more artists →
              </button>
            </div>
          </div>
        )}

        {/* ── PAYMENTS ── */}
        {tab === 'payments' && (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #f0f0f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}
                >
                  Payment History
                </div>
                <div
                  style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}
                >
                  Total: ${paymentHistory.reduce((s, p) => s + p.amount, 0)}
                </div>
              </div>
              {paymentHistory.map((p, i) => (
                <div
                  key={p.id}
                  style={{
                    padding: '14px 20px',
                    borderBottom:
                      i < paymentHistory.length - 1
                        ? '1px solid #f8f8f8'
                        : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        marginBottom: 2,
                      }}
                    >
                      {p.description}
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa' }}>
                      {p.artist} · {p.date}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}
                  >
                    ${p.amount}
                  </div>
                  <span
                    style={{
                      background: statusColors[p.status].bg,
                      color: statusColors[p.status].color,
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── EMAIL SIGNUP WIDGET ──────────────────────────────────
function EmailWidget() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSubmit = () => {
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
      }}
    >
      {/* Expanded panel */}
      {open && (
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
            border: '1px solid #efefef',
            width: 300,
            overflow: 'hidden',
            animation: 'popUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            transformOrigin: 'bottom left',
          }}
        >
          {submitted ? (
            <div style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🖤</div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 6,
                }}
              >
                You're in.
              </div>
              <div style={{ fontSize: 13, color: '#999', lineHeight: 1.6 }}>
                We'll let you know when new flash drops in your city.
              </div>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  marginTop: 16,
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: 100,
                  padding: '8px 20px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#888',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div
                style={{
                  background: '#1a1a1a',
                  padding: '16px 18px 14px',
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 12,
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    fontSize: 16,
                    cursor: 'pointer',
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 3,
                  }}
                >
                  New flash. First to know.
                </div>
                <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>
                  Get notified when artists drop new designs or announce guest
                  spots in your city.
                </div>
              </div>

              {/* Form */}
              <div style={{ padding: '16px 18px 18px' }}>
                <div style={{ marginBottom: 10 }}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="your@email.com"
                    type="email"
                    style={{
                      width: '100%',
                      background: '#f5f5f5',
                      border: '1.5px solid #ebebeb',
                      borderRadius: 10,
                      padding: '10px 13px',
                      fontSize: 14,
                      color: '#1a1a1a',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    background: email.includes('@') ? '#1a1a1a' : '#e8e8e8',
                    color: email.includes('@') ? '#fff' : '#aaa',
                    border: 'none',
                    borderRadius: 10,
                    padding: '11px',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: email.includes('@') ? 'pointer' : 'default',
                    transition: 'all 0.15s',
                  }}
                >
                  Notify me →
                </button>
                <div
                  style={{
                    fontSize: 11,
                    color: '#ccc',
                    marginTop: 8,
                    textAlign: 'center',
                  }}
                >
                  No spam. Unsubscribe anytime.
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          if (submitted) {
            setSubmitted(false);
            setEmail('');
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: open ? '#333' : '#1a1a1a',
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: '11px 18px',
          fontSize: 13,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          boxShadow: hovered
            ? '0 6px 24px rgba(0,0,0,0.2)'
            : '0 3px 12px rgba(0,0,0,0.15)',
          transform: hovered ? 'translateY(-2px)' : 'none',
          transition: 'all 0.18s ease',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 15 }}>✉️</span>
        {open ? 'Close' : 'Get flash drops'}
      </button>
    </div>
  );
}
