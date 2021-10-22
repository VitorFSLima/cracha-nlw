const linksSocialMedia = {
  linkedin: 'in/vitor-lima-a27146190',
  github: 'VitorFSLima',
  facebook: 'vitor.ferreira.311',
  instagram: 'vitorfslima',
  twitter: "rocketseat"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name // para mudar texto
      userBio.textContent = data.bio
      userLink.href = data.html_url // para mudar link
      userImage.src = data.avatar_url // para mudar imagem
      userLogin.textContent = data.login
    })

  //alert(url)
}

getGitHubProfileInfos()
