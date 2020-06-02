import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    shop: [],

    products: [
      {
        title: 'Magnefort B6, 50 drajeuri, Biofarm',
        shortDescription: 'Combinația de magneziu și vitamina B6 este recomandat în carențele de magneziu, ce determină stări de fatigabilitate, stres, irascibilitate și hiperexcitabilitate.',
        longDescription: 'Indicații: \n \t Magneziul este un mineral indispensabil vieții celulelor, aproximativ jumătate din conținutul de magneziu din organism fiind localizat în interiorul celulelor din componența țesuturilor și organelor. Restul se regăsește la nivelul țesutului osos, în combinație cu calciul și fosforul. Element necesar pentru mai mult de 300 de reacții biochimice din organism, magneziul menține normală funcția musculară și nervoasă, menține ritmul cardiac în limite fiziologice și favorizează dezvoltarea unor oase puternice. Este de asemenea implicat în metabolismul energetic (participă la transformarea zahărului din sânge în energie) și în sinteza proteinelor. Vitamina B6 joacă un rol important în desfășurarea normală a numeroase procese fiziologice, iar asocierea cu magneziu este benefică deoarece vitamina B6 favorizează absorbția și menținerea magneziului în organism. \n Mod de administrare: \n \t Adulți și copii peste 6 ani - câte 1 drajeu pe zi. \n Compoziție: \t Lactat de magneziu dihidrat 470 mg (corespunzător la 47.90 mg magneziu), Vitamina B6 1.4 mg. \n Prezentare: \n \t 50 drajeuri',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/magnefort-b6-50-drajeuri-biofarm-10016609.png',
        price: 13.50
      },
      {
        title: 'Stresclin Complex, 60 comprimate, Sun Wave Pharma',
        shortDescription: 'Ameliorarea stărilor de suprasolicitare nervoasă, favorizează relaxarea organismului',
        longDescription: '  Beneficii: \n \t Nu influențează capacitatea de a conduce autovehicule. Produs cu ingrediente naturale. \n Ingrediente: \n \t Extract de Withania somniferă 100 mg \n \t Extract de Bacopă monnieri 30 mg \n \t Extract de nardostachys jatămansi 15 mg \n Mod de administrare: \n \t oral – câte 1-2 comprimate de 2 ori pe zi, sau conform recomandării consultantului de specialitate. \n Contraindicații: \n \t sensibilitate la oricare dintre componentele produsului. \n Prezentare: \n \t 60 comprimate',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/stresclin-complex-60-comprimate-sun-wave-pharma-9950.jpg',
        price: 49.50
      },
      {
        title: 'Dexocalm',
        shortDescription: '40 capsule, FarmaClass',
        longDescription: '  Proprietăți: \n \t - indicat împotriva stărilor de nervozitate; \n \t - este recomandat pentru atac de panică, anxietate; \n \t - menține starea de sănătate psihică și calmul; \n\t - contribuie la scăderea iritabilității; \n \t - susține sistemul nervos central și funcționarea psihică normală. \n Ingrediente active: \n \t Păducel, Roinița, Floarea Pasiunii, Hamei și Magneziu. \n \t Ingrediente sunt optim dozate și unic asociate astfel încât beneficiile acestuia să fie maxime iar efectul să fie unul sigur și rapid. \n Mod de administrare: \n \t 1 capsula de 2 ori pe zi, administrate dimineața și seara. \n \t Poate fi consumat fără probleme de-a lungul întregii zile, dimineața, la prânz sau seara fără a influența în vreun fel capacitatea de concentrare fizică sau intelectuală și fără a induce somnul. \n Prezentare: \n \t 40 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/dexocalm-5823.jpg',
        price: 23.50
      },
      {
        title: 'Calmogen Plant',
        shortDescription: '20 capsule, Omega Pharma',
        longDescription: '  Indicații: \n Supliment alimentar util în: \n \t - anxietate (stare de neliniște, de așteptare încordată însoțită de palpitații, jenă la respirație etc. întâlnită în unele boli de nervi); \n \t - iritabilitate (ca tonic general, relaxant, sedativ, calmant - produce o liniștire a stărilor de agitație psihică sau motorie); \n \t - antiaritmic (pentru palpitații); \n \t - antispastic; \n \t - tulburări de somn. \n Compoziție: \n \t Floarea pasiunii (passiflora) extract - 50 mg; Hamei (hamulus lupulus) extract - 50 mg; gintură (gențiană) extract- 20 mg; valeriană (valeriana officinalis) extract - 50 mg. \n Mod de administrare: \n \t Adulți: 1 capsulă X 3 ori pe zi. \n \t Copii: se va administra la recomandarea medicului de familie sau a medicului cu specialitatea pediatrie. \n Atenționări speciale: \n \t Sarcină și alăptare. \n \t Ulcer. \n \t Hipertensiune arterială (HTA). \n \t Alergie cunoscută la oricare dintre constituenți. \n \t Boli renale. \n \t Boli cardiace. \n \t Dietă hiposodată (dietă fără sare). \n \t Sângerare rectală. \n Prezentare: \n \t 20 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/calmogen-plant-20-capsule-omega-pharma-10016863.jpg',
        price: 11.50
      },
      {
        title: 'Stresclin Neuro',
        shortDescription: '60 comprimate, Sun Wave Pharma',
        longDescription: '	Proprietăți: \n \t Ajută la instalarea stării de calm și a relaxării psihice în cazuri de suprasolicitare nervoasă și stres. \n Beneficii: \n \t -ajută la reducerea tensiunii psihice. \n \t -ajută la inducerea calmului și relaxării. \n \t -ajută la creșterea capacității de adaptare a organismului la condițiile de stres și suprasolicitare. \n \t -ajută la funcționarea normală a sistemului nervos,  la menținerea sănătății psihice și la reducerea oboselii și extenuării. \n Ingrediente active / comprimat: \n \t Extract de Rhodiola Rosea - 100 mg. \n \t Extract de Ashwagandha KSM-66 - 125 mg. \n \t Extract de Valeriana Officinalis - 50 mg. \n \t Vitamina B6 - 5 mg.  \n Mod de administrare: \n \t 2 comprimate pe zi. Comprimatele se înghit întregi, cu un pahar cu apă, înainte sau după masă. \n Prezentare: \n \t 60 comprimate',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/stresclin-neuro.jpg',
        price: 48.50
      },
      {
        title: 'Nervocalmin cu valeriană',
        shortDescription: '20 capsule, Biofarm',
        longDescription: '  Utilizare: \n \t Adulți: O capsulă pe zi, administrată seara cu 30 minute înainte de culcare.\n \t Capsula se înghite cu o cantitate corespunzătoare de lichid. \n Ingrediente: \n \t O capsulă moale conține masă gelatinoasă (gelatină, apă purificată, glicerină, para-hidroxibenzoat de metil, dioxid de titan, oxid negru de fier, colorant Patent Blue V), agent de încărcare (ulei de soia), 80mg extract hidroalcoolic uscat (în baza de dioxid de siliciu anhidru și maltodextrină) din rădăcină de valeriană (Valeriana officinalis) conținând minim 0.8% acid valerenic, emulsifiant (lecitină de soia, gliceril monostearat), 3mg melatonină, antioxidant (acetat de DL-alfa-tocoferil), stabilizator (dioxid de siliciu coloidal). \n Prezentare: \n \t 20 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/nervocalmin-cu-valeriana-20-capsule-biofarm-10044268.jpg',
        price: 16.50
      },
      {
        title: 'Melatonina Pura, 5 mg, 60 tablete, EsiSpa',
        shortDescription: 'Supliment alimentar care contribuie la adaptarea organismului la varietatile de fus orar. Efectul benefic se obtine in conditiile unei doze minime de 0.5mg administrare inainte de culcare in prima zi de calatorie si in urmatoarele cateva zile dupa sosirea la destinatie.',
        longDescription: '  Ingrediente: \n \t Agenti de incarcare: folsfat dibazic de calciu dihidrat, celuloza microcristalina, hidroxipropilceluloza;melatonina(5mg) ,antiaglomeratii,:sterat de magneziu vegetal si dioxid de siliciu. \n Mod de administrare: \n \t 1 tableta pe zi,cu multa apa, de preferat cu o ora inainte de culcare. Pentru imbunatatirea efectului jet-lag se recomanda sa se administreze 1 tableta in prima zi de calatorie  si in urmatoarele cateva zile  dupa sosirea la destinatie. Poate fi administrat si persoanelor vegetariene. \n Prezentare: \n \t 60 tablete',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/melatonina-pura-5-mg-60-tablete-esispa-10031818.jpg',
        price: 28.50
      },
      {
        title: 'Persedon Noapte',
        shortDescription: '15 comprimate, Sandoz',
        longDescription: '  Indicații: \n \t Facilitează instalarea somnului la persoanele cu dificultăți în a adormi \n \t Ajută la îmbunătățirea calității somnului \n \t Relaxează și reduce stresul având efect sedativ moderat \n \t Îmbunătățește tonusul general și ajută la menținerea sănătății psihice \n \t Contribuie la menținerea capacității de memorare și concentrare \n Ingrediente: \n \t Extract uscat de : Valeriană 250 mg , Mac Californian 150 mg, Roinița 150 mg+ Melatonina 1 mg. \n Mod de administrare: \n \t 1-2 comprimate/zi, între mese sau cu cel puțin o jumătate de oră înainte de culcare \n \t Se poate administra începând cu vârsta de 14 ani \n Prezentare: \n \t 15 comprimate',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/persedon-noapte-15-comprimate-sandoz-2653.jpg',
        price: 18.50
      },
      {
        title: 'Equilibra',
        shortDescription: 'Magneziu + vitamina B6, 60 capsule, Antibiotice SA',
        longDescription: '  Compoziția pentru o capsulă: \n \t Magneziu 43.5 mg (12.4% din DZR*), \n \t vitamina B6 (pirodoxina clorhidrat) 5 mg (100% din DZR) și excipienți. \n \t *DZR reprezintă doza zilnică recomandată. \n A se păstra în ambalajul original, la temperaturi sub 25 grade C, ferit de lumină. \n Prezentare: \n \t 60 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/equilibra-magneziu-vitamina-b6-60-capsule-antibiotice-sa-10056158.jpg',
        price: 11.50
      },
      {
        title: 'Emocalm',
        shortDescription: '60 comprimate, 1+1, Dacia Plant',
        longDescription: '  Proprietăți: \n \t Produsul EMOCALM reprezintă un amestec de plante cu acțiune psihostabilizantă și sedativă, fiind recomandat în tulburări emoționale de diverse origini, de intensitate medie, ajutând astfel organismul să facă față stresului cotidian. \n Acțiuni: \n \t - calmant, sedativ, antidepresiv, anxiolitic, stabilizant psihoemoțional, timoleptic. \n \t - inductor al somnului, stimulent al memoriei, antispastic. \n Indicații: \n \t Se utilizează ca adjuvant în: distonii neuro-vegetative, depresie, anxietate, atacuri de panică, insomnie, afecțiuni cardiovasculare pe fond nervos (hipertensiune arterială, cardiopatie ischemică, aritmii cardiace), sindrom hyperkinetic cardiovascular, gastrite sau ulcer gastric ce apar pe fond de stres, spasme digestive, biliare sau urinare. \n Ingrediente inactive: \n \t Lactoză, celuloza microcristalină, aerosil. \n \t Sunătoare (100mg), valeriană (50mg), roinița (100mg), lavanda (100mg), ulei esențial de portocal (5mg). \n Mod de administrare: \n \t Adulţi şi tineri peste 15 ani: câte 1 comprimat de 3 ori pe zi. Copii între 5 şi 15 ani: câte 1/2 de comprimat de 3 ori pe zi. \n Contraindicații: \n \t Sarcină, alăptare, alergie la oricare dintre componentele produsului, intoleranță la lactoză. \n Prezentare: \n \t 60 + 60 comprimate',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/emocalm-cpr-2-la-pret-de-1.jpg',
        price: 21.50
      },
      {
        title: 'Valeriana',
        shortDescription: '40 capsule, Hofigal',
        longDescription: '  Proprietăți: \n \t - asigură un aport bogat de nutrienți și substanțe bioactive necesar pentru suplimentarea dietei în restabilirea funcțiilor fiziologice și a stării de sănătate a organismului, contribuind la susținerea unui psihic sănătos; \n \t - îmbunătățește calitatea somnului (prin inducerea unui somn liniștit, odihnitor) și durata acestuia (înlătura dificultatea de a adormi, micșorează semnificativ trezirile nocturne, facilitează apariția fazei de somn profund fără vise); \n \t - are influența pozitivă în tulburări afective și contribuie la reducerea stărilor de nervozitate, iritabilitate, teamă și neliniște; \n \t - susține funcționarea normală a inimii și a tractului gastro-intestinal în situație de stres intens, emoții mari, agitație psihomotorie; \n \t - intervine favorabil în normalizarea activității cardiace și a tensiunii arteriale; \n \t - are efect relaxant asupra mușchilor, în cazul contracturilor musculare ce apar în efort fizic prelungit și încordări psihice; \n \t - atenuează tulburările vegetative care survin în perioada ciclului menstrual sau care însoțesc menopauză (stări de iritabilitate nervoasă, tensiune psihică); \n \t - conferă organismului o stare de bine, liniște, relaxare și calm, inducerea unui somn odihnitor. \n Nu produce dependentă, iar la trezirea din somn nu apar stări de amețeală, somnolența, oboseala. \n Produsul este bine tolerat, fără contraindicații semnalate până acum la dozele și ritmul deadministrare recomandate. \n În sarcină și perioada de alăptare, copii până la vârsta de 12 ani este necesară recomandarea specialistului. \n \t - produsul poate afecta capacitatea de a conduce vehicule sau de a folosi utilaje. \n Ingrediente/capsulă: \n \t -300 mg pulbere din rădăcina uscată de Valeriană (Valeriană officinalis), amidon de porumb (agent încărcare), gelatină (capsulă), ștearat de magneziu (agent antiaglomerant) până la 440 mg. \n Mod de administrare: \n \t - câte 1 capsulă de 2 - 4 ori pe zi sau la recomandarea specialistului. \n \t Pentru inducerea unui somn liniștit se folosește o capsulă cu 30 - 60 minute înainte de culcare (eventual, precedată de încă o capsulă, în cursul serii) sau în funcție de recomandarea specialistului. \t Asocierea produsului cu preparatele de sinteză (cu efecte antidepresive, sedative, hipnotice) se va face numai la recomandarea specialistului. \t Se va evita administrarea produsului în asociere cu consumul de alcool. \n \t Produsul NU conține lactoză!  \n Precauții: \n \t Produsul este un supliment alimentar și nu trebuie să înlocuiască o dietă variată și echilibrată și un stil de viață sănătos.  \n Prezentare  \n \t 40 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/valeriana-40-capsule-hofigal.jpg',
        price: 11.00
      },
      {
        title: 'Melatonina',
        shortDescription: '3 mg, 30 tablete, Rotta Natura',
        longDescription: '  Proprietăți:\n \t - are capacitatea de a induce un somn natural, rapid, datorită formei sale speciale de administrare sublinguală; \n \t - acest tip de administrare face ca procentul de susbtanță asimilată efectiv de organism să fie de până la 50% mai mare față de produsele obișnuite și ca efectul să fie mai rapid, mulțumită biodisponibilității crescute; \n \t - promovează un somn natural de bună calitate; \n \t - asigură protecția celulelor și membranelor celulare împotriva acțiunii distructive a radicalilor liberi (antioxidant); \n \t - încetinește procesele de îmbătrânire ale organismului cantitate mare de substanță activă; \n \t - are absorbție rapidă și eficiență; \n \t - recomandat persoanelor care au dificultăți în a adormi la schimbarea fusului orar, persoanelor care se trezesc în timpul somnului, pentru un somn odihnitor. \n Ingrediente active: \n \t Melatonina 3 mg.\n Mod de administrare: \n \t Sublingual, câte 1 tableta, după lăsarea întunericului, înainte de culcare. A nu se administra decât după lăsarea întunericului. \n Contraindicații: \n \t A nu se administra  persoanelor sub 18 ani, femeilor gravide sau care alăptează. \n \t Produsul este contraindicat persoanelor cu intoleranță la lactoză sau cu sensibilitate la oricare dintre ingrediente. \n Prezentare: \n \t 30 tablete',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/melatonina-30.jpg',
        price: 10.00
      },
      {
        title: 'Nervocalmin Relaxare',
        shortDescription: '20 capsule, Biofarm',
        longDescription: '  Utilizare: \n \t Adulți: câte 1 capsulă de 1-3 ori pe zi. \n \t Capsulele sunt înghițite cu o cantitate corespunzătoare de lichid. \n Ingrediente: \n \t O capsulă conține agent de încărcare (ulei de soia), capsulă moale (gelatină, apă purificata, glicerină, oxid galben de fier, dioxid de titan, para-hidroxibenzoat de metil, tartrazină, Patent Blue V) 125 mg extract hidroalcoolic uscat 3-4:1 din rădăcină de valeriană, 40 mg extract hidroalcoolic uscat 4-6:1 de floarea pasiunii, emulsifianți (lecitină de soia, gliceril monostearat), 25 mg extract hidroalcoolic uscat 3-4:1 din frunză de mentă, 25 mg extract apos uscat din frunze de roiniță în bază maltodextrină, stabilizator (dioxid de siliciu coloidal), antioxidant (DL-acetat de alfa-tocoferil) (în baza de maltodextrină de siliciu coloidal). \n Prezentare: \n \t 20 capsule moi',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/comenzi.farmaciatei.ro/nervocalmin-relaxare-20-capsule-biofarm-10045174.png',
        price: 15.00
      },
      {
        title: 'Distonoplant',
        shortDescription: 'N152, 60 capsule, Fares',
        longDescription: '  Proprietăți: \n \t Favorizează menținerea calmului în condiții de stres \n \t Ajută la menținerea echilibrului psiho-emoțional. \n Ingrediente/capsulă: \n \t - vinărită (Asperulae herba) 132 mg; \n \t - semințe de schinduf (Trigonellae foenugraeci semen) 132 mg; \n \t - serlai (Salviae sclareae herba) 66 mg. \n Beneficii: \n \t - menține echilibrul sistemului nervos vegetativ; \n \t - favorizează menținerea calmului în condiții de stres; \n \t - liniștește stările de agitație nervoasă și iritabilitate; \n \t - îmbunătățește starea emoțională și ajută la menținerea stării de bine mentale; \n \t - ajută la menținerea echilibrului ritmului cardiac a tensiunii arteriale normale; \n \t - contribuie la reducerea disconfortului digestiv cu substrat nervos; \n \t - adaptogen (crește capacitatea organismului de a se adapta la stres și suprasolicitări), benefic în cazul unui stil de viață solicitant, în perioade de suprasolicitare mentală și/sau psiho-emoțională, pentru echilibrarea sistemului nervos vegetativ și pentru menținerea stării de calm și buna dispoziție. \n Atenționări: \n \t Nu se recomandă copiilor sub 16 ani (efectele asupra copiilor sunt insuficient studiate) și în caz de hipersensibilitate la oricare dintre ingredientele produsului. \n Sarcină și alăptare: \n \t Nu se recomandă femeilor însărcinate. \n \t Mamele care alăptează pot lua câte o capsulă de 2-3 ori pe zi timp de 2 săptămâni. Cura se poate repeta după o pauză de 2 săptămâni. \n Efecte secundare și interacțiuni: \n \t La dozele recomandate nu au fost semnalate efecte secundare. \n Mod de administrare: \n \t Copii peste 16 ani și adulți: 1 capsulă de 3 ori pe zi, între mese*. Dacă este nevoie de un efect mai puternic se administrează până la 6 capsule pe zi, la recomandarea medicului sau a farmacistului.\n \t Durata curei: 1-2 luni. Cura se poate repeta după o pauză de o lună. \n \n \t *între mese înseamnă că administrarea să nu fie asociată cu alimentația, de aceea este optim să se facă la distanță de minimum o oră față de la ultima masă, și o oră față de masa următoare. Aceasta presupune că produsul se poate administra dimineața, cu minimum o oră înainte de masă, iar seara la minimum o oră după masă. \n Prezentare: \n \t 60 capsule',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/distonoplant.jpg',
        price: 29.00
      },
      {
        title: 'Melatonina',
        shortDescription: '5mg, 100 tablete sublinguale, Jamieson',
        longDescription: '  Proprietati: \n \t Melatonina 5mg comprimate sublingurale cu aroma de ciocolata si menta \n \t Supliment alimentar. \n \t Cu indulcitor. \n \t Contribuie la reducerea timpului necesar pentru a adormi si la atenuarea tulburarilor de somn. \n \t Nu contine sare, gluten, lactoza, coloranti, arome sau conservanti artificiali. \n \t Poate fi administrat si de catre vegetarieni. \n Ingrediente: \n \t 5 mg melatonina \n Mod de administrare: \n \t Adulti: 1 tableta pe zi, sublingual, inaint ede culcare. \n Prezentare: \n \t 100 tablete sublinguale',
        image: 'https://comenzi.farmaciatei.ro/images/products-photos/melatonina-5mg-100-capsule-jamieson-8450.jpg',
        price: 50.00
      }
    ]
  },
  mutations: {
    addItemInShop(state, [item, count]) {
      while (count > 0) {
        state.shop.push(item);
        --count;
      }
    },
    removeOneItemFromShop(state, item) {
      const index = state.shop.indexOf(item);
      if (index > -1) {
        state.shop.splice(index, 1);
      }
    },
    removeAllItemFromShop(state, item) {
      let index = state.shop.indexOf(item);
      while (index > -1) {
        state.shop.splice(index, 1);
        index = state.shop.indexOf(item);
      }
    },
  },
  getters: {
    getItemFromShop: (state) => (item) => {
      let count = 0;
      for (let i = 0; i < state.shop.length; ++i) {
        if (state.shop[i] === item)
          ++count;
      }

      return count;
    }
  },
  actions: {
  },
  modules: {
  }
})
