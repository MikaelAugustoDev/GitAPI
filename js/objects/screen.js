
const screen = {

    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Imagem de Perfil" /> 
                                            <div class="data">

                                                <h1>${user.name ?? "Este usuário não possui Nome cadastrado!"}</h1>
                                                <p>${user.bio ?? "Este usuário não possui Bio cadastrada!"}</p>

                                                <div class="follows">

                                                    <div class="follower">
                                                        <p>Seguidores</p>
                                                        <p>${user.followers}</p>
                                                    </div>

                                                    <div class="following">
                                                        <p>Seguindo</p>
                                                        <p>${user.following}</p>
                                                    </div>

                                                </div>
                                            </div>
                                     </div>
                                     
                                     
                                     <div class="links">
                                     
                                        <a> 
                                            <img class="image" src="../../assets/maps.svg"/>
                                            <p>${user.location ?? "Este Usuário veio do espaço"}</p>                                        
                                        </a>

                                        <a target="_blank" href="${user.blog}"> 
                                            <img class="image" src="../../assets/link.svg"/>
                                            <p>${'Site' ?? "Não possui um Site"}</p>                                         
                                        </a>
                                        
                                        <a> 
                                            <img class="image" src="../../assets/twit.svg"/>
                                            <p>${user.twitterUsername ?? 'Antissocial'}</p>                                        
                                        </a>

                                        <a target="_blank" href="${user.htmlUrl}"> 
                                            <img class="image" src="../../assets/github.svg"/>
                                            <p>${user.login}</p>                                    
                                        </a>
                                     
                                     </div>
                                     
                                     `

        let reposItens = ''
        user.repos.forEach(repo => reposItens += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`)

        if (user.repos.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${reposItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h2>Usuário não encontrado</h2>"
    }
}

export { screen }