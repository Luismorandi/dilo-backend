import { PostEntity, PostEntityDT0 } from "./posts.entity";

export interface PostRepository{
    createPost(input:PostEntityDT0): Promise<PostEntity>
    getPosts(): Promise<PostEntity[]>

}