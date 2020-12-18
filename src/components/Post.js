export default function const Post = (props) =>{

    const {post}=props

    return (
        <div>
            {post.id}-{post.title}-{post.body}
        </div>
    );
}
