import { useEffect, useState } from "react";
import Logo from "@/src/components/logo";
import Description from "@/src/components/description";
import Post from "@/src/components/post";
import { authorsfindAll } from "@/src/api/api-client/authors";
import { postFindAll } from "@/src/api/api-client/posts";

interface IUserPost<T> {
  [key: string]: T;
}

const Home = () => {
  const [userPost, setUserPost] = useState([]);

  const getUserPost = async (): Promise<void> => {
    const postResult = await postFindAll();
    if (postResult && postResult?.length) {
      const authorsResult = await authorsfindAll();
      if (authorsResult && authorsResult?.length) {
        const posts = postResult
          .map((item: any) => {
            const userId = item.author_id;
            const getAuthors = authorsResult.find(
              (authorsItem: IUserPost<unknown>) => authorsItem.id === userId
            );
            if (getAuthors) {
              delete getAuthors.id;
              return {
                ...getAuthors,
                ...item,
              };
            }
          })
          .filter((item: IUserPost<unknown>) => item);
        setUserPost(posts);
      }
    }
  };

  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <div className="home">
      <div>
        <Logo title="MAQE Forum" />
        <Description
          text={`Your current timezone is: ${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }`}
        />
        <div className="pb-4" />
        <Post detail={userPost} />
      </div>
    </div>
  );
};

export default Home;
