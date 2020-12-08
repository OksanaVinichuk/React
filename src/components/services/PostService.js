export class PostService{
    url ="https://swapi.dev/documentation"
    async getAllPosts () {
        return await fetch(this.url)
            .then(value => value.json)

    }

}