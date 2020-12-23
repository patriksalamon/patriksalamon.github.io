window.onload = (event) => {

/* Pagination */
document.querySelector(".pagination").addEventListener("click", function(event){

    if(event.target.nodeName === 'A'){
        const s = event.target.text;
        let id = event.target.id;

        if(s === '«') id = 'page-one';
        if(s === '»') id = 'page-three';

        let page = document.getElementById(id);
        let pages = document.querySelectorAll('.pagination a');  

        let p1 = document.querySelector('.flex-gallery.page-one');
        let p2 = document.querySelector('.flex-gallery.page-two');
        let p3 = document.querySelector('.flex-gallery.page-three');

        pages.forEach(item => item.classList.remove('active'));

        if(s === '1'){
            p1.style.display = 'flex';
            p2.style.display = 'none';
            p3.style.display = 'none';
            
            page.classList.add('active');
        }
        else if(s === '2'){
            p1.style.display = 'none';
            p2.style.display = 'flex';
            p3.style.display = 'none';

            page.classList.add('active');
        }
        else{
            p1.style.display = 'none';
            p2.style.display = 'none';
            p3.style.display = 'flex';

            page.classList.add('active');
        }
    }
});

/* Form email send */
document.getElementById('btn-form').addEventListener('click', function(){

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let error = false;

    if(email.value === ''){
        email.style.backgroundColor = '#FFD2D2';
        error = true;
    }

    if(message.value === ''){
        message.style.backgroundColor = '#FFD2D2';
        error = true;
    }

    if (error) {
        setTimeout(() => {
            email.style.backgroundColor = '';
            message.style.backgroundColor = '';
        }, 5000);
    }
    else {

        window.open(`mailto:${email.value}?subject=Message from ${name.value}&body=${message.value}`);

        setTimeout(() => {

            name.value = "";
            email.value = "";
            message.value = "";

        }, 1000);
    }
});
};