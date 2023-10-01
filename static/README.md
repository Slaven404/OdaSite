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

    Slike za apartmane je potrebno dodati u folder static/SajtZlatibor/apartmani/slike
    Putanje do slika je potrebno dodati u json fajl static/SajtZlatibor/apartmani/filepaths.json u niz "apartmani"
    Za nekretnine se koriste iste slike kao i za apartmane.
    Ukoliko bi trebalo zasebne slike da se koriste za nekretnine:
        1. dodati slike u isti folder
        2. dodati putanje do slike u niz "nekretnine"
        3. postaviti vrijednost "useApartmaniForNekretnine" na false

    Primjer:

    {
    "useApartmaniForNekretnine": true,
    "apartmani": [
    "/SajtZlatibor/apartmani/slike/a0.jpg",
    "/SajtZlatibor/apartmani/slike/a1.jpg",
    "/SajtZlatibor/apartmani/slike/a2.jpg",
    "/SajtZlatibor/apartmani/slike/a3.jpg",
    "/SajtZlatibor/apartmani/slike/a4.jpg",
    "/SajtZlatibor/apartmani/slike/a5.jpg",
    "/SajtZlatibor/apartmani/slike/a6.jpg",
    "/SajtZlatibor/apartmani/slike/a7.jpg",
    "/SajtZlatibor/apartmani/slike/a8.jpg",
    "/SajtZlatibor/apartmani/slike/a9.jpg"
    ],
     "nekretnine": []
    }

### 2) Izleti

    Slike izleta se nalaze u odgovarajućim folderima:
        static/SajtZlatibor/izleti/andricgrad
        static/SajtZlatibor/izleti/mokragora
        static/SajtZlatibor/izleti/sirogojno
        static/SajtZlatibor/izleti/tara
        static/SajtZlatibor/izleti/uvac
        static/SajtZlatibor/izleti/vranesa

    Putanje do slika se nalaze u json fajlu: static/SajtZlatibor/izleti/filepaths.json

### 3) Opisni tekstovi izleta

    Opisni tekstovi izgleda se nalaze u fajlu static/SajtZlatibor/izleti/izleti.json

### 4) Intro

    Tekstovi koji se pojavljuju na slideru na početnoj se nalaze u fajlu:
    static/SajtZlatibor/intro.json
