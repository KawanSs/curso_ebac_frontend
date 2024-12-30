document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const user = document.querySelector('#user');
    const avatar = document.querySelector('#avatar');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following  = document.querySelector('#following');
    const link = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/KawanSs';
    
    fetch(endpoint).then(function(res){
            return res.json();
        })
        .then(function(json){
            name.innerText = json.name;
            user.innerText = json.login;
            avatar.src = json.avatar_url;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
        .catch(function(erro){
            alert("Ocorreu um erro, tente novamente.")
        })
})