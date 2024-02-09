import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <>
      {/* Chi siamo  */}
      <Container className="margin-top-1">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Chi Siamo</Card.Title>
              <Card.Text>
                Benvenuti nella nostra comunità dedicata alla sensibilizzazione e alla lotta contro la violenza nei confronti delle donne. La nostra missione è fornire supporto, informazioni e risorse per combattere questa grave problematica sociale.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sezione Statistiche */}
      <Row className="mt-5">
  <Col md={8} className="mx-auto">
    <Card>
      <Card.Body>
        <Card.Title className="text-center">Statistiche sulla Violenza di Genere</Card.Title>
        <Card.Text>
          <ol>
            <li>
              <strong>Prevalenza Globale:</strong>
              <ul>
                <li>Secondo dati dell'Organizzazione Mondiale della Sanità (OMS), circa 1 su 3 donne nel mondo ha subito violenza fisica o sessuale da parte del partner o ha subito violenza sessuale da parte di non partner a un certo punto della sua vita.</li>
              </ul>
            </li>

            <li>
              <strong>Violenza Domestica:</strong>
              <ul>
                <li>A livello globale, il 35% delle donne ha subito violenza fisica e/o sessuale da parte di un partner intimo o violenza sessuale da parte di una persona non partner (OMS).</li>
                <li>Solo una percentuale relativamente bassa di donne denuncia gli abusi subiti alle autorità.</li>
              </ul>
            </li>

            <li>
              <strong>Impatto Economico:</strong>
              <ul>
                <li>Le donne vittime di violenza spesso affrontano sfide economiche significative. Un rapporto delle Nazioni Unite stima che la violenza di genere costa all'economia globale circa 1 trilione di dollari all'anno in perdita di produttività e servizi sanitari.</li>
              </ul>
            </li>

            <li>
              <strong>Violenza Online:</strong>
              <ul>
                <li>Con l'aumento della presenza online, la violenza di genere si estende anche al mondo virtuale. Uno studio dell'UNESCO suggerisce che più del 70% delle donne ha subito molestie online almeno una volta nella vita.</li>
              </ul>
            </li>

            <li>
              <strong>Impatto sulla Salute Mentale:</strong>
              <ul>
                <li>Le donne che subiscono violenza hanno un rischio più elevato di problemi di salute mentale, compresi disturbi d'ansia, depressione e pensieri suicidi.</li>
              </ul>
            </li>

            <li>
              <strong>Violenza Basata sul Genere nei Conflitti:</strong>
              <ul>
                <li>In situazioni di conflitto, le donne sono particolarmente vulnerabili alla violenza di genere. Si stima che tra il 60% e il 80% delle vittime di stupro nei conflitti siano donne.</li>
              </ul>
            </li>

            <li>
              <strong>Femminicidio:</strong>
              <ul>
                <li>Il femminicidio, l'omicidio di donne a causa del loro genere, è un fenomeno allarmante. L'Organizzazione Mondiale della Sanità estima che circa il 38% degli omicidi delle donne a livello mondiale sia commesso dal partner intimo.</li>
              </ul>
            </li>
          </ol>

          <p>
            Queste statistiche evidenziano la necessità di un impegno globale per contrastare la violenza di genere, promuovendo la consapevolezza, l'educazione e l'implementazione di politiche di tutela delle vittime.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>

      {/* Sezione Risorse */}
  
<Row className="mt-5">
  <Col md={8} className="mx-auto">
    <Card>
      <Card.Body>
        <Card.Title className="text-center fw-bold">Risorse Utili</Card.Title>
        <Card.Text>
          Di seguito troverai una lista di risorse utili dedicate al supporto e alla lotta contro la violenza di genere:

          <ul>
            <li>
              <strong>Linee Telefoniche di Emergenza:</strong> Numeri telefonici attivi 24/7 per assistenza immediata.
              <ul>
                <li>- Nazionale Anti Violenza: Chiama il 1522</li>
                <li>- Centro Antiviolenza Donne: 3269874569</li>
                {/* Aggiungi altri numeri, se necessario */}
              </ul>
            </li>

            <li>
              <strong>Centri di Supporto:</strong> Luoghi fisici dove puoi ricevere supporto e consulenza.
              <ul>
                <li>- Centro di Supporto Psicologico: Via d'amelio 12 , Palermo</li>
                <li>- Rifugio per Donne in Difficoltà:  Via pacinotti 94, Palermo</li>
                {/* Aggiungi altri centri, se necessario */}
              </ul>
            </li>

            <li>
              <strong>Organizzazioni Impegnate:</strong> Associazioni e organizzazioni che lavorano attivamente contro la violenza di genere.
              <ul>
                <li>- Associazione No Alla Violenza: noallaviolenza.com</li>
                <li>- Organizzazione Donne Libere: freewoman.com</li>
                {/* Aggiungi altre organizzazioni, se necessario */}
              </ul>
            </li>
          </ul>

          Ricorda che queste risorse sono qui per offrirti supporto e assistenza. Non esitare a contattarle in caso di bisogno.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>


      {/* Sezione Come Aiutare */}

<Row className="mt-5">
  <Col md={8} className="mx-auto">
    <Card>
      <Card.Body>
        <Card.Title className="text-center fw-bold">Come Puoi Aiutare</Card.Title>
        <Card.Text>
          Se desideri contribuire alla causa e fare la differenza nella lotta contro la violenza di genere, ecco alcune modalità attraverso le quali puoi aiutare:

          <ul >
            <li>
              <strong>Partecipa a Iniziative di Sensibilizzazione:</strong> Coinvolgiti in eventi e campagne di sensibilizzazione per diffondere consapevolezza sulla violenza di genere. Puoi partecipare a marce, conferenze o organizzare eventi nella tua comunità.
            </li>

            <li>
              <strong>Volontariato:</strong> Unisciti come volontario a organizzazioni e centri che lavorano per sostenere le vittime di violenza di genere. Il tuo tempo e le tue competenze possono fare la differenza nella vita di chi ha bisogno.
            </li>

            <li>
              <strong>Donazioni:</strong> Contribuisci finanziariamente donando a organizzazioni benefiche impegnate nella lotta contro la violenza di genere. Anche una piccola donazione può avere un impatto significativo.
            </li>

            <li>
              <strong>Diffondi la Consapevolezza:</strong> Utilizza i tuoi canali di comunicazione, come i social media, per condividere informazioni sulla violenza di genere e sensibilizzare la tua rete.
            </li>

            <li>
              <strong>Supporta Programmi di Educazione:</strong> Sostieni programmi educativi nelle scuole e nella comunità che promuovono il rispetto, l'uguaglianza di genere e la prevenzione della violenza.
            </li>
          </ul>

          Ognuno di noi può fare la differenza. Scegli un modo in cui senti di poter contribuire e aiutare a costruire un mondo libero dalla violenza di genere.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
    </Container>  
    </>
  )
}

export default About
