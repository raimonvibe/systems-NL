import Image from "next/image";
import systems from "/public/images/systems.webp";
import review from "/public/images/review.webp";
import stack from "/public/images/stack.webp";
import welcome from "/public/images/welcome.webp";
import physics from "/public/images/physics.webp";
import flashy from "/public/images/flashy.webp";
import typewriter from "/public/images/typewriter.webp";
import animal from "/public/images/animal.webp";
import emf from "/public/images/emf.webp";
import tetris from "/public/images/tetris.webp";
import periodic from "/public/images/periodic.webp";
import InventoryPro from "/public/images/InventoryPro.webp";


export default function Home() {
  return (
    <div>
       <main>
{/*         <div className="o-header"></div>
 */}
        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={systems}
            alt="Een rustig kantoor met een persoon die op een laptop werkt, omringd door abstracte systeemdiagrammen en een zacht, neutraal kleurenschema."
            priority
          />
          <article>
            <div>
              <h1>Over Systems</h1>
              <p className="c-paragraph">
                Hallo daar! Welkom op mijn digitale speeltuin. Deze pagina is een soort verzamelpunt voor projecten waar ik aan knutsel. Ik ben echt geïnteresseerd in systemen, coderen en al dat soort dingen, dus hier laat ik die interesses de vrije loop. Zie het als een kijkje in mijn brein – een enigszins georganiseerd kijkje, tenminste.
              </p>
              <p className="c-paragraph">
                Je vindt hier verschillende dingen, elk met een eigen verhaal.
              </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

{/*       <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={books}
          alt="Een minimalistische werkruimte waar een ontwikkelaar een boekencatalogus beheert op een webapplicatie, met boekenplanken en digitale elementen."
        />
        <article>
          <div>
            <h1>Fullstack Books</h1>
            <p className="c-paragraph">
            Dit project is een webapplicatie gericht op het beheren en weergeven van informatie over boeken. 
            Het is een goed voorbeeld van mijn interesse in full-stack ontwikkeling en het werken met data. 
          </p>
          </div>
        </article>
      </div> */}

      <div className="u-spacing"></div>

      <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={stack}
            alt="Een serene opstelling met een ontwikkelaar die technologie-stacks verkent, met gelaagde pictogrammen die frameworks en databases vertegenwoordigen."
          />
          <article>
            <div>
              <h1>Aanbevolen Stack</h1>
              <p className="c-paragraph">
                Dit project gaat over het verkennen en aanbevelen van verschillende technologie-stacks voor webontwikkeling. 
                Het is een hulpmiddel dat ik ontwikkel om ontwikkelaars te helpen de juiste tools voor hun projecten te vinden. 
              </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={review}
            alt="Een rustige werkruimte met een ontwikkelaar die code beoordeelt op een laptop, omringd door zachte tinten en subtiele tech-elementen."
          />
          <article>
            <h1>SaaS Code Review</h1>
            <div>
            <p className="c-paragraph">
            Dit is een tool die ik ontwikkel om ontwikkelaars te helpen de kwaliteit van hun code te analyseren en te verbeteren. Het draait allemaal om het vroegtijdig opsporen van potentiële problemen, zodat je robuustere 
            en betrouwbaardere software kunt bouwen.  
          </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={physics}
            alt="Een rustige, minimale werkruimte met zachte verlichting, beige tinten en een strak bureau met een computer met een leeg scherm, omringd door warme decoratie en natuurkunde-geïnspireerde wandontwerpen."
          />
          <article>
            <h1>Snelheidsberekening</h1>
            <div>
            <p className="c-paragraph">
            Ik heb onlangs gewerkt aan een project genaamd de Snelheidsberekening, ontworpen om het berekenen van snelheid, versnelling en tijd zo eenvoudig mogelijk te maken. Met flexibele eenheden en een overzichtelijke interface bespaart het tijd door automatisch conversies uit te voeren.  
          </p>
            </div>
          </article>
        </div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={flashy}
            alt="Een rustige, minimalistische werkruimte met zachte beige tinten, met natuurkunde-thema diagrammen, georganiseerde planken en een schoon bureau met een computer die formules weergeeft."
       />
            <article>
            <div>
              <h1>Natuurkunde Formules Flashcards</h1>
              <p className="c-paragraph">
              In dit project, Natuurkunde Formules Spiekbriefje, heb ik een handig naslagwerk gemaakt vol met essentiële natuurkundeformules die nuttig zijn voor studenten, ingenieurs en iedereen die geïnteresseerd is in natuurkunde. De formules zijn netjes gecategoriseerd en gepresenteerd met behulp van LaTeX, waardoor ze duidelijk en gemakkelijk te gebruiken zijn voor het oplossen van verschillende natuurkundeproblemen.
              </p>
            </div>
          </article>
          </div>

          <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={typewriter}
            alt="Een vintage-geïnspireerde werkruimte met een retro typemachine, omringd door klassieke designelementen en zachte, warme verlichting."
          />
          <article>
            <div>
              <h1>Retro Typemachine Monitor</h1>
              <p className="c-paragraph">
                Duik in de charme van vervlogen jaren met ons Retro Typemachine Monitor project. Deze unieke opstelling combineert het nostalgische gevoel van een vintage typemachine met de moderne functionaliteit van een quiz-gebaseerde applicatie, wat een boeiende en interactieve ervaring creëert. Het gaat niet alleen om het herbeleven van de oude dagen, maar ook om het waarderen van de reis van technologie van verleden naar heden.
              </p>
            </div>
          </article>
        </div>


        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-left"
          src={animal}
          alt="Een rustige, minimalistische werkruimte met zachte beige tinten, met dier-thema kunst, natuurlijke texturen en een computer die een quiz-game interface toont."
        />
        <article>
          <div>
            <h1>Dierenraadsels</h1>
            <p className="c-paragraph">
              Duik in de heerlijke wereld van Dierenraadsels — een interactief quizspel dat nieuwsgierigheid combineert met spel. Of je nu geluiden, afbeeldingen of leuke aanwijzingen herkent, elke uitdaging nodigt je uit om het dier achter het mysterie te raden. Ontworpen voor alle leeftijden, is het een boeiende manier om contact te maken met de natuur en je instincten te testen.
            </p>
          </div>
        </article>
        </div>


        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={emf}
          alt="Een gestileerde, minimalistische visualisatie van een natuurkunde-simulator, met vloeiende gradiënten en subtiele texturen. De interface toont schuifregelaars, een formulevak en vectorpijlen die beweging, veld en lengte weergeven."
        />
        <article>
          <div>
            <h1>Bewegings-EMK Simulator</h1>
            <p className="c-paragraph">
              Verken de fascinerende principes van elektromagnetische inductie met deze interactieve simulator. Pas variabelen aan zoals verplaatsing, magnetisch veld, lengte en tijd om te zien hoe ze de geïnduceerde spanning beïnvloeden. Geweldig voor studenten, docenten en nieuwsgierige geesten die willen visualiseren hoe beweging elektriciteit opwekt in een magnetisch veld.
            </p>
          </div>
        </article>
      </div>

          <div className="o-container-standard">
      <Image
        className="o-image-standard o-image-left"
        src={tetris}
        alt="Een gestileerde, minimalistische visualisatie van een Tetris-game interface, in warme neutrale tinten. Het ontwerp toont vallende tetromino's, een scorepaneel en level-indicatoren, allemaal binnen een rustige, design-gerichte werkruimte."
      />
      <article>
        <div>
        <h1>Tetris 2.0.</h1>
        <p className="c-paragraph">
          Dit is niet zomaar een spel over blokken — het gaat over timing, ruimte en het rustige ritme van beslissingen. In Tetris valt elke vorm als een gedachte. Je draait het, plaatst het, en op de een of andere manier past het. Of niet. Maar het gevoel wanneer het wel past — dat is bijzonder. Het is een kalme manier van denken. Voor degenen die vrede vinden in patronen, beweging in stilstand en helderheid in vorm.
        </p>
        </div>
      </article>
    </div>

        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={periodic}
          alt="Een interactief periodiek systeem weergegeven in warme, minimale tinten. Elementen zijn kleurgecodeerd en netjes gerangschikt, en stralen een gevoel van kalme structuur en wetenschappelijke schoonheid uit."
        />
        <article>
          <div>
            <h1>Het Periodiek Systeem</h1>
            <p className="c-paragraph">
              Niet zomaar rijen en kolommen — het is een stille kaart van alles. Elk element heeft een verhaal: ijzer in ons bloed, koolstof in onze adem, goud in onze dromen. Dit project geeft vorm aan dat wonder. Je klikt, je leert, en langzaam begin je de orde in de chaos te zien. Het gaat over verbinding. En hoe alles — zelfs wij — erin past.
            </p>
          </div>
        </article>
      </div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={InventoryPro}
            alt="Een strak vormgegeven interface voor voorraadbeheer met grafieken, artikelenlijsten en analyses in een overzichtelijke werkruimte."
          />
          <article>
            <div>
              <h1>Inventory Pro</h1>
              <p className="c-paragraph">
                Inventory Pro is een modern systeem voor voorraadbeheer, ontworpen om voorraadtracking, leverancierscoördinatie en het registreren van transacties te vereenvoudigen.
                Gebouwd met een krachtige tech stack en een intuïtieve interface, stelt het teams in staat om hun middelen efficiënt te beheren en beslissingen te nemen op basis van data.
              </p>
            </div>
          </article>
        </div>




        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={welcome}
            alt="Een serene en minimalistische werkruimte met een bureau met een computer die abstracte ontwerpen toont, omringd door decoratie in neutrale tinten, boekenplanken en warme verlichting voor een rustgevende sfeer."
          /> 
        <article>
            <div>
              <h1>Dus, kijk eens rond!</h1>
              <p className="c-paragraph">
                Voel je vrij om deze projecten te verkennen en te zien wat je ervan vindt. Ik ben altijd aan het leren en groeien, en deze sites zijn een weerspiegeling van die reis. Wie weet waar ik de volgende keer aan zal werken? Blijf op de hoogte!
              </p>
            </div>
          </article>
          </div>
    

        <div className="u-spacing"></div>
      </main>

      <div className="u-spacing"></div>
    </div>
  );
}
