import React from "react";

export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}

// main content
const Main = () => (
  <div className="Main">
    <div className="Maininfo">
      <p>Welcome to World Happiness Index. This simple application will allow you to view the world 
        happiness data by World Happiness Report. This website uses an external API for the data collected 
        between 2015 to 2020.</p>
    </div>
    <div className="Maincontainer"> {/*Flexbox for articles*/}
    <div className="Article1">
      <a href="https://globetrender.com/2021/04/28/finland-tops-global-ranking-worlds-happiest-countries-2021/">
        <img src="https://globetrender.com/wp-content/uploads/2021/04/AdobeStock_289303922-2048x1365.jpeg" 
        alt="Article1 Photo" width="auto" height="450"/>
        </a>
        <p>Finland Tops Global Ranking Of World's Happiest Countries In 2021</p>
    </div>
    <div className="Article2">
      <a href="https://www.psychologytoday.com/us/blog/social-instincts/202104/key-insights-2021s-world-happiness-report">
        <img src="https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/World-Summit-3.jpg?itok=ojiw6rUk"
        alt="Article2 Photo" width="auto" height="450"/>
      </a>
      <p>Key Insights From 2021's World Happiness Report</p>
    </div>
    <div className="Article3">
      <a href="https://www.forbes.com/sites/traversmark/2020/11/16/4-takeaways-from-this-years-world-happiness-report/?sh=309922252b10">
        <img src="https://specials-images.forbesimg.com/imageserve/5fb21c59837e6a64b61edf54/960x0.jpg?cropX1=0&cropX2=2576&cropY1=112&cropY2=1319"
        alt ="Article 3 Photo" width="auto" height="450"/>
      </a>
      <p>4 Takeaways From This Year's World Happiness Report</p>
    </div>
    <div className="Article4">
      <a href="https://theswaddle.com/why-are-indians-so-unhappy/">
        <img src="https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2021/03/I3-760x475.jpg"
        alt ="Article 4 Photo" width="auto" height="450"/>
      </a>
      <p>Why Are Indians So Unhappy?</p>
    </div>
    <div className="Article5">
      <a href="https://www.deseret.com/u-s-world/2021/3/23/22346558/world-happiness-index-report-united-states">
        <img src="https://cdn.vox-cdn.com/thumbor/KA0al2v5nFbfIAY06OqdltcnEc0=/0x0:3600x2400/920x613/filters:focal(1512x912:2088x1488):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69016024/AP21081826786939.0.jpg"
        alt ="Article 5 Photo" width="auto" height="450"/>
      </a>
      <p>The United States is happier than you think</p>
    </div>
    </div>
  </div>
);
