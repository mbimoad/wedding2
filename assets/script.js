const audio = document.querySelector('.audio');

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}



gsap.to('.leaf1', {
    translateY: 90,
    repeat:-1,
    yoyo:true,
    duration:2,
    ease: "power1.out",
})
gsap.to('.leaf2', {
    translateY: 120,
    repeat:-1,
    yoyo:true,
    duration:3,
    ease: "power1.out",
})
gsap.to('.leaf6', {
    rotate: 360, 
    repeat:-1,
    duration:4,
    yoyo:true,
})
gsap.from('.savethedate', {
    y:-150, 
    opacity:0, 
    duration:2,
});




$(window).on('scroll', function() {
    let scrollPosition = $(this).scrollTop();
    let hrefPosition   = $('.galeri').offset().top - 250;
    let lovestory = $('.love-story').offset().top; 

        if((scrollPosition+300) > lovestory) {
            console.log("Disini");
            $('.love-story .hilang').each((index, item) => {
                setTimeout(() => $('.love-story .hilang').eq(index).addClass('muncul'), index * 500); 
            })
        }


    if(scrollPosition > hrefPosition) {
        $('.image-galery').each(function(index,item) {
            setTimeout(() => {
                
                $('.image-galery').eq(index).removeClass('hilang');
            }, index * 500);
        })
    }

    $('.quran').css({
        'transform':`translate(0, ${scrollPosition/100}%)`
    })
    
})

document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('copy')) {
        rekening = e.target.dataset.rekening; 
        await navigator.clipboard.writeText(rekening); 
        Swal.fire(
            'Good job!',
            'Copy Success',
            'success'
        );
    }
})

const box = document.querySelectorAll('.box');
box.forEach((item, index) => {
    item.dataset.aos = 'fade-up';
    item.dataset.aosDelay = index * 200; 
})

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('fa-envelope')) {
        var elemen = e.target; 
        var parent = e.target.parentElement; 
        var pclass = parent.getAttribute('class'); 
        var banked = pclass.split(' ');
        var banked = banked[1]; 
        parent.innerHTML = openEnvelope(banked);
    } else if(e.target.classList.contains('fa-envelope-open')) {
        var parent = e.target.parentElement; 
        var banked = parent.getAttribute('class').split(' ')[1]; 
        parent.innerHTML = closeEnvelope(banked);
    }
})

function closeEnvelope(tipebank) {
    let messages = `<div class="message ${tipebank}">
        <i class="fas fa-envelope"></i>`;
    if(tipebank == 'mandiri') {
        messages +=  `
        <div class="info">Click MANDIRI</div>`;
    } else if(tipebank == 'bca') {
        messages +=  `
        <div class="info">Click BCA</div>`;
    } else if(tipebank == 'bri') {
        messages +=  `
        <div class="info">Click PAYPAL</div>`;
    }
    messages += `</div>`;
    return messages;
}
function openEnvelope(tipebank) {
    let messages = `<div class="message ${tipebank}">
    <i class="fas fa-envelope-open"></i>
        <div class="info2">
            <div class="card envelope-card" style="width: 16rem; margin:auto; transform:translate(0,-170px);">
                <div class="card-body d-flex align-items-center justify-content-between">`;

    if(tipebank == 'mandiri') {
        messages +=  `
        <p>No. Rekening: 20212021 <br> On Behalf Of Mahasiswa IT </p>
        <button type="button" class="btn green copy" data-rekening="20212021">Copy</button>`;
    } else if(tipebank == 'bca') {
        messages +=  `
        <p>No. Rekening: 70212021 <br> On Behalf Of Mahasiswa IT </p>
        <button type="button" class="btn green copy" data-rekening="70212021">Copy</button>`;
    } else if(tipebank == 'bri') {
        messages +=  `
        <p>Email: mit@gmail.com <br> On Behalf Of Mahasiswa IT </p>
        <button type="button" class="btn green copy" data-rekening="mit@gmail.com">Copy</button>`;
    }
    messages += `
                </div>
            </div>
        </div>
    </div>`;

    return messages;
}


// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Sept 19, 2025 11:00:00").getTime();
// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {
// Untuk mendapatkan tanggal dan waktu hari ini
var now = new Date().getTime();
// Temukan jarak antara sekarang dan tanggal hitung mundur
var distance = countDownDate - now;

// Perhitungan waktu untuk hari, jam, menit dan detik
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const hari = document.querySelector('.hari');
const jam = document.querySelector('.jam');
const menit = document.querySelector('.menit');
const detik = document.querySelector('.detik');
hari.innerHTML = days; 
jam.innerHTML = hours; 
menit.innerHTML = minutes;
detik.innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
        clearInterval(x);
        hari.innerHTML = 0; 
        jam.innerHTML = 0; 
        menit.innerHTML = 0;
        detik.innerHTML = 0;
  }
}, 1000);


$('.page-link').on('click', function(e) {
    e.preventDefault();
    href = $(this).attr('href'); 
    href = $(href); 
    href = href.offset().top; 
    $('html').animate({
        scrollTop: href
    }, 1000, 'easeInOutExpo');
})

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 70, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

// Text animation

const bukaundangan = document.querySelector('.open-wedding');
const result       = String(bukaundangan); 
if(result == 'null') {
    console.log("No Happen");
    $('.intro').addClass('bukadong'); 
    $('.myicon').css({'display':'block'})
    audio.play();
} else {
    console.log("happend");
    bukaundangan.addEventListener('click', function() {
        $('.myicon').css({'display':'block'})
        $('.intro').addClass('bukadong'); 
        $('.invite').addClass('buka'); 
        $('html').animate({
            scrollTop: 0,
        },0);
        setCookie('login','true',1);
        audio.play();
    });
}




$(window).on('resize', function() {
    console.log($('.intro').hasClass('bukadong'));
    let ukuranwindow = this.screen.width; 
    if(ukuranwindow <= 683 && $('.intro').hasClass('bukadong')) {
        $('.nav').css({'display':'block'});
        $('.open-leaf6').css({'display': 'visible',})
        
    } else {
        $('.open-leaf6').css({
            'display': 'none',
        })
    }
});
$(window).on('load', function() {
    audio.play();
    let ukuranwindow = this.screen.width; 
    if(ukuranwindow <= 683 && $('.intro').hasClass('bukadong')) {
        $('.nav').css({'display':'block'});
        $('.open-leaf6').css({'display': 'visible'})
        $('.open-wedding').hide(); 

    } else {
        $('.open-leaf6').css({
            'display': 'none',
        })
    }
});




$('.myicon').on('click', function() {
    let icon = document.querySelector('.myicon i');
    if(icon.classList.contains('fa-pause')) {
        this.innerHTML = '<i class="fa fa-play"></i>';
        audio.pause();
    } else {
        this.innerHTML = '<i class="fa fa-pause"></i>';
        audio.play();
    }
})