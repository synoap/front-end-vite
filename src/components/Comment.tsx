import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar/Avatar";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/en-US";
import { enUS } from "date-fns/locale";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
  publishedAt: Date;
}

export function Comment({ content, onDeleteComment, publishedAt }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })  
}

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: enUS,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  return (
    <>
      <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/4W3Dev.png'/>

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eliandro</strong>
                <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
              </div>
              <button 
              onClick={handleDeleteComment}
              title="Deletar comentario">
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp 
              size={17}
              />likes
              <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
