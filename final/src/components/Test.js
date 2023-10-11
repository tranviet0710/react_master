import React, { useState } from "react";

export default function Test() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="rounded-xl overflow-hidden p-3 bg-slate-800 text-white">
      <p className={`text-justify  ${toggle && "line-clamp-4"}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        accusantium repudiandae animi fugit praesentium quae, dolorem rem
        blanditiis aliquid nostrum ex eius officiis veniam tempore ut tempora
        eum itaque beatae? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Maxime iusto velit unde, quasi vitae accusamus repellat similique
        quis alias perspiciatis blanditiis ut possimus esse consequatur harum,
        ipsum iste! Accusantium, vitae? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Magnam fugit reprehenderit cumque doloremque unde
        tempore harum cupiditate sunt earum aut voluptatibus veritatis sapiente
        explicabo, asperiores quidem suscipit aliquam vero optio. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dicta omnis dolorum esse.
        Ad non natus nostrum alias, at voluptatem et? Magnam distinctio et
        perspiciatis veniam deserunt. Recusandae eum ratione similique. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Aperiam accusantium
        repudiandae animi fugit praesentium quae, dolorem rem blanditiis aliquid
        nostrum ex eius officiis veniam tempore ut tempora eum itaque beatae?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iusto
        velit unde, quasi vitae accusamus repellat similique quis alias
        perspiciatis blanditiis ut possimus esse consequatur harum, ipsum iste!
        Accusantium, vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Magnam fugit reprehenderit cumque doloremque unde tempore harum
        cupiditate sunt earum aut voluptatibus veritatis sapiente explicabo,
        asperiores quidem suscipit aliquam vero optio. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dicta omnis dolorum esse. Ad non
        natus nostrum alias, at voluptatem et? Magnam distinctio et perspiciatis
        veniam deserunt. Recusandae eum ratione similique. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Aperiam accusantium repudiandae
        animi fugit praesentium quae, dolorem rem blanditiis aliquid nostrum ex
        eius officiis veniam tempore ut tempora eum itaque beatae? Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Maxime iusto velit unde,
        quasi vitae accusamus repellat similique quis alias perspiciatis
        blanditiis ut possimus esse consequatur harum, ipsum iste! Accusantium,
        vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        fugit reprehenderit cumque doloremque unde tempore harum cupiditate sunt
        earum aut voluptatibus veritatis sapiente explicabo, asperiores quidem
        suscipit aliquam vero optio. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta omnis dolorum esse. Ad non natus nostrum alias,
        at voluptatem et? Magnam distinctio et perspiciatis veniam deserunt.
        Recusandae eum ratione similique. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
      </p>
      <span
        className="ml-1 underline font-bold cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "xem thêm" : "Ẩn"}
      </span>
    </div>
  );
}
