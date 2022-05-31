const params = new URLSearchParams(window.location.search);
if (params) {
    document.querySelector('.guest-name').textContent = params.get('nama_tamu');
}

// Hide Content Section
$('#content').hide();

// Full Date
const year = document.querySelector('.year').textContent;
const month = document.querySelector('.month').textContent;
const day = document.querySelector('.day').textContent;

const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const fullDate = document.querySelectorAll('.full-date');
fullDate.forEach((date) => {
    date.textContent = `${hari[(day % 7) + 1]}, ${day} ${bulan[month - 1]} ${year}`;
});

// Simply Countdown
simplyCountdown('.simply-countdown-one', {
    year: year,
    month: month,
    day: day,
    hours: 12,
});

$('#simply-countdown-losange').simplyCountdown({
    year: year,
    month: month,
    day: day,
    hours: 12,
    enableUtc: false,
});

// Clipboard
var Clipboard = new ClipboardJS('.clipboard');

// If Button Menu Link Clicked
const buttonMenuLinks = document.querySelectorAll('.button-menu-link');
buttonMenuLinks.forEach((link) =>
    link.addEventListener('click', function () {
        buttonMenuLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    })
);

// If Buka-Undangan Button Clicked
$('#buka-undangan').click(function () {
    $('.cover').hide(); //hide the begining
    $('#content').show(); //show konten
    $('#audio').get(0).play(); //play musik
    document.documentElement.requestFullscreen(); //fullscreen
});

// If Gift Button Clicked
$('.gift .no-rek-card .clipboard').click(function () {
    $('.gift .no-rek-card .clipboard .no-rek-icon').html('<i class="bi bi-check-lg"></i>');
    $('.gift .no-rek-card .clipboard .no-rek-btn-text').html('Berhasil Disalin');

    setTimeout(() => {
        $('.gift .no-rek-card .clipboard .no-rek-icon').html('<i class="bi bi-clipboard-fill"></i>');
        $('.gift .no-rek-card .clipboard .no-rek-btn-text').html('Salin Nomor Rekening');
    }, 2000);
});

// If Sound Button Toggled
$('.mute').click(function () {
    let bool = $('#audio').prop('muted');
    $('#audio').prop('muted', !bool);

    if (bool) {
        $('.mute').html('<i class="bi bi-volume-up-fill"></i>');
    } else {
        $('.mute').html('<i class="bi bi bi-volume-mute-fill"></i>');
    }
});

// Swiper JS Config
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
