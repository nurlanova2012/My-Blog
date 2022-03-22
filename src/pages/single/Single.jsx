import React from "react";
import { Sidebar, PostDetail } from "../../components";

function Single() {
  return (
    <section className="single">
      <div className="container">
        <div className="single__inner">
          <div className="single__items">
            <div className="single__items-content">
              <img
                src="https://images.unsplash.com/photo-1503643766889-957dc3096721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt=""
                className="single__img"
              />
              <div className="single__desc">
                <h1 className="single__title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h1>
                <span className="single__icon1"></span>
                <span className="single__icon2"></span>
              </div>
              <p className="single__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae tenetur ex ullam blanditiis ratione culpa, eius vel
                laborum, magnam repellendus sed illo molestiae voluptas dicta,
                dolorem rem eveniet! Dolorem, quibusdam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nisi accusantium ipsa aliquam
                illo repellendus explicabo accusamus. Similique nemo repellat,
                excepturi a fugiat perferendis ab quam debitis! Recusandae
                eligendi dolor aut. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi accusantium ipsa aliquam illo repellendus
                explicabo accusamus. Similique nemo repellat, excepturi a fugiat
                perferendis ab quam debitis! Recusandae eligendi dolor aut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusantium ipsa aliquam illo repellendus explicabo accusamus.
                Similique nemo repellat, excepturi a fugiat perferendis ab quam
                debitis! Recusandae eligendi dolor aut.
              </p>
              <div className="single__details">
                <PostDetail />
              </div>
            </div>
          </div>
          <div className="single__items">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Single;
