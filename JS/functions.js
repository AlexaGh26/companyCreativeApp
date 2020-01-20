new Vue({
    el: '#imgs',
    data() {
        return {
            imgsArr: [
                {
                    url: './img/1.jpg',
                    id: 1,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/2.jpg',
                    id: 2,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/3.jpg',
                    id: 3,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/4.jpg',
                    id: 4,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/5.jpg',
                    id: 5,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/6.jpg',
                    id: 6,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/7.jpg',
                    id: 7,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/8.jpg',
                    id: 8,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/9.jpg',
                    id: 9,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/20.jpg',
                    id: 10,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/11.jpg',
                    id: 11,
                    title: 'Titulo 1',
                    hovered: false
                },
                {
                    url: './img/12.jpg',
                    id: 12,
                    title: 'Titulo 1',
                    hovered: false
                }
            ]
        }
    },
    methods: {
        hover: (item) => {
            if (item.hovered) {
                item.hovered = false
            } else {
                item.hovered = true
            }
        }
    }
})

new Vue({
    el: '#menuBar',
    data: {
        expanded: false  
    }, 
    methods: {
        toggleMenu: (flag) => flag = !flag
    }
})

new Vue({
    el: '#articles',
    data: {
        expanded: false  
    }, 
    methods: {
        toggle: (flag) => flag = !flag,
        expand: () => {

        }
    }
})

