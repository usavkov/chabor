
import {
  getTargetRedirectURL,
  getUTMSearchParams,
} from "@utils";

import { Redirect } from "./Redirect";

interface RedirectPageProps {
  searchParams: Record<string, string>;
}

export default function RedirectPage({ searchParams }: RedirectPageProps) {
  const { target } = searchParams;

  const utmSearchParams = getUTMSearchParams(searchParams).toString();
  const targetUrl = getTargetRedirectURL(target);
  const url = `${targetUrl}${utmSearchParams ? `?${utmSearchParams}` : ''}`;

  return <Redirect to={url}/>;
}
