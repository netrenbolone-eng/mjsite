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

      {/* ───────── 4. Финал ───────── */}
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
