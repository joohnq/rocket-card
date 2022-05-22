const urlUser = "https://api.github.com/users/joohnq";

function getUserInfo() {
  fetch(urlUser)
    .then((response) => response.json())
    .then((data) => {
      userLogin.textContent = data.login;
      userLogin.href = data.html_url
      userFollowers.textContent = data.followers;
      userFollowing.textContent = data.following;
      userRepositorys.textContent = data.public_repos;
      if (data.userCompany == null || data.userCompany == "") {
        userCompany.textContent = "Desempregado";
      } else {
        userCompany.textContent = data.userCompany;
      }
      userLocation.textContent = data.location;
      userAvatarBg.style.backgroundImage = `url(${data.avatar_url})`;
    })
    .catch((error) => console.error(error));
}

function changeBg(){

    let randomNumber1 = Math.floor(Math.random() * 1000);

    let randomNumber2 = Math.floor(Math.random() * 1000);
    
    let randomNumber3 = Math.floor(Math.random() * 1000);
    
    while (randomNumber1 > 256) {
      randomNumber1 = Math.floor(Math.random() * 1000);
    }
    
    while (randomNumber2 > 256) {
      randomNumber2 = Math.floor(Math.random() * 1000);
    }
    
    while (randomNumber3 > 256) {
      randomNumber3 = Math.floor(Math.random() * 1000);
    }

    const bgColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;

    cardUser.style.backgroundColor = bgColor
}

btnChangeBg.addEventListener('click', changeBg)

getUserInfo();
