// Testi delle guide di Beelancio: una per ogni sezione dell'app.
// Solo dati (nessun codice dell'interfaccia): li usano il pulsante «?» dell'app e la pagina «Guida» del sito.
// Quando l'app cambia, si aggiornano qui e valgono in tutti e due i posti.
// video: indirizzo del video su YouTube, quando ci sarà (per ora nessuno).

export const GUIDE = {
  primi_passi: {
    titolo: "Primi passi",
    intro: "Cinque minuti per preparare Beelancio al tuo lavoro. Puoi fare tutto anche dopo, quando vuoi.",
    parti: [
      { titolo: "1. Le tue attività", punti: [
        "Un'attività è ogni lavoro che vuoi tenere separato: per esempio il negozio, le consulenze, le spese personali.",
        "Al primo accesso le scegli tra quelle pronte o le scrivi tu. Si cambiano in Impostazioni → Attività.",
      ] },
      { titolo: "2. I conti e il saldo iniziale", punti: [
        "Un conto è ogni posto dove tieni soldi: contanti, conto in banca, carta prepagata, PayPal…",
        "In Impostazioni → Conti imposta il saldo iniziale: quanti soldi c'erano davvero quel giorno. Così i saldi dell'app tornano con la realtà.",
      ] },
      { titolo: "3. Il primo movimento", punti: [
        "In Movimenti registra un'entrata, un'uscita o un trasferimento.",
        "Non sai come registrare un caso? Usa «Come registro…?»: ci sono i casi di tutti i giorni con il modulo già pronto.",
        "Più veloce ancora: premi «Assistente» e scrivilo a parole, per esempio «ho pagato 45 euro di benzina con la carta».",
      ] },
      { titolo: "4. Clienti e scadenze", punti: [
        "Aggiungi i clienti con cui lavori: poi li colleghi a pagamenti, progetti e appuntamenti.",
        "In Scadenze metti le spese che si ripetono (affitto, abbonamenti, bollette): l'app te le ricorda.",
      ] },
      { titolo: "5. Sicurezza", punti: [
        "Tocca il tuo nome in basso nel menu e apri Accesso e PIN: attiva un PIN di 6 cifre per riaprire l'app più in fretta sul tuo dispositivo.",
        "Sempre lì puoi attivare la verifica in due passaggi e creare i codici di recupero, per non restare mai chiuso fuori.",
        "Ogni giorno Beelancio salva una copia dei dati. Tienine anche una fuori dal computer.",
      ] },
    ],
    consiglio: "Ogni sezione ha il suo pulsante «?» accanto al titolo: aprilo quando hai un dubbio.",
  },

  bilancio: {
    titolo: "Bilancio",
    intro: "La pagina principale: quanti soldi hai adesso e quanto hai guadagnato e speso in un periodo.",
    parti: [
      { titolo: "Quanto hai adesso", punti: [
        "In cima vedi il saldo di ogni conto (contanti, banca, carte…) e il saldo generale.",
        "Tocca un conto per vedere i suoi movimenti.",
        "Se un saldo non torna con la realtà, controlla il saldo iniziale del conto in Impostazioni → Conti.",
      ] },
      { titolo: "Guadagni e spese del periodo", punti: [
        "Scegli Mese, Trimestre, Anno o Date; con le frecce vai al periodo prima o dopo.",
        "Con le caselle in alto scegli quali attività vedere: tutte, una o alcune.",
        "La tabella ha una colonna per ogni attività e il totale. Sotto vedi il confronto con il periodo precedente e le spese e le entrate per categoria.",
        "Tocca il nome di un'attività nella tabella per vedere i suoi movimenti.",
      ] },
      { titolo: "I trasferimenti", punti: [
        "I trasferimenti tra conti (prelievo, versamento, ricarica) non sono né guadagni né spese: cambiano solo i saldi dei conti.",
        "Quelli tra attività si vedono nelle singole colonne, ma nel totale si annullano.",
      ] },
      { titolo: "Promemoria", punti: [
        "Se una spesa o un'entrata ricorrente sta per scadere, l'avviso compare in cima alla pagina.",
      ] },
    ],
    consiglio: "Il bilancio ricorda l'ultimo periodo e le attività che hai scelto, anche su un altro dispositivo.",
  },

  movimenti: {
    titolo: "Movimenti",
    intro: "Qui registri ogni soldo che entra, esce o cambia posto.",
    parti: [
      { titolo: "Tre tipi di movimento", punti: [
        "Entrata: soldi che ricevi (un cliente che paga, una vendita).",
        "Uscita: soldi che spendi (materiale, affitto, una spesa personale).",
        "Trasferimento: soldi tuoi che cambiano posto. Per esempio un prelievo, un versamento, la ricarica di una carta, l'addebito della carta di credito, oppure soldi spostati da un'attività a un'altra.",
      ] },
      { titolo: "Cosa scrivere", punti: [
        "Importo e data.",
        "Attività: per quale lavoro (oppure Personale).",
        "Conto: dove arrivano o da dove escono i soldi.",
        "Categoria: che tipo di entrata o di spesa. Con «Altre entrate» o «Altre uscite» serve anche una descrizione.",
        "Cliente, se c'entra: così lo ritrovi nella sua scheda.",
      ] },
      { titolo: "Strumenti utili", punti: [
        "«Come registro…?»: i casi di tutti i giorni, con il modulo già impostato.",
        "«Assistente»: scrivi a parole che cosa è successo, anche più cose insieme («ho speso 2 € alle macchinette in contanti e 45 di benzina con la carta»). Ti prepara l'elenco già compilato da controllare e registrare con un tocco. Come scrivergli è spiegato nella guida «Assistente».",
        "«Importa estratto conto»: scegli il file CSV scaricato dalla banca, controlli l'anteprima e importi tutto insieme. I movimenti già presenti sono segnalati e non spuntati.",
        "«Esporta»: un file per Excel con i movimenti che vedi, da dare al commercialista.",
        "Nei trasferimenti, «Commissione pagata» registra anche la spesa della commissione (per esempio la ricarica al tabaccaio).",
      ] },
      { titolo: "Correggere", punti: [
        "Tocca un movimento nell'elenco per modificarlo o eliminarlo. Nel registro resta sempre traccia di ogni operazione.",
        "Un prelievo o un versamento segnato per errore come uscita o entrata? Aprilo e usa «Era un trasferimento». Il titolare trova tutti i casi in «Sistema prelievi e versamenti».",
      ] },
    ],
    consiglio: "Sul telefono il pulsante + in basso apre subito un nuovo movimento.",
  },

  assistente: {
    titolo: "Assistente",
    intro: "Scrivi a parole che cosa è successo, come lo racconteresti a un collega. L'assistente prepara le registrazioni già compilate: tu le controlli e le registri con un tocco.",
    parti: [
      { titolo: "Come si usa", punti: [
        "Premi «Assistente»: è in cima al menu, sul telefono è il fumetto in alto. Se non c'è, il titolare lo accende in Impostazioni → Moduli.",
        "Scrivi il messaggio e premi «Prepara l'elenco» (dal computer anche Ctrl+Invio).",
        "Controlla le schede: puoi correggere ogni campo al volo o togliere la spunta a quello che non vuoi registrare.",
        "Premi «Registra tutto». Finché non lo premi non si salva niente: puoi provare e chiudere.",
      ] },
      { titolo: "Cosa sa fare", punti: [
        "Movimenti: entrate, uscite e trasferimenti, anche dieci in un messaggio.",
        "Clienti nuovi, progetti, appuntamenti e riparazioni, già collegati tra loro.",
        "Magazzino: carico, vendita e scarico, con la spesa o l'incasso.",
        "Scadenze: spese ed entrate che si ripetono, come l'affitto o un abbonamento.",
        "Sceglie da solo attività e categoria. Quello che non dici lo propone in base a come lavori di solito.",
      ] },
      { titolo: "Come scrivere bene", punti: [
        "Una cosa per frase: è più facile da capire e da controllare.",
        "Scrivi sempre l'importo e, se puoi, come hai pagato o incassato: «in contanti», «con la carta», «col bancomat», «con bonifico».",
        "Se hai più attività e non è ovvio quale, dillo: «per il negozio», «spesa personale».",
        "Le date dille a parole: «ieri», «venerdì», «il 3», «domani alle 15». Se non la dici, vale oggi.",
        "I clienti scrivili con nome e cognome, come li hai salvati: così li collega a quelli che hai già.",
        "Per il magazzino scrivi quanti pezzi, il nome dell'articolo e il prezzo al pezzo.",
      ] },
      { titolo: "Leggere le schede", punti: [
        "«Pronta»: è tutto a posto.",
        "«Da controllare»: manca qualcosa o c'è un dubbio, e il motivo è scritto nella scheda. Correggi il campo e registri.",
        "«Non valida»: così non si può registrare. Riscrivi il messaggio con i dati giusti.",
        "Un campo con il bordo giallo e la scritta «proposto» l'ha scelto l'assistente perché non l'avevi detto: dagli un'occhiata.",
        "Un cliente che hai già non viene creato di nuovo: la sua scheda resta senza spunta e le altre operazioni usano quello che esiste.",
      ] },
      { titolo: "Da sapere", punti: [
        "Tutto o niente: se un'operazione non va, non si registra nessuna e ti dice quale correggere. Così non restano mezze registrazioni.",
        "Aggiunge soltanto: non modifica e non cancella quello che è già salvato. Per correggere usa la sezione giusta, per esempio Movimenti.",
        "Non inventa: importi e nomi che non hai scritto restano vuoti, oppure te li chiede.",
        "Un collaboratore registra solo nelle attività che può usare.",
        "Senza l'assistente IA (modo prova, gratis) capisce un movimento alla volta, con frasi semplici.",
        "Con l'assistente IA il messaggio viene mandato ad Anthropic, l'azienda che fa Claude, solo per essere capito; Beelancio non salva il testo che scrivi. Non scrivere dati che non servono, come password o codici.",
        "Ogni messaggio conta: quanti ne hai usati questo mese lo vedi nel riquadro dell'assistente.",
      ] },
      { titolo: "Domande frequenti", punti: [
        "Registra da solo? No: prepara l'elenco, e registri tu con «Registra tutto».",
        "Quante cose posso scrivere in un messaggio? Fino a 20 operazioni.",
        "Ha sbagliato qualcosa? Prima di registrare correggi il campo nella scheda. Se l'hai già registrato, correggilo nella sua sezione.",
        "Non mi capisce? Scrivi più semplice, una cosa per frase, con importo e modo di pagamento.",
        "Il cliente risulta «non trovato»? Scrivi nome e cognome come nella sua scheda, oppure chiedi di aggiungerlo come cliente nuovo nello stesso messaggio.",
      ] },
    ],
    consiglio: "Un esempio da provare: «Ieri ho speso 2 € alle macchinette in contanti. Oggi 45 € di benzina con la carta. Aggiungi il cliente Marco Rossi, telefono 333 1234567, e fissa un appuntamento con lui domani alle 15. Carica in magazzino 10 confezioni di viti a 3 € l'una, pagate col bancomat. Ricordami ogni mese, il giorno 5, l'affitto da 500 €.»",
  },

  scadenze: {
    titolo: "Scadenze",
    intro: "Spese ed entrate che si ripetono: affitto, abbonamenti, bollette, canoni dei clienti.",
    parti: [
      { titolo: "Creare una scadenza", punti: [
        "Scegli se è una spesa o un'entrata, scrivi il nome, l'importo, ogni quanto si ripete e la prossima data.",
        "Indica attività, conto e categoria: serviranno quando la registri.",
        "Per le bollette spunta «L'importo cambia ogni volta»: al pagamento scrivi la cifra giusta.",
        "«Avvisami giorni prima» decide quando compare il promemoria.",
      ] },
      { titolo: "Quando arriva il giorno", punti: [
        "«Pagata» o «Incassata» registra il movimento e sposta la scadenza al periodo dopo.",
        "«Salta questa volta» (nel menu ⋮) la sposta senza registrare soldi: per esempio se quel mese la bolletta non è arrivata.",
        "Le scadenze vicine compaiono anche in cima al Bilancio.",
      ] },
      { titolo: "In alto nella pagina", punti: [
        "Vedi quanto spendi e quanto incassi di fisso ogni mese.",
      ] },
    ],
  },

  clienti: {
    titolo: "Clienti",
    intro: "L'anagrafica delle persone e delle aziende con cui lavori.",
    parti: [
      { titolo: "La scheda del cliente", punti: [
        "Persona o azienda, contatti, indirizzo, codice fiscale o partita IVA, note.",
        "Dalla scheda vedi in un colpo solo pagamenti, progetti, riparazioni e appuntamenti di quel cliente.",
        "Dal menu ⋮ registri un'entrata o un'uscita già collegata al cliente.",
      ] },
      { titolo: "Trovarli e usarli", punti: [
        "Cerca per nome, telefono, email o partita IVA.",
        "Quando registri un movimento, un progetto, una riparazione o un appuntamento, collega il cliente: così ritrovi tutto in un punto.",
        "Un cliente con cui non lavori più si archivia: resta nello storico ma non ingombra l'elenco.",
      ] },
      { titolo: "Il portale del cliente (modulo «Portale clienti»)", punti: [
        "Si accende in Impostazioni → Moduli. Poi, nella scheda del cliente, «Crea il link» prepara un link personale solo suo.",
        "Mandaglielo con «Copia il link», «Manda su WhatsApp» o per email: aprendolo vede le sue riparazioni, i suoi lavori, i prossimi appuntamenti e i pagamenti, sempre aggiornati e senza password.",
        "Non vede mai note, note tecniche, seriale, ricambi e spese, conti usati, le descrizioni dei movimenti o altri clienti. L'elenco preciso è in «Cosa vede il cliente».",
        "Il link si vede solo quando lo crei: se lo perdi, «Crea un link nuovo» (quello vecchio smette subito di funzionare). «Disattiva» lo spegne del tutto.",
        "Nella scheda vedi da quando il link è attivo e quante volte il cliente l'ha aperto. Il link lo crea e lo disattiva solo il titolare.",
        "Funziona per i clienti quando Beelancio è online; sul tuo PC puoi già aprirlo tu per vedere che cosa vedranno.",
      ] },
    ],
  },

  agenda: {
    titolo: "Agenda",
    intro: "Gli appuntamenti con i clienti, in presenza o online.",
    parti: [
      { titolo: "Usarla", punti: [
        "Scegli la vista giorno, settimana o mese.",
        "Ogni appuntamento ha titolo, inizio e fine, il luogo oppure il link della chiamata online, il cliente (facoltativo) e le note.",
        "Dalla scheda di un cliente, «Nuovo appuntamento» lo crea già collegato.",
        "Lo stato può essere Programmato, Fatto o Annullato.",
        "Gli appuntamenti di un cliente si vedono anche nella sua scheda.",
      ] },
    ],
    consiglio: "L'agenda si accende e si spegne in Impostazioni → Moduli.",
  },

  progetti: {
    titolo: "Progetti",
    intro: "Lavori e commesse: un sito, un impianto, una consulenza, un evento, un corso…",
    parti: [
      { titolo: "Creare un progetto", punti: [
        "Scegli il tipo tra quelli pronti oppure «+ Altro: aggiungi un tipo nuovo…»: il tipo che scrivi ricompare tra i tuoi.",
        "Collega cliente e attività e scrivi il preventivo.",
        "Se il lavoro ha un costo che si ripete (per esempio la manutenzione mensile), attiva il canone.",
      ] },
      { titolo: "Seguire il lavoro", punti: [
        "Stato: Idea, In corso, In pausa, Consegnato, Archiviato.",
        "Dalla scheda registri «Acconto» e «Saldo»: diventano entrate nel bilancio.",
        "Vedi subito quanto hai incassato e quanto resta da incassare.",
        "Quando scade il canone, registri l'incasso e la scadenza passa al periodo successivo.",
      ] },
    ],
    consiglio: "I progetti si accendono e si spengono in Impostazioni → Moduli.",
  },

  riparazioni: {
    titolo: "Riparazioni",
    intro: "Gli oggetti che ricevi da riparare: telefoni, computer, elettrodomestici, biciclette, caldaie…",
    parti: [
      { titolo: "Accettazione", punti: [
        "Scegli il tipo di oggetto tra quelli pronti oppure «+ Altro: aggiungi un tipo nuovo…».",
        "Scrivi modello, guasto, cliente e preventivo.",
        "Ogni riparazione riceve un codice per ritrovarla in fretta.",
      ] },
      { titolo: "Stati", punti: [
        "Ricevuta, In lavorazione, In attesa ricambio, Pronta, Consegnata, Annullata.",
        "Ogni cambio di stato resta nello storico, con una nota se vuoi.",
      ] },
      { titolo: "I soldi della riparazione", punti: [
        "«Acconto» e «Saldo» sono entrate; «Ricambio» è una spesa.",
        "«Rimborso» registra i soldi restituiti al cliente, mai più di quanto incassato.",
        "Con il Magazzino acceso c'è anche «Ricambi dal magazzino»: la scorta scende ma non si registra una spesa nuova, perché i soldi sono già usciti all'acquisto.",
      ] },
      { titolo: "Annullare ed eliminare", punti: [
        "Annullando una riparazione i soldi già passati restano; se restituisci qualcosa, registra il rimborso.",
        "«Elimina…» mostra prima cosa è collegato e mette la riparazione nel cestino: il titolare può ripristinarla. I movimenti restano nel bilancio.",
      ] },
    ],
  },

  magazzino: {
    titolo: "Magazzino",
    intro: "Articoli e scorte per qualsiasi attività: ricambi, prodotti in vendita, materiali.",
    parti: [
      { titolo: "Gli articoli", punti: [
        "Nome, codice, gruppo, costo, prezzo di vendita e scorta minima.",
        "Sotto la scorta minima compare l'avviso «sotto scorta».",
        "Ogni articolo può appartenere a un'attività o a nessuna.",
      ] },
      { titolo: "Carichi, vendite e inventario", punti: [
        "Carico: arriva merce. Se vuoi, registra anche la spesa.",
        "Vendita: esce merce venduta. Se vuoi, registra anche l'incasso.",
        "Scarico: merce rotta, persa o usata.",
        "Inventario: scrivi quanti pezzi hai contato davvero e l'app corregge la quantità.",
      ] },
      { titolo: "Regole", punti: [
        "La quantità non scende mai sotto zero e ogni operazione resta nello storico dell'articolo.",
      ] },
    ],
    consiglio: "Il magazzino si accende e si spegne in Impostazioni → Moduli.",
  },

  impostazioni: {
    titolo: "Impostazioni",
    intro: "Qui il titolare prepara l'app per il suo lavoro.",
    parti: [
      { titolo: "Le schede", punti: [
        "Attività: i tuoi lavori, con colore e icona.",
        "Categorie: i tipi di entrate e di uscite.",
        "Conti: contanti, conti con IBAN, carte, PayPal… con il loro saldo iniziale.",
        "Moduli: accendi o spegni Agenda, Progetti, Riparazioni e Magazzino.",
        "Utenti: aggiungi collaboratori e scegli se vedono tutte le attività o solo alcune.",
        "Account: nome dell'account e minuti di inattività prima del blocco. Qui c'è anche «Scarica tutti i miei dati», un solo file con tutto l'account, e, per chi ha creato l'account, «Chiudi l'account»: dopo 30 giorni i dati si cancellano per sempre.",
        "Tipologie: i tipi che hai aggiunto con «Altro»; puoi toglierli dalle proposte.",
        "Aspetto: tema chiaro, scuro o come il sistema.",
        "Registro: l'elenco di tutte le operazioni, che non si può modificare.",
        "Backup: le copie dei dati.",
      ] },
      { titolo: "Da sapere", punti: [
        "Ciò che è già usato (attività, categorie, conti) non si elimina: si archivia, così lo storico resta giusto.",
        "Un collaboratore limitato vede solo le sue attività e non vede i saldi dei conti.",
      ] },
    ],
  },

  accesso: {
    titolo: "Accesso e PIN",
    intro: "La tua sicurezza: password, PIN, verifica in due passaggi e codici di recupero. Si apre toccando il tuo nome in basso nel menu.",
    parti: [
      { titolo: "Entrare", punti: [
        "Si entra con l'email oppure con il nome utente, e la password.",
        "La password ha almeno 10 caratteri, una maiuscola, una minuscola e un carattere speciale.",
        "Il PIN di 6 cifre riapre l'app più in fretta su questo dispositivo. Attivalo solo su un dispositivo tuo.",
        "Dopo 5 tentativi sbagliati PIN, password e codici si bloccano per 15 minuti.",
      ] },
      { titolo: "Verifica in due passaggi", punti: [
        "Gratis per tutti: oltre alla password serve un codice di 6 cifre che cambia ogni 30 secondi, da un'app sul telefono (Google Authenticator, Microsoft Authenticator o simili).",
        "Per attivarla: «Attiva la verifica», scrivi la password, inserisci la chiave nell'app del telefono e scrivi il primo codice.",
        "Il PIN su un dispositivo di fiducia continua a funzionare senza codice.",
        "Hai cambiato telefono? Spegni la verifica e riattivala con il telefono nuovo.",
      ] },
      { titolo: "Codici di recupero", punti: [
        "Sono 10 codici da conservare in un posto sicuro (stampati o in un file). Ognuno vale una volta.",
        "Servono se dimentichi la password («Password dimenticata?» nella schermata di accesso) o se non hai il telefono per la verifica.",
        "Puoi crearne di nuovi quando vuoi: quelli vecchi non valgono più.",
        "Chi si iscrive con il nome utente li riceve subito: senza email sono l'unico modo per rientrare da solo.",
      ] },
      { titolo: "Dispositivi e blocco", punti: [
        "Vedi i dispositivi dove hai il PIN e togli quelli che non usi più.",
        "«Blocca» chiude subito la sessione. Dopo i minuti di inattività scelti dal titolare l'app si blocca da sola.",
        "Un collaboratore che ha perso password e telefono? Il titolare gli reimposta la password da Impostazioni → Utenti: la verifica in due passaggi si spegne e la riattiva lui.",
      ] },
    ],
  },

  profilo: {
    titolo: "Il mio profilo",
    intro: "Chi sei nell'app, i tuoi distintivi, le gocce di miele e gli inviti. Si apre toccando il tuo nome in basso nel menu.",
    parti: [
      { titolo: "Il menu del tuo nome", punti: [
        "Da qui raggiungi Il mio profilo, Impostazioni (titolare), Accesso e PIN, Aggiungi un utente, Cambia utente e Blocca.",
        "Sul telefono lo stesso menu è nell'avatar in alto e nel pulsante «Altro».",
      ] },
      { titolo: "Invita un collega", punti: [
        "Hai un codice personale: mandalo con «Copia il link» o «Manda su WhatsApp».",
        "Il collega che si iscrive con il tuo codice ha la prova gratuita doppia: 14 giorni di Max invece di 7.",
        "Vedi solo quanti colleghi hai invitato, quanti hanno usato la prova e quanti hanno pagato: mai i loro dati.",
      ] },
      { titolo: "Gocce di miele", punti: [
        "10 gocce quando un collega usa davvero la prova (almeno 10 movimenti), fino a 5 colleghi al mese.",
        "Quando il collega paga: 300 gocce se sceglie l'annuale; con il mensile 100 al 3° mese pagato e altre 200 al 12°. Al massimo 300 per collega.",
        "100 gocce valgono 1 mese gratis del tuo piano, al massimo 12 mesi all'anno.",
      ] },
      { titolo: "Distintivi", punti: [
        "I livelli dell'alveare crescono con i colleghi che pagano: Ape operaia (1), esploratrice (3), guardiana (6), regina (10). Il livello raggiunto non si perde.",
        "Ape fondatrice: i primi 100 abbonati ricevono il loro numero, da 001 a 100, e tengono il prezzo di lancio finché restano abbonati, anche se poi aumenta.",
      ] },
    ],
  },
};

// Ordine in cui le guide compaiono nella pagina «Guida» del sito.
export const ORDINE_GUIDE = ['primi_passi', 'bilancio', 'movimenti', 'assistente', 'scadenze', 'clienti', 'agenda', 'progetti', 'riparazioni', 'magazzino', 'impostazioni', 'accesso', 'profilo'];
