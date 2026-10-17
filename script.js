
const availability = {
  pon: ["13:30-16:30"],
  wt: ["17:15-22:00"],
  sr: ["15:30-16:30"],
  czw: ["11:30-14:30", "17:15-20:30"],
  pt: [],
  sob: [],
  niedz: ["14:30-17:30"],
};

// Obsługa menu mobilnego
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

// Aktualny rok w stopce
document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Dni tygodnia
const weekdays = [
  { key: "pon", name: "Poniedziałek" },
  { key: "wt", name: "Wtorek" },
  { key: "sr", name: "Środa" },
  { key: "czw", name: "Czwartek" },
  { key: "pt", name: "Piątek" },
  { key: "sob", name: "Sobota" },
  { key: "niedz", name: "Niedziela" }
];

// Wyświetla zakresy godzin bez rozbijania ich na pojedyncze godziny.
function generateTimes(ranges) {
  return ranges.filter(range => {
    const [from, to] = range.split("-").map(value => value.trim());

    return (
        /^\d{2}:\d{2}$/.test(from) &&
        /^\d{2}:\d{2}$/.test(to) &&
        from < to
    );
  });
}

// Wyświetlanie grafiku tygodniowego
function renderSchedule() {
  const grid = document.querySelector("#schedule-grid");
  if (!grid) return;

  grid.innerHTML = "";

  weekdays.forEach(({ key, name }) => {
    const day = document.createElement("section");
    day.className = "schedule-day";

    const heading = document.createElement("div");
    heading.className = "schedule-day-heading";

    const dayName = document.createElement("span");
    dayName.textContent = name;

    heading.append(dayName);
    day.append(heading);

    const slotList = document.createElement("div");
    slotList.className = "slot-list";

    const ranges = Array.isArray(availability[key])
        ? availability[key]
        : [];

    const times = generateTimes(ranges);

    if (times.length > 0) {
      times.forEach(range => {
        const slot = document.createElement("span");
        slot.className = "time-slot";
        slot.textContent = range.replace("-", "–");
        slotList.append(slot);
      });
    } else {
      const empty = document.createElement("span");
      empty.className = "no-slot";
      empty.textContent = "Brak dostępności";
      slotList.append(empty);
    }

    day.append(slotList);
    grid.append(day);
  });
}

renderSchedule();
