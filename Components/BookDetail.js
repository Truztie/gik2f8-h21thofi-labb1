const BookDetail = (book, x, y) => {

    let bookDetail = `<div id="BookDetail" class="book-item__detail flex bg-slate-600 text-slate-200 w-auto absolute rounded-md border-2 border-slate-900 p-4 w-full mx-auto p- top-[${y+10}px] left-[${x+10}px]">
                        <img src="${book.coverImage}" onerror="this.style.display='none'" width="150px" height="250px"</img>
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