import Image from 'next/image';
import { DISCORD_URL } from './config';

function Brand() {
  return (
    <span className="brand display">
      <span className="t-red">М</span>
      <span className="t-gold">/</span>
      <span className="t-blue">Ж</span>
    </span>
  );
}

const CARDS = [
  {
    num: '01',
    color: 't-red',
    title: 'Голос',
    text: 'Заходишь в общий канал и сразу слышишь, кто сегодня на связи.',
    icon: (
      <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#C8AA6E" strokeWidth="1">
        <circle cx="28" cy="28" r="22" opacity=".35" />
        <path d="M28 6A22 22 0 1 1 8 38" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: '02',
    color: 't-gold',
    title: 'Игра',
    text: 'Собираемся в команды: быстро, шумно и без лишней серьёзности.',
    icon: (
      <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#C8AA6E" strokeWidth="1">
        <circle cx="28" cy="28" r="16" />
        <path d="M28 4V18M28 38V52M4 28H18M38 28H52" />
      </svg>
    ),
  },
  {
    num: '03',
    color: 't-blue',
    title: 'Разговоры',
    text: 'Когда игра закончилась, разговор только начинается.',
    icon: (
      <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#C8AA6E" strokeWidth="1">
        <path d="M28 6L46 28L28 50L10 28Z" />
        <path d="M28 18V32" strokeWidth="2" />
        <circle cx="28" cy="38" r="1.4" />
      </svg>
    ),
  },
];

const LEGENDS = [
  {
    id: '01',
    portrait: '/legends/legend-01.jpg',
    name: 'Мастер тихих решений',
    description: 'Находит выход там, где остальные видят только тупик.',
    className: 'legend-west',
  },
  {
    id: '02',
    portrait: '/legends/legend-02.jpg',
    name: 'Хранитель рубежа',
    description: 'Сохраняет хладнокровие и прикрывает тех, кто рядом.',
    className: 'legend-east',
  },
  {
    id: '03',
    portrait: '/legends/legend-03.jpg',
    name: 'Страж перевала',
    description: 'Не отступает перед трудным маршрутом и первым замечает опасность.',
    className: 'legend-south-west',
  },
  {
    id: '04',
    portrait: '/legends/legend-04.jpg',
    name: 'Повелитель искры',
    description: 'Умеет зажечь интерес к делу и собрать вокруг себя людей.',
    className: 'legend-south-east',
  },
];

export default function Home() {
  return (
    <main>
      {/* ───────── 1. Шапка ───────── */}
      <header className="section hero" id="top">
        <div className="wrap hero-wrap">
          <svg aria-hidden="true" className="map" viewBox="0 0 100 100" fill="none" stroke="#C8AA6E" strokeWidth=".35">
            <rect x="4" y="4" width="92" height="92" />
            <path d="M4 96L96 4M4 4V96H96M4 4H96V96" />
            <path d="M4 4L96 96" strokeDasharray="1.5 1.5" />
            <circle cx="12" cy="88" r="7" />
            <circle cx="88" cy="12" r="7" />
            <circle cx="50" cy="50" r="5" />
            <circle cx="4" cy="50" r="1.6" />
            <circle cx="50" cy="96" r="1.6" />
            <circle cx="96" cy="50" r="1.6" />
            <circle cx="50" cy="4" r="1.6" />
          </svg>
          <div className="glow" />
          <div className="ring-gold" />
          <Image
            className="logo"
            src="/logo-moon.png"
            alt="Логотип М/Ж: волк на фоне луны"
            width={440}
            height={440}
            priority
          />
          <div className="orb orb-a" />
          <div className="orb orb-b" />

          <nav className="nav">
            <Brand />
            <div className="nav-links">
              <a className="nav-link" href="#community">О сервере</a>
              <a className="nav-link" href="#evenings">Вечера</a>
              <a className="nav-link" href="#legends">Легенды</a>
              <a className="nav-link" href="#join">Сообщество</a>
              <a className="btn-ghost" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                ОТКРЫТЬ DISCORD
              </a>
            </div>
          </nav>

          <div className="hero-copy">
            <div className="label">СООБЩЕСТВО В DISCORD</div>
            <h1 className="bands display">
              <span className="band band-red">Мужское</span>
              <br />
              <span className="band band-blue">Женское</span>
            </h1>
            <p className="hero-lead">
              Голоса в эфире, общий стол и вечера, которые заканчиваются позже, чем планировалось.
            </p>
          </div>

          <div className="hero-foot">
            <span>71 УЧАСТНИК</span>
            <a className="t-gold" href="#evenings">ЛИСТАЙ ВНИЗ</a>
          </div>
        </div>
      </header>

      {/* ───────── 2. Каждый вечер в эфире ───────── */}
      <section className="section evenings" id="evenings">
        <svg aria-hidden="true" className="reticle" viewBox="0 0 100 100" fill="none" stroke="#C8AA6E" strokeWidth=".3">
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="34" strokeDasharray="2 1.5" />
          <path d="M50 0V22M50 78V100M0 50H22M78 50H100" />
        </svg>
        <div className="wrap pad">
          <div className="label">КАЖДЫЙ ВЕЧЕР</div>
          <h2 className="big display">В ЭФИРЕ</h2>
          <div className="cards">
            {CARDS.map((c) => (
              <article className="card" key={c.num}>
                <div className="card-top">
                  <div className={`num display ${c.color}`}>{c.num}</div>
                  {c.icon}
                </div>
                <h3 className="display">{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. Общий стол ───────── */}
      <section className="section community" id="community">
        <div className="wrap pad community-wrap">
          <div className="community-text">
            <div className="label">ВСЁ В ОДНОМ МЕСТЕ</div>
            <h2 className="big2 display">ОБЩИЙ СТОЛ</h2>
            <p>
              Каналы для разговоров и новостей, голосовые комнаты на любую компанию и события, о которых не забудешь.
            </p>
            <div className="rule" />
          </div>

          <div className="panel" aria-label="Макет сервера Discord">
            <div className="side">
              <div className="head display">
                <Brand />
              </div>
              <span className="cap">ТЕКСТ</span>
              <span className="active"># общий</span>
              <span># вечера</span>
              <span># клипы</span>
              <span className="cap gap">ГОЛОС</span>
              <span>Лобби</span>
              <span>Тихая комната</span>
            </div>
            <div className="chat">
              <div className="title display"># общий</div>
              <div className="msg">
                <div className="ava ava-red" />
                <div>
                  <div className="who">Участник 1</div>
                  <div className="say">Кто сегодня на связи?</div>
                </div>
              </div>
              <div className="msg">
                <div className="ava ava-blue" />
                <div>
                  <div className="who">Участник 2</div>
                  <div className="say">Я уже в голосовом, заходи.</div>
                </div>
              </div>
              <div className="voice">В голосовом сейчас: 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4. Легенды МЖ ───────── */}
      <section className="section legends" id="legends">
        <div className="wrap pad legends-wrap">
          <div className="label">ЛЕГЕНДЫ МЖ</div>
          <h2 className="big display legends-title">Обладатели колец власти</h2>
          <div className="legend-board">
            <svg aria-hidden="true" className="legend-map" viewBox="0 0 1200 640" preserveAspectRatio="none">
              <path className="map-land" d="M0 105 136 42l112 28 79-46 105 35 89-22 115 56 93-15 80 46 95-18 83 63 119-16 94 61v348l-117 32-112-23-95 34-93-28-109 40-105-44-99 21-91-48-86 10-81-47-107 8-88-72Z" />
              <path className="map-contour" d="m61 170 130-63 95 18 67-47 113 37 81-31 98 57 89-15 87 49 103-21 73 60 124-18M37 241l130-55 114 28 90-52 96 37 111-36 104 54 100-21 96 53 89-16 116 50M45 457l121-37 94 24 96-36 104 42 100-30 98 44 108-26 94 44 112-30 88 39M109 519l111-24 86 31 101-26 100 35 99-26 105 35 91-25 100 37" />
              <path className="map-river" d="M0 320c117-61 155 79 267 26s128-90 234-39 121 131 234 75 153-128 262-63 114 87 203 44" />
              <path className="map-road" d="M115 113c74 91 45 169 157 207s122 21 202 108 164 83 267 10 126-119 240-81 127 61 199 31M1030 93c-73 77-81 146-162 174s-124 16-195 81-103 108-214 104" />
              <path className="legend-connection" d="M164 178C340 106 492 150 600 310S855 494 1036 432" />
              <g className="map-sites">
                <circle cx="177" cy="156" r="5" /><circle cx="509" cy="118" r="5" />
                <circle cx="906" cy="166" r="5" /><circle cx="311" cy="451" r="5" />
                <circle cx="741" cy="503" r="5" /><circle cx="1059" cy="405" r="5" />
              </g>
            </svg>
            {LEGENDS.map((legend) => (
              <article className={`legend-person ${legend.className}`} key={legend.id}>
                <div
                  className="legend-portrait"
                  role="img"
                  aria-label={`Портрет: ${legend.name}`}
                  style={{ backgroundImage: `linear-gradient(180deg, transparent 55%, rgba(7, 11, 20, .88)), url('${legend.portrait}')` }}
                >
                  <span className="legend-number display">{legend.id}</span>
                </div>
                <h3 className="display">{legend.name}</h3>
                <p>{legend.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 5. Финал ───────── */}
      <section className="section join" id="join">
        <svg aria-hidden="true" className="join-ring" viewBox="0 0 100 100" fill="none" stroke="#C8AA6E" strokeWidth=".3">
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="40" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="28" opacity=".6" />
        </svg>
        <div className="wrap join-wrap">
          <div className="join-center">
            <div className="label">КТО ЗНАЕТ</div>
            <h2 className="join-title display">ВОЗМОЖНО, ДЕСЯТОЕ КОЛЬЦО ВЫБЕРЕТ ТЕБЯ</h2>
            <a className="btn-ghost btn-big" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              ЗАГЛЯНУТЬ НА СЕРВЕР
            </a>
          </div>
          <footer className="foot">
            <Brand />
            <span>
              Неофициальное сообщество. Не связано с телепередачей, Первым каналом и правообладателями игр.
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}
