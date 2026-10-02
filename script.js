/* =========================================================
   MIX CELL
   SCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

const WHATSAPP = "5551983215850";

const CART_KEY = "mix-cell-cart";


/* =========================================================
   PRODUTOS
   ========================================================= */

const products = [

    {
        id: 1,
        category: "fones",
        name: "Fone Bluetooth i9S",
        description: "Fone Bluetooth para uso diário.",
        price: 90
    },

    {
        id: 2,
        category: "carregadores",
        name: "Carregador V8",
        description: "Carregador com conexão V8.",
        price: 25
    },

    {
        id: 3,
        category: "carregadores",
        name: "Carregador Tipo C",
        description: "Carregamento com conexão USB-C.",
        price: 50
    },

    {
        id: 4,
        category: "capinhas",
        name: "Capa de Celular",
        description: "Proteção para diferentes modelos.",
        price: 20
    },

    {
        id: 5,
        category: "fones",
        name: "Fone Bluetooth Intra Auricular",
        description: "Fone compacto sem fio.",
        price: 120
    },

    {
        id: 6,
        category: "cabos",
        name: "Cabo USB 1 Metro",
        description: "Cabo para carregamento e conexão.",
        price: 20
    },

    {
        id: 7,
        category: "cabos",
        name: "Cabo USB 2 Metros",
        description: "Mais alcance para carregar seu aparelho.",
        price: 25
    },

    {
        id: 8,
        category: "cabos",
        name: "Cabo USB 3 Metros",
        description: "Cabo longo para maior praticidade.",
        price: 30
    },

    {
        id: 9,
        category: "fones",
        name: "Fone Bluetooth Compact",
        description: "Modelo compacto para uso cotidiano.",
        price: 75
    },

    {
        id: 10,
        category: "fones",
        name: "Fone Bluetooth Pro",
        description: "Fone sem fio para música e chamadas.",
        price: 110
    },

    {
        id: 11,
        category: "capinhas",
        name: "Capa Transparente",
        description: "Proteção discreta para o aparelho.",
        price: 20
    },

    {
        id: 12,
        category: "capinhas",
        name: "Capa Anti Impacto",
        description: "Proteção reforçada contra impactos.",
        price: 40
    },

    {
        id: 13,
        category: "carregadores",
        name: "Carregador Turbo",
        description: "Carregamento rápido compatível.",
        price: 50
    },

    {
        id: 14,
        category: "carregadores",
        name: "Fonte USB",
        description: "Fonte compacta para carregamento.",
        price: 35
    },

    {
        id: 15,
        category: "cabos",
        name: "Cabo Tipo C",
        description: "Cabo USB-C para carregamento.",
        price: 25
    },

    {
        id: 16,
        category: "capinhas",
        name: "Capa Silicone",
        description: "Proteção flexível com acabamento macio.",
        price: 30
    },

    {
        id: 17,
        category: "fones",
        name: "Fone Bluetooth Mini",
        description: "Pequeno, leve e sem fio.",
        price: 90
    },

    {
        id: 18,
        category: "carregadores",
        name: "Carregador V8 + Cabo",
        description: "Kit para carregamento.",
        price: 45
    },

    {
        id: 19,
        category: "cabos",
        name: "Cabo Reforçado",
        description: "Construção reforçada para maior durabilidade.",
        price: 30
    },

    {
        id: 20,
        category: "capinhas",
        name: "Capa Premium",
        description: "Proteção com acabamento premium.",
        price: 40
    },

    {
        id: 21,
        category: "fones",
        name: "Fone Wireless",
        description: "Áudio sem fio para o dia a dia.",
        price: 100
    },

    {
        id: 22,
        category: "carregadores",
        name: "Carregador Dual USB",
        description: "Duas portas para carregamento.",
        price: 50
    },

    {
        id: 23,
        category: "capinhas",
        name: "Capa Color",
        description: "Proteção e visual diferente.",
        price: 25
    },

    {
        id: 24,
        category: "cabos",
        name: "Cabo Fast Charge",
        description: "Cabo para carregamento rápido.",
        price: 30
    },

    {
        id: 25,
        category: "fones",
        name: "Fone Gamer",
        description: "Áudio para jogos e entretenimento.",
        price: 120
    },

    {
        id: 26,
        category: "carregadores",
        name: "Fonte Tipo C",
        description: "Fonte para aparelhos com USB-C.",
        price: 50
    },

    {
        id: 27,
        category: "capinhas",
        name: "Capa Black",
        description: "Acabamento escuro e discreto.",
        price: 30
    },

    {
        id: 28,
        category: "cabos",
        name: "Cabo 3 em 1",
        description: "Conexões múltiplas em um único cabo.",
        price: 30
    },

    {
        id: 29,
        category: "fones",
        name: "Fone Sport",
        description: "Modelo pensado para atividades.",
        price: 95
    },

    {
        id: 30,
        category: "capinhas",
        name: "Capa Full Protection",
        description: "Proteção completa para o aparelho.",
        price: 40
    }

];


/* =========================================================
   ESTADO
   ========================================================= */

let activeCategory = "todos";

let visibleProducts = 8;

let cart = JSON.parse(
    localStorage.getItem(CART_KEY)
) || [];

let selectedModalProduct = null;


/* =========================================================
   ELEMENTOS
   ========================================================= */

const productGrid =
    document.getElementById("productGrid");

const productCounter =
    document.getElementById("productCounter");

const scrollSentinel =
    document.getElementById("scrollSentinel");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const openCart =
    document.getElementById("openCart");

const closeCart =
    document.getElementById("closeCart");

const checkoutButton =
    document.getElementById("checkoutButton");

const toast =
    document.getElementById("toast");

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalAdd =
    document.getElementById("modalAdd");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");

const modalCategory =
    document.getElementById("modalCategory");

const modalImage =
    document.getElementById("modalImage");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuClose =
    document.getElementById("mobileMenuClose");


/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function formatPrice(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


function saveCart() {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   PRODUTOS
   ========================================================= */

function getFilteredProducts() {

    if (activeCategory === "todos") {

        return products;

    }

    return products.filter(
        product =>
            product.category === activeCategory
    );

}


function renderProducts(reset = false) {

    const filtered =
        getFilteredProducts();

    if (reset) {

        productGrid.innerHTML = "";

        visibleProducts = 8;

    }

    const items =
        filtered.slice(
            0,
            visibleProducts
        );

    productGrid.innerHTML = items
        .map(createProductCard)
        .join("");

    productCounter.textContent =
        `${filtered.length} produtos`;

    if (
        visibleProducts >=
        filtered.length
    ) {

        scrollSentinel.style.display =
            "none";

    } else {

        scrollSentinel.style.display =
            "flex";

    }

}


function createProductCard(product) {

    return `

        <article
            class="product-card"
            data-id="${product.id}"
        >

            <div class="product-image">

                <div class="product-object"></div>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>

                    <button
                        class="add-product"
                        data-add="${product.id}"
                        type="button"
                        aria-label="Adicionar ${product.name}"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   EVENTOS DOS PRODUTOS
   ========================================================= */

productGrid.addEventListener(
    "click",
    event => {

        const addButton =
            event.target.closest(
                "[data-add]"
            );

        if (addButton) {

            event.stopPropagation();

            const id =
                Number(addButton.dataset.add);

            addToCart(id);

            return;

        }

        const card =
            event.target.closest(
                ".product-card"
            );

        if (!card) return;

        const id =
            Number(card.dataset.id);

        openProductModal(id);

    }
);


/* =========================================================
   FILTROS
   ========================================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add("active");

                activeCategory =
                    button.dataset.category;

                renderProducts(true);

            }
        );

    });


/* =========================================================
   INFINITE SCROLL
   ========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            const entry = entries[0];

            if (!entry.isIntersecting) return;

            const filtered =
                getFilteredProducts();

            if (
                visibleProducts >=
                filtered.length
            ) {

                return;

            }

            visibleProducts += 4;

            renderProducts();

        },
        {
            rootMargin: "300px"
        }
    );


observer.observe(scrollSentinel);


/* =========================================================
   MODAL
   ========================================================= */

function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    selectedModalProduct = product;

    modalTitle.textContent =
        product.name;

    modalDescription.textContent =
        product.description;

    modalPrice.textContent =
        formatPrice(product.price);

    modalCategory.textContent =
        product.category;

    modalImage.innerHTML =
        `<div class="product-object"></div>`;

    productModal.classList.add("open");

    productModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeProductModal() {

    productModal.classList.remove("open");

    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


modalClose.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            productModal
        ) {

            closeProductModal();

        }

    }
);


modalAdd.addEventListener(
    "click",
    () => {

        if (!selectedModalProduct) {
            return;
        }

        addToCart(
            selectedModalProduct.id
        );

        closeProductModal();

    }
);


/* =========================================================
   CARRINHO
   ========================================================= */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();

    renderCart();

    showToast(
        `${product.name} adicionado à bag.`
    );

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


function renderCart() {

    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                Sua bag está vazia.

            </div>

        `;

        cartCount.textContent = "0";

        cartTotal.textContent =
            formatPrice(0);

        checkoutButton.href = "#";

        return;

    }


    let total = 0;

    let quantityTotal = 0;


    cartItems.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );

            if (!product) return "";

            const subtotal =
                product.price *
                item.quantity;

            total += subtotal;

            quantityTotal +=
                item.quantity;

            return `

                <article class="cart-item">

                    <div class="cart-item-image"></div>

                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <span>
                            ${item.quantity}x —
                            ${formatPrice(subtotal)}
                        </span>

                    </div>

                    <button
                        class="cart-remove"
                        data-remove="${product.id}"
                        type="button"
                        aria-label="Remover ${product.name}"
                    >
                        ×
                    </button>

                </article>

            `;

        }).join("");


    cartCount.textContent =
        quantityTotal;

    cartTotal.textContent =
        formatPrice(total);


    const message =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );

            return `${item.quantity}x ${product.name}`;

        }).join("%0A");


    checkoutButton.href =
        `https://wa.me/${WHATSAPP}?text=` +
        `Olá, Mix Cell. Quero informações sobre:%0A%0A` +
        `${message}`;

}


cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-remove]"
            );

        if (!button) return;

        removeFromCart(
            Number(button.dataset.remove)
        );

    }
);


/* =========================================================
   ABRIR / FECHAR CARRINHO
   ========================================================= */

function openCartDrawer() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

    cartDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCartDrawer() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

    cartDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


openCart.addEventListener(
    "click",
    openCartDrawer
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================================
   DIAGNÓSTICO
   ========================================================= */

const diagnosticData = {

    tela: {

        title: "Tela quebrada",

        description:
            "Trincas, manchas, linhas ou problemas no touch podem indicar danos no conjunto do display."

    },

    bateria: {

        title: "Bateria",

        description:
            "Descarregamento rápido, desligamentos repentinos ou bateria estufada precisam de avaliação."

    },

    carga: {

        title: "Não carrega",

        description:
            "O problema pode estar no cabo, fonte, conector ou circuito de carregamento."

    },

    agua: {

        title: "Entrou água",

        description:
            "Quando líquido entra no aparelho, desligue o dispositivo e evite tentar carregá-lo antes da avaliação."

    },

    software: {

        title: "Sistema",

        description:
            "Travamentos, lentidão, falhas de aplicativos ou problemas de inicialização podem estar relacionados ao software."

    },

    outro: {

        title: "Outro problema",

        description:
            "Não conseguiu identificar o sintoma? Explique o que aconteceu e a equipe poderá avaliar o aparelho."

    }

};


const diagnosticTitle =
    document.getElementById(
        "diagnosticTitle"
    );

const diagnosticDescription =
    document.getElementById(
        "diagnosticDescription"
    );

const diagnosticWhatsapp =
    document.getElementById(
        "diagnosticWhatsapp"
    );


document
    .querySelectorAll(
        ".diagnostic-option"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".diagnostic-option"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );


                const problem =
                    button.dataset.problem;

                const data =
                    diagnosticData[
                        problem
                    ];


                diagnosticTitle.textContent =
                    data.title;

                diagnosticDescription.textContent =
                    data.description;


                const message =
                    `Olá, Mix Cell. ` +
                    `Gostaria de solicitar um orçamento.` +
                    `%0A%0A` +
                    `Problema: ${data.title}`;


                diagnosticWhatsapp.href =
                    `https://wa.me/${WHATSAPP}?text=${message}`;

            }
        );

    });


/* =========================================================
   MENU MOBILE
   ========================================================= */

menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.add(
            "open"
        );

    }
);


mobileMenuClose.addEventListener(
    "click",
    () => {

        mobileMenu.classList.remove(
            "open"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================================
   CURSOR
   ========================================================= */

const cursor =
    document.querySelector(
        ".cursor"
    );

const cursorFollower =
    document.querySelector(
        ".cursor-follower"
    );


let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


window.addEventListener(
    "mousemove",
    event => {

        mouseX = event.clientX;

        mouseY = event.clientY;

        cursor.style.left =
            `${mouseX}px`;

        cursor.style.top =
            `${mouseY}px`;

    }
);


function animateCursor() {

    followerX +=
        (mouseX - followerX) * .12;

    followerY +=
        (mouseY - followerY) * .12;

    cursorFollower.style.left =
        `${followerX}px`;

    cursorFollower.style.top =
        `${followerY}px`;

    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* =========================================================
   EFEITO MAGNÉTICO
   ========================================================= */

document
    .querySelectorAll(
        "a, button, .product-card"
    )
    .forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorFollower.style.width =
                    "55px";

                cursorFollower.style.height =
                    "55px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorFollower.style.width =
                    "35px";

                cursorFollower.style.height =
                    "35px";

            }
        );

    });


/* =========================================================
   TILT DOS CARDS
   ========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        const cards =
            document.querySelectorAll(
                ".service-card"
            );


        cards.forEach(card => {

            const rect =
                card.getBoundingClientRect();

            const inside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;


            if (!inside) {

                card.style.transform =
                    "";

                return;

            }


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const rotateY =
                ((x / rect.width) - .5) * 4;

            const rotateX =
                ((y / rect.height) - .5) * -4;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

    }
);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeCartDrawer();

        closeProductModal();

        mobileMenu.classList.remove(
            "open"
        );

    }
);


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

renderProducts(true);

renderCart();


/* =========================================================
   LINK INICIAL DO DIAGNÓSTICO
   ========================================================= */

const initialMessage =
    `Olá, Mix Cell. ` +
    `Gostaria de solicitar um orçamento.` +
    `%0A%0A` +
    `Problema: Tela quebrada`;


diagnosticWhatsapp.href =
    `https://wa.me/${WHATSAPP}?text=${initialMessage}`;