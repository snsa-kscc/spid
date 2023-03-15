import Link from "next/link";

const ArticleTeaser = ({ article }) => {
  return (
    <>
      <Link href={article.full_slug}>
        <a className="flex flex-col">
          <img src={article.content.image} alt={article.name} className="aspect-[4/5] object-cover" />
          <h5 className="font-mono text-2xl sm:text-3xl leading-relaxed mt-4">
            {article.name}
          </h5>
        </a>
      </Link>
    </>
  )
};

export default ArticleTeaser;

