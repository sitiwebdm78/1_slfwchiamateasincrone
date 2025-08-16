/* Ondemand Javascript DOM
Selfwork Chiamate Asincrone
Crea una pagina html con le seguenti caratteristiche:
crea un input dove potrai inserire un tot di secondi.
un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
un pulsante che, al click, mettera' in pausa il countdown.
un pulsante che, al click, pulira' l’input e azzerera' il countdown.

EXTRA:
se il timer viene stoppato (non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punt */

/* ------- INIZIO ASSEGNAZIONE VARIABILI E CATTURA DEGLI ELEMENTI DELLA PAGINA HTML ------- */

    let btnAvvio = document.getElementById('btnAvvio');// Tasto di Avvio del conto alla rovescia.
    let btnStop = document.getElementById('btnStop');// Tasto di Stop.
    let btnResetta = document.getElementById('btnResetta');//Tasto Ripulici e Ricomincia.
    let temporestante = document.getElementById('temporestante');//Visualizzatore del Tempo rimanente.
    let countdownInput = document.getElementById('countdown_input');// Campo d'inserimento dell'utente per i secondi.

    let intervallo;
    let contatore = 0;
    let secrimasti = 0;
   

/*-------  FINE ASSEGNAZIONE VARIABILI E CATTURA DEGLI ELEMENTI DELLA PAGINA HTML ------- */


/* ------- INIZIO VARIABILI E COSTANTI DI VERIFICA ------- */

/* ------- FINE VARIABILI E COSTANTI DI VERIFICA ------- */


 /* ------- INIZIO CHIAMATE ASINCRONE ------- */

  /* ------- FINE CHIAMATE ASINCRONE -------*/

 /*------- INIZIO FUNZIONI SUL DOM. ------- */

    btnAvvio.addEventListener('click', ()=>{
            clearInterval(intervallo);//Chimata Asincrona del linguaggio che permette di regolarizzare lo scorrimento dei secondi.
            contatore = parseInt(countdownInput.value) || 0; // Assicurati di convertire il valore in un numero
            if(secrimasti !== 0){
                contatore = secrimasti;
            };

        intervallo = setInterval(()=>{
            if(contatore < 0){
                clearInterval(intervallo);
                temporestante.innerHTML = `Tempo Scaduto`;
            }else{
                temporestante.innerHTML = contatore;
                contatore -- // I due segni "--" permettono il decremento del valore della variabile contatore.
            };
        }, 1000);        
    });

    btnStop.addEventListener('click', ()=>{
        clearInterval(intervallo);
        secrimasti = contatore;   
    });

    btnResetta.addEventListener('click', ()=> {
        countdownInput.value = '';
        clearInterval(intervallo);
        temporestante.innerHTML = '';
        secrimasti = 0;

    });




 
 /*------- FINE FUNZIONI SUL DOM. ------- */

 /*------- INIZIO OGGETTO ARRAY RECENSIONI -------*/

  /*------- FINE OGGETTO ARRAY RECENSIONI -------*/