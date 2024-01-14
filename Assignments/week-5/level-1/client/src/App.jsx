import './App.css';
import BusinessCard from './conponent/BusinessCard';
// import CardWrapper from './conponent/CardWrapper';

function App() {

  const details = [{
    id: 1,
    name: "Kiran Kumar",
    description: "Software Engineer",
  }, {
    id: 2,
    name: "Prathyarthi",
    description: "Software Engineer",
  }, {
    id: 3,
    name: "Shyam",
    description: "Software Engineer",
  }, {
    id: 4,
    name: "Shyam",
    description: "Software Engineer",
  }, {
    id: 5,
    name: "Shyam",
    description: "Software Engineer",
  }, {
    id: 6,
    name: "Shyam",
    description: "Software Engineer",
  }]


  return (
    <div className="h-screen flex justify-center items-center">
      {details.map((data) => {
        return <BusinessCard key={data.id} name={data.name} description={data.description} intrests={data.intrests} />
        // return <CardWrapper />
      })}
    </div>
  )
}

export default App
