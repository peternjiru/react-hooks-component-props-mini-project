import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {

    let duration;

    const ArticleElement = blogData.posts.map((element) => {

        if(element.minutes<=5) {
            duration=`☕️${element.minutes} min read.`
        } else if (element.minutes>5 && element.minutes<=30) {
            duration=`☕️☕️${element.minutes} min read.`
        } else if(element.minutes >30 && element.minutes<=60) {
            duration=`🍱🍱🍱🍱${element.minutes} min read.`
        } else {
            duration=`🍱🍱🍱🍱🍱🍱🍱${element.minutes} min read.`
        }

        return <Article key={element.id} title={element.title} date={element.date} preview={element.preview} duration={duration}/>

    })

    return (
        <main>
            {ArticleElement}
        </main>
    )

}

export default ArticleList;