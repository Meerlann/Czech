javascript
        // Данные для туров
        const toursData = [
            {
                id: 1,
                title: "Волшебная Прага",
                description: "4-дневный тур по столице Чехии с посещением Пражского Града, Карлова моста и Староместской площади.",
                price: "от 25 000 руб.",
                image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                title: "Чешский Крумлов",
                description: "Экскурсия в сказочный город-заповедник с посещением замка и прогулкой по извилистым улочкам.",
                price: "от 18 000 руб.",
                image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                title: "Карловы Вары",
                description: "Оздоровительный тур на знаменитый курорт с термальными источниками и уникальной архитектурой.",
                price: "от 22 000 руб.",
                image: "https://images.unsplash.com/photo-1598966735771-4c0e69c6f5b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                title: "Брно и Моравский Край",
                description: "Исследуйте второй по величине город Чехии и знаменитые Моравские пещеры.",
                price: "от 20 000 руб.",
                image: "https://images.unsplash.com/photo-1588666309999-ef3c1c6f55fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                title: "Пражские замки",
                description: "Тур по самым знаменитым замкам в окрестностях Праги: Карлштейн, Конопиште и другие.",
                price: "от 28 000 руб.",
                image: "https://images.unsplash.com/photo-1547891657-e0c8ddd8b5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                title: "Пивной тур по Чехии",
                description: "Посещение знаменитых пивоварен Пльзень, Будвайзер и дегустации лучших сортов пива.",
                price: "от 30 000 руб.",
                image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                title: "Зимняя Прага",
                description: "Рождественские ярмарки, зимние пейзажи и уютные кафе в самом сердце Европы.",
                price: "от 27 000 руб.",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                title: "Чешская Швейцария",
                description: "Национальный парк с уникальными скальными образованиями и живописными тропами.",
                price: "от 24 000 руб.",
                image: "https://images.unsplash.com/photo-1593693397697-15c5d69ac4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 9,
                title: "Кутна Гора и костница",
                description: "Экскурсия в город с уникальной часовней, украшенной человеческими костями.",
                price: "от 19 000 руб.",
                image: "https://images.unsplash.com/photo-1580584126903-c17dab3041e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 10,
                title: "Пражские каникулы",
                description: "7-дневный тур с полным погружением в культуру, историю и кухню Праги.",
                price: "от 35 000 руб.",
                image: "https://images.unsplash.com/photo-1556484687-3064c7c81c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 11,
                title: "Гастрономический тур",
                description: "Знакомство с чешской кухней: кнедлики, вепрево колено, трдельник и многое другое.",
                price: "от 26 000 руб.",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 12,
                title: "Романтический уикенд",
                description: "Специальный тур для пар с проживанием в исторических отелях и романтическими ужинами.",
                price: "от 32 000 руб.",
                image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            }
        ];
];

document.addEventListener('DOMContentLoaded', function() {
    const toursContainer = document.getElementById('tours-container');
    
    if (toursContainer) {
        toursData.forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'tour-card';
            tourCard.innerHTML = `
                <div class="tour-image">
                    <img src="${tour.image}" alt="${tour.title}" loading="lazy">
                </div>
                <div class="tour-content">
                    <h3 class="tour-title">${tour.title}</h3>
                    <p class="tour-description">${tour.description}</p>
                    <div class="tour-price">${tour.price}</div>
                    <a href="booking.html" class="btn">Забронировать</a>
                </div>
            `;
            toursContainer.appendChild(tourCard);
        });
    }
});
