const projects = {
    1: {
        title: "GO-mmo",
        desc: `<h1>GO-mmo</h1>
                GO-mmo to framework do gier typu Massively Multiplayer Online (MMO). Zapewnia solidną i skalowalną infrastrukturę do tworzenia gier wieloosobowych online. Projekt wykorzystuje potężne funkcje współbieżności, aby sprostać wysokim wymaganiom real-time'owego grania w trybie multiplayer.

                <h3>Cechy</h3>
                <b>Skalowalna Architektura:</b> Zaprojektowany, aby obsługiwać dużą liczbę jednoczesnych graczy przy minimalnym opóźnieniu.</br>
                <b>Komunikacja w Czasie Rzeczywistym:</b> Wydajne i niezawodne przesyłanie wiadomości między serwerem a klientami.</br>
                <b>Modularna Konstrukcja:</b> Rozszerzalny framework umożliwiający łatwą integrację nowych mechanik i funkcji gry.</br>
                <b>Bezpieczeństwo:</b> Implementuje bezpieczne protokoły komunikacyjne, aby chronić dane graczy i integralność gry.</br>
                <b>Integracja z Bazą Danych:</b> Obsługuje różne bazy danych dla trwałego przechowywania danych gry.`,

        src: "https://github.com/LinevPB/GO-mmo",
        images: [
            "https://private-user-images.githubusercontent.com/45857349/318257177-6b2be257-2fa5-4bc3-8a21-dc3e1bda6000.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxNzctNmIyYmUyNTctMmZhNS00YmMzLThhMjEtZGMzZTFiZGE2MDAwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3OWVjYmYxODg1NDczN2NhMWFhODYwNWM5NjNkMjQyNTY1OWVkZDY5NTExM2ZkNWZhODUyZGRlNTRmODg2YTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.RXylL4vW8HjVg2Ane1Knl0qMtm57Siphyr_ng7Sw-JM",
            "https://private-user-images.githubusercontent.com/45857349/318257179-bb8052f2-ce71-45d9-93a0-74caab9bf366.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxNzktYmI4MDUyZjItY2U3MS00NWQ5LTkzYTAtNzRjYWFiOWJmMzY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1M2NmMWQyZDk3NDA1NDYyYzI0NjZiYWU2OTQ1Yzc5ODk0NjdmNDRiZTYwNWJlNmNjYjNkMmY1M2U0MWE5OWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ew_JtT_TpSFj_3IpvWdFVPk8-YRhoFQLdB-aH7BtmAI",
            "https://private-user-images.githubusercontent.com/45857349/318257173-2ce21973-3bb9-4e74-8505-93fdd6c0cd6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxNzMtMmNlMjE5NzMtM2JiOS00ZTc0LTg1MDUtOTNmZGQ2YzBjZDZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5ZDlmNzdkYzMwYjE0MTEyYjk2NDU0ZjExNDg3YjM2ZTY5OGEzY2NhYzM1OTNiMTk0YWQ3NjYwODJiODExM2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.x51Vmpv_GiK7sBo-tdOwMBKcuD9dJK-pnxxaKAn2pAM",
            "https://private-user-images.githubusercontent.com/45857349/318257178-b915faec-5fef-4d0c-bc71-9854998f378d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxNzgtYjkxNWZhZWMtNWZlZi00ZDBjLWJjNzEtOTg1NDk5OGYzNzhkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlZWNmYjYzNzg3OTE5ZmQyZWQwNDM0MTRjNTUzODZkMDk0YzcyNjViNmUzOTY2ZTBjOTVmMGFmYzE2NjcxZDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YCHxKtWgUfTdLKsuZU1TqJMYPI9-53yzMXpbhSKDCqw",
            "https://private-user-images.githubusercontent.com/45857349/318257176-855ec03d-1809-457c-8b04-2c76d356bfd6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxNzYtODU1ZWMwM2QtMTgwOS00NTdjLThiMDQtMmM3NmQzNTZiZmQ2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA0YWEyYzY2ZDgxMTgyYzg4MWM3NTI3NDViNGUyYzg2MzhhOTI2NDhiODZmMWQyMmRkODY2ZmViMDNhNGYyMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0OsOP5RJNJdS833csQpX2Ieh9xMHcnxMixorAztaerU",
            "https://private-user-images.githubusercontent.com/45857349/318257182-45beeb01-8971-4f42-aaf8-ff92dff26a0f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxODItNDViZWViMDEtODk3MS00ZjQyLWFhZjgtZmY5MmRmZjI2YTBmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzMGQ1ZWI2NGRmNGQ0ODEyZWUxZjk4YjQ4ZjE0M2E4MmY0MjNhMGVlODcyNTUyNjRkZmY5NWRlOTgyMmVjYjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1lZ20hq1xOYQkQz4nhCyWwFx6KR8a8Dm6zmHa3nuHrc",
            "https://private-user-images.githubusercontent.com/45857349/318257183-fb7ff764-12ef-4ea6-be8b-2f21b4513275.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxODMtZmI3ZmY3NjQtMTJlZi00ZWE2LWJlOGItMmYyMWI0NTEzMjc1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY5OTRjMzRlNDkwMjY3M2JiNTlkNjQxZGM3ODcxNzc0MjJiZmYwZDdiMzhlY2ZiNmMyMDMxNzNjZDc3N2I3ZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dt0xCUuExkbU4pzYEwcICUR6r_beIo2i1Ig1WUeRIR8",
            "https://private-user-images.githubusercontent.com/45857349/318257181-830ecdb2-10e3-454d-98b5-a4ae664d7ac4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NjE4NjUsIm5iZiI6MTcyMTg2MTU2NSwicGF0aCI6Ii80NTg1NzM0OS8zMTgyNTcxODEtODMwZWNkYjItMTBlMy00NTRkLTk4YjUtYTRhZTY2NGQ3YWM0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyNTI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYyY2Y1NmI3Mzg5YWU5MjJiOTg1YzcxN2E0ODhlN2RkMzc5OWZlMjhhMmVkNDEwOTQxYWMwMjYyMmE5Y2U2MzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DR-VyO8XH0nn4rkskah3LUvbKErW_thtYCFVWFDa29U"
        ],
        techs: [
            "Squirrel",
            "C++",
            "SQL"
        ]
    },

    2: {
        title: "DX Graphics Engine",
        desc: "DX Graphics Engine",
        src: "https://github.com/LinevPB/DirectX",
        images: [
            "https://camo.githubusercontent.com/dc7cf7310872ce9ace6c05281b582ee803c05ee5cd468010ae23411d739516b9/68747470733a2f2f692e7974696d672e636f6d2f76692f4e37344342516c79554a342f6d617872657364656661756c742e6a7067"
        ],
        techs: [
            "C++",
            "HLSL"
        ]
    },

    3: {
        title: "Chat service",
        desc: "Chat service",
        src: "https://github.com/LinevPB/Chat-Service",
        images: [
            "https://www.tapeciarnia.pl/tapety/normalne/93394_lecaca_papuga.jpg",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png"
        ],
        techs: [
            "C#"
        ]
    },

    4: {
        title: "PHP CMS",
        desc: "PHP CMS",
        src: "https://github.com/LinevPB/php-forum",
        images: [
            "https://home.morele.net/wp-content/uploads/2022/04/ile-kosztuje-papuga-rozne-odmiany.jpg",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png",
            "https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png"
        ],
        techs: [
            "PHP",
            "HTML",
            "CSS",
            "JS",
            "SQL"
        ]
    },

};

function showDesc(id)
{
    if (projects[id] == null) return;

    const desc = document.getElementById("desc");
    const mainImg = document.getElementById("main-img-j");
    const imgList = document.getElementById("img-list");
    const techs = document.getElementById("technologies");
    const src = document.getElementById("src-link");

    desc.innerHTML = projects[id].desc;
    src.href = projects[id].src;

    imgList.innerHTML = '';
    for (const x of projects[id].images) {
        const newImg = document.createElement("img");
        newImg.src = x;

        imgList.appendChild(newImg);
    }

    techs.innerHTML = '';
    for (const x of projects[id].techs) {
        const newItem = document.createElement("li");
        newItem.innerText = x;
        newItem.classList.add("tech-item");

        techs.appendChild(newItem);
    }

    const box = document.getElementById("project-desc");
    box.style.visibility = "visible";

    mainImg.src = projects[id].images[0];
}

function hideDesc()
{
    const mark = document.getElementById("project-desc");
    mark.style.visibility = "hidden";
}

function createProjects()
{
    const list = document.getElementById("projects-list");

    for (const k in projects) {
        const x = projects[k];
        const proj = document.createElement("div");
        proj.classList.add("project-item");
        proj.onclick = function() {
            showDesc(k);
        }

        const img = document.createElement("img");
        img.src = x.images[0];

        const title = document.createElement("p");
        title.classList.add("title")
        title.innerText = x.title;

        proj.appendChild(img);
        proj.appendChild(title);

        list.appendChild(proj);
    }
}

let currentImageIndex = 0;

function scrollImages(direction) {
    const imgList = document.getElementById('img-list');
    const images = imgList.getElementsByTagName('img');
    const totalImages = images.length;
    const visibleImages = getVisibleImagesCount();

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    } else if (currentImageIndex > totalImages - visibleImages) {
        currentImageIndex = totalImages - visibleImages;
    }

    const offset = -currentImageIndex * (imgList.clientHeight / visibleImages);
    imgList.style.transform = `translateY(${offset}px)`;
}

function getVisibleImagesCount() {
    const width = window.innerWidth;

    if (width <= 768) {
        return 2;
    } else if (width <= 1200) {
        return 3;
    } else {
        return 4;
    }
}

window.addEventListener('resize', () => {
    scrollImages(0);
});

createProjects();