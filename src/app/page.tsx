import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="large-title emphasized">
        Large Title. SFU Surge is definitely a club
      </h1>
      <h2 className="title-1 emphasized"> Title 1. SFU Surge is a club</h2>
      <h3 className="title-2 emphasized"> Title 2. SFU Surge</h3>
      <h4 className="title-3 emphasized">
        Title 3. Ngl all we do is play video games
      </h4>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        enim dui. Aliquam malesuada vel purus vitae sagittis. Nam nisi arcu,
        mattis eget lorem posuere, faucibus placerat justo. Ut vestibulum leo
        faucibus lobortis semper. Maecenas ac nibh est. Proin suscipit mi ut
        mollis sagittis.
      </p>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex flex-row gap-1">
          <a className="button-link md primary">Click here</a>
          <a className="button-link sm primary">Click here</a>
        </div>

        <div className="flex flex-row gap-1">
          <a className="button-link md secondary">Click here</a>
          <a className="button-link sm secondary">Click here</a>
        </div>
      </div>

      <a href="" className="link">
        This is a link
      </a>
    </main>
  );
}
