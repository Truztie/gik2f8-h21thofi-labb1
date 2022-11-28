
/* Hämtar url från api.js och lägger sedan till IDet på den bok man hämtar genom funktionen*/

async function getBookDetail(bookid) {
    const result = await fetch(url + `/${bookid}`)
      .then((result) => result.json())
      .catch((e) => e)
    return result;
  }