export const moviesArray= [
    {
        id: "a",
        img: "https://image.tmdb.org/t/p/original/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg",
        title: "Lego Batman",
        year: 2024,
        duration: 120,
        avg_rating: 4.5,
        genre: "Comedy",
        synopsis: 'bla bla bla',
        reviews: [
            {
                id: 'a',
                description: 'Great movie',
                rating: 4,
                user: "juancito",
                comments: [
                    {
                      id: 'a',
                      user: 'pepe',
                      description: 'great review :D'
                    }
                ]
            }
        ]
    },
    {
        id: "b",
        img: "https://image.tmdb.org/t/p/original/i0nzOT8reCr4lLa7LaKqfxfVnIx.jpg",
        title: "Spiderman: Far From Home",
        year: 2019,
        duration: 120,
        avg_rating: 4.2,
        genre: "Action",
        reviews: [
            {
                id: 'a',
                description: 'Great cast',
                rating: 4,
                user: 'camila01',
                comments: [
                    {
                      id: 'a',
                      user: 'spidermanfan2',
                      description: 'great review :D'
                    }
                ]
            }
        ]
    }
]

export const usersArray = [
    {
        id: 'a',
        name: 'Pedro',
        lastName: 'Gomez',
        email: 'pedrog@mail.com',
        password: '123',
        role: 'admin',
        reviews: [{
            id: 'a',
                description: 'Great cast',
                rating: 4,
        }]
    }
]