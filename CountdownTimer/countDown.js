setInterval(function renderCountdown(){
    const christmas = new Date('June 28, 2024 21:30:00');
    const now = new Date();
    const diff = christmas.getTime() - now.getTime();
    
    const totalSecs = Math.floor(diff / 1000);
    const totalMins = Math.floor(totalSecs / 60);
    const totalHours = Math.floor(totalMins / 60);
    const totalDays = Math.floor(totalHours / 24);
    const timer = document.getElementById("countdown-display");
        
    
    const hours = totalHours % 24;
    const minutes = totalMins % 60;
    const seconds = totalSecs % 60;
    
    function addZeros(unit) {
        if (unit < 10) {
            return `0${unit}`
        }
        return unit
    }
        
    timer.textContent = `${addZeros(totalDays)}:${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)}`
}, 1000)

 
renderCountdown()
