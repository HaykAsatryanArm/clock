setInterval(() => {
    let date = new Date();
    let dname = date.getDay();
    let mname = date.getMonth();
    let dnum = date.getDate();
    let yr = date.getFullYear();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    let pe = "AM"

    let moths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December']
    let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday']

    document.getElementById('dayname').innerHTML = weeks[dname - 1] + ','
    document.getElementById('monthname').innerHTML = moths[mname]
    document.getElementById('daynum').innerHTML = dnum + ','
    document.getElementById('year').innerHTML = yr

    if(hr > 12) {
        hr = hr - 12;
        pe = "PM"
    } if (mn < 10) {
        mn = '0' + mn
    } if (sc < 10) {
        sc = '0' + sc
    }

    document.getElementById('hours').innerHTML = hr + ':'
    document.getElementById('minutes').innerHTML = mn + ':'
    document.getElementById('seconds').innerHTML = sc
    document.getElementById('em').innerHTML = pe

});


setInterval(() => {
    
    let hr = document.getElementById('hr')
    let mn = document.getElementById('mn')
    let sc = document.getElementById('sc')

    let day = new Date();
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6


    hr.style.transform = 'rotate(' + (hh + (mm / 12)) + 'deg)'
    mn.style.transform = 'rotate(' + mm + 'deg)'
    sc.style.transform = 'rotate(' + ss + 'deg)'

});

let analog = document.getElementById('analog')
let digital = document.getElementById('digital')

digital.onclick = function() {
    digital.style.display = 'none'
    analog.style.display = 'flex'
}

analog.onclick = function() {
    analog.style.display = 'none'
    digital.style.display = 'block'
}