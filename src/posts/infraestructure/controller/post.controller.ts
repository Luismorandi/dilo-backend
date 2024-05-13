import { Request, Response } from "express";
import {  PostEntityDT0 } from "../../domain/posts.entity";
import { PostUserCase } from "../../application/post.UserCase";

export class PostController{
    constructor(private postService: PostUserCase){
    }

    public createPost= async (req:Request, res: Response)=>{
        const body =  req.body;
        const post = await this.postService.createPost(body as PostEntityDT0);
        res.send({post})  
 }


 public getPosts= async (_req:Request, res: Response)=>{
    const post = await this.postService.getPosts();

    res.send(post)  
}
}
