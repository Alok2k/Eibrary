// helpers.js
export const filterEbooks = (ebooks, selectedCategory, searchTerm) => {
    let filteredEbooks = [...ebooks];
  
    if (selectedCategory !== 'All') {
      filteredEbooks = filteredEbooks.filter(
        (ebook) => ebook.category === selectedCategory
      );
    }
  
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredEbooks = filteredEbooks.filter((ebook) =>
        ebook.title.toLowerCase().includes(searchTermLower) ||
        ebook.author.toLowerCase().includes(searchTermLower)
      );
    }
  
    return filteredEbooks.slice(0, 6); // Limit to the first 6 filtered books
  };
  