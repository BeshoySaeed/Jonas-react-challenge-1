import "./App.css";
import Avatar from "./components/avatar";
import Description from "./components/description";
import Skills from "./components/skills";
import "./index.css";

const descriptionObj = {
  title: "Hira Dog",
  description:
    "which provides shorthand notations for writing HTML and JSX. Emmet is integrated into many code editors, including Visual ",
};

const arrOfSkills = [
  {
    name: "JS",
    color: "red",
  },
  {
    name: "CSS",
    color: "blue",
  },
  {
    name: "HTML",
    color: "green",
  },
];

function App() {
  return (
    <div className='card-container'>
      <Avatar src='/images/images.jfif' />
      <div className='data' style={{ padding: "10px 20px" }}>
        <Description
          title={descriptionObj.title}
          description={descriptionObj.description}
        />
        <div className='skills-wrapper'>
          {arrOfSkills.map((skill, index) => (
            <Skills key={index} name={skill.name} color={skill.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
