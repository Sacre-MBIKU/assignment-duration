const startDate = new Date();

let currentDate = startDate
let endTime;
const task = {
    startDate,
    duration: 168,
}


do {
    //Vérifier si le temps du début fait parti des jours ouvrables
    // Si oui, on enlève 8h de la durée et on ajoute 8h à current Date
    // Si non on ajoute 24h à current date et à la durée on enlève rien

    const isSundandy = currentDate.getDay() === 0;
    const isSaturday = currentDate.getDay() === 6;
    const isWorkingDay = !isSundandy && !isSaturday;

    // Si c'est un jour ouvrable
    if (isWorkingDay) {

        //On enlève 8h à la durée
        task.duration = task.duration - 8;
        //On ajoute 8h à la date actuelle
        currentDate = Date.parse(new Date(currentDate)) + 8 * 60 * 60 * 1000;
        // console.log(currentDate)
        currentDate = new Date(currentDate);


    } else {
        //On ajoute 24h à la date actuelle

        currentDate = Date.parse(currentDate) + 24 * 60 * 60 * 1000;
        currentDate = new Date(currentDate);

    }



} while (task.duration > 0)


console.log({ currentDate })

