import { PostRepository } from "../../../domain/post.repository";
import { PostValue } from "../../../domain/post.value";
import { PostEntityDT0 } from "../../../domain/posts.entity";
import PostModel from "./model/post.schema";

export class MongoRepository implements PostRepository{
   async createPost(input: PostEntityDT0): Promise<any> {
        const newPost = new PostValue(input)
        const post= await PostModel.create(newPost);
        return post
    }

    async getPosts(): Promise<any> {
        const posts= await PostModel.find();
        return posts
    }
}