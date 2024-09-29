const carouselInner = document.querySelector('.projects__carousel-inner');
const itemsToShow = 2;

document.addEventListener('DOMContentLoaded',()=>{
    fetch('projects.json')
    .then(response => response.json())
    .then(projects =>{
        projects.forEach(project =>{
            carouselInner.innerHTML += `
    <div class='projects__carousel-card'>
    <div class='test'>
    <img src='https://img.freepik.com/premium-photo/girl-with-long-blonde-hair-hacking-computer-room_1279815-25050.jpg?size=626&ext=jpg&ga=GA1.1.883863619.1701899872&semt=ais_hybrid' alt='image' class='projects__carousel-card_img'/>
        <a href='${project.link}' class='projects__carousel-card_link'>
            <span class='projects__carousel-card_link--text'>${project.title}
            </span>
        </a>
    </div>
    </div>
    `;
        });
        startCarousel();
    })
    .catch(error => console.error('Error loading projects:', error));
})

function startCarousel(){
    const items = document.querySelectorAll('.projects__carousel-card');
    const totalCards = items.length;
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + itemsToShow) % totalCards;
        carouselInner.style.transform = `translateX(-${(currentIndex * 100) / itemsToShow}%)`;
    }, 5000);
}