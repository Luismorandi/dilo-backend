import { PostRepository } from "../domain/post.repository";
import { PostEntity, PostEntityDT0 } from "../domain/posts.entity";

 export class PostUserCase{
    constructor(private readonly postRepository: PostRepository){
    }

    public async createPost(input:PostEntityDT0): Promise<PostEntity>{
        const post = await this.postRepository.createPost(input);
        return post
    }

    public async getPosts(): Promise<PostEntity[]>{
        const posts = await this.postRepository.getPosts();
        return posts
    }
}

