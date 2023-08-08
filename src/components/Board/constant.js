
export const mapData = [
    {
        id: Date.now() + Math.random() * 0.5,  // Date.now() ==> Give milisecond
        title: 'To-Do One By One',
        cards: [
            {
                id: Date.now() + Math.random(),
                title: 'Card 1',
                tasks: [],
                labels: [{ text: 'FrontEnd', color: 'blue' }],
                description: 'This is FrontEnd Description',
                date: ''
            },

            {
                id: Date.now() + Math.random(),
                title: 'Card 2',
                tasks: [],
                labels: [{ text: 'BackEnd', color: 'brown' }],
                description: 'This is BackEnd Description',
                date: ''
            }

        ]
    }
]
