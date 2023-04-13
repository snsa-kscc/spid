import Link from "next/link";

const ArticleTeaser = ({ article }) => {

  const date = new Date(article.first_published_at);
  const dateFormat = new Intl.DateTimeFormat("hr");

  return (
    <>
      <Link href={article.full_slug}>
        <a className="flex flex-col">
          <img src={article.content.image} alt={article.name} className="aspect-[4/5] object-cover" />
          <h5 className="font-mono text-2xl sm:text-3xl leading-relaxed mt-4">
            {article.name}
          </h5>
          <p className="font-medium text-[#5BA1E5] pt-4">{dateFormat.format(date)}</p>
        </a>
      </Link>
    </>
  )
};

export default ArticleTeaser;

