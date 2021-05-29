import React from "react";
// import { ReactComponent as BlogNext } from "../assets/arrow-right.svg";
// import { ReactComponent as BlogPrev } from "../assets/arrow-left.svg";

const blogList = [
  {
    id: 1,
    subtitle: "Depression",
    title: "Learning to Embrace Bad Days in Depression Recovery",
    img: "depression",
  },

  {
    id: 2,
    subtitle: "Anxiety",
    title: "How to Tackle Anxiety-Induced Procrastination",
    img: "anxiety",
  },

  {
    id: 3,
    subtitle: "Obsessive-compulsive disorder",
    title: "Can Minimalism Help with OCD?",
    img: "stress",
  },
];

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container-fluid">
        {/* <div className="blogs-navigation">
          <div className="blogs-arrow prev disbaled">
            <BlogPrev />
          </div>
          <div className="blogs-arrow next">
            <BlogNext />
          </div>
        </div> */}
        <div className="row">
          {blogList.map((blogItem) => (
            <div className="blog" key={blogItem.id}>
              <div className="blog-details">
                <span>{blogItem.subtitle}</span>
                <h2>{blogItem.title}</h2>
              </div>
              <div className="blog-image">
                <img
                  src={require(`../assets/${blogItem.img}.png`).default}
                  alt={blogItem.subtitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
