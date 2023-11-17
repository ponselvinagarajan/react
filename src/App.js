import logo from './logo.svg';
import './App.css';
import Table from './Table'
import List from './list'

function App() {
  const userDetail=[
    {
      name:"ponselvi",
      age:20,
      profession:"developer"
    },
    {
      name:"gowri",
      age:20,
      profession:"professior"
    },
    {
      name:"kaviya",
      age:30,
      profession:"coder"
    },
    {
      name:"selvi",
      age:22,
      profession:"developer"
    }
  ]
  const fruit=[
    {
      fName:"mango",
      price:20
    },
    {
      fName:"pineapple",
      price:40
    },
    {
      fName:"watermelon",
      price:40
    },
    {
      fName:"banana",
      price:40
    }
  ]
  return (
    <div className="App">
      <Table data={userDetail}/>
      <List data1={fruit}/>
    </div>
  );
}

export default App;
