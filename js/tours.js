// Данные для туров
const toursData = [
    {
        id: 1,
        title: "Волшебная Прага",
        description: "4-дневный тур по столице Чехии с посещением Пражского Града, Карлова моста и Староместской площади.",
        price: "25 000 руб.",
        duration: "4 дня",
        season: "Круглый год",
        image: "https://avatars.mds.yandex.net/get-entity_search/118532/1211701862/orig",
        link: "booking.html"
    },
    {
        id: 2,
        title: "Чешский Крумлов",
        description: "Экскурсия в сказочный город-заповедник с посещением замка и прогулкой по извилистым улочкам.",
        price: "18 000 руб.",
        duration: "3 дня",
        season: "Круглый год",
        image: "https://avatars.mds.yandex.net/get-entity_search/5674964/1205073496/orig",
        link: "booking.html"
    },
    {
        id: 3,
        title: "Карловы Вары",
        description: "Оздоровительный тур на знаменитый курорт с термальными источниками и уникальной архитектурой.",
        price: "32 000 руб.",
        duration: "5 дней",
        season: "Круглый год",
        image: "https://avatars.mds.yandex.net/get-entity_search/137430/1209696989/orig",
        link: "booking.html"
    },
    {
        id: 4,
        title: "Брно и Моравский Край",
        description: "Исследуйте второй по величине город Чехии и знаменитые Моравские пещеры.",
        price: "22 000 руб.",
        duration: "4 дня",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1588666309999-ef3c1c6f55fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 5,
        title: "Пражские замки",
        description: "Тур по самым знаменитым замкам в окрестностях Праги: Карлштейн, Конопиште и другие.",
        price: "28 000 руб.",
        duration: "5 дней",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1547891657-e0c8ddd8b5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 6,
        title: "Пивной тур по Чехии",
        description: "Посещение знаменитых пивоварен Пльзень, Будвайзер и дегустации лучших сортов пива.",
        price: "35 000 руб.",
        duration: "6 дней",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 7,
        title: "Зимняя Прага",
        description: "Рождественские ярмарки, зимние пейзажи и уютные кафе в самом сердце Европы.",
        price: "27 000 руб.",
        duration: "4 дня",
        season: "Декабрь-Февраль",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 8,
        title: "Чешская Швейцария",
        description: "Национальный парк с уникальными скальными образованиями и живописными тропами.",
        price: "24 000 руб.",
        duration: "3 дня",
        season: "Апрель-Октябрь",
        image: "https://images.unsplash.com/photo-1593693397697-15c5d69ac4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 9,
        title: "Кутна Гора и костница",
        description: "Экскурсия в город с уникальной часовней, украшенной человеческими костями.",
        price: "19 000 руб.",
        duration: "2 дня",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1580584126903-c17dab3041e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 10,
        title: "Пражские каникулы",
        description: "7-дневный тур с полным погружением в культуру, историю и кухню Праги.",
        price: "40 000 руб.",
        duration: "7 дней",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1556484687-3064c7c81c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 11,
        title: "Гастрономический тур",
        description: "Знакомство с чешской кухней: кнедлики, вепрево колено, трдельник и многое другое.",
        price: "30 000 руб.",
        duration: "5 дней",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    },
    {
        id: 12,
        title: "Романтический уикенд",
        description: "Специальный тур для пар с проживанием в исторических отелях и романтическими ужинами.",
        price: "32 000 руб.",
        duration: "3 дня",
        season: "Круглый год",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        link: "booking.html"
    }
];

// Функция для создания карточки тура
function createTourCard(tour) {
    return `
        <div class="tour-card">
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}" loading="lazy">
            </div>
            <div class="tour-content">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-description">${tour.description}</p>
                <div class="tour-details">
                    <span class="tour-duration">⏱ ${tour.duration}</span>
                    <span class="tour-season">${getSeasonIcon(tour.season)} ${tour.season}</span>
                </div>
                <div class="tour-price">${tour.price}</div>
                <a href="${tour.link}" class="btn btn-block">Забронировать</a>
            </div>
        </div>
    `;
}

// Функция для получения иконки сезона
function getSeasonIcon(season) {
    if (season.includes('Декабрь') || season.includes('Зима')) {
        return '❄️';
    } else if (season.includes('Апрель') || season.includes('Весна')) {
        return '🌷';
    } else {
        return '🌞';
    }
}

// Функция для отображения всех туров
function renderTours() {
    const toursContainer = document.getElementById('tours-container');
    if (toursContainer) {
        toursContainer.innerHTML = toursData.map(tour => createTourCard(tour)).join('');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderTours();
});
