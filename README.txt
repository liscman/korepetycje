KOREPETYCJE — STRONA STATYCZNA

Pliki:
- index.html           strona główna
- o-mnie.html          podstrona „O mnie”
- matematyka.html      oferta matematyki i cennik
- programowanie.html   oferta programowania i cennik
- terminy.html         tygodniowy widok dostępności i kontakt
- style.css           cały styl strony (bez frameworków)
- script.js           menu mobilne, rok w stopce i widok tygodniowy

JAK URUCHOMIĆ
Otwórz index.html w przeglądarce. Nie ma potrzeby instalowania zależności ani budowania projektu.

PRZED PUBLIKACJĄ UZUPEŁNIJ
1. W o-mnie.html podmień placeholder zdjęcia na własne zdjęcie (możesz wstawić np. <img src="images/moje-zdjecie.jpg" alt="...">).
2. W terminy.html zamień [TWÓJ ADRES E-MAIL], [TWÓJ NUMER TELEFONU] oraz adres w linku mailto na prawdziwe dane.
3. W script.js uzupełnij obiekt availability realnymi terminami. Format:
   const availability = {
     '2026-10-19': ['15:00', '17:00'],
     '2026-10-21': ['12:00', '16:30'],
   };
   Daty są generowane dla bieżącego tygodnia (poniedziałek–niedziela). Zmieniaj daty w obiekcie na te, które przypadają w aktualnym tygodniu. Puste dni pokażą „—”. Nie dodawaj godzin, w których nie jesteś dostępny.
4. Zaktualizuj treści o sobie i zakres zajęć zgodnie z tym, co faktycznie oferujesz.

UWAGI
- Strona jest napisana w czystym HTML, CSS i JavaScript, bez frameworków.
- Cennik odzwierciedla przekazane kwoty.
- Pierwsza lekcja: 60 minut za darmo.
- Dojazd stacjonarny: do 2 km od Placu Grunwaldzkiego we Wrocławiu.
- Widok tygodniowy nie przełącza tygodni; pokazuje aktualny tydzień.
- Google Fonts ładuje fonty z internetu. Jeśli chcesz działać całkowicie offline, usuń linię @import na początku style.css.
