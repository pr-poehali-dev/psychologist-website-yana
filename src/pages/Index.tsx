import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL = "https://cdn.poehali.dev/projects/f200f79b-6624-40d2-a802-26ec0d649146/files/39f18c59-5b4c-4cfb-83ee-0b75fbc36804.jpg";

function useSectionFade() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-fade");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const NAV_LINKS = [
  { label: "О психологе", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Подход", href: "#approach" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Блог", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    icon: "User",
    title: "Индивидуальная консультация",
    desc: "Личная сессия 50 минут — пространство, где вас услышат без осуждения",
    price: "от 4 000 ₽",
  },
  {
    icon: "Users",
    title: "Работа с парами",
    desc: "Помогаю восстановить доверие, улучшить коммуникацию и найти общий язык",
    price: "от 6 000 ₽",
  },
  {
    icon: "Video",
    title: "Онлайн-сессия",
    desc: "Та же глубина работы — без необходимости приезжать в офис",
    price: "от 3 500 ₽",
  },
  {
    icon: "BookOpen",
    title: "Тематический курс",
    desc: "Структурированная программа из 8 встреч по конкретной теме",
    price: "от 25 000 ₽",
  },
];

const APPROACH_ITEMS = [
  {
    num: "01",
    title: "Безопасное пространство",
    desc: "Конфиденциальность и принятие — основа нашей работы. Здесь нет правильных и неправильных чувств.",
  },
  {
    num: "02",
    title: "Доказательные методы",
    desc: "КПТ, гештальт-терапия, EMDR — выбираю подход исходя из вашего запроса и особенностей.",
  },
  {
    num: "03",
    title: "Работа на результат",
    desc: "Формулируем конкретные цели и движемся к ним шаг за шагом — без бесконечного «прорабатывания».",
  },
  {
    num: "04",
    title: "Уважение к темпу",
    desc: "Вы сами решаете, насколько глубоко погружаться. Я следую за вами, не тороплю.",
  },
];

const REVIEWS = [
  {
    name: "Анна К.",
    text: "Яна помогла мне справиться с паническими атаками за 3 месяца работы. Теперь я знаю, что делать в сложные моменты, и живу намного спокойнее.",
    stars: 5,
    tag: "Тревожность",
  },
  {
    name: "Михаил Р.",
    text: "Поначалу скептически относился к психологии. Но работа с Яной оказалась очень практичной — никакой воды, только конкретные инструменты.",
    stars: 5,
    tag: "Выгорание",
  },
  {
    name: "Светлана М.",
    text: "Работали с темой отношений с мамой. За полгода изменилось многое — и в отношениях, и в том, как я воспринимаю себя.",
    stars: 5,
    tag: "Семья",
  },
];

const BLOG_POSTS = [
  {
    date: "12 апреля 2026",
    tag: "Тревога",
    title: "Почему тревога нарастает вечером и что с этим делать",
    preview: "Вечерняя тревога — очень распространённое явление. Разбираем физиологию и простые техники, которые работают.",
  },
  {
    date: "3 апреля 2026",
    tag: "Отношения",
    title: "5 признаков того, что вы застряли в одном и том же паттерне",
    preview: "Повторяющиеся ситуации в отношениях — не случайность. Объясняю, как это работает и почему мы это не замечаем.",
  },
  {
    date: "22 марта 2026",
    tag: "Самооценка",
    title: "Синдром самозванца: откуда берётся и как с ним жить",
    preview: "Чувство, что вас «раскроют» — знакомо многим успешным людям. Разбираем механизм и что с этим делать.",
  },
];

const FAQS = [
  {
    q: "Как проходит первая консультация?",
    a: "Первая встреча — знакомство. Вы рассказываете, что привело к психологу, я задаю вопросы. В конце обсуждаем, как можно работать дальше.",
  },
  {
    q: "Как часто нужно встречаться?",
    a: "Обычно 1 раз в неделю — это даёт хороший темп. В острых ситуациях можем встречаться чаще, при стабилизации — реже.",
  },
  {
    q: "Вы работаете только онлайн или можно прийти лично?",
    a: "Работаю и онлайн, и очно. Офис находится в центре Москвы. Онлайн-сессии провожу через видеосвязь — качество работы не отличается.",
  },
  {
    q: "Конфиденциально ли то, что я рассказываю?",
    a: "Полностью. Всё, что вы говорите на сессии, остаётся между нами. Исключение — только ситуации непосредственной угрозы жизни.",
  },
  {
    q: "Сколько сессий понадобится?",
    a: "Зависит от запроса. Конкретная задача может решиться за 5–10 встреч. Более глубокая работа — 6–12 месяцев. Обсуждаем индивидуально.",
  },
];

const CALENDAR_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const CALENDAR_SLOTS = [
  [null, "10:00", "11:00", null, "13:00", null, null],
  ["9:00", null, "11:00", "12:00", null, "14:00", null],
  [null, "10:00", null, "12:00", "13:00", null, null],
  ["9:00", "10:00", null, null, "13:00", "14:00", null],
];

export default function Index() {
  useSectionFade();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleBook(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot || !bookingName || !bookingPhone) return;
    setBooked(true);
  }

  return (
    <div className="min-h-screen" style={{ background: "#fdfbf7", color: "#2a2a2a" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(253,251,247,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8d4b0" }}
      >
        <a href="#" className="font-cormorant text-2xl font-light tracking-wide" style={{ color: "#2a2a2a" }}>
          Яна Соколова
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-golos text-sm font-medium transition-colors"
              style={{ color: "#5a5a5a" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#booking"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-golos transition-all hover:opacity-90"
          style={{ background: "#3c643b", color: "#fdfbf7" }}
        >
          Записаться
        </a>
        <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          <Icon name={mobileMenu ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 pb-8 px-6 gap-6" style={{ background: "#fdfbf7" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-cormorant text-2xl font-light" onClick={() => setMobileMenu(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full font-medium"
            style={{ background: "#3c643b", color: "#fdfbf7" }}
            onClick={() => setMobileMenu(false)}
          >
            Записаться на консультацию
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-20"
        style={{ background: "linear-gradient(135deg, #fdfbf7 0%, #f3e8d3 55%, #c8d9c7 100%)" }}
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div style={{ animation: "fade-up 0.8s ease-out both" }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-golos mb-8"
              style={{ background: "#c8d9c7", color: "#305030" }}
            >
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#4f7f4d" }}></span>
              Принимаю новых клиентов
            </div>

            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6" style={{ color: "#1a1a1a" }}>
              Пространство,
              <br />
              <em className="font-light not-italic" style={{ color: "#3c643b" }}>где вас услышат</em>
            </h1>

            <p className="font-golos text-lg leading-relaxed mb-10" style={{ color: "#5a5a5a", maxWidth: "480px" }}>
              Я помогаю справляться с тревогой, выгоранием и трудностями в отношениях.
              Работаю онлайн и в Москве.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-golos transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: "#3c643b", color: "#fdfbf7" }}
              >
                Записаться на сессию
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-golos border transition-all hover:bg-white"
                style={{ borderColor: "#9fbf9d", color: "#305030" }}
              >
                Узнать обо мне
              </a>
            </div>

            <div className="flex gap-8 mt-12 pt-12" style={{ borderTop: "1px solid #e8d4b0" }}>
              {[["8+", "лет практики"], ["500+", "клиентов"], ["94%", "рекомендуют"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-semibold" style={{ color: "#3c643b" }}>{num}</div>
                  <div className="font-golos text-sm" style={{ color: "#7a7a7a" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #c8d9c7 0%, #e8d4b0 100%)",
                transform: "rotate(3deg) scale(0.95)",
                zIndex: 0,
              }}
            />
            <img
              src={PHOTO_URL}
              alt="Яна Соколова — психолог"
              className="relative rounded-3xl object-cover shadow-xl"
              style={{ width: "100%", maxWidth: "460px", height: "540px", objectFit: "cover", zIndex: 1 }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 flex items-center gap-3"
              style={{ background: "rgba(253,251,247,0.9)", backdropFilter: "blur(10px)", zIndex: 2 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#c8d9c7" }}>
                <Icon name="Award" size={18} />
              </div>
              <div>
                <div className="font-golos text-sm font-medium" style={{ color: "#1a1a1a" }}>Клинический психолог</div>
                <div className="font-golos text-xs" style={{ color: "#7a7a7a" }}>МГУ им. Ломоносова, 2016</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-20 section-fade">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#e4ece4", color: "#3c643b" }}
            >
              О психологе
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              Яна Соколова —<br />
              <em className="not-italic" style={{ color: "#3c643b" }}>клинический психолог</em>
            </h2>
            <p className="font-golos text-base leading-relaxed mb-6" style={{ color: "#5a5a5a" }}>
              Более 8 лет я помогаю людям разобраться в себе — в том, почему жизнь идёт не так, как хотелось бы, и как это изменить.
            </p>
            <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "#5a5a5a" }}>
              Я работаю с тревогой, депрессией, самооценкой, кризисами и отношениями. Мой подход — тёплый и в то же время чёткий: мы работаем на конкретный результат.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["🎓", "МГУ, клиническая психология"],
                ["📜", "Сертификат КПТ, Москва"],
                ["🌿", "Гештальт-терапия, 3 года обучения"],
                ["🏆", "EMDR — травматерапия"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#f3e8d3" }}>
                  <span className="text-lg">{icon}</span>
                  <span className="font-golos text-sm" style={{ color: "#3a3a3a" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, #e4ece4 0%, #f3e8d3 100%)" }}>
              <blockquote className="font-cormorant text-2xl md:text-3xl font-light italic leading-relaxed mb-6" style={{ color: "#305030" }}>
                «Психотерапия — это не про бесконечные разговоры о прошлом. Это про то, чтобы жить иначе — уже сейчас.»
              </blockquote>
              <div className="font-golos text-sm" style={{ color: "#6a7a6a" }}>— Яна Соколова</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 section-fade" style={{ background: "#f4f7f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#c8d9c7", color: "#3c643b" }}
            >
              Услуги
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
              Форматы работы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ background: "#fdfbf7", border: "1px solid #e8d4b0" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#e4ece4" }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="font-cormorant text-xl font-medium" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                <p className="font-golos text-sm leading-relaxed flex-1" style={{ color: "#6a6a6a" }}>{s.desc}</p>
                <div className="font-golos text-sm font-semibold pt-2" style={{ color: "#3c643b", borderTop: "1px solid #e8d4b0" }}>
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-24 px-6 md:px-12 lg:px-20 section-fade">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#e4ece4", color: "#3c643b" }}
            >
              Подход
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
              Как я работаю
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {APPROACH_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 p-8 rounded-2xl transition-all hover:shadow-md"
                style={{ background: "#fdfbf7", border: "1px solid #e8d4b0" }}
              >
                <div className="font-cormorant text-4xl font-light flex-shrink-0" style={{ color: "#c8d9c7", lineHeight: 1 }}>
                  {item.num}
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium mb-2" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "#6a6a6a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-24 px-6 md:px-12 lg:px-20 section-fade"
        style={{ background: "linear-gradient(135deg, #e4ece4 0%, #f3e8d3 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#c8d9c7", color: "#3c643b" }}
            >
              Онлайн-запись
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
              Выберите удобное время
            </h2>
            <p className="font-golos text-base mt-4" style={{ color: "#5a5a5a" }}>
              Ближайшие доступные слоты на этой неделе
            </p>
          </div>

          {booked ? (
            <div
              className="text-center py-16 rounded-3xl"
              style={{ background: "#fdfbf7", border: "2px solid #9fbf9d" }}
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-cormorant text-3xl font-light mb-3" style={{ color: "#305030" }}>
                Запись подтверждена!
              </h3>
              <p className="font-golos text-base" style={{ color: "#5a5a5a" }}>
                Я свяжусь с вами в течение часа для подтверждения.<br />
                Слот: <strong>{selectedSlot}</strong>
              </p>
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: "#fdfbf7" }}>
              <div className="p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="w-16"></th>
                        {CALENDAR_DAYS.map((d) => (
                          <th key={d} className="font-golos text-sm font-medium pb-4 text-center" style={{ color: "#7a7a7a" }}>
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {CALENDAR_SLOTS.map((row, wi) => (
                        <tr key={wi}>
                          <td className="font-golos text-xs pr-3 pb-3" style={{ color: "#aaa" }}>
                            Нед {wi + 1}
                          </td>
                          {row.map((slot, di) => (
                            <td key={di} className="pb-3 px-1 text-center">
                              {slot ? (
                                <button
                                  onClick={() => setSelectedSlot(`${CALENDAR_DAYS[di]}, нед. ${wi + 1}, ${slot}`)}
                                  className="w-full px-2 py-2 rounded-lg font-golos text-xs font-medium transition-all hover:scale-105"
                                  style={{
                                    background: selectedSlot === `${CALENDAR_DAYS[di]}, нед. ${wi + 1}, ${slot}` ? "#3c643b" : "#e4ece4",
                                    color: selectedSlot === `${CALENDAR_DAYS[di]}, нед. ${wi + 1}, ${slot}` ? "#fdfbf7" : "#305030",
                                  }}
                                >
                                  {slot}
                                </button>
                              ) : (
                                <div className="w-full px-2 py-2 rounded-lg" style={{ background: "#f4f7f4" }}>
                                  <span className="font-golos text-xs" style={{ color: "#d0d0d0" }}>—</span>
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {selectedSlot && (
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid #e8d4b0" }}>
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-xl mb-6 font-golos text-sm"
                      style={{ background: "#e4ece4", color: "#305030" }}
                    >
                      <Icon name="Calendar" size={16} />
                      Выбрано: {selectedSlot}
                    </div>
                    <form onSubmit={handleBook} className="grid md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        required
                        className="px-4 py-3 rounded-xl font-golos text-sm outline-none"
                        style={{ background: "#f4f7f4", border: "1px solid #e8d4b0", color: "#2a2a2a" }}
                      />
                      <input
                        type="tel"
                        placeholder="Телефон или Telegram"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        required
                        className="px-4 py-3 rounded-xl font-golos text-sm outline-none"
                        style={{ background: "#f4f7f4", border: "1px solid #e8d4b0", color: "#2a2a2a" }}
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl font-golos text-sm font-medium transition-all hover:opacity-90"
                        style={{ background: "#3c643b", color: "#fdfbf7" }}
                      >
                        Подтвердить запись
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 md:px-12 lg:px-20 section-fade">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#e4ece4", color: "#3c643b" }}
            >
              Отзывы
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
              Что говорят клиенты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: "#fdfbf7", border: "1px solid #e8d4b0" }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <span key={si} style={{ color: "#c99b5a", fontSize: "18px" }}>★</span>
                  ))}
                </div>
                <p className="font-golos text-sm leading-relaxed flex-1" style={{ color: "#4a4a4a" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #ead5b0" }}>
                  <div className="font-golos text-sm font-medium" style={{ color: "#2a2a2a" }}>{r.name}</div>
                  <div className="px-3 py-1 rounded-full font-golos text-xs" style={{ background: "#e4ece4", color: "#305030" }}>
                    {r.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6 md:px-12 lg:px-20 section-fade" style={{ background: "#f4f7f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
                style={{ background: "#c8d9c7", color: "#3c643b" }}
              >
                Блог
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
                Статьи и заметки
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-golos text-sm font-medium" style={{ color: "#3c643b" }}>
              Все статьи <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden cursor-pointer group transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ background: "#fdfbf7", border: "1px solid #e8d4b0" }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-golos text-xs" style={{ color: "#9a9a9a" }}>{post.date}</span>
                    <span className="px-3 py-1 rounded-full font-golos text-xs" style={{ background: "#e4ece4", color: "#305030" }}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-xl font-medium mb-3 leading-snug" style={{ color: "#1a1a1a" }}>
                    {post.title}
                  </h3>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "#6a6a6a" }}>{post.preview}</p>
                </div>
                <div className="px-6 pb-5 flex items-center gap-1 font-golos text-sm font-medium" style={{ color: "#3c643b" }}>
                  Читать <Icon name="ArrowRight" size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 md:px-12 lg:px-20 section-fade">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-golos font-medium mb-6 uppercase tracking-widest"
              style={{ background: "#e4ece4", color: "#3c643b" }}
            >
              FAQ
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "#1a1a1a" }}>
              Частые вопросы
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #e8d4b0", background: "#fdfbf7" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-golos text-base font-medium pr-4" style={{ color: "#1a1a1a" }}>{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="font-golos text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-24 px-6 md:px-12 lg:px-20 section-fade"
        style={{ background: "linear-gradient(135deg, #305030 0%, #3c643b 100%)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" style={{ color: "#fdfbf7" }}>
              Готовы начать?
            </h2>
            <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "#c8d9c7" }}>
              Напишите мне — отвечу в течение нескольких часов и подберём удобное время для первой встречи.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: "Mail", label: "yana@psychology.ru" },
                { icon: "MessageCircle", label: "@yana_psych (Telegram)" },
                { icon: "MapPin", label: "Москва, ул. Пречистенка, 22" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name={c.icon} size={16} />
                  </div>
                  <span className="font-golos text-sm" style={{ color: "#e4ece4" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
            <h3 className="font-cormorant text-2xl font-light mb-6" style={{ color: "#fdfbf7" }}>
              Напишите мне
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="px-4 py-3 rounded-xl font-golos text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fdfbf7" }}
              />
              <input
                type="text"
                placeholder="Контакт для связи"
                className="px-4 py-3 rounded-xl font-golos text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fdfbf7" }}
              />
              <textarea
                placeholder="С чем хотите обратиться?"
                rows={4}
                className="px-4 py-3 rounded-xl font-golos text-sm outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fdfbf7" }}
              />
              <button
                type="button"
                className="w-full py-3 rounded-xl font-golos text-sm font-medium transition-all hover:opacity-90"
                style={{ background: "#fdfbf7", color: "#305030" }}
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12" style={{ background: "#1a2a1a" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl font-light" style={{ color: "#9fbf9d" }}>Яна Соколова</span>
          <span className="font-golos text-xs" style={{ color: "#5a7a5a" }}>
            © 2026 · Психолог · Онлайн и Москва
          </span>
          <div className="flex gap-4">
            {["Instagram", "Telegram", "YouTube"].map((s) => (
              <a key={s} href="#" className="font-golos text-xs" style={{ color: "#5a7a5a" }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}