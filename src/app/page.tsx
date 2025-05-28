import Image from "next/image";
import systems from "/public/images/systems.webp";
// import books from "/public/images/books.webp";
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



export default function Home() {
  return (
    <div>
       <main>
        <div className="header"></div>

        <Image
          className="common-properties common-properties-left"
          src={systems}
          alt="Een rustig kantoor met een persoon die op een laptop werkt, omringd door abstracte systeemdiagrammen en een zacht, neutraal kleurenschema."
          priority
        />
        <article>
          <div>
            <h1>Over Systems</h1>
            <p>
              Hallo daar! Welkom op mijn digitale speeltuin. Deze pagina is een soort verzamelpunt voor projecten waar ik aan knutsel. Ik ben echt geïnteresseerd in systemen, coderen en al dat soort dingen, dus hier laat ik die interesses de vrije loop. Zie het als een kijkje in mijn brein – een enigszins georganiseerd kijkje, tenminste.
            </p>
            <p>
              Je vindt hier verschillende dingen, elk met een eigen verhaal. Het is allemaal werk in uitvoering, net als ik!
            </p>
          </div>
        </article>

        <div className="spacing"></div>

{/*       <div className="middle-container">
        <Image
          className="common-properties common-properties-right"
          src={books}
          alt="A minimalist workspace where a developer manages a book catalog on a web application, with bookshelves and digital elements."
        />
        <article>
          <div>
            <h1>Fullstack Books</h1>
            <p className="github">
            This project is a web application focused on managing and displaying information about books. 
            It's a good example of my interest in full-stack development and working with data. 
          </p>
          </div>
        </article>
      </div> */}

      <div className="spacing"></div>

      <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={stack}
            alt="Een serene opstelling met een ontwikkelaar die technologie-stacks verkent, met gelaagde pictogrammen die frameworks en databases vertegenwoordigen."
          />
          <article>
            <div>
              <h1>Aanbevolen Stack</h1>
              <p className="github">
                Dit project gaat over het verkennen en aanbevelen van verschillende technologie-stacks voor webontwikkeling. 
                Het is een hulpmiddel dat ik ontwikkel om ontwikkelaars te helpen de juiste tools voor hun projecten te vinden. 
              </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={review}
            alt="A calm workspace with a developer reviewing code on a laptop, surrounded by soft tones and subtle tech elements."
          />
          <article>
            <h1>SaaS Code Review</h1>
            <div>
            <p className="github">
            Dit is een tool die ik ontwikkel om ontwikkelaars te helpen de kwaliteit van hun code te analyseren en te verbeteren. Het draait allemaal om het vroegtijdig opsporen van potentiële problemen, zodat je robuustere 
            en betrouwbaardere software kunt bouwen.  
          </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={physics}
            alt="A calm, minimal workspace with soft lighting, beige tones, and a sleek desk featuring a blank-screen computer, surrounded by warm decor and physics-inspired wall designs."
          />
          <article>
            <h1>Snelheidsberekening</h1>
            <div>
            <p className="github">
            Ik heb onlangs gewerkt aan een project genaamd de Snelheidsberekening, ontworpen om het berekenen van snelheid, versnelling en tijd zo eenvoudig mogelijk te maken. Met flexibele eenheden en een overzichtelijke interface bespaart het tijd door automatisch conversies uit te voeren.  
          </p>
            </div>
          </article>
        </div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={flashy}
            alt="A calm, minimalistic workspace with soft beige tones, showcasing physics-themed diagrams, organized shelves, and a clean desk with a computer displaying formulas."
       />
            <article>
            <div>
              <h1>Natuurkunde Formules Flashcards</h1>
              <p className="github">
              In this project, Physics Formulas Cheat Sheet, I’ve created a handy reference guide packed with essential physics formulas that are useful for students, engineers, and anyone interested in physics. The formulas are neatly categorized and presented using LaTeX, making them clear and easy to use for solving a variety of physics problems.
              </p>
            </div>
          </article>
          </div>

          <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={typewriter}
            alt="A vintage-inspired workspace with a retro typewriter, surrounded by classic design elements and soft, warm lighting."
          />
          <article>
            <div>
              <h1>Retro Typemachine Monitor</h1>
              <p className="github">
                Duik in de charme van vervlogen jaren met ons Retro Typemachine Monitor project. Deze unieke opstelling combineert het nostalgische gevoel van een vintage typemachine met de moderne functionaliteit van een quiz-gebaseerde applicatie, wat een boeiende en interactieve ervaring creëert. Het gaat niet alleen om het herbeleven van de oude dagen, maar ook om het waarderen van de reis van technologie van verleden naar heden.
              </p>
            </div>
          </article>
        </div>


        <div className="middle-container">
        <Image
          className="common-properties common-properties-left"
          src={animal}
          alt="A calm, minimalistic workspace with soft beige tones, featuring animal-themed art, natural textures, and a computer showing a quiz game interface."
        />
        <article>
          <div>
            <h1>Dierenraadsels</h1>
            <p className="github">
              Dive into the delightful world of Animal Guesses — an interactive quiz game that blends curiosity with play. Whether you're recognizing sounds, images, or fun clues, each challenge invites you to guess the animal behind the mystery. Designed for all ages, it’s an engaging way to connect with nature and test your instincts.
            </p>
          </div>
        </article>
        </div>


        <div className="middle-container">
        <Image
          className="common-properties common-properties-right"
          src={emf}
          alt="A stylized, minimalistic visual of a physics simulator, with smooth gradients and subtle textures. The interface shows sliders, a formula box, and vector arrows representing motion, field, and length."
        />
        <article>
          <div>
            <h1>Bewegings-EMK Simulator</h1>
            <p className="github">
              Verken de fascinerende principes van elektromagnetische inductie met deze interactieve simulator. Pas variabelen aan zoals verplaatsing, magnetisch veld, lengte en tijd om te zien hoe ze de geïnduceerde spanning beïnvloeden. Geweldig voor studenten, docenten en nieuwsgierige geesten die willen visualiseren hoe beweging elektriciteit opwekt in een magnetisch veld.
            </p>
          </div>
        </article>
      </div>

          <div className="middle-container">
      <Image
        className="common-properties common-properties-left"
        src={tetris}
        alt="A stylized, minimalistic visual of a Tetris game interface, set in warm neutral tones. The design showcases falling tetrominoes, a score panel, and level indicators, all within a calm, design-focused workspace."
      />
      <article>
        <div>
        <h1>Tetris 2.0.</h1>
        <p className="github">
          This isn’t just a game about blocks — it’s about timing, space, and the quiet rhythm of decisions. In Tetris, each shape falls like a thought. You turn it, place it, and somehow it fits. Or doesn’t. But the feeling when it does — that’s something. It’s a calm kind of thinking. For those who find peace in patterns, movement in stillness, and clarity in form.
        </p>
        </div>
      </article>
    </div>

        <div className="middle-container">
        <Image
          className="common-properties common-properties-right"
          src={periodic}
          alt="An interactive periodic table rendered in warm, minimal tones. Elements are color-coded and neatly arranged, radiating a sense of calm structure and scientific beauty."
        />
        <article>
          <div>
            <h1>The Periodic Table.</h1>
            <p className="github">
              Not just rows and columns — it’s a quiet map of everything. Each element has a story: iron in our blood, carbon in our breath, gold in our dreams. This project gives shape to that wonder. You click, you learn, and slowly, you start to see the order in the chaos. It’s about connection. And how everything — even us — fits in.
            </p>
          </div>
        </article>
      </div>



        <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={welcome}
            alt="A serene and minimalist workspace featuring a desk with a computer displaying abstract designs, surrounded by neutral-toned decor, bookshelves, and warm lighting for a calming atmosphere."
          /> 
        <article>
            <div>
              <h1>So, have a look around!</h1>
              <p className="github">
                Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!
              </p>
            </div>
          </article>
          </div>
    

        <div className="spacing"></div>
      </main>

      <div className="spacing"></div>
    </div>
  );
}
