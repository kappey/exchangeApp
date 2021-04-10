export const URL_API = "/data/currency.json";

export const doApiGet = async (_url) => {
  try {
    let res = await fetch(_url);
    let data = await res.json();
    return data;
  }
  catch (err) {
    console.log(err);
    alert("Something went wrong, Please try again later")
    return err;
  }
}

// export const getCurrencyValue = async (_url, _currencyValue) => {
//   try {
//     let res = await fetch(_url, {
//       quotes: _currencyValue
//     });
//     let data = await res.json();
//     return data;
//   }
//   catch (err) {
//     console.log(err);
//     alert("Something went wrong, Please try again later")
//     return err;
//   }
// }
