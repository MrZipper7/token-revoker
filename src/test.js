

let headers = new Headers();
    headers.set('Authorization', "Bearer ckey_e177b6eb588a4c4ea412bbdae4b")

fetch("https://api.covalenthq.com/v1/defi-kingdoms-mainnet/approvals/0xf543311360d1072873D627B06ffe85587e8fc41a/", {method: 'GET', headers: headers})
  .then((resp) => resp.json())
  .then((data) => console.log(data));