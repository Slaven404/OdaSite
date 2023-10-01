# oda-site

## Build Setup

```bash
# instalacija potrebnih paketa
$ npm install

# pokretanje u development okruženju
$ npm run dev

# pokretanje u produkcijskom okruženju
$ npm run build
$ npm run start

# generisanje dist folder-a za objavljivanje
$ npm run generate
```

## Dodavanje slika

### 1) Apartmani i Nekretnine

    Slike za apartmane je potrebno dodati u folder static/SajtZlatibor/apartmani/apartmani
    Putanje do slika je potrebno dodati u json fajl static/SajtZlatibor/apartmani/filepaths.json u niz "apartmani"

    Redosled zapisanih putanja predstavlja redosled prikaza slika

    Primjer:
    {
    "useApartmaniForNekretnine": true,
    "apartmani": [
    "/SajtZlatibor/apartmani/apartmani/a0.jpg",
    "/SajtZlatibor/apartmani/apartmani/a1.jpg",
    "/SajtZlatibor/apartmani/apartmani/a2.jpg",
    "/SajtZlatibor/apartmani/apartmani/a3.jpg",
    "/SajtZlatibor/apartmani/apartmani/a4.jpg",
    "/SajtZlatibor/apartmani/apartmani/a5.jpg",
    "/SajtZlatibor/apartmani/apartmani/a6.jpg",
    "/SajtZlatibor/apartmani/apartmani/a7.jpg",
    "/SajtZlatibor/apartmani/apartmani/a8.jpg",
    "/SajtZlatibor/apartmani/apartmani/a9.jpg"
    ],
     "nekretnine": []
    }

### 2) Nekretnine

    Slike za nekretnine je potrebno dodati u folder static/SajtZlatibor/apartmani/nekretnine
    Putanje do slika je potrebno dodati u json fajl static/SajtZlatibor/apartmani/filepaths.json u niz "nekretnine"

    Ukoliko je vrijednost "useApartmaniForNekretnine"  u filepath.json falju, nekretnine će koristiti slike sa apartmana

    Redosled zapisanih putanja predstavlja redosled prikaza slika

### 3) Izleti

    Slike izleta se nalaze u odgovarajućim folderima:
        static/SajtZlatibor/izleti/andricgrad
        static/SajtZlatibor/izleti/mokragora
        static/SajtZlatibor/izleti/sirogojno
        static/SajtZlatibor/izleti/tara
        static/SajtZlatibor/izleti/uvac
        static/SajtZlatibor/izleti/vranesa

    Putanje do slika se nalaze u json fajlu: static/SajtZlatibor/izleti/filepaths.json

    Redosled zapisanih putanja predstavlja redosled prikaza slika

### 4) Opisni tekstovi izleta

    Opisni tekstovi izgleda se nalaze u fajlu static/SajtZlatibor/izleti/izleti.json

### 5) Intro

    Objekti koji se pojavljuju na slideru na početnoj se nalaze u fajlu:
    static/SajtZlatibor/intro.json

    Putanje do slika moraju biti ispravne -- "image" property
