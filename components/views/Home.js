import html from "html-literal";
import catImage from "/assets/images/cat.jpg";

export default () => html`
  <section id="jumbotron">
    <h2>Savvy Coders Apr. 2020 Cohort</h2>
    <a href="" onClick="alert('Hello! You clicked the button!')"
      >"Call to Action" "Button"</a
    >
  </section>

  <img src="${catImage}" />
`;
