import parse from "html-react-parser";

export default function Content ({post}){
    let image = "https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/7-Communication-256.png";
    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}

        </article>
    );
}
