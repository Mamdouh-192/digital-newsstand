const cardContainer = document.getElementById('cards-container');
console.log(typeof cardContainer);
const title = ["Harry Potter 1","Harry Potter 2","مع النبى","Harry Potter 3","أوراق شمعون المصرى","حدوتة عشق مصرية","عزازيل","الوحش","فن اللامبالاة","يوتوبيا","هيبتا","على هذه الأرض","مئة عام من العزلة","أحبك أو لا أحبك","لا تعتذر عما فعلت","تراب الماس","ذاكرة للنسيان",]
const descriptions = [
    "A young boy discovers he's a wizard and attends a magical school.",
    "Harry returns to Hogwarts for his second year, encountering a mysterious series of attacks.",
    "A biography of the Prophet Muhammad.",
    "The third year at Hogwarts brings danger from the imprisoned Sirius Black.",
    "A collection of essays on various social and cultural issues in Egypt.",
    "A collection of Egyptian love stories.",
    "A novel exploring the nature of evil and humanity's capacity for it.",
    "A novel about a young girl's struggle for survival in a dystopian future.",
    "A guide to embracing indifference as a means of achieving happiness.",
    "An exploration of the concept of utopia and its practical implementation.",
    "A mystery novel following a group of seven friends who uncover dark secrets.",
    "A story of love, betrayal, and redemption set in contemporary Egypt.",
    "A multi-generational saga chronicling the Buendía family's history in Macondo.",
    "A romantic novel exploring the complexities of love and relationships.",
    "A memoir about the author's experiences living in the Middle East.",
    "A novel about memory, loss, and the passage of time.",
    "An exploration of identity, history, and the power of storytelling."
];
const prices = [
    10.99, // Harry Potter 1
    12.99, // Harry Potter 2
    8.99,  // مع النبى
    11.99, // Harry Potter 3
    9.99,  // أوراق شمعون المصرى
    7.99,  // حدوتة عشق مصرية
    14.99, // عزازيل
    10.49, // الوحش
    13.99, // فن اللامبالاة
    11.49, // يوتوبيا
    9.49,  // هيبتا
    8.49,  // على هذه الأرض
    14.49, // مئة عام من العزلة
    11.99, // أحبك أو لا أحبك
    10.99, // لا تعتذر عما فعلت
    9.49,  // تراب الماس
    12.99  // ذاكرة للنسيان
];


for (let index = 0; index < 17; index++) {
    const card = `<div>
        <div class="card" style="width: 18rem">
            <img src="./image/${index+1}.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${title[index]}</h5>
                <p class="card-text">
${descriptions[index]}
                </p>
                <button type="button" class="btn btn-primary position-relative">
                    ${prices[index]} L.E
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99%
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </div>
    </div>`;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card;
    cardContainer.appendChild(tempDiv.firstChild);
}
