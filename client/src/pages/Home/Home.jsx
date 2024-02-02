import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 img-center d-flex justify-content-center align-items-center">
            <h1 className="align-text-bottom text-white">
              Associazione Violenza Contro le Donne
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center h2-left my-5">Chi siamo</h2>
            <p className="text-center text-home my-2 fw-light ">
              L'Associazione No Alla Violenza è un'entità senza fini di lucro
              che si dedica con passione al sostegno delle donne vittime di
              violenza. Fondata nel 2021, operiamo con impegno e dedizione in
              tutta Italia. La nostra missione è quella di essere un faro di
              speranza, aiutando le donne a uscire da situazioni di violenza e
              abuso attraverso informazioni chiare e un sostegno empatico. Oltre
              a fornire assistenza individuale, ci impegniamo attivamente nella
              raccolta di segnalazioni di abusi e violenze, collaborando con le
              autorità competenti per garantire che le voci delle vittime siano
              ascoltate e che giustizia sia fatta. Crediamo che la
              consapevolezza e l'unione siano fondamentali per creare un
              cambiamento significativo nella società. Ogni passo che compiamo è
              un contributo alla costruzione di un mondo in cui le donne possano
              vivere libere dalla paura della violenza. Unisciti a noi nel
              nostro impegno a diffondere l'empatia, la solidarietà e la
              speranza. La tua partecipazione può fare la differenza. Siamo
              grati per ogni sostegno che ci permette di continuare nella nostra
              missione di offrire un rifugio sicuro per le donne che ne hanno
              bisogno.
            </p>
            {/* Attivazione/disattivazione bottone per donazione. */}
            {/* <div className="text-center">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#donationModal"
              >
                Dona
              </button>
          </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center h2-left my-5">Cosa facciamo</h2>
            <p className="text-home">
              L'Associazione No Alla Violenza è al centro di un impegno costante
              per offrire supporto alle donne vittime di violenza, che sia di
              natura fisica o psicologica. La nostra missione è avvolta nella
              compassione e nella dedizione a garantire alle donne un rifugio
              sicuro e un sostegno incondizionato durante i momenti più
              difficili. Operiamo come ponte tra chi si trova in situazioni di
              vulnerabilità e le risorse necessarie per affrontare e superare
              tali difficoltà. Il nostro obiettivo è fornire un'assistenza
              completa, che va oltre il semplice ascolto, per contribuire al
              recupero e all'empowerment delle donne che abbiamo l'onore di
              assistere. Parallelamente, ci impegniamo attivamente nella
              raccolta di segnalazioni di abusi e violenze. Questo lavoro ci
              consente di agire come portavoce delle voci silenziate e di
              collaborare con le autorità competenti per garantire che la
              giustizia venga servita e che le vittime siano protette. Ogni
              azione che intraprendiamo è permeata da un profondo rispetto per
              la dignità umana e dalla convinzione che ciascuna donna meriti di
              vivere libera dalla paura e dal dolore. Unisciti a noi nella lotta
              contro la violenza, per creare un mondo in cui la forza, il
              coraggio e la solidarietà prevalgano sulla crudeltà.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center h2-right my-5 ">Come puoi aiutarci</h2>
            <p className="text-home">
              Puoi aiutarci donando alla nostra associazione. Le donazioni
              servono per finanziare le nostre attività e per fornire aiuto alle
              donne vittime di violenza. Inoltre, puoi aiutarci segnalando abusi
              e violenze che hai subito o che hai visto subire.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
