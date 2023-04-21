const user = {

    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    location: '',
    twitterUsername: '',
    htmlUrl: '',
    login: '',
    blog: '',
    userName: '',
    repos: [],
    setInfo(gitHubUser) {

        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.location = gitHubUser.location
        this.twitterUsername = gitHubUser.twitter_username
        this.htmlUrl = gitHubUser.html_url
        this.login = gitHubUser.login
        this.blog = gitHubUser.blog
        this.userName = gitHubUser.login

    },

    setRepos(repos) {
        this.repos = repos
    }
}

export { user }