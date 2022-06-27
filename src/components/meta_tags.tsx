import { Helmet } from "react-helmet";
import {IMetaProps} from "../types";

function MetaTags ({title, description, keywords, image}: IMetaProps) {
  return (
    <Helmet>
			<title>{title}</title>
      <meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />
    </Helmet>
  )
}

export default MetaTags;