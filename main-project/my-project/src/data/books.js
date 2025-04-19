export const booksData = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3",
      description: "A story of decadence and excess, following the mysterious millionaire Jay Gatsby.",
      rating: 4.5,
      status: "Available",
      reviews: [
        { id: 1, user: "Reader1", comment: "A true classic!", rating: 5 },
        { id: 2, user: "BookLover", comment: "Beautiful prose.", rating: 4 }
      ]
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3",
      description: "The story of racial injustice and the loss of innocence in the American South.",
      rating: 4.8,
      status: "Available",
      reviews: [
        { id: 1, user: "BookWorm", comment: "Powerful and moving.", rating: 5 },
        { id: 2, user: "LitFan", comment: "A must-read!", rating: 4.5 }
      ]
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Science Fiction",
      coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2488&ixlib=rb-4.0.3",
      description: "A dystopian social science fiction novel and cautionary tale.",
      rating: 4.7,
      status: "Available",
      reviews: [
        { id: 1, user: "SciFiLover", comment: "Frighteningly relevant.", rating: 5 },
        { id: 2, user: "Reader2", comment: "Thought-provoking.", rating: 4.5 }
      ]
    }
  ];