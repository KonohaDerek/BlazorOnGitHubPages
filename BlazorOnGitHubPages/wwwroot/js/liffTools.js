
export function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      // start to use LIFF's api
      //initializeApp();
      console.log("success");
      if (!liff.isLoggedIn()) {
        console.log("not login");
        liff.login();
      }else{
        console.log("login");
      }
    })
    .catch((err) => {
      console.log(err);
      // document.getElementById("liffAppContent").classList.add('hidden');
      // document.getElementById("liffInitErrorMessage").classList.remove('hidden');
    });
}


