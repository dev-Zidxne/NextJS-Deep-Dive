// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <div>NewsPage</div>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-f+ramework">
            {" "}
            NextJs is a Great Framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
