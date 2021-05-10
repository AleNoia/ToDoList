
function DateFactory() {
    function BuildDate(now) {
        let day = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();

        let dateNow = `${month}/${day}/${year}`

        return dateNow
    }

    function BuildTime(now) {
        let minutes = now.getMinutes();
        let hour = now.getHours();

        let hourNow = `at ${hour}:${minutes}`

        return hourNow
    }

    return {BuildDate, BuildTime}
}


export default DateFactory;