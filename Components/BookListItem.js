const BookListItem = (book) => {
  let html = `<li id="${book.id}"
              class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-slate-200 last:border-b-0 border-b border-slate-900 cursor-pointer">
              ${book.author} - ${book.title}
              </li>`;
  return html;
};
