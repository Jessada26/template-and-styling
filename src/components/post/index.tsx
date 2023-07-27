import React from "react";
import dateFormatOfPost from "@/src/utils/dateFormatOfPost";

interface IDetail {
  name: string;
  created_at: string;
  title: string;
  body: string;
  avatar_url: string;
  image_url: string;
}

interface IPost {
  detail?: IDetail[];
}

const Post: React.FC<IPost> = ({ detail = [] }) => {
  return (
    <div className="post-components">
      {detail.length
        ? detail.map((postItem: IDetail, index: number) => {
            const { avatar_url, name, created_at, image_url, title, body } =
              postItem;
            return (
              <div className={`post even-${(index + 1) % 2 === 0}`}>
                <div className="top">
                  <div className="profileImageUrl">
                    <img src={avatar_url} alt={`profile-image-${(index + 1)}`} />
                  </div>
                  <p className="profileName">{name}</p>
                  <p className="date">posted on {dateFormatOfPost(created_at)}</p>
                </div>
                <div className="bot">
                  <div className="postImageUrl">
                    <img src={image_url} alt={`post-image-${(index + 1)}`} />
                  </div>
                  <div className="content">
                    <h2>{title}</h2>
                    <p>{body}</p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Post;
