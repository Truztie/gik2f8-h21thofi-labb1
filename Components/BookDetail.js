const BookDetail = (book) => {

    let bookDetail = `<div id=${book.id} class="book-item__detail flex bg-slate-600 text-slate-200 w-auto absolute rounded-md border-2 border-slate-900 p-4 w-full mx-auto p-">
                        <img src="${book.coverImage}" onerror="this.style.display='none'"  width="150px" height="250px"</img>
                        <div class="p-4">
                          <p class="py-2.5" > ID: ${book.id}</p>
                          <p class="py-2.5" > Title: ${book.title}</p>
                          <p class="py-2.5" > Author: ${book.author}</p>
                          <p class="py-2.5" > Pages: ${book.pages}</p>
                          <p class="py-2.5" > Release Date: ${book.releaseDate}</p>
                        </div>
                      </div>`;
    return bookDetail;

  };