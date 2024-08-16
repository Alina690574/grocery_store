let MainHeader = document.querySelector(".MainHeader");
let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".nabar");

Menu.addEventListener("click", () => {
    Menu.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
});
    window.onscroll = () => {
    Menu.classList.remove("fa-times");
    Navbar.classList.remove("active");
     if(window.scrolly > 150){
        MainHeader.classList.add("active");
    }else{
        MainHeader.classList.remove("active");
    }
    };


    //Deal section counter
    let countDate = new Date("August 13, 2024 00:00:00").getTime();

    function counter(){
        let Now = new Date("").getTime();
        Diff = countDate - Now;
        
        //
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        //
        let D = Math.floor(Diff / day);
        let H = Math.floor(Diff % day / hour);
        let M = Math.floor(Diff %hour / minute);
        let S = Math.floor(Diff %minute / second);
        //
        document.getElementById("day").innerText = D;
        document.getElementById("hour").innerText = H;
        document.getElementById("minute").innerText = M;
        document.getElementById("second").innerText = S;
    }
    setInterval(function () {
        counter();
    }, 1000);
    

