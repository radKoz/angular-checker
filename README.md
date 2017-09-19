# Angular Checker

Aplikacja pozwala na pobranie danych z API po podaniu numeru NIP/KRS/REGON.

Składa się z 3 komponentów. Komponent checker sprawdza poprawność numeru oraz niweluje niepotrzebne zapytania do API. Komponent historia przechowuje poprawnie obsłużone numery w LocalStorage wraz z danymi otrzymanymi z serwera. Komponent history-detail prezentuje dane otrzymane z serwera. 

W projekcie użyte zostały m.in. RxJS, http, Router, InMemoryWebApi, Angular Material, Bootstrap