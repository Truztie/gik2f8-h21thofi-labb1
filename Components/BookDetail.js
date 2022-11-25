const BookDetail = (book) => {

    let bookDetail = `<div id=${book.id} class="book-item__detail flex bg-slate-800 text-slate-200 w-auto absolute rounded-md border-2 p-4 border-slate-800 bg-white w-full mx-auto p-">
                        <img src="${book.coverImage}" onerror="this.style.display='none'"  width="150px" height="250px"</img>
                        <div class="pl-4">
                          <p>ID: ${book.id}</p>
                          <p>Title: ${book.title}</p>
                          <p>Author: ${book.author}</p>
                          <p>Pages: ${book.pages}</p>
                          <p>Release Date: ${book.releaseDate}</p>
                        </div>
                      </div>`;
    return bookDetail;

  };
  const BookDetailRemove = () => {

    let bookDetailRemove = null;
    return bookDetailRemove;

  };