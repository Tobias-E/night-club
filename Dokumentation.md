# Dokumentation

---

## Teknologier

#### Yarn

> Som package manager har jeg valgt at anvende **Yarn**, da det er virkelig pålideligt og hurtigere end NPM. Ydermere kan det også anvendes offline da det cacher de pakker som anvendes på computeren.
> Dette er også med til at nedsætte de fremtidige loadtime. <br>
> Statistik over loadtime:
> ![loadtime](https://miro.medium.com/max/1400/1*lYNSr1oI_PE6umJuOVgxmA.png)

#### React.js

> React var det oplagte valg da jeg har en naturlig forkærlighed for dette bibliotek.
> Det giver en mulighed for vha. JSX (**J**ava**S**cript **X**ML), at indkorporere HTML i JavaScript. Dette gør at man hurtigere og lettere har tilgang til at indsætte agile informationer i koden.
> Samtidig kan man opbygge tingene i komponenter, så man kan ta' stykker af kode og adskille det fra hinanden, for ikke at stå over for ufatteligt lange HTML dokumenter. Ydermere er komponenterne genanvendelige, så redundant kode bliver minimeret gevaldigt. <br>
> Den enorme fordel ved **React** er performance delen, forstået på den måde at **React** anvender en **virtuel DOM**, som sættes op imod den original _DOM_, dette gør det muligt for **React**, kun at opdatere de elementer som ændrer sig, fremfor at lave et helt **page refresh** og herved loade hele siden igen.

#### SCSS (Sassy Cascading Style Sheets)

> **SCSS** er det mest supporterede udvidelse af **CSS**, som giver mulighed for at anvende variabler, så de samme informationer kan anvendes flere steder. Specielt fordi det giver mulighed for at modularisere ens styling og opdele det i flere dokumenter. <br> Nesting er også en mulighed samt en kæmpe fordel, specielt i forhold til **BEM**.

#### BEM

> Classes kan hurtigt bliver udfordrende og besværligt at holde styr på. **BEM** (**B**lock **E**lement **M**odifier) konventionen er med til at standardisere class navne og herved undgår at navnet bare bliver lavet tilfældigt. <br>
> Den helt store grund til at jeg har valgt at anvende konventionen, er fordi det som skabt for **SCSS**. Da class navnene som bliver givet, har med at gøre hvilket **parent element** det har og om er behov for et modifier(enkelt ændring på som der ikke er på andre lignende elementer).

```scss
.block {
	&__element {
		&--modifier {
		}
	}
}
```

---

## Teknisk dokumentation

#### React Hooks, Fetching & date conversion

> En af de fede men også essentielle ting ved **React** er **Hooks**. Her vælger jeg at ta' udgangspunkt i måden jeg **fetcher** dataen på ved events, men også hvordan jeg konvertere informationerne om til det som skal anvendes. <br>

> **useState**, anvendes til at gemme data eller sætte states, i dette eksempel er det for at gemme den data som senere skal anvendes. `const [data, setData] = useState();` er måden det starter med at blive skrevet, hvor at man gør det muligt at kalde `data`. Derefter er det så muligt at indsætte data vha. at kalde `setData(ønskede information)`. <br>

> **useEffect** kan anvendes i flere tilfælde, i dette er det til at køre noget kode, når sitet bliver loadet. Man kan dog også få det til at køre, når andre elementer bliver trykket på eller opdateret vha. at indsætte informationen hvor jeg har skrevet _dependencies_ i eksemplet herunder.<br>

```jsx
useEffect(() => {
    kode som skal køres
},[dependencies])
```

> **fetching** sker vha. **async/await**, da jeg selv syntes at det er mest overskueligt at læse og forstå. <br> I bund og grund er dette promises(løfter), som lover at udføre en opgave, så snart det er muligt, i dette tilfælde, når dataen er hentet ned. <br>
> `async` er en forkortelse af asynkront, så det vil sige det ikke er synkront med resten af kode, da den normal vis ville læses oppe fra og ned. <br>
> `await` kan kun forekomme i en asynkron funktion, da det ellers ikke er muligt at **await**(afvente) noget. <br>
> `fetch` bliver herefter kaldt og den der i bund og grund henter den data som vi skal anvende, jeg giver den herfor et parameter i for af en URL. <br>
> Som så herefter bliver lavet om til **json** og kan aflæses. <br>
> Da jeg skal bruge nogle forskellige oplysninger omkring tidspunktet hvorpå et event er blevet afholdt, henter jeg dette men får **standardized ISO 8601-format** tilbage. Dette ser såledet ud: **2011-06-29T16:52:48.000Z** og kan ikke anvendes. <br>
> Derfor bliver det omskrevet vha. `new Date` og jeg kan så herefter trække de ønskede data, såsom måned(`date.getMonth()`). <br>
> Alt dette sker inde i et **loop/forEach**, som kører hen over det **array** hvor alt dataen ligger. Hvilket vil sige jeg trækker alle de ønskede datoer og tidspunkter ud fra hvert event.

```jsx
const url = `http://localhost:4000/events`;
const [data, setData] = useState();
const [eventDates, setEventDates] = useState([]);

useEffect(() => {
	(async () => {
		try {
			const response = await fetch(url);
			const result = await response.json();
			setData(result);

			result.forEach((e) => {
				let date = new Date(e.eventDate);
				let day = date.getDate();
				let month = date.getMonth();
				let hour = date.getHours();
				let minute = date.getMinutes();
				setEventDates((eventDates) => [
					...eventDates,
					{ day, month: months[month], hour, minute },
				]);
			});
		} catch (e) {
			console.log('Error:', e);
		}
	})();
}, []);
```

---

## "Soft" dokumentation

##### Newsletter

> For at tilmelde sig nyhedsbrevet skriver man sin email ind i feltet, som herefter validere/tjekker om det er en email, som står i det pågældende felt. <br>
> Hvis ikke skal der komme en tekst op som fortæller dig at det ikke er en email. (I dette tilfælde, så gør den det, men teksten er sort og det er baggrunden også. Da tiden var knap, nåede jeg ikke at få ændret det i denne ombæring, men vil være en af de første opdateringer i næste uge.)

---

## Arbejdsprocessen

> Jeg startede med at forsøge og danne et overblik over opgaven vha. Github project (KanBan). Dokumentation for hvordan opgaven skulle udfærdiges, var dog ikke lige til og på ingen måde fyldestgørende. Normalvis ville der blive tildelt en **XD-fil** som ville give det fulde overblik.
> Dette var dog ikke tilfældet og var derfor med til at gøre opgaven uoverskuelig. <br>
> KanBan boardet var dog med til at overskueliggøre det en smule og danne en lille ide om hvilke komponenter som kunne gå igen. <br>

---
