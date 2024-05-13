import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        user: {
            type: String
        },
        content:{
type: String
        } ,
        token: {type:String},
        uuid: {type:String
        }
    },{
        timestamps:true
    }
)

const PostModel= model("posts", PostSchema);

export default PostModel;