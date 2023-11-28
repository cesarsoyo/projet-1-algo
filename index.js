const prompt = require("prompt-sync")();
let Thoma = {
    name: "Thoma",
    age: 33,
    status: "formateur",
}

let Brandon = {
    name: "Brandon",
    age: 32,
    status: "formateur en front-end"
}

let Tev = {
    name: "Chasse Poulet Maitre de la boucle if",
    age: 20,
    status: "étudiant"
}



pres()
async function pres() {
    let welcome = "\n🤗 BONJOUR ET BIENVENUE A UNE JOURNEE DANS LA VIE DE THOMA SANS CIGARETTE ELECTRONIQUEE ! 🚬"
    console.log(welcome)
    await sleep(4000)
    console.log("\n😃 Aujourd'hui, tu vas vivre une journée dans la peau de Thoma, un jour qui semblait être ordinaire, mais qui a pris un tournant inattendu 😰 : \nThoma a malheureusement perdu son cigarette électronique. 🧐\n");
    await sleep(3000)
    let answer = '';
    let validAnswer = false;
    while (!validAnswer) {
        answer = prompt("Veux-tu continuer pour l'aider à le retrouver ? (oui ou non) 😀 ");
        if (answer === "oui") {
            await sleep(1000)
            console.log("\nOk, on y va ! 😉 Enquêtons ensemble sur cette énigme !");
            validAnswer = true;
            main()
        } else if (answer === "non") {
            let reAnswer = '';
            let revalidAnswer = false;
            while (!revalidAnswer) {
                await sleep(1000)
                reAnswer = prompt("Es-tu sûr de vouloir quitter ? 😧 ");
                if (reAnswer === "non") {
                    await sleep(1000)
                    console.log("Ok 😉 alors... ");
                    await sleep(1000)
                    revalidAnswer = true;
                } else if (reAnswer === "oui") {
                    await sleep(1000)
                    console.log("\nDommage 😣 on t'attend la prochaine fois ! Bye bye ! 👋");
                    revalidAnwser = false;
                    await sleep(2000)
                    process.exit();
                    break;
                } else {
                    console.log("Désolé, je n'ai pas compris. Peux-tu la répéter, s'il te plaît ?");
                }
            }
        } else {
            console.log("Désolé, je n'ai pas compris. Peux-tu la répéter, s'il te plaît ?");
        }
    }
}


async function main() {
    await sleep(1500)
    loading()
    await sleep(5000)
    console.log("\n-- Salle des professeurs 🧑‍🏫 --");
    await sleep(2000)
    console.log("\nThoma Le Drog'Maniaque était dans la salle des professeurs pendant le premier cours, en train de savourer sa cigarette électronique...");
    await sleep(3000)
    console.log("\n-THOMA : " + presentationCharacter(Thoma));
    await sleep(5000)
    console.log("\nEn sortant, il remarque que son précieux appareil n'est pas là où il devrait être. La quête frénétique commence.")
    await sleep(2500);
    console.log("\nThoma pense que quelqu'un aurait pu le voler ou le cacher. Qu'en penses-tu ? 🤔\n");
    await sleep(2000);
    let vol = prompt("Est-ce que la cigarette a été 'volee' ou 'cachee' ? ")
    while (vol != "volee" && vol != "cachee") {
        vol = prompt("Il faut répondre soit volee, soit chachee. T'en penses quoi? 😯 ");
    }
    if (vol == "volee") {
        await sleep(2500)
        console.log("\nOh là là ! Thoma pense également que quelqu'un à l'école lui a volé sa cigarette. Il se sent indigné et contrarié. 🤬");
        await sleep(3500)
        console.log("\nTout en cherchant, il se souvient de la dernière rumeur du formateur frontend sur ses jours de fumeur.");
    } else if (vol == "cachee") {
        await sleep(2500)
        console.log("\nThomas est également convaincu que quelqu'un a joué une cruelle plaisanterie en cachant sa cigarette quelque part difficile à trouver. 🥵");
        await sleep(3500)
        console.log("\nPar contre, il se remémore le moment où il a caché la cigarette d'un ami pour se venger.");
    }
    await sleep(5000)
    console.log("\nAprès ces péripéties, Thomas décide d'explorer la salle suivante... 🥺");
    await sleep(1500)
    loading()
    await sleep(5000);
    console.log("\n--  Salle de classe de Frontend 📟 --");
    await sleep(3000);
    console.log("\nThoma entre dans la nouvelle salle et rencontre le nouveau collègue inquiet. 😥");
    await sleep(3000);
    console.log("\n-BRANDON : " + presentationCharacter(Brandon) + ". Qu'est-ce que je peux faire pour toi aujourd'hui ?");
    await sleep(4000);
    console.log("\nOn peut interroger le collègue ou fouiller la salle. Qu'est-ce qu'on peut faire...? 🤔 ");
    await sleep(2000);
    let college = prompt("interroger ou fouiller ? ")
    while (college != "interroger" && college != "fouiller") {
        await sleep(1000)
        college = prompt("Pas compris. Répète, stp 😅 ");
    }
    if (college == "interroger") {
        await sleep(2500)
        console.log("\nThoma interroge son collègue, qui se souvient avoir vu un élève fouiller dans le bureau du directeur. 😕");
    } else if (college == "fouiller") {
        await sleep(2500)
        console.log("\nOn lui répond que pour le moment, nous n'avons pas besoin de lui. Donc, Thoma commence à fouiller la salle, mais ne trouve rien d'intéressant. 😖");
    }
    await sleep(5000)
    console.log("\nAlors, Thoma se dirige rapidement vers la salle suivante: le bureau du directeur... 👴");
    await sleep(1500)
    loading()
    await sleep(6000)
    console.log("\n--  Bureau du directeur 👨‍💻--");
    await sleep(3000)
    console.log("\nThoma se retrouve devant le bureau du directeur... 😬");
    await sleep(3000)
    console.log("\nIl a deux options: soit entrer discrètement, soit attendre à l'extérieur. Que peut-il faire ?");
    await sleep(2000)
    let director = prompt("entrer ou attendre ? ")
    while (director != "entrer" && director != "attendre") {
        await sleep(1000)
        director = prompt("Pas compris. Répète, stp 😅 ");
    }
    if (director == "entrer") {
        await sleep(2500)
        console.log("\nThoma entre discrètement dans le bureau, mais ne trouve pas sa cigarette. 🥺");
    } else if (director == "attendre") {
        await sleep(2500)
        console.log("\nThoma attend à l'extérieur, mais n'obtient aucune information utile. 🤯");
    }
    await sleep(2000)
    console.log("\nComme il n'a rien trouvé dans le bureau du directeur, il a décidé d'aller chercher dans une autre salle. 🙃");
    await sleep(1500)
    loading()
    await sleep(4000)
    console.log("\n-- Laboratoire informatique 🖥️  --");
    await sleep(2000)
    console.log("\nThoma entre dans le laboratoire et croise un étudiant distrait. 🤔");
    await sleep(2000)
    console.log("\n-TEVI : " + presentationCharacter(Tev));
    await sleep(2000)
    console.log("\nDeux idées vinrent à l'esprit de Thoma : interroger l'étudiant ou retourner la salle sens dessus dessous 🤨\n");
    let student = prompt("Quelle est la meilleure option? interroger ou inspecter ? 😶 ")
    while (student != "interroger" && student != "inspecter") {
        await sleep(1000)
        student = prompt("Pas compris. Répète, stp 😅 ");
    }
    if (student == "interroger") {
        await sleep(2500)
        console.log("\nThoma interroge l'étudiant qui se rappelle avoir vu quelqu'un manipuler un objet étrange au cour de l'école. 😯");
    } else if (student == "inspecter") {
        await sleep(2500)
        console.log("\nThoma cherche même les puces dans tous les coins, mais ne trouve rien. 😓 ");
    }
    await sleep(2000)
    console.log("\nThoma décide alors d'aller au cour de l'école pour voir s'il trouve quelque chose... 😳 ");
    await sleep(1500)
    loading()
    await sleep(4000)
    console.log("\n-- Cour de l'école 🏫 --");
    await sleep(2000)
    console.log("\nThoma se retrouve dans la cour, se remémorant les événements passés. 🥹 ");
    await sleep(2000)
    console.log("\nAu milieu de la cour il y a un banc. La première idée qui lui est venue a été de vérifier sous le banc. 😮 \n");
    let final = prompt("Doit-il vérifier sous le banc? oui | non  🤔 ")
    while (final != "oui" && final != "non") {
        await sleep(1000)
        final = prompt("Pas compris. Répète, stp 😅 ");
    }
    if (final == "oui") {
        await sleep(2500)
        console.log("\nThoma vérifie sous le banc, mais malhereusement il ne trouve pas son cigarette électronique. 🥴");
    } else if (final == "non") {
        await sleep(2500)
        console.log("\nThoma reste débout en regardant autour, mais ne voit rien d'intéressant. 😵‍💫");
    }
    await sleep(3000)
    console.log("\nAprès 2 heures de recherche, il se rappelle que la cigarette était dans sa poche depuis le début. 😒\n");
    await sleep(7000)
    let breakFinal = prompt("Après avoir joué à ce jeu, aimerais-tu briser l'écran et frapper Thoma ? oui | non  😁 ")
    while (breakFinal != "oui" && breakFinal != "non") {
        await sleep(1000)
        breakFinal = prompt("\nJe comprends ta colère, mais réponds oui ou non 😪 ");
    }
    if (breakFinal == "oui") {
        await sleep(2500)
        console.log("\nC'est normal 🤭");
    } else if (breakFinal == "non") {
        await sleep(2500)
        console.log("\nPourqoui pas ? 🤔");
    }
    await sleep(3000)
    console.log("\nBon... Merci d'avoir perdu ton temps dans ce jeu ! 😘 Bye bye !");
    await sleep(2000)
    process.exit;
}



function presentationCharacter(char) {
    return "Bonjour, je m'appelle " + char.name + ", j'ai " + char.age + " ans et je suis " + char.status + " à l'école ri6."
}


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


async function loading() {
    console.log("\nloading");
    await sleep(800)
    console.log(".");
    await sleep(800)
    console.log(".");
    await sleep(800)
    console.log(".");
}