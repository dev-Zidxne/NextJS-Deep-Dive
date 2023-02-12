import { useRouter } from "next/router";

// ourdomain/news/something-importnat

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <div>Detail Page</div>;
}

export default DetailPage;
