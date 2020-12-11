export class PostService{
    url='https://jsonplaceholder.typicode.com/posts'
    async getAllPosts(){
       return await fetch(this.url)
            .then(value => value.json())
    }
     post(id){
        return fetch(this.url+`/${id}`).then(value => value.json())
    }
}