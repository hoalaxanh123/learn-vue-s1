const app = Vue.createApp({
    data() {
        books = []
        for (let index = 1; index <= 6; index++) {
            books.push(
                {
                    title: `Toeic 990 and up book ${index}!`,
                    author: `David Taylor ${index}`,
                    price: Math.floor(Math.random() * 6) + index,
                    counter: 0,
                    image: `toeic${index}.jpg`,
                    isFav: false,
                    isResetting: false
                },
            )

        }
        return {
            books: books,
            isInBox: false,
            mousePositionX: 0,
            mousePositionY: 0,
            green: 165
        }
    },
    methods: {
        changeCounter(type, book, index) {
            book.isResetting = !book.isResetting
            switch (type) {
                case "down":
                    if (book.counter > 0) {
                        book.counter--
                    }
                    break;
                case "up":
                    book.counter++
                    break;
                case "reset":
                    book.counter = 0
                    $(`#reset-book-${index}`).modal('hide');
                    break;
                default:
                    break;
            }
        },
        changeFav() {
            book.isFav = !book.isFav
        },
        handleMouse(event, data) {
            switch (event.type) {
                case "mouseenter":
                    this.isInBox = true
                    break;
                case "mouseleave":
                case "mouseout":
                    this.isInBox = false
                    break;
                case "mousemove":
                    this.mousePositionX = event.x
                    this.mousePositionY = event.y
                    break;
                case "click":
                    console.log("CLicked")
                    break;
                case "dblclick":
                    console.log("CLicked")
                    break;
                default:
                    break;
            }
            if (data) console.log('data', data)
        }
    },

})


app.mount("#app")