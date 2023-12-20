const swiper = new Swiper('.slide__content', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
    }
});

const navigateHome = () => {
    $(document).ready(function () {
        $(".home__button").click(function () {
            window.location.href = "/home";
        })
    })
}

const navigateAbout = () => {
    $(document).ready(function () {
        $(".about__button").click(function () {
            window.location.href = "/about";
        })
    })
}

const navigateMenu = () => {
    $(document).ready(function () {
        $(".menu__button").click(function () {
            window.location.href = "/menu";
        })
    })
}

const navigateReserve = () => {
    $(document).ready(function () {
        $(".reserve__button").click(function () {
            window.location.href = "/reserve";
        })
    })
}

/*
const navigateLogIn = () => {
    $(document).ready(function () {
        $("#").click(function () {
            window.location.href = "/login"
        })
    })
}

const navigateSignUp = () => {
    $(document).ready(function () {
        $("#").click(function () {
            window.location.href = "/register";
        })
    })
}
*/

const signUpAction = () => {
    $(document).ready(function () {
        $(".sign_up__button").click(function () {
            const nickname = document.getElementById("register__nickname").value;
            const name = document.getElementById("register__name").value;
            const lastname = document.getElementById("register__last_name").value;
            const email = document.getElementById("register__email").value;
            const password = document.getElementById("register__password").value;
            $.ajax({
                type: "POST",
                url: "/register_user/" + nickname + "/" + name + "/" + lastname + "/" + email + "/" + password + "/",
                contentType: "application/json",
                success: function (response) {
                    window.location.href = "/activation";
                },
                error: function () {
                    console.log("alfa")
                }
            })
        })
    })
}

const loginAction = () => {
    $(document).ready(function () {
        $(".log_in__button").click(function () {
            const email = document.getElementById("login__email").value;
            const password = document.getElementById("login__password").value;
            $.ajax({
                type: "POST",
                url: "/validate_login/" + email + "/" + password + "/",
                contentType: "application/json",
                success: function (response) {
                    window.location.href = "/home";
                },
                error: function () {
                     window.location.href = "/500";
                }
            })
        })
    })
}

const logoutAction = () => {
    $(document).ready(function () {
        $(".log_out__button").click(function () {
            console.log("loggin out");
            $.ajax({
                type: "POST",
                url: "/logout_user/",
                contentType: "application/json",
                success: function (response) {
                    window.location.reload();
                },
                error: function () {
                     window.location.href = "/500";
                }
            })
        })
    })
};

const makeOrderAction = () => {};

/*CLIENT IS NOT ABLE TO ABORT CONFIRMED ORDERS*/
const abortOrderAction = () => {};

/*ALL COMPLETE AND CONFIRM ACTIONS NEEDS ADDITIONAL ADMIN TOKEN*/
const confirmOrderAction = () => {};

/*ALL COMPLETE AND CONFIRM ACTIONS NEEDS ADDITIONAL ADMIN TOKEN*/
const deliverOrderAction = () => {};

/*ALL COMPLETE AND CONFIRM ACTIONS NEEDS ADDITIONAL ADMIN TOKEN*/
const completeOrderAction = () => {};

const makeReservationAction = () => {
    $(document).ready(function () {
        $("submit__reservation").click(function() {
            const start_date = document.getElementById("start__date").value;
            const end_date = document.getElementById("end__date").value;
            /*YOU ARE NOT ABLE TO MAKE RESERVATION WHILE USER SESSION ID IS NOT IN SERVERSIDE HASHMAP, USER IS BEEING RECOGNIZED ADDITIONALLY VIA REQUEST CONTEXT(COOKIE)*/
            $.ajax({
                type: "POST",
                url: "/make_reservation/" + start_date + "/" + end_date, /*REMEBER TO FINISH REST OF LINE*/
                contentType: "application/json",
                success: function (response) {
                    window.location.reload();
                },
                error: function () {
                    window.location.href = "/500";
                }
            })
        })
    }
};

/*CLIENT IS NOT ABLE TO ABORT CONFIRMED RESERVATIONS, ADMIN IS ABLE TO ABORT CONFIRMED RESERVATIONS*/
const abortReservationAction = () => {
    $(document).ready(function () {
        $("abort__reservation").click(function() {
            const reservation_id = $(this).attr("id");
             $.ajax({
                type: "POST",
                url: "/abort_reservation/" + reservation_id + "/", /* REMEBER TO FINISH REST OF LINE*/
                contentType: "application/json",
                success: function (response) {
                    window.location.reload();
                },
                error: function () {
                    window.location.href = "/500";
                }
            })
        }
    })
};

/*ALL COMPLETE AND CONFIRM ACTIONS NEEDS ADDITIONAL ADMIN TOKEN*/
const confirmReservationAction = () => {
    $(document).ready(function () {
        $("confirm__reservation").click(function() {
            const reservation_id =  $(this).attr("id");
             $.ajax({
                type: "POST",
                url: "/confirm_reservation/" + reservation_id + "/", /*REMEBER TO FINISH REST OF LINE*/
                contentType: "application/json",
                success: function (response) {
                    window.location.reload();
                },
                error: function () {
                    window.location.href = "/500";
                }
        })
    })
};

/*ALL COMPLETE AND CONFIRM ACTIONS NEEDS ADDITIONAL ADMIN TOKEN*/
const completeReservationAction = () => {};
    
const copyToClipBoard = () => {
    $(document).ready(function () {
        $(".phone").click(function () {
            document.execCommand("copy");
        })
    })
};


loginAction();
logoutAction();
signUpAction();
navigateHome();
navigateAbout();
navigateMenu();
navigateReserve();
