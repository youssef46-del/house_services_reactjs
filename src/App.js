import  Navigation  from "./components/navigation";
import  Header  from "./components/header";
import  Features  from "./components/features";
import  About  from "./components/about";
import  Gallery  from "./components/gallery";
import  Testimonials  from "./components/testimonials";
import  Team  from "./components/Team";
import  {Contact}  from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header data={JsonData.Header} />
      <Features data={JsonData.Features} />
      <About data={JsonData.About} />
      <Gallery data={JsonData.Gallery}/>
      <Testimonials data={JsonData.Testimonials} />
      <Team data={JsonData.Team} />
      <Contact data={JsonData.Contact} />
    </div>
  );
}

export default App;
