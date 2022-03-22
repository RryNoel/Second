const Red = document.querySelector('.btn_1');
        Red.addEventListener('click', function () {
            document.body.classList.toggle('btn_10');
            document.body.classList.remove('btn_20', 'btn_30',);
            btn_img.classList.remove('btn_img_show');
        });

const Blue = document.querySelector('.btn_2');
        Blue.addEventListener('click', function () {
            document.body.classList.toggle('btn_20');
            document.body.classList.remove('btn_10', 'btn_30',);
            btn_img.classList.remove('btn_img_show');
        });

const Purple = document.querySelector('.btn_3');
        Purple.addEventListener('click', function () {
            document.body.classList.toggle('btn_30');
            document.body.classList.remove('btn_10', 'btn_20');
            btn_img.classList.remove('btn_img_show');
        });

const Img = document.querySelector('.btn_4')
const btn_img = document.querySelector('.btn_img');
        Img.addEventListener('click', function () {
            btn_img.classList.toggle('btn_img_show');
            document.body.classList.remove('btn_10', 'btn_20', 'btn_30');
        });