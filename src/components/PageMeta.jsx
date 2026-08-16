import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | G-BIRAT STUDY` : "G-BIRAT STUDY | Biratnagar, Nepal";

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
